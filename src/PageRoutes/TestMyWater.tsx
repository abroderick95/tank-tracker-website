import "../styling/App.css";
import "../styling/TankForms.css";
import * as React from "react";
import { Footer } from "../components/Footer";
import { Grid, Typography } from "@mui/material";
import {
  QuickColumn,
  QuickColumnItem,
  QuickColumnProps,
} from "../components/QuickColumn";
import { TankTestingTimer } from "../components/TankTestingTimer";
import { useState } from "react";
import { WaterTestingColumn } from "../constants/WaterTestingColumn";

export const TestMyWater = () => {
  const ammoniaItems: QuickColumnItem[] = [
    { value: 0, color: "#F6E256" },
    { value: 0.25, color: "#E7E94D" },
    { value: 0.5, color: "#C5DA56" },
    { value: 1, color: "#A7CC56" },
    { value: 2, color: "#77BC3C" },
    { value: 4, color: "#4AA34E" },
    { value: 8, color: "#33763B" },
  ];
  const nitriteItems: QuickColumnItem[] = [
    { value: 0, color: "#A7D6CF" },
    { value: 0.25, color: "#98A7D1" },
    { value: 0.5, color: "#9487B4" },
    { value: 1, color: "#85679D" },
    { value: 2, color: "#924F94" },
    { value: 5, color: "#8D488E" },
  ];
  const nitrateItems: QuickColumnItem[] = [
    { value: 0, color: "#F9EB4E" },
    { value: 5, color: "#EDB43E" },
    { value: 10, color: "#E69035" },
    { value: 20, color: "#E58D3C" },
    { value: 40, color: "#D5473A" },
    { value: 80, color: "#D1372F" },
    { value: 160, color: "#AE2A35" },
  ];

  const [selectedButtons, setSelectedButtons] = useState({
    [WaterTestingColumn.Ammonia]: undefined,
    [WaterTestingColumn.Nitrite]: undefined,
    [WaterTestingColumn.Nitrate]: undefined,
  });

  function handleClick(item: QuickColumnItem, title: WaterTestingColumn) {
    setSelectedButtons(() => ({
      ...selectedButtons,
      [title]: item.value === selectedButtons[title] ? undefined : item.value,
    }));
  }

  return (
    <>
      <Typography variant="h3">Test Your Water!</Typography>
      <TankTestingTimer expiryTimestamp={new Date(Date.now() + 300000)} />
      <Grid container columnSpacing={2} className="waterTestingContainer">
        <Grid item>
          Ammonia
          <QuickColumn
            title={WaterTestingColumn.Ammonia}
            units="ppm"
            items={ammoniaItems}
            onItemClick={handleClick}
            selectedItem={selectedButtons.Ammonia}
          ></QuickColumn>
        </Grid>
        <Grid item>
          Nitrite
          <QuickColumn
            title={WaterTestingColumn.Nitrite}
            units="ppm"
            items={nitriteItems}
            onItemClick={handleClick}
            selectedItem={selectedButtons.Nitrite}
          ></QuickColumn>
        </Grid>
        <Grid item>
          Nitrate
          <QuickColumn
            title={WaterTestingColumn.Nitrate}
            units="ppm"
            items={nitrateItems}
            onItemClick={handleClick}
            selectedItem={selectedButtons.Nitrate}
          ></QuickColumn>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
};
