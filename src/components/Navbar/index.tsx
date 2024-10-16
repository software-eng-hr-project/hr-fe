import { Divider, Navbar as MantineNavbar, Text } from "@mantine/core";
import { pages } from "utils/router.utils";
import Link from "./components/Link";

export default function Navbar() {
  return (
    <MantineNavbar width={{ base: 300 }}>
      <MantineNavbar.Section>
        <Text size="sm" color="text.2" pl="xl" pt="md" transform="uppercase">
          Sayfalar
        </Text>
      </MantineNavbar.Section>
      <MantineNavbar.Section pt="md" px="md">
        {pages.map((page) => (
          <>
            {page.divide && <Divider my="xs" />}
            <Link label={page.label} to={page.path} icon={page.icon} />
          </>
        ))}
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
