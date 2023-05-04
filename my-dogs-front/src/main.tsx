import React, { useState } from "react";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/Navbar/Header";
import PetList from "./components/Pet/PetList";
import Pet from "./components/Pet/Pet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { CssBaseline, Grid } from "@mui/material";
import Sidebar from "./components/Navbar/MyProSidebar";
import { useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { MyProSidebarProvider } from "./components/Navbar/sidebarContext";

interface IndexProps {
  isLoggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<IndexProps> = ({ isLoggedIn, setLoggedIn }) => {
  const [theme, colorMode] = useMode();

  const [isSidebar, setIsSidebar] = useState(true);
  console.log(isLoggedIn);
  console.log(localStorage);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        {isLoggedIn ? (
          <Grid container>
            <Grid item xs={2}>
              <Sidebar />{" "}
            </Grid>
            <Grid item xs={10}>
              <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route
                  path="/pets"
                  element={<PetList setLoggedIn={setLoggedIn} />}
                />
                <Route
                  path="/pet/:id"
                  element={<Pet setLoggedIn={setLoggedIn} />}
                />
              </Routes>
            </Grid>
          </Grid>
        ) : (
          <Routes>
            <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} />} />
            <Route
              path="/signup"
              element={<SignUp setIsLoggedIn={setLoggedIn} />}
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default Main;
