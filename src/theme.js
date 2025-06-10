import { createTheme } from "@mui/material/styles";

// https://colorhunt.co/palette/ddeb9da0c87827667b143d60

const theme = createTheme({
  palette: {
    primary: {
      main: "#143D60",
    },
    secondary: {
      main: "#dff297",
    },
  },
  typography: {
    fontFamily: "Rokkitt",
  },
});

export default theme;
