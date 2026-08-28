import { createTheme } from "@mui/material/styles";

// Deep space palette: dark navy blue + neon aqua-green

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A1128",
    },
    secondary: {
      main: "#39FFC5",
    },
    background: {
      default: "#0A1128",
    },
    text: {
      primary: "#39FFC5",
    },
    colors: {
      black: "#000",
      white: "#fff",
      lightBlue: "#16234A",
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
