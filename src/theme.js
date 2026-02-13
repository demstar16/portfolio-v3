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
    background: {
      default: "#143D60",
    },
    text: {
      primary: "#dff297",
    },
    colors: {
      black: "#000",
      white: "#fff",
      lightBlue: "#3257A",
    },
  },
  typography: {
    fontFamily: '"Rokkitt", serif',
    fontSize: 14,
    h1: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h2: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h3: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h4: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h5: {
      fontFamily: '"JetBrains Mono", monospace',
    },
    h6: {
      fontFamily: '"JetBrains Mono", monospace',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
      },
    },
  },
});

export default theme;
