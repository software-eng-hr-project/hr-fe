import { createStyles } from "@mantine/core";

const useTableStyles = createStyles((theme) => ({
  customHeader: {
    backgroundColor: theme.colors.text[4],

    "&>tr>th": {
      color: `${theme.colors.text[0]} !important`,
      textTransform: "uppercase",
    },
  },
}));

export default useTableStyles;
