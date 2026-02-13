import { withStyles } from "@mui/styles";
import clsx from "clsx";

const Link = withStyles((theme) => ({
  root: {
    color: "inherit",
    display: "inline-block",
    position: "relative",
    transition: "color 0.3s ease",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: "0",
      width: "0",
      height: "2px",
      backgroundColor: theme.palette.secondary.main,
      transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },

    "&:hover": {
      color: theme.palette.secondary.main,
    },

    "&:hover::after": {
      width: "100%",
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
