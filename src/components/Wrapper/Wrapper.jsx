import { withStyles } from "@mui/styles";
import clsx from "clsx";

const Wrapper = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  },
  "@media (max-width: 768px)": {
    root: { height: "auto", paddingTop: "5rem" },
  },
}))(({ classes, className, children, id }) => (
  <div className={clsx(classes.root, className)} id={id}>
    {children}
  </div>
));
export default Wrapper;
