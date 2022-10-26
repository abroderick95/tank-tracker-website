import "../styling/NewTankForm.css";
import { Grid, TextField, Button } from "@mui/material";

export const CreateNew = () => {
  return (
    <>
      <h1>Create Your New Tank!</h1>
      <form>
        <Grid container direction="column" justifyContent="center">
          <Grid item>
            <TextField required label="New Tank Name"></TextField>
          </Grid>
          <Grid item>
            <Button>Start</Button>
          </Grid>
          <h2>Which type of environment will your new tank have?</h2>
          <Grid item className="Questionnaire-Options">
            <Button className="Q-Btn">Freshwater</Button>
            <Button className="Q-Btn">Saltwater</Button>
          </Grid>
          <Button className="Need-Help-Btn">I need help with this</Button>
          <h2>What kind of substrate will you use?</h2>
          <Grid item className="Questionnaire-Options">
            <Button className="Q-Btn">Polished stone</Button>
            <Button className="Q-Btn">Rough gravel</Button>
            <Button className="Q-Btn">Sand</Button>
            <Button className="Q-Btn">Other</Button>
          </Grid>
          <Button className="Need-Help-Btn">I need help with this</Button>
          <h2>What type of water filtration will you choose?</h2>
          <Grid item className="Questionnaire-Options">
            <Button className="Q-Btn">
              OTB/HOB (Over the back/Hang on back)
            </Button>
            <Button className="Q-Btn">Canister filtration</Button>
          </Grid>
        </Grid>
        <Button className="Need-Help-Btn">I need help with this</Button>
      </form>
    </>
  );
};
