import { withStyles } from "@mui/styles";
import Linkedin from "../../icons/Linkedin";
import Mail from "../../icons/Mail";
import Header from "../Header";
import Subtitle from "../Subtitle";

const Home = withStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    paddingTop: "200px",
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
    <div id="home" className={classes.root}>
      <div className={classes.about}>
        <Header className={classes.header}>Dempsey Thompson</Header>
        <div className="flex gap-3">
          <Mail className={classes.icon} />
          <Linkedin className={classes.icon} />
        </div>
        <br />
        <Subtitle className={classes.subtitle}>
          {`I started my journey as a software engineer, building scalable systems and writing code that my future self would thank me for (most of the time). These days, I’m diving deep into Power Platform development—automating processes, mapping out business workflows, and delivering solutions that actually make people’s lives easier. On the side, I keep my software engineering toolkit sharp and occasionally wander into the worlds of cybersecurity, system architecture, and game dev—because why have one tech obsession when you can have three? 
        `}
        </Subtitle>
        <br />
        <Subtitle className={classes.subtitle}>
          {`Outside of the tech space, I enjoy playing rugby union, surfing, and watching anime :)`}
        </Subtitle>
      </div>
      <img src="src/images/ai-portrait.png" className={classes.image} />
    </div>
  );
});

export default Home;
