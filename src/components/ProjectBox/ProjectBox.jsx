import { withStyles } from "@mui/styles";

const ProjectBox = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}))(({ classes, title, imgSrc, children }) => {
  return (
    <div className={classes.root}>
      <img src={imgSrc} />
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
});

export default ProjectBox;
