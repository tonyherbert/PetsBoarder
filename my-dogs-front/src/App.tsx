import { CssBaseline, ThemeProvider } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Main from "./main";

const App: FunctionComponent = () => {
  const jwtToken = localStorage.getItem("token");

  const [isLoggedIn, setLoggedIn] = useState(jwtToken ? true : false);

  return <Main isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />;
};

export default App;
