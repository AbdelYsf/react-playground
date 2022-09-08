import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface Props {
  severity: "error" | "success" | "info" | "warning";
  title: string;
  description?: string;
}

export default function BasicAlert(props: Props) {
  return (
    <Alert severity={props.severity}>
      <AlertTitle>{props.title}</AlertTitle>
      {props.description}
    </Alert>
  );
}
