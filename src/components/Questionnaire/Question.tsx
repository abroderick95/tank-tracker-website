import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import { CardActionArea, TextField } from "@mui/material";
import { QuestionnaireAnswer, QuestionType } from "./newTankSlides";

export interface QuestionProps {
  question?: string;
  answers?: QuestionnaireAnswer[];
  label: string;
  questionType?: QuestionType;
  onNext: () => void;
}

export const Question = (props: QuestionProps) => {
  return (
    <Grid>
      <Typography variant="h4">{props.question}</Typography>
      <Grid container direction={"row"} justifyContent={"center"} spacing={2}>
        {props.questionType === QuestionType.TextInput ? (
          <>
            <TextField label={props.label} />
            <Button onClick={props.onNext}>Next</Button>
          </>
        ) : (
          props.answers?.map((answer) => (
            <Grid item>
              <Card
                width="450px"
                height="400px"
                // margin="20px"
                // sx={{
                //   border: 50,
                // }}
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
    </Grid>
  );
};
