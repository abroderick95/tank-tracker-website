import * as React from "react";
import { Grid, Box, Button, useTheme } from "@mui/material";
import { bgcolor } from "@mui/system";
import { useState } from "react";
import { WaterTestingColumn } from "../constants/WaterTestingColumn";

export interface QuickColumnItem {
  value: number;
  color: string;
}

export interface QuickColumnProps {
  title: WaterTestingColumn;
  units: string;
  items: QuickColumnItem[];
  selectedItem: number | undefined;
  onItemClick: (item: QuickColumnItem, title: WaterTestingColumn) => void;
}

export function QuickColumn({
  items,
  title,
  units,
  selectedItem,
  onItemClick,
}: QuickColumnProps) {
  const styles = useTheme();

  return (
    <Grid container direction={"column"}>
      {items.map((item) => {
        return (
          <Box
            key={item.color}
            component={Button}
            onClick={() => onItemClick(item, title)}
            boxShadow={3}
            bgcolor={item.color}
            height="70px"
            width="70px"
            marginBottom="3px"
            color={styles.palette.secondary.contrastText}
            sx={{
              border: 4,
              borderColor:
                item.value === selectedItem
                  ? styles.palette.secondary.light
                  : item.color,
              textTransform: "lowercase",
              "&:hover": {
                backgroundColor: item.color,
                borderColor: styles.palette.secondary.light,
              },
            }}
          >
            {item.value + units}
          </Box>
        );
      })}
    </Grid>
  );
}
