import { AboutPage } from "../components/AboutPage/AboutPage";
import { HomePage } from "../components/HomePage/HomePage";
import UserPage from "../components/UserPage/UserPage";
import { paths } from "./routePaths";
import { UsersPage } from "../components/UsersPage/UsersPage";

export interface RouteDetails {
  path: string;
  component: any; //FunctionComponent
  protected?: boolean;
}

export const ROUTES: Record<string, RouteDetails> = {
  about: {
    path: paths.about,
    component: AboutPage,
  },
  home: {
    path: paths.home,
    component: HomePage,
  },
  counter: {
    path: paths.counter,
    component: HomePage,
  },
  user: {
    path: paths.user,
    component: UserPage,
  },
  users: {
    path: paths.users,
    component: UsersPage,
  },
};
