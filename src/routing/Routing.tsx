import { Route, Routes } from "react-router-dom";
import { RouteDetails, ROUTES } from ".";

const routeMapper = (route: RouteDetails) => {
  const Component = route.component;
  // check and apply a custom logic if route is protected
  return <Route path={route.path} element={<Component />} key={route.path} />;
};
const Routing = () => {
  return (
    <Routes>
      {/* <Route path="/about" element={<AboutPage year={"2022"} />} />
      <Route path="/home" element={<HomePage name={"abdellah"} />} />
      <Route path="/counter" element={<Counter initialValue={1} />} />
      <Route path="/user/:id" element={<UserPage />} /> */}

      {Object.values(ROUTES).map(routeMapper)}
    </Routes>
  );
};

export default Routing;

// a good practice to wrappe component that accepts props with pageComponents
