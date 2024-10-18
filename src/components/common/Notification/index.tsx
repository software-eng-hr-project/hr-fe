import { Notification as MantineNotification } from "@mantine/core";
import { ReactNode } from "react";

type NotificationProps = {
  children: ReactNode;
};

export default function Notification({ children }: NotificationProps) {
  return (
    <div>
      <MantineNotification>{children}</MantineNotification>
    </div>
  );
}
