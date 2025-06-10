import { withStyles } from "@mui/styles";
import clsx from "clsx";

const Link = withStyles((theme) => ({
  root: {
    color: "inherit",

    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
}))(({ classes, className, children, href, target }) => (
  <a
    className={clsx(classes.root, className)}
    target={target ?? ""}
    href={href}
  >
    {children}
  </a>
));

export default Link;
