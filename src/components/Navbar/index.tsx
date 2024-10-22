import { Divider, Navbar as MantineNavbar, Text } from "@mantine/core";
import { pages } from "utils/router.utils";
import Link from "./components/Link";

type NavbarProps = {
  isOpen: boolean;
};

export default function Navbar({ isOpen }: NavbarProps) {
  return (
    <MantineNavbar
      p="md"
      withBorder={false}
      hiddenBreakpoint="sm"
      hidden={!isOpen}
      width={{ sm: 200, lg: 300 }}
    >
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
