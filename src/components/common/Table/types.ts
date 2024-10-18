export type TableColumnType<T> = {
  title: string;
  dataIndex: keyof T | null;
  renderItem?: (record: T) => JSX.Element;
};
