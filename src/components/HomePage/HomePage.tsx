import { useLocation } from "react-router";
import { Link } from "react-router-dom";

interface Props {
  name: string;
}
export const HomePage = (props: Props) => {
  return (
    <>
      <div>Hello {props.name}</div>
      <Link to={"/about"}>to about</Link>
    </>
  );
};
