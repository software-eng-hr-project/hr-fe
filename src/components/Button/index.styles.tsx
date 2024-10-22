import { createStyles } from "@mantine/core";

const useContainedButtonStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.primary[0],

    "&:hover": {
      backgroundColor: theme.colors.primary[2],
    },
  },
}));

const useOutlinedButtonStyles = createStyles((theme) => ({
  root: {
    color: theme.colors.primary[0],
    backgroundColor: "transparent",
    border: "1px solid blue",

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const useIconButtonStyles = createStyles(() => ({
  root: {
    backgroundColor: "transparent",
    border: "none",

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const useTextButtonStyles = createStyles((theme) => ({
  root: {
    color: theme.colors.primary[0],
    backgroundColor: "transparent",
    border: "none",

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const useButtonStyleClasses = () => {
  const { classes: contained } = useContainedButtonStyles();
  const { classes: outlined } = useOutlinedButtonStyles();
  const { classes: text } = useTextButtonStyles();
  const { classes: icon } = useIconButtonStyles();

  return { contained, outlined, text, icon };
};

export default useButtonStyleClasses;
