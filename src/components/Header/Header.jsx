import { withStyles } from "@mui/styles";
import clsx from "clsx";

const Header = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    fontSize: "1.3rem",
  },
  "@media (max-width: 768px)": {
    root: { fontSize: "1.2rem" },
  },
}))(({ classes, className, children }) => (
  <h1 className={clsx(classes.root, className)}>{children}</h1>
));

export default Header;
