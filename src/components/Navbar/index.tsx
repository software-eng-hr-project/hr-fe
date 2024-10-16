import { Navbar as MantineNavbar } from "@mantine/core";
import { pages } from "utils/router.utils";
import Link from "./components/Link";

export default function Navbar() {
  return (
    <MantineNavbar width={{ base: 300 }}>
      <MantineNavbar.Section>Sayfalar</MantineNavbar.Section>
      <MantineNavbar.Section p="md">
        {pages.map((page) => (
          <Link label={page.label} to={page.path} icon={page.icon} />
        ))}
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
