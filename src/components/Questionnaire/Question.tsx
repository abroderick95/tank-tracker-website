import * as React from "react";
import { LettersArray } from "../LettersArray";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FormControl } from "@mui/material";
import { Box, Button, Grid } from "@mui/material";
import { CardActionArea, TextField } from "@mui/material";
import { QuestionnaireAnswer, QuestionType } from "./newTankSlides";
import { display } from "@mui/system";
import { useState } from "react";

export interface QuestionProps {
  question?: string;
  answers?: QuestionnaireAnswer[];
  label: string;
  questionType?: QuestionType;
  onNext: () => void;
}

export const Question = (props: QuestionProps) => {
  const [newTankName, setNewTankName] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  function handleChange(event: any) {
    const newTankInput = event.target.value;
    setNewTankName(newTankInput);
    // setErrorStatus(false);
    console.log(newTankName.split(","));
    isTankNameValid();
  }

  function isTankNameValid() {
    let isValid: Boolean = false;
    newTankName.split("").forEach((character) => {
      if (LettersArray.includes(character)) {
        isValid = true;
      }
    });

    return isValid;
  }

  return (
    <Box component={"form"}>
      <Typography variant="h4">{props.question}</Typography>
      <Grid container direction={"row"} justifyContent={"center"} spacing={2}>
        {props.questionType === QuestionType.TextInput ? (
          <Box padding={"30px 10px 0px"}>
            <TextField
              value={newTankName}
              error={errorStatus}
              required={true}
              helperText={errorStatus ? "Give your new tank a name!" : null}
              label={props.label}
              onChange={handleChange}
            />
            <Button
              onClick={
                isTankNameValid() ? props.onNext : () => setErrorStatus(true)
              }
            >
              Next
            </Button>
          </Box>
        ) : (
          props.answers?.map((answer) => (
            <Grid item>
              <Card
                width="450px"
                height="400px"
                component={Box}
                elevation={5}
                className="newTankCard"
              >
                <CardActionArea onClick={props.onNext}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={answer.image}
                    alt={answer.alt}
                  />
                  <CardContent>
                    <Typography
                      className="Q-Header"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      {answer.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {answer.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};
