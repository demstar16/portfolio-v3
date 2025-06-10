import { withStyles } from "@mui/styles";
import clsx from "clsx";

const Subtitle = withStyles(() => ({
  root: {
    fontStyle: "italic",
  },
}))(({ classes, className, children }) => (
  <h3 className={clsx(classes.root, className)}>{children}</h3>
));

export default Subtitle;
