import * as React from "react";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export interface WCDateWheelProps {
  value: Dayjs | null;
  errorStatus: String;
  onError: () => void;
  onDateChange: (newValue: Dayjs | null) => void;
}

export function WCDateWheel(props: WCDateWheelProps) {
  return (
    <Box sx={{ mx: "auto", width: 1 / 4 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DatePicker
            disableFuture
            label={props.errorStatus}
            onError={props.onError}
            inputFormat="MM/DD/YYYY"
            value={props.value}
            onChange={props.onDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}
