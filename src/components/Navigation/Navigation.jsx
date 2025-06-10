import { withStyles } from "@mui/styles";
import useActiveSection from "../../hooks/useActiveSection";
import Link from "../Link";

const sections = ["home", "projects", "experience"];

function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

const Navigation = withStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    gap: "2rem",
    padding: "1rem",
    fontSize: "1.1rem",
    position: "sticky",
    top: "0",
    width: "100%",
    justifyContent: "center",
    zIndex: "99",
  },
  active: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textDecoration: "underline",
  },
}))(({ classes }) => {
  const activeSection = useActiveSection(sections);

  return (
    <nav className={classes.root}>
      {sections.map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className={activeSection === section ? classes.active : ""}
        >
          {toTitleCase(section)}
        </Link>
      ))}
      <Link target="_blank" href="https://notes.d-sons.com/docs">
        Notes
      </Link>
    </nav>
  );
});

export default Navigation;
