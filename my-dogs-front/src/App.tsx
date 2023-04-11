import { CssBaseline, ThemeProvider } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Main from "./main";

const App: FunctionComponent = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return <Main isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />;
};

export default App;
