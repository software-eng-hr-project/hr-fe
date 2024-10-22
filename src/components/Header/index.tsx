import {
  Header as MantineHeader,
  MediaQuery,
  Burger,
  Image,
  Flex,
} from "@mantine/core";
import QandQLogo from "../../assets/qnq-logo1.svg";
import QandQLogoText from "../../assets/qnq-logo-text.svg";

type HeaderProps = {
  isNavbarOpened: boolean;
  setIsNavbarOpened: (value: boolean) => void;
};

export default function Header({
  isNavbarOpened,
  setIsNavbarOpened,
}: HeaderProps) {
  return (
    <MantineHeader withBorder={false} height={{ base: 50, md: 90 }} p="md">
      <Flex direction="row" align="center" ml={15}>
        <Image src={QandQLogo} maw={93} mb={11} />
        <Image src={QandQLogoText} maw={80} />
      </Flex>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={isNavbarOpened}
          onClick={() => setIsNavbarOpened(!isNavbarOpened)}
          size="sm"
          mr="xl"
        />
      </MediaQuery>
    </MantineHeader>
  );
}
