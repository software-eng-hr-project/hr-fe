import { createStyles } from "@mantine/core";

const usePaginationStyles = createStyles((theme) => ({
  control: {
    border: "none",

    "&[data-active]": {
      backgroundColor: theme.colors.text[3],
      color: theme.colors.text[0],

      "&:not([data-disabled]):hover": {
        backgroundColor: theme.colors.text[3],
      },
    },
  },
}));

export default usePaginationStyles;
