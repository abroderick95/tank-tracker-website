import * as React from "react";
import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";

export interface QuickButtonProps
  extends ExtendButtonBase<ButtonTypeMap<{}, "button">> {
  children: React.ReactNode;
}

export function QuickButton(props: QuickButtonProps) {
  return (
    <Button {...props} className="Q-Btn">
      {props.children}
    </Button>
  );
}
