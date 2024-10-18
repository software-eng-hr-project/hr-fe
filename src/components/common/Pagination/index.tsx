import { Pagination as MantinePagination, Flex, Text } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useEffect } from "react";
import usePaginationStyles from "./index.styles";

type PaginationProps = {
  numberOfRecords: number;
  itemsPerPage: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  numberOfRecords,
  itemsPerPage,
  onChange,
}: PaginationProps) {
  const { classes } = usePaginationStyles();

  const pagination = usePagination({
    total: Math.ceil(numberOfRecords / itemsPerPage),
    initialPage: 1,
  });

  useEffect(() => {
    if (typeof pagination.active === "number") {
      onChange(pagination.active);
    }
  }, [pagination.active]);

  return (
    <Flex justify="end" gap="lg" my="lg">
      <Text color="text.2">
        Sayfa başı satır sayısı:&nbsp;
        {/* TODO: this should be dropdown */}
        <Text component="span" color="text.1">
          {itemsPerPage}
        </Text>
      </Text>
      <Text color="text.1">
        {numberOfRecords}&nbsp;taneden 1-
        {Math.ceil(numberOfRecords / itemsPerPage)}&nbsp; arası
      </Text>
      <MantinePagination
        classNames={classes}
        radius="lg"
        size="sm"
        total={Math.ceil(numberOfRecords / itemsPerPage)}
        value={pagination.active}
        onPreviousPage={pagination.previous}
        onNextPage={pagination.next}
        onChange={pagination.setPage}
      />
    </Flex>
  );
}
