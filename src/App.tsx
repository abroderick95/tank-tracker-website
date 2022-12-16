import "./styling/App.css";
import { ResponsiveAppBar } from "./components/NavBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LandingPage } from "./PageRoutes/LandingPage";
import { TestMyWater } from "./PageRoutes/TestMyWater";
import { CreateNew } from "./PageRoutes/CreateTankPage";
import { AboutPage } from "./PageRoutes/AboutPage";
import { PageRoute } from "./constants/pageRoute";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { siteThemes } from "./styling/SiteThemes";
import { TankStats } from "./PageRoutes/TankStats";

function App() {
  return (
    <ThemeProvider theme={siteThemes}>
      <CssBaseline />
      <Box className="App">
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path={PageRoute.LandingPage} element={<LandingPage />} />
            <Route path={PageRoute.TestMyWater} element={<TestMyWater />} />
            <Route path={PageRoute.TankStats} element={<TankStats />} />
            <Route path={PageRoute.CreateNew} element={<CreateNew />} />
            <Route path={PageRoute.AboutUs} element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;

// To-Do List of Functionality
// () Disallow Submission of Data if Date is Invalid
// () Create Graph/Layout for Displaying Data
// () Get Backend for Displaying Data Up and Running
// () Send Real Data to Backend
// () Display Results for Each Tank
// () Be Able to Filter Results with Date Range Picker
