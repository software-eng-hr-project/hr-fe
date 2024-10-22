import { createStyles } from "@mantine/core";

const useStepperStyles = createStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: { flexGrow: 1, paddingLeft: theme.spacing.md },
}));

export default useStepperStyles;
