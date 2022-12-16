import * as React from "react";
import { Typography } from "@mui/material";
import { useState } from "react";
import {
  freshwaterSlides,
  newTankSlides,
  QuestionnaireAnswer,
  saltwaterSlides,
} from "./newTankSlides";
import { Question } from "./Question";

export function NewTankForm() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState(newTankSlides);

  function nextSlide(answer?: QuestionnaireAnswer) {
    if (answer?.heading === "Freshwater") {
      setSlides([...newTankSlides, ...freshwaterSlides]);
    } else if (answer?.heading === "Saltwater") {
      setSlides([...newTankSlides, ...saltwaterSlides]);
    }
    setCurrentSlide((prev) => prev + 1);
  }

  function prevSlide() {
    setCurrentSlide((prev) => prev - 1);
  }

  return (
    <>
      <Typography variant="h3">Create Your New Tank!</Typography>
      {slides.map((slide, index) =>
        index === currentSlide ? (
          <Question {...slide} onNext={nextSlide} />
        ) : (
          <></>
        )
      )}
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
