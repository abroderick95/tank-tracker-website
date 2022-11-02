import * as React from "react";
import { Grid, Box } from "@mui/material";
import "../styling/QuickProps.css";

export interface QuickColumnItem {
  value: number;
  color: string;
}

export interface QuickColumnProps {
  title: string;
  units: string;
  items: QuickColumnItem[];
}

export function QuickColumn({ items, title }: QuickColumnProps) {
  return (
    <Grid container direction={"column"}>
      {items.map((item) => {
        return (
          <Box
            component={"button"}
            bgcolor={item.color}
            height="90px"
            width="90px"
          ></Box>
        );
      })}
    </Grid>
  );
}
