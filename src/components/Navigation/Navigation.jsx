import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import useActiveSection from "../../hooks/useActiveSection";
import GitHub from "../../icons/GitHub";
import Linkedin from "../../icons/Linkedin";
import Notes from "../../icons/Notes";
import Link from "../Link";

const sections = ["home", "projects", "experience"];

function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

const SecondaryNavBox = withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    "&:hover": {
      border: `4px solid ${alpha(theme.palette.secondary.main, 0.7)}`,
      transform: "translateY(-3px)",
      boxShadow: `0 8px 25px ${alpha(theme.palette.secondary.main, 0.25)}`,
    },
  },
  "@media (max-width: 768px)": {
    root: {
      padding: "0",
      border: "none",
      "&:hover": {
        transform: "scale(1.1)",
        boxShadow: "none",
      },
    },
  },
}))(({ classes, children, href, newTab = true }) => (
  <a {...(newTab ? { target: "_blank" } : {})} href={href}>
    <div className={classes.root}>{children}</div>
  </a>
));

const Navigation = withStyles((theme) => ({
  root: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    marginTop: "1.5rem",
    fontSize: "1.5rem",
    position: "fixed",
    top: "0",
    width: "fit-content",
    zIndex: "99",
    marginLeft: "5%",
    animation: "fadeInUp 0.6s ease-out",
  },
  navbar: {
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    justifyContent: "space-around",
    padding: "0 4rem",
    backdropFilter: "blur(10px)",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: `0 4px 20px ${alpha(theme.palette.secondary.main, 0.15)}`,
    },
  },
  navLink: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-4px",
      left: "50%",
      width: "0",
      height: "2px",
      backgroundColor: theme.palette.secondary.main,
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: "translateX(-50%)",
    },
    "&:hover::after": {
      width: "100%",
    },
  },
  active: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    "&::after": {
      width: "100%",
    },
    "&:hover": {
      cursor: "default",
    },
  },
  icon: {
    width: "30px",
    maxWidth: "30px",
    transition: "all 0.3s ease",
    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.7),
    },
  },
  secondaryNavOptions: {
    display: "flex",
    gap: "1rem",
  },
  linkWidth: {
    width: "100%",
    textAlign: "center",
  },
  logo: {
    width: "3.75rem",
    height: "3.75rem",
    flexShrink: 0,
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "rotate(10deg) scale(1.1)",
    },
  },
  "@media (max-width: 768px)": {
    root: {
      backgroundColor: theme.palette.primary.main,
      border: "none",
      position: "sticky",
      margin: "0",
      fontSize: "1rem",
      gap: "0",
      width: "100vw",
      flexDirection: "column",
      animation: "none",
    },
    navbar: {
      backgroundColor: "inherit",
      border: "none",
      height: "auto",
      padding: "0.5rem 1rem",
      "&:hover": {
        boxShadow: "none",
      },
    },
    navLink: {
      "&::after": {
        display: "none",
      },
    },
    icon: {
      maxWidth: "1rem",
    },
    logo: {
      width: "2rem",
      height: "2rem",
    },
    secondaryNavOptions: {
      paddingBottom: "1rem",
      gap: "1rem",
    },
  },
}))(({ classes }) => {
  const activeSection = useActiveSection(sections);

  return (
    <div className={classes.root}>
      <nav className={classes.navbar}>
        <img src="static/images/portfolio-icon.png" className={classes.logo} />
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={clsx(
              classes.linkWidth,
              classes.navLink,
              activeSection === section ? classes.active : "",
            )}
          >
            {toTitleCase(section)}
          </Link>
        ))}
      </nav>
      <div className={classes.secondaryNavOptions}>
        <SecondaryNavBox href="https://notes.d-sons.com" newTab={false}>
          <Notes className={classes.icon} />
        </SecondaryNavBox>
        <SecondaryNavBox href="https://www.linkedin.com/in/dempsey-thompson-b91614197/">
          <Linkedin className={classes.icon} />
        </SecondaryNavBox>
        <SecondaryNavBox href="https://github.com/demstar16">
          <GitHub className={classes.icon} />
        </SecondaryNavBox>
      </div>
    </div>
  );
});

export default Navigation;
