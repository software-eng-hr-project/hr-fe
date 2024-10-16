import { IconHome } from "@tabler/icons-react";
import Dashboard from "pages/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Root from "routes/root.route";

export const pages = [
  {
    path: "/",
    label: "Ana Sayfa",
    icon: <IconHome />,
    element: <Dashboard />,
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
