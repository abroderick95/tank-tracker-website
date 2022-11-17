import "../styling/App.css";
import * as React from "react";
import { useTimer } from "react-timer-hook";
import { Box, Button, Grid, Typography } from "@mui/material";
import { WCDateWheel } from "./WCDateWheel";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { LinearProgress, linearProgressClasses } from "@mui/material";
import { siteThemes } from "../styling/SiteThemes";
import { padding } from "@mui/system";

export function TankTestingTimer(
  { expiryTimestamp } = { expiryTimestamp: new Date(Date.now() + 300000) }
) {
  const { seconds, minutes, start, pause, restart, isRunning } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      console.warn("onExpire called.");
    },
  });
  const timerProgress = (minutes * 60 + seconds) / 3;

  return (
    <>
      <Grid style={{ textAlign: "center", padding: "5px 10px 30px" }}>
        <WCDateWheel />
      </Grid>
      <Box sx={{ mx: "auto", width: 600, height: 20 }}>
        <LinearProgress variant="determinate" value={timerProgress} />
      </Box>
      <Typography variant="h4">
        {minutes}:
        {seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </Typography>
      {isRunning ? (
        <Button size="large" onClick={pause}>
          <PauseCircleOutlineIcon />
        </Button>
      ) : (
        <Button size="large" onClick={start}>
          <PlayCircleOutlineIcon />
        </Button>
      )}
      <Button
        size="small"
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time, false);
        }}
      >
        <RestartAltIcon />
      </Button>
    </>
  );
}
