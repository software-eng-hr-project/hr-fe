import { NavLink } from "@mantine/core";
import { ReactElement } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import useNavLinkStyles from "./index.styles";

type Props = {
  label: string;
  to: string;
  icon: ReactElement;
};

export default function Link({ label, to, icon }: Props) {
  const location = useLocation();
  const { classes } = useNavLinkStyles();

  return (
    <NavLink
      classNames={classes}
      key={to}
      component={RouterLink}
      to={to}
      label={label}
      icon={icon}
      active={location.pathname === to}
    />
  );
}
