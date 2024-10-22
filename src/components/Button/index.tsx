import { Button as MantineButton } from "@mantine/core";
import { ReactNode } from "react";

import useButtonStyleClasses from "./index.styles";

type Props = {
  type: "outlined" | "contained" | "icon" | "text";
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  fab?: boolean;
  onClick?: () => void;
};

export default function Button({
  type,
  leftIcon,
  rightIcon,
  children,
  size = "sm",
  radius = "md",
  fab = false,
  onClick,
}: Props) {
  const classes = useButtonStyleClasses();

  return (
    <MantineButton
      classNames={classes[type as keyof typeof classes]}
      size={size}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      radius={fab ? 100 : radius}
      px={fab ? 5 : undefined}
      onClick={onClick}
    >
      {children}
    </MantineButton>
  );
}
