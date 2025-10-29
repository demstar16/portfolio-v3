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

    "&:hover": {
      border: `4px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
      color: alpha(theme.palette.secondary.main, 0.5),
    },
  },
  "@media (max-width: 768px)": {
    root: {
      padding: "0",
      border: "none",
    },
  },
}))(({ classes, children, href }) => (
  <a target="_blank" href={href}>
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
  },
  navbar: {
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    width: "100%",
    display: "flex",
    gap: "2rem",
    justifyContent: "space-around",
    padding: "1rem 4rem",
  },
  active: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textDecoration: "underline",
    "&:hover": {
      cursor: "default",
    },
  },
  icon: {
    width: "30px",
    maxWidth: "30px",
    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.5),
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
  "@media (max-width: 768px)": {
    root: {
      backgroundColor: theme.palette.primary.main,
      border: `2px solid ${theme.palette.secondary.main}`,
      position: "sticky",
      margin: "0",
      fontSize: "1rem",
      gap: "0",
      width: "100vw",
      flexDirection: "column",
    },
    navbar: {
      backgroundColor: "inherit",
      border: "none",
      padding: "0.5rem 1rem",
    },
    icon: {
      maxWidth: "1rem",
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
        <img src="/favicon.ico" style={{ width: "30px", height: "30px" }} />
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={clsx(
              classes.linkWidth,
              activeSection === section ? classes.active : "",
            )}
          >
            {toTitleCase(section)}
          </Link>
        ))}
      </nav>
      <div className={classes.secondaryNavOptions}>
        <SecondaryNavBox href="https://notes.d-sons.com/docs">
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
