import { createStyles } from "@mantine/core";

const useDialogStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.text[0],
    marginTop: theme.spacing.md,
    marginLeft: "auto",
    fontWeight: 500,
    fontSize: "24px",
  },
}));

export default useDialogStyles;
