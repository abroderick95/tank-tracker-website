import * as React from "react";
import { Box, Typography } from "@mui/material";
import { siteThemes } from "../styling/SiteThemes";
import Paper from "@mui/material/Paper";
import { border, flexbox } from "@mui/system";
import { positions } from "@mui/system";
import { Footer } from "../components/Footer";
import { CalendarDateRangePicker } from "../components/CalendarDateRangePicker";

// import {
//   Chart,
//   ArgumentAxis,
//   ValueAxis,
//   LineSeries,
//   Title,
//   Legend,
// } from "@devexpress/dx-react-chart-material-ui";
// import { Animation } from "@devexpress/dx-react-chart";

export const TankStats = () => {
  // const data = [
  //   {
  //     date: new Date("2022-11-06").getTime(),
  //     ammonia: 0.25,
  //     nitrite: 0.25,
  //     nitrate: 5,
  //   },
  //   {
  //     date: new Date("2022-11-30").getTime(),
  //     ammonia: 0,
  //     nitrite: 0,
  //     nitrate: 0,
  //   },
  // ];

  // const startTime = new Date("2022-11-01");
  // const endTime = new Date("2022-11-30");
  // const msInMonth = endTime.getTime() - startTime.getTime();
  // const boxHeight = 86400000 / msInMonth;
  // const CONTAINER_HEIGHT = 500;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CalendarDateRangePicker></CalendarDateRangePicker>
      <Typography variant="h3">Your Tank Stats!</Typography>
      <Paper
        sx={{ width: 450, height: 450 }}
        elevation={5}
        // sx={{ border: 1 }}
        // flexDirection={"column"}
        // flexGrow={"1"}
      ></Paper>
      <Footer></Footer>
      {/* <Paper style={{ height: CONTAINER_HEIGHT }}>
        {data.map((data) => {
          const percent = (data.date - startTime.getTime()) / msInMonth;
          return (
            <Box
              bgcolor="yellow"
              height={boxHeight}
              width={50}
              sx={{
                transform: `translate(0px, ${Math.round(
                  percent * CONTAINER_HEIGHT
                )}px)`,
              }}
            />
          );
        })}
      </Paper> */}
    </Box>
  );
};
