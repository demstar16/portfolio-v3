import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import Wrapper from "../Wrapper";
import ProjectBox from "../ProjectBox";
import Header from "../Header";
import { useMemo, useState } from "react";
import ProjectModal from "../ProjectModal";
import projectData from "../../data/projects.json";

const allTags = [
  ...new Set(projectData.flatMap((p) => p.tags)),
].sort();

const Projects = withStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "80%",
    width: "100%",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "0.25rem",
    animation: "slideInLeft 0.6s ease-out",
  },
  filterBar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
    width: "100%",
  },
  tag: {
    padding: "6px 14px",
    borderRadius: "20px",
    border: `1.5px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
    backgroundColor: "transparent",
    color: alpha(theme.palette.secondary.main, 0.7),
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.8rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.25s ease",
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  },
  tagActive: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.85),
      color: theme.palette.primary.main,
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    width: "100%",
    height: "70vh",
    overflowY: "auto",
    overflowX: "hidden",
    padding: "1rem",
  },
  projectWrapper: {
    animation: "fadeInUp 0.5s ease backwards",
  },
  "@media (max-width: 1200px)": {
    grid: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  "@media (max-width: 768px)": {
    container: {
      maxWidth: "90%",
    },
    grid: {
      gridTemplateColumns: "1fr",
      height: "auto",
    },
    tag: {
      fontSize: "0.75rem",
      padding: "5px 10px",
    },
  },
}))(({ classes }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(
    () =>
      selectedTags.length === 0
        ? projectData
        : projectData.filter((p) =>
            p.tags.some((t) => selectedTags.includes(t))
          ),
    [selectedTags]
  );

  return (
    <Wrapper id="projects">
      <div className={classes.container}>
        <Header className={classes.header}>Projects</Header>
        <div className={classes.filterBar}>
          <button
            className={clsx(
              classes.tag,
              selectedTags.length === 0 && classes.tagActive
            )}
            onClick={() => setSelectedTags([])}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={clsx(
                classes.tag,
                selectedTags.includes(tag) && classes.tagActive
              )}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className={classes.grid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={classes.projectWrapper}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectBox
                header={project.title}
                imgSrc={project.imgSrc}
                description={project.shortDescription}
                onClick={() => {
                  setShowModal(true);
                  setModalContent(project);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {showModal ? (
        <ProjectModal setShowModal={setShowModal} project={modalContent} />
      ) : (
        <></>
      )}
    </Wrapper>
  );
});

export default Projects;
