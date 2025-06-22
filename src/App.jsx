import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

const Wrapper = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    backgroundSize: "50px 50px",
    backgroundImage: `linear-gradient(to right, ${alpha(
      theme.palette.secondary.main,
      0.3
    )} 1px, transparent 1px), linear-gradient(to bottom, ${alpha(
      theme.palette.secondary.main,
      0.3
    )} 1px, transparent 1px)`,
  },
}))(({ classes, children }) => <div className={classes.root}>{children}</div>);

function App() {
  return (
    <>
      <Navigation />
      <Wrapper>
        <Home />
        <Projects />
        <Experience />
      </Wrapper>
    </>
  );
}

export default App;
