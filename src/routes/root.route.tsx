import { AppShell } from "@mantine/core";
import Header from "components/Header";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <AppShell navbar={<Navbar />} header={<Header />}>
      <Outlet />
    </AppShell>
  );
}
