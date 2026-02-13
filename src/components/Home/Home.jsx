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
    fontSize: "1.4rem",
    animation: "fadeInUp 0.6s ease-out 0.2s backwards",
  },
  subtitleDelayed: {
    animation: "fadeInUp 0.6s ease-out 0.4s backwards",
  },
  image: {
    borderRadius: "20px",
    maxHeight: "25rem",
    maxWidth: "25rem",
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
              I like to think of myself as a software engineer however I've been
              doing a lot more low-code stuff with work as of late. I am still
              passionate for software, mainly working on full-stack application
              projects in my spare time using predominantly JavaScript, React,
              and AWS. Outside of this I enjoy bash scripting, work
              optimisation/automation, and using VIM.
            </Subtitle>
            <br />
            <Subtitle className={`${classes.subtitle} ${classes.subtitleDelayed}`}>
              Outside of the software world, I have a big passion for rugby (I
              play it myself), love getting down to the beach for a surf,
              keeping up to date with my favorite TV shows, and exploring what
              life has to offer.
            </Subtitle>
          </div>
          <img
            src="static/images/profile-pic.png"
            alt="Profile"
            className={classes.image}
          />
        </div>
      </div>
    </Wrapper>
  );
});

export default Home;
