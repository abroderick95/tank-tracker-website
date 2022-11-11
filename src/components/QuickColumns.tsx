import * as React from "react";
import { Grid, Box, Button, useTheme } from "@mui/material";
import { BorderColor } from "@mui/icons-material";
import { text } from "node:stream/consumers";
import { textTransform } from "@mui/system";

// function buttonHover() {
//   BorderColor: "text.primary";
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
            boxShadow={3}
            bgcolor={item.color}
            height="70px"
            width="70px"
            marginBottom="3px"
            color={styles.palette.secondary.contrastText}
            sx={{
              border: 2,
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
