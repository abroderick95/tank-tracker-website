import "./styling/App.css";
import ResponsiveAppBar from "./components/NavBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "./PageRoutes/LandingPage";
import { WaterTesting } from "./PageRoutes/TankStats";
import { CreateNew } from "./PageRoutes/CreateTankPage";
import { AboutPage } from "./PageRoutes/AboutPage";
import { PageRoute } from "./constants/pageRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path={PageRoute.LandingPage} element={<LandingPage />} />
          <Route path={PageRoute.TankStats} element={<WaterTesting />} />
          <Route path={PageRoute.CreateNew} element={<CreateNew />} />
          <Route path={PageRoute.AboutUs} element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
