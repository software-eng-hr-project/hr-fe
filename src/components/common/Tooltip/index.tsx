import { Tooltip as MantineTooltip } from "@mantine/core";
import { ReactNode } from "react";

export type TooltipProps = {
  label: ReactNode;
  children: JSX.Element;
  position?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
};

export default function Tooltip({
  label,
  children,
  position = "bottom",
}: TooltipProps) {
  return (
    <div>
      <MantineTooltip
        position={position}
        withArrow
        arrowSize={11}
        label={label}
      >
        {children}
      </MantineTooltip>
    </div>
  );
}
