import { GitHub } from "@mui/icons-material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import useActiveSection from "../../hooks/useActiveSection";
import Linkedin from "../../icons/Linkedin";
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
    gap: "3rem",
    display: "flex",
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
    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.5),
    },
  },
}))(({ classes }) => {
  const activeSection = useActiveSection(sections);

  return (
    <div className={classes.root}>
      <nav className={classes.navbar}>
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={activeSection === section ? classes.active : ""}
          >
            {toTitleCase(section)}
          </Link>
        ))}
      </nav>
      <SecondaryNavBox href="https://notes.d-sons.com/docs">
        <LibraryBooksIcon fontSize="large" />
      </SecondaryNavBox>
      <SecondaryNavBox href="https://www.linkedin.com/in/dempsey-thompson-b91614197/">
        <Linkedin />
      </SecondaryNavBox>
      <SecondaryNavBox href="https://github.com/demstar16">
        <GitHub fontSize="large" />
      </SecondaryNavBox>
    </div>
  );
});

export default Navigation;
