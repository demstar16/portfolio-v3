import { withStyles } from "@mui/styles";
import Wrapper from "../Wrapper";
import clsx from "clsx";
import ProjectBox from "../ProjectBox";
import Header from "../Header";
import { useState } from "react";
import ProjectModal from "../ProjectModal";
import projectData from "../../data/projects.json";

const Projects = withStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    maxWidth: "80%",
    flexWrap: "wrap",
  },
  header: {
    fontSize: "2rem",
  },
  projects: {},
  "@media (max-width: 768px)": {
    root: {
      maxWidth: "90%",
    },
  },
}))(({ classes }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  return (
    <Wrapper id="projects">
      <Header className={classes.header}>Projects</Header>
      <div className={clsx(classes.root)}>
        {projectData.map((project) => (
          <ProjectBox
            key={project.title}
            header={project.title}
            imgSrc={project.imgSrc}
            description={project.shortDescription}
            onClick={() => {
              setShowModal(true);
              setModalContent(project);
            }}
          />
        ))}
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
