import { Grid } from "@mui/material";
import * as React from "react";

export interface TestComponentProps {
  text: string;
  height: number;
}

export const TestComponent = ({ text, height }: TestComponentProps) => {
  return <Grid style={{ height }}>{text}</Grid>;
};
