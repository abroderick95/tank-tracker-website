export interface QuestionnaireAnswer {
  heading: string;
  description: string;
  image: string;
  alt: string;
}

export enum QuestionType {
  TextInput = "TextInput",
}

export const newTankSlides = [
  {
    label: "New Tank Name",
    question: "Enter Tank Name",
    questionType: QuestionType.TextInput,
  },
  {
    question: "Which type of environment will your new tank be?",
    answers: [
      {
        heading: "Freshwater",
        description: "does not use RO water, easiest for beginners",
        image: "TankImages/FreshwaterCories.jpeg",
        alt: "",
      },
      {
        heading: "Saltwater",
        description: "for advanced aquarists only, enter at your own risk",
        image: "TankImages/SaltwaterGreenChromis.jpeg",
        alt: "",
      },
    ],
    label: "Environment",
  },
  {
    question: "What kind of substrate will you use? Select all that apply.",
    answers: [
      {
        heading: "Polished stone",
        description: "does not use RO water, easiest for beginners",
        image: "freshwater fish",
        alt: "",
      },
      {
        heading: "Aquarium Soil",
        description: "for advanced aquarists only, enter at your own risk",
        image: "",
        alt: "",
      },
      {
        heading: "Sand",
        description: "for advanced aquarists only, enter at your own risk",
        image: "",
        alt: "",
      },
      {
        heading: "Other",
        description: "for advanced aquarists only, enter at your own risk",
        image: "",
        alt: "",
      },
    ],
    label: "Substrate",
  },
  //   {
  //     slide: (
  //       <Grid item className="newTankSlide">
  //         <h2>What type of water filtration will you choose?</h2>
  //         <Grid item className="Questionnaire-Options">
  //           <Button className="Q-Btn">
  //             OTB/HOB (Over the back/Hang on back)
  //           </Button>
  //           <Button className="Q-Btn">Canister filtration</Button>
  //         </Grid>
  //       </Grid>
  //     ),
  //   },
];
