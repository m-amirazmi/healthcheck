import { Building, Clipboard, Clock, Cog, Grid } from "../components/icons";

export interface Routes {
  path: string;
  name: string;
  icon?: any;
}

export const routesClinic: Routes[] = [
  {
    path: "/clinic",
    name: "dashboard",
    icon: Grid,
  },
  {
    path: "/clinic/appointments",
    name: "appointments",
    icon: Clipboard,
  },
  {
    path: "/clinic/history",
    name: "history",
    icon: Clock,
  },
  {
    path: "/clinic/profile",
    name: "clinic profile",
    icon: Building,
  },
  {
    path: "/clinic/setting",
    name: "setting",
    icon: Cog,
  },
];
