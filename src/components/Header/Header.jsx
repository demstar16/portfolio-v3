import { withStyles } from "@mui/styles";
import clsx from "clsx";

const Header = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    fontSize: "1.3rem",
  },
}))(({ classes, className, children }) => (
  <h1 className={clsx(className, classes.root)}>{children}</h1>
));

export default Header;
