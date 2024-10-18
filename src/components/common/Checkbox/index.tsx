import { Checkbox as MantineCheckbox, MantineColor } from "@mantine/core";
import { ReactNode } from "react";

type CheckboxProps = {
  label: ReactNode;
  color?: MantineColor;
  error?: ReactNode;
  labelPosition?: "left" | "right";
  size?: number | "xs" | "sm" | "md" | "lg" | "xl";
  radius?: number | "xs" | "sm" | "md" | "lg" | "xl";
};

export default function Checkbox({
  label,
  color,
  error,
  labelPosition,
  size,
  radius,
}: CheckboxProps) {
  return (
    <div>
      <MantineCheckbox
        label={label}
        color={color}
        error={error}
        size={size}
        radius={radius}
        labelPosition={labelPosition}
      />
    </div>
  );
}
