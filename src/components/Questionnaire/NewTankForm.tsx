import * as React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import { newTankSlides } from "./newTankSlides";
import { Question } from "./Question";

export function NewTankForm() {
  const [currentSlide, setSlide] = useState(0);

  function nextSlide() {
    setSlide((prev) => prev + 1);
  }

  function prevSlide() {
    setSlide((prev) => prev - 1);
  }

  return (
    <>
      <h1>Create Your New Tank!</h1>
      <form>
        {newTankSlides.map((slide, index) =>
          index === currentSlide ? (
            <Question {...slide} onNext={nextSlide} />
          ) : (
            <></>
          )
        )}
        <Grid container direction="column" justifyContent="center"></Grid>
      </form>
    </>
  );
}

export default NewTankForm;

// {/* <h2>Which type of environment will your new tank have?</h2>
//           <Grid item className="Questionnaire-Options">
//             <Button className="Q-Btn">Freshwater</Button>
//             <Button className="Q-Btn">Saltwater</Button>
//           </Grid>
//           <h2>What kind of substrate will you use?</h2>
//           <Grid item className="Questionnaire-Options">
//             <Button className="Q-Btn">Polished stone</Button>
//             <Button className="Q-Btn">Rough gravel</Button>
//             <Button className="Q-Btn">Sand</Button>
//             <Button className="Q-Btn">Other</Button>
//           </Grid>
//           <h2>What type of water filtration will you choose?</h2>
//           <Grid item className="Questionnaire-Options">
//             <Button className="Q-Btn">
//               OTB/HOB (Over the back/Hang on back)
//             </Button>
//             <Button className="Q-Btn">Canister filtration</Button>
//           </Grid> */}
