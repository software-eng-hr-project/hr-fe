import { createStyles } from "@mantine/core";

const useNavLinkStyles = createStyles((theme) => ({
  root: {
    marginTop: theme.spacing.xs,
    color: theme.colors.text[0],
    borderRadius: theme.radius.md,
    "&:hover": {
      backgroundColor: theme.colors.secondary[4],
    },

    "&[data-active]": {
      color: theme.colors.white[0],
      backgroundColor: theme.colors.primary[0],
      fontWeight: "bold",

      "&:hover": {
        backgroundColor: theme.colors.primary[3],
      },
    },
  },
}));

export default useNavLinkStyles;
