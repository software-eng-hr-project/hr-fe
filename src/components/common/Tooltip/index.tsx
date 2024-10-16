import { Tooltip as MantineTooltip } from "@mantine/core";

import { ReactNode } from "react";

type TooltipProps = {
  label: ReactNode;
  children: ReactNode;
};

export default function Tooltip({ label, children }: TooltipProps) {
  return (
    <div>
      <MantineTooltip position="bottom" label={label}>
        <p>{children}</p>
      </MantineTooltip>
    </div>
  );
}
