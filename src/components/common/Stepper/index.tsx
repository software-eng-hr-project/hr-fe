import { ReactNode } from "react";
import { StepFragmentComponent } from "@mantine/core/lib/Stepper/Step/Step";
import { Stepper as MantineStepper } from "@mantine/core";

import useStepperStyles from "./index.styles";

type TBase = {
  title: ReactNode | StepFragmentComponent;
  children: ReactNode;
  description?: ReactNode | StepFragmentComponent;
};

type Props<T> = {
  steps: T[];
  orientation?: "horizontal" | "vertical";
  active: number;
};

export default function Stepper<T extends TBase>({
  orientation = "horizontal",
  steps,
  active,
}: Props<T>) {
  const { classes } = useStepperStyles();

  return (
    <MantineStepper
      classNames={orientation === "vertical" ? classes : undefined}
      active={active}
      orientation={orientation}
    >
      {steps.map((step) => (
        <MantineStepper.Step label={step.title} description={step.description}>
          {step.children}
        </MantineStepper.Step>
      ))}
    </MantineStepper>
  );
}
