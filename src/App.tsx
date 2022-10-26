import "./styling/App.css";
import ResponsiveAppBar from "./components/NavBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { TankStats } from "./components/TankStats";
import { CreateNew } from "./components/CreateNew";
import { AboutPage } from "./components/AboutPage";
import { PageRoute } from "./constants/pageRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path={PageRoute.LandingPage} element={<LandingPage />} />
          <Route path={PageRoute.TankStats} element={<TankStats />} />
          <Route path={PageRoute.CreateNew} element={<CreateNew />} />
          <Route path={PageRoute.AboutUs} element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
