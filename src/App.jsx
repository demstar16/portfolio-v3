import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

const Wrapper = withStyles(() => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 1fr",
    gridTemplateRows: "1fr",
  },
}))(({ classes, children }) => <div className={classes.root}>{children}</div>);

const SideColumn = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}))(({ classes, children }) => <div className={classes.root}>{children}</div>);

const MainColumnBase = ({ classes, children, ...props }) => {
  return (
    <div className={classes.root} {...props}>
      {children}
    </div>
  );
};

MainColumnBase.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
};

// Fix: Pass MainColumnBase explicitly to withStyles
const MainColumn = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
  },
}))(MainColumnBase);

function App() {
  return (
    <Wrapper>
      <SideColumn />
      <MainColumn>
        <Navigation />
        <Home />
        <Projects />
        <Experience />
      </MainColumn>
      <SideColumn />
    </Wrapper>
  );
}

export default App;
