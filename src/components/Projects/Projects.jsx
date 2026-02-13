import { withStyles } from "@mui/styles";
import Wrapper from "../Wrapper";
import ProjectBox from "../ProjectBox";
import Header from "../Header";
import { useState } from "react";
import ProjectModal from "../ProjectModal";
import projectData from "../../data/projects.json";

const Projects = withStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "80%",
    width: "100%",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "1rem",
    animation: "slideInLeft 0.6s ease-out",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    width: "100%",
    maxHeight: "70vh",
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
      maxHeight: "none",
    },
  },
}))(({ classes }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  return (
    <Wrapper id="projects">
      <div className={classes.container}>
        <Header className={classes.header}>Projects</Header>
        <div className={classes.grid}>
          {projectData.map((project, index) => (
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
