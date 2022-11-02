import "../styling/TankForms.css";
import * as React from "react";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";
import { QuickColumn, QuickColumnItem } from "../components/QuickColumns";

export const WaterTesting = () => {
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
  return (
    <>
      <h1>Your Tank Stats!</h1>
      <Grid container className="waterTestingContainer">
        <Grid item>
          <QuickColumn
            title="Ammonia"
            units="ppm"
            items={ammoniaItems}
          ></QuickColumn>
        </Grid>
        <Grid item>
          <QuickColumn
            title="Nitrite"
            units="ppm"
            items={nitriteItems}
          ></QuickColumn>
        </Grid>
        <Grid item>
          <QuickColumn
            title="Nitrate"
            units="ppm"
            items={nitrateItems}
          ></QuickColumn>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
};

export const TankStats = () => {
  return <></>;
};
