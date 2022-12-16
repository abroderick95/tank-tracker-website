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
    question: "Enter Tank Name",
    questionType: QuestionType.TextInput,
    label: "New Tank Name",
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
];

export const freshwaterSlides = [
  {
    question: "What size will your new tank be?",
    answers: [
      { heading: "Nano Tank (5 gallons)", description: "", image: "", alt: "" },
      { heading: "10-15 gallons", description: "", image: "", alt: "" },
      { heading: "20-55 gallons", description: "", image: "", alt: "" },
      { heading: "60+ gallons", description: "", image: "", alt: "" },
    ],
    label: "FW Tank Size",
  },
  {
    question: "What kind of substrate will you use?",
    answers: [
      {
        heading: "Polished stone",
        description:
          "Ideal for fish with sensitive whiskers or fins, anchors live plants, and comes in a wide variety of colors for customizing aquarium floor. May need supplemental plant nutrients.",
        image: "TankImages/SmoothStones.png",
        alt: "",
      },
      {
        heading: "Aquarium Soil",
        description:
          "Great for growing aquarium plants, but can deteriorate and cause ammonia spikes when disturbed. Lightweight, live plants need to be buried deeply and may take time to root.",
        image: "TankImages/AquariumSoil.jpeg",
        alt: "",
      },
      {
        heading: "Sand",
        description:
          "Best for aquariums with freshwater invertebrates, cichlids, burrowing fish like kuhli loaches, and sifting fish like goldfish; easily disturbed, and some find it difficult to clean.",
        image: "TankImages/AquariumSand.jpeg",
        alt: "",
      },
      {
        heading: "Bare Bottom",
        description:
          "Leaves more tank space for water and creates a modern look. Requires a lot of maintenance so that waste does not build up, and limits the buildup of beneficial bacteria.",
        image: "TankImages/BareBottomTank.jpeg",
        alt: "",
      },
      {
        heading: "Mixed Substrates",
        description:
          "Allows for the best of all substrates included and beautiful styling, but can be more difficult to maintain or cause complications depending on ingredients.",
        image: "TankImages/MixedSubstrateTank2.jpeg",
        alt: "",
      },
    ],
    label: "FW Substrate",
  },
  {
    question: "What type of water filtration will you choose?",
    answers: [
      {
        heading: "Hang-On-Back (HOB) Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Sponge Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Internal Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Canister Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Surface Skimmer",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Protein Skimmer",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Sump Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Under Gravel Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Wet/Dry Filter",
        description: "",
        image: "",
        alt: "",
      },
    ],
    label: "FW Filtration",
  },
];

export const saltwaterSlides = [
  {
    question: "What size will your new tank be?",
    answers: [
      {
        heading: "Nano Reef (20-30 gallons)",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "40-55 gallon 'breeder'",
        description: "",
        image: "",
        alt: "",
      },
      { heading: "60-93 gallons", description: "", image: "", alt: "" },
      { heading: "120-180 gallons", description: "", image: "", alt: "" },
      { heading: "200+ gallons", description: "", image: "", alt: "" },
    ],
    label: "SW Tank Size",
  },
  {
    question: "What kind of substrate will you use?",
    answers: [
      {
        heading: "Aragonite Sand",
        description:
          "The most common type of saltwater tank substrate, doesn't contain silicates, and helps discourage algae growth",
        image: "TankImages/AragoniteSubstrateSaltwater.jpeg",
        alt: "",
      },
      {
        heading: "Crushed Coral",
        description: "Coarser sand, a mix of coral and shells",
        image: "TankImages/CrushedCoralSaltwater.jpeg",
        alt: "",
      },
      {
        heading: "Oolite",
        description: "A small, fine, round sand",
        image: "TankImages/OoliteSaltwater.jpeg",
        alt: "",
      },
      {
        heading: "Bare Bottom",
        description:
          "Leaves more tank space for water and creates a modern look. Requires a lot of maintenance so that waste does not build up, and limits the buildup of beneficial bacteria.",
        image: "TankImages/BareBottomSaltwater.jpeg",
        alt: "",
      },
      {
        heading: "Mixed Substrates",
        description:
          "Allows for the best of all substrates included and beautiful styling, but can be more difficult to maintain or cause complications depending on ingredients.",
        image: "TankImages/MixedSubstrateSaltwater.jpeg",
        alt: "",
      },
    ],
    label: "SW Substrate",
  },
  {
    question: "What type of water filtration will you choose?",
    answers: [
      {
        heading: "Hang-On-Back (HOB) Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Sponge Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Internal Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Canister Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Surface Skimmer",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Protein Skimmer",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Sump Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Under Gravel Filter",
        description: "",
        image: "",
        alt: "",
      },
      {
        heading: "Wet/Dry Filter",
        description: "",
        image: "",
        alt: "",
      },
    ],
    label: "SW Filtration",
  },
];

//   {
//     slide: (
//       <Grid item className="newTankSlide">
//         <h2>What type of water filtration will you choose?</h2>
//         <Grid item className="Questionnaire-Options">
//           <Button className="Q-Btn">
//             HOB (Hang on back)
//           </Button>
//           <Button className="Q-Btn">Canister filtration</Button>
//         </Grid>
//       </Grid>
//     ),
//   },
