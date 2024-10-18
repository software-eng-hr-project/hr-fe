import { Table as MantineTable, Checkbox, Paper } from "@mantine/core";

import { useEffect, useState } from "react";
import { TableColumnType } from "./types";
import Pagination from "../Pagination";
import useTableStyles from "./index.styles";

type Props<T> = {
  header?: JSX.Element;
  data: T[];
  columns: TableColumnType<T>[];
  align?: "center" | "left" | "right";
  itemsPerPage?: number;
  selectable?: boolean;
  onSelected?: (selection: T[]) => void;
};

type DataType = {
  key: string;
};

export default function Table<T extends DataType>({
  header,
  data,
  columns,
  align = "left",
  itemsPerPage = 10,
  selectable,
  onSelected,
}: Props<T>) {
  const { classes } = useTableStyles();

  const [selection, setSelection] = useState<string[]>([]);
  const [pageIndex, setPageIndex] = useState(1);

  const toggleRow = (key: string) =>
    setSelection((current) =>
      current.find((item) => item === key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.key),
    );

  useEffect(() => {
    if (typeof onSelected === "function") {
      const selectedData = selection.map((key) => {
        return data.find((item) => item.key === key) as T;
      });
      onSelected(selectedData);
    }
  }, [selection]);

  return (
    <Paper shadow="sm" pt="sm" radius="lg" withBorder>
      {header}
      <MantineTable mt="md" align={align} verticalSpacing="md" withBorder>
        <thead className={classes.customHeader}>
          <tr>
            {selectable && (
              <th style={{ width: 70 }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === data.length}
                  indeterminate={
                    selection.length > 0 && selection.length !== data.length
                  }
                  transitionDuration={0}
                />
              </th>
            )}
            {columns.map((col) => {
              return <th style={{ fontWeight: "500" }}>{col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data
            .slice(
              (pageIndex - 1) * itemsPerPage,
              (pageIndex - 1) * itemsPerPage + itemsPerPage,
            )
            .map((item) => {
              return (
                <tr>
                  {selectable && (
                    <td>
                      <Checkbox
                        checked={selection.includes(item.key)}
                        onChange={() => toggleRow(item.key)}
                        transitionDuration={0}
                      />
                    </td>
                  )}
                  {columns.map((col) => {
                    if (typeof col.renderItem === "function")
                      return <td>{col.renderItem(item)}</td>;

                    return <td>{item[col.dataIndex as keyof T]}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </MantineTable>
      <Pagination
        itemsPerPage={itemsPerPage}
        numberOfRecords={data.length}
        onChange={(page) => {
          setPageIndex(page);
        }}
      />
    </Paper>
  );
}
