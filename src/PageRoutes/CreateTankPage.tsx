import "../styling/TankForms.css";
import NewTankForm from "../components/Questionnaire/NewTankForm";
import { Footer } from "../components/Footer";

export const CreateNew = () => {
  return (
    <>
      <NewTankForm></NewTankForm>
      <Footer></Footer>
    </>
  );
};
