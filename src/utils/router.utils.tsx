import {
  IconAccessible,
  IconBeach,
  IconChartBar,
  IconChartBubbleFilled,
  IconChartLine,
  IconFence,
  IconHome,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import Permissions from "pages/Permissions";
import Dashboard from "pages/Dashboard";

import Employees from "pages/Employees";
import Performance from "pages/Performance";
import Vacations from "pages/Vacations";
import Reports from "pages/Reports";
import Roles from "pages/Roles";
import Settings from "pages/Settings";
import { createBrowserRouter } from "react-router-dom";
import Root from "routes/root.route";

export const pages = [
  {
    path: "/",
    label: "Ana Sayfa",
    icon: <IconHome />,
    element: <Dashboard />,
  },
  {
    path: "/employees",
    label: "Çalışanlar",
    icon: <IconUsers />,
    element: <Employees />,
  },
  {
    path: "/roles",
    label: "Roller ve Kullanıcılar",
    icon: <IconAccessible />,
    element: <Roles />,
  },
  {
    path: "/permissions",
    label: "Yetkiler",
    icon: <IconFence />,
    element: <Permissions />,
  },
  {
    path: "/projects",
    label: "Projeler",
    icon: <IconChartBubbleFilled />,
    element: <Employees />,
  },
  {
    path: "/vacations",
    label: "İzinler",
    icon: <IconBeach />,
    element: <Vacations />,
  },
  {
    path: "/performance",
    label: "Performans Yönetim",
    icon: <IconChartLine />,
    element: <Performance />,
  },
  {
    path: "/reports",
    label: "Raporlar",
    icon: <IconChartBar />,
    element: <Reports />,
  },
  {
    path: "/settings",
    label: "Ayarlar",
    icon: <IconSettings />,
    element: <Settings />,
    divide: true,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: pages,
  },
]);

export default router;
