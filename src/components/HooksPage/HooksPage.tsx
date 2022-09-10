import { UseRefDemo } from "./UseRefDemo";
import { Grid } from "@mui/material";
import { useParams } from "react-router";
import { UseMemoDemo } from "./UseMemoDemo";

export const HooksPage = () => {
  const { hook } = useParams();
  return (
    <Grid container>{hook == "useref" ? <UseRefDemo /> : <UseMemoDemo />}</Grid>
  );
};
