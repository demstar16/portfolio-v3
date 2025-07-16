import { withStyles } from "@mui/styles";
import Wrapper from "../Wrapper";
import clsx from "clsx";
import ProjectBox from "../ProjectBox";
import Header from "../Header";
import { useState } from "react";
import ProjectModal from "../ProjectModal";

const projectData = [
  {
    title: "Connect4",
    description:
      "A modern web-based Connect4 game deployed on AWS and built with TypeScript, React, Next.js, Turbo, Vitest, and Storybook. It features a responsive UI, clean component architecture, and smooth gameplay. Developed with a monorepo-first approach using Turbo for efficient builds and caching, the project emphasizes test-driven development and visual documentation for scalable, high-performance front-end engineering.",
    shortDescription:
      "A modern Connect4 game built with TypeScript, React, and Next.js in a Turbo-powered monorepo, featuring smooth gameplay, responsive UI, and test-driven development—all deployed on AWS.",
    techStack: [
      "ts.png",
      "react.png",
      "vitest.png",
      "turbo.png",
      "nextjs.svg",
      "storybook.png",
      "aws.png",
    ],
    imgSrc: "static/images/connect4-game.png",
    repository: "https://github.com/dempseyt/connect4",
    demo: "http://dempsey-connect-4-bucket.s3-website-ap-southeast-2.amazonaws.com/",
  },
  {
    title: "Triumph",
    description:
      "Triumph is a strategic terminal game developed in Python, leveraging matplotlib for dynamic visualisation, NGINX for serving game assets, and Bayesian mathematics to simulate persuasion and belief shifts within a population. Set in a fictional political landscape, players choose to side with either the Government or the Resistance, each aiming to win public support through carefully chosen dialogue and strategic moves. Every interaction influences probabilistic outcomes, with the government wielding tools like surveillance and covert operations. The project blends game theory, narrative design, and statistical modelling into a unique, text-based gameplay experience.",
    shortDescription:
      "Triumph is a CLI political wargame built with Python, and Bayesian modelling, where players shape public opinion through strategic dialogue as either the Government or the Resistance.",
    techStack: ["python.webp"],
    imgSrc: "static/images/triumph.png",
    repository: "https://github.com/demstar16/triumph",
    demo: "",
  },
  {
    title: "Adam Sandler Audio Wordle",
    description:
      "Web game where players listen to a short clip and guess which Adam Sandler movie it’s from. Built with Flask, Python, and JavaScript, the game uses cookies and local storage to track user progress and enforce daily challenge limits. It blends nostalgia with logic, offering a surprisingly strategic experience for anyone who’s seen Happy Gilmore one too many times.",
    shortDescription:
      "A wordle clone created with Flask where you have to guess which movie an Adam Sandler movie audio clip is from.",
    techStack: ["python.webp", "flask.webp", "js.png"],
    imgSrc: "static/images/adam-sandler.png",
    repository: "https://github.com/demstar16/adam-sandler-audio-wordle",
    demo: "",
  },
  {
    title: "Project Bootstart",
    description:
      "Project Kickstart is a command-line tool built with JavaScript that streamlines the creation of new projects by scaffolding boilerplate code and auto-configuring essential .dotfiles. Designed to save time and eliminate repetitive setup tasks, it handles everything from folder structure to initial config for tools like ESLint, Prettier, and Git—so you can jump straight into writing code instead of setting it up.",
    shortDescription:
      "CLI tool to kickstart projects, avoiding initial set up and config hassles.",
    techStack: ["js.png"],
    imgSrc: "static/images/template-cli.png",
    repository: "https://github.com/demstar16/template-cli",
    demo: "",
  },
  {
    title: "TDD Modules",
    description:
      "A collection of Javascript, Ramda, and Redux functions re-created under Test-Driven Development principles during my time in the JourneyOne Graduate Program. This was a great approach for learning TDD, the functions themselves, good test coverage, working backwards, and a unique but effective way of thinking and development.",
    shortDescription:
      "A collection of functions created under test, for learning both TDD and complex functions in-depth.",
    techStack: ["jest.png", "js.png", "ts.png", "ramda.svg", "redux.png"],
    imgSrc: "static/images/tdd.png",
    repository: "https://github.com/demstar16/tdd-modules",
    demo: "",
  },
];

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
      maxWidth: "100%",
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
