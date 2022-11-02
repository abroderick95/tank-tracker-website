import { Button, Grid, TextField } from "@mui/material";

export interface QuestionProps {
  question?: string;
  answers?: string[];
  label: string;
  onNext: () => void;
}

export const Question = (props: QuestionProps) => {
  return (
    <Grid item className="newTankSlide">
      <h2>{props.question}</h2>
      <Grid item className="Questionnaire-Options">
        {props.answers?.map((answer) => (
          <Button key={answer} className="Q-Btn" onClick={props.onNext}>
            {answer}
          </Button>
        ))}
        {!props.answers && <TextField label={props.label}></TextField>}
      </Grid>
      {!props.answers && (
        <Grid item>
          <Button onClick={props.onNext}>Submit</Button>
        </Grid>
      )}
    </Grid>
  );
};
