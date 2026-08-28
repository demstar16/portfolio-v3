import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import Header from "../Header";
import Subtitle from "../Subtitle";
import WaveAnimation from "../WaveAnimation";
import Wrapper from "../Wrapper";

const Home = withStyles((theme) => ({
  root: {
    maxWidth: "80%",
    padding: "1rem 5rem",
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    paddingBottom: "2rem",
    position: "relative",
    overflow: "hidden",
    transition: "box-shadow 0.4s ease",
    "&:hover": {
      boxShadow: `0 10px 40px ${alpha(theme.palette.secondary.main, 0.15)}`,
    },
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  aboutBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
  },
  waveContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  infoContainer: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    gap: "1rem",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  header: {
    fontSize: "3rem",
    animation: "slideInLeft 0.6s ease-out",
  },
  subtitle: {
    textAlign: "start",
    fontSize: "1rem",
    animation: "fadeInUp 0.6s ease-out 0.2s backwards",
  },
  subtitleDelayed: {
    animation: "fadeInUp 0.6s ease-out 0.4s backwards",
  },
  image: {
    borderRadius: "20px",
    maxHeight: "30rem",
    maxWidth: "30rem",
    animation: "slideInRight 0.6s ease-out",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: `0 15px 40px ${alpha(theme.palette.colors.black, 0.3)}`,
    },
  },
  "@media (max-width: 768px)": {
    root: {
      padding: "1rem 2rem",
    },
    infoContainer: {
      flexDirection: "column-reverse",
    },
    waveContainer: { top: "auto" },
    image: {
      borderRadius: "10px",
      padding: "0 1rem",
    },
    header: {
      fontSize: "1.5rem",
    },
    subtitle: {
      fontSize: "0.8rem",
    },
  },
  "@media (min-width: 768px) and (max-width: 1050px)": {
    infoContainer: {
      flexDirection: "column-reverse",
    },
    waveContainer: { top: "auto" },
    header: {
      fontSize: "1.5rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
  },
}))(({ classes }) => {
  return (
    <Wrapper id="home">
      <div className={classes.root}>
        <div className={classes.backgroundContainer}>
          <div className={classes.aboutBg}></div>
          <div className={classes.waveContainer}>
            <WaveAnimation />
          </div>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.about}>
            <Header className={classes.header}>Dempsey Thompson</Header>
            <Subtitle className={classes.subtitle}>
              I&apos;m a passionate software engineer, with a diverse range of
              skills including full-stack development, cloud computing,
              scripting, agentic development and low-code development within the
              Microsoft stack. I&apos;ve had experience working in London with
              the Power Platform and gained a lot from that experience, however
              most of my more recent activity has been in the AWS space
              developing applications. I&apos;m currently trying to pick up C++,
              game development with Godot4, and 3D rendering and modelling with
              Three.js and Blender.
            </Subtitle>
            <br />
            <Subtitle
              className={`${classes.subtitle} ${classes.subtitleDelayed}`}
            >
              Away from software I play rugby, currently pursuing it in Sydney.
              Given that I spend a lot of my time in the gym, on the field, or
              recovering. In the moments where I&apos;m not, I enjoy reading a
              broad range of genres (predominantly fantasy and sci-fi... break
              the chains), going for a surf, and spending time with friends and
              family.
            </Subtitle>
          </div>
          <img
            src="static/images/portfolio-profile.png"
            alt="Profile"
            className={classes.image}
          />
        </div>
      </div>
    </Wrapper>
  );
});

export default Home;
