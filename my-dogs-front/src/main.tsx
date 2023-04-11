import React, { useState } from "react";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/Navbar/Header";
import PetList from "./components/Pet/PetList";
import Pet from "./components/Pet/Pet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { CssBaseline, Grid } from "@mui/material";
import Sidebar from "./components/Navbar/SideBar";
import { useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { ProSidebarProvider } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

interface IndexProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<IndexProps> = ({ isLoggedIn, setLoggedIn }) => {
  const [theme, colorMode] = useMode();

  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        {isLoggedIn ? (
          <ProSidebarProvider>
            <Grid container>
              <Grid item>
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    minHeight: "400px",
                  }}
                >
                  <Sidebar />
                </div>
              </Grid>
              <Grid item>
                <Routes>
                  <Route path="/dashboard" element={<Home />} />
                  <Route
                    path="/Pets"
                    element={<PetList setLoggedIn={setLoggedIn} />}
                  />
                  <Route
                    path="/Pet/:id"
                    element={<Pet setLoggedIn={setLoggedIn} />}
                  />
                </Routes>
              </Grid>
            </Grid>
          </ProSidebarProvider>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/signup"
              element={<SignUp setIsLoggedIn={setLoggedIn} />}
            />
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Main;
