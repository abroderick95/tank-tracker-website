import * as React from "react";
import { Grid, Box, Button, useTheme } from "@mui/material";
import { bgcolor } from "@mui/system";

// function buttonHover() {
//   BorderColor: "text.primary";
// }

// function handleClick(item) {
//   console.log("Click detected on" + item.value);
// }

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
  const styles = useTheme();
  return (
    <Grid container direction={"column"}>
      {items.map((item) => {
        return (
          <Box
            component={Button}
            // onClick={handleClick}
            boxShadow={3}
            bgcolor={item.color}
            height="70px"
            width="70px"
            marginBottom="3px"
            color={styles.palette.secondary.contrastText}
            sx={{
              border: 4,
              borderColor: item.color,
              textTransform: "lowercase",
              "&:hover": {
                backgroundColor: item.color,
                borderColor: styles.palette.secondary.light,
              },
            }}
          >
            {item.value}ppm
          </Box>
        );
      })}
    </Grid>
  );
}
