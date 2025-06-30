import { withStyles } from "@mui/styles";
import Header from "../Header";
import Subtitle from "../Subtitle";

const HomeWrapper = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
}))(({ classes, children, id }) => (
  <div className={classes.root} id={id}>
    {children}
  </div>
));

const Home = withStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    width: "90%",
    padding: "1rem 5rem",
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
  },
  about: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: "3rem",
  },
  subtitle: {
    textAlign: "start",
    fontSize: "1.3rem",
  },
  icon: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  image: {
    borderRadius: "20px",
    maxHeight: "25rem",
  },
}))(({ classes }) => {
  return (
    <HomeWrapper id="home">
      <div className={classes.root}>
        <div className={classes.about}>
          <Header className={classes.header}>Dempsey Thompson</Header>
          <Subtitle className={classes.subtitle}>
            {`My name is Dempsey, I am a software engineer passionate about clean code, architecture, design, and solving problems. I love building user centered solutions to provide value. I am proficient in JavaScript, TypeScript, React, and Bash. One of my favorite takeaways from the graduate program I completed would have to be the fear of the mouse, VIM key bindings rain supreme. I now look for anyway I can to optimise my workflow. I recently dove into low code solutions in the microsoft ecosystem, enhancing my soft skills - particularly in good communication and working close with the client.`}
          </Subtitle>
          <br />
          <Subtitle className={classes.subtitle}>
            {`Outside of the software world, I have a big passion for rugby (I play it myself), love getting down to the beach for a surf, keeping up to date with my favorite TV shows, and I am currently learning guitar.`}
          </Subtitle>
        </div>
        <img src="src/images/ai-portrait.png" className={classes.image} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
