import { withStyles } from "@mui/styles";

const Carousel = withStyles(() => ({
  root: {
    width: "80vw",
    height: "30rem",
    backgroundColor: "red",
    borderRadius: "20px",
  },
}))(({ classes }) => {
  return <div className={classes.root}></div>;
});

export default Carousel;
