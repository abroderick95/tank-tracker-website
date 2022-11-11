import "../styling/App.css";
import * as React from "react";
import { useTimer } from "react-timer-hook";
import { Button, Grid, Typography } from "@mui/material";
import { WCDateWheel } from "./WCDateWheel";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

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

  return (
    <>
      <Grid style={{ textAlign: "center" }}>
        <WCDateWheel />
      </Grid>
      {isRunning ? (
        <Button size="small" onClick={pause}>
          <PauseCircleOutlineIcon />
        </Button>
      ) : (
        <Button size="small" onClick={start}>
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
      <Typography variant="h5">
        {minutes}:
        {seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </Typography>
    </>
  );
}
