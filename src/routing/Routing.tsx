import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../components/AboutPage/AboutPage";
import Counter from "../components/Counter/Counter";
import { HomePage } from "../components/HomePage/HomePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage year={"2022"} />} />
      <Route path="/home" element={<HomePage name={"abdellah"} />} />
      <Route path="/counter" element={<Counter initialValue={1} />} />
    </Routes>
  );
};

export default Routing;

// a good practice to wrappe component that accepts props with pageComponents
