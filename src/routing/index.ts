import { AboutPage } from "../components/AboutPage/AboutPage";
import { HomePage } from "../components/HomePage/HomePage";
import UserPage from "../components/UserPage/UserPage";
import { paths } from "./routePaths";
import { UsersPage } from "../components/UsersPage/UsersPage";
import { HooksPage } from "../components/HooksPage/HooksPage";
import { InfinitScrollPage } from "../components/InfinitScrollPage/InfinitScrollPage";
import { NativeReduxDemo } from "../redux/NativeReduxDemo";

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
  hooks: {
    path: paths.hooks,
    component: HooksPage,
  },
  scroll: {
    path: paths.infinitScroll,
    component: InfinitScrollPage,
  },
  nativeReduxDemo: {
    path: paths.nativeReduxDemo,
    component: NativeReduxDemo,
  },
};
