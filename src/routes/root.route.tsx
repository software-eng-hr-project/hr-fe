import { AppShell } from "@mantine/core";
import Header from "components/Header";
import Navbar from "components/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbar={<Navbar isOpen={opened} />}
      header={<Header setIsNavbarOpened={setOpened} isNavbarOpened={opened} />}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
    >
      <Outlet />
    </AppShell>
  );
}
