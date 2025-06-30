import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Skill from "../Skill";
import toTitleCase from "../../utilities/toTitleCase";

const skillsData = [
  {
    title: "languages",
    skills: [
      {
        header: "Bash",
        imgSrc: "src/images/bash.png",
      },
      {
        header: "JavaScript",
        imgSrc: "src/images/js.png",
      },
      {
        header: "TypeScript",
        imgSrc: "src/images/ts.png",
      },
      {
        header: "Python",
        imgSrc: "src/images/python.webp",
      },
      {
        header: "Java",
        imgSrc: "src/images/java.png",
      },
      {
        header: "Lisp",
        imgSrc: "src/images/lisp.png",
      },
      {
        header: "Lua",
        imgSrc: "src/images/lua.png",
      },
    ],
  },
  {
    title: "libraries",
    skills: [
      {
        header: "React",
        imgSrc: "src/images/react.png",
      },
      {
        header: "Redux",
        imgSrc: "src/images/redux.png",
      },
      { header: "Next JS", imgSrc: "src/images/nextjs.svg" },
      {
        header: "Flask",
        imgSrc: "src/images/flask.webp",
      },
      {
        header: "Tailwind",
        imgSrc: "src/images/tailwind.png",
      },
      {
        header: "Styled Components",
        imgSrc: "src/images/styled-components.png",
      },
      {
        header: "Jest",
        imgSrc: "src/images/jest.png",
      },
      {
        header: "Vitest",
        imgSrc: "src/images/vitest.png",
      },
      {
        header: "Socket.IO",
        imgSrc: "src/images/socket-io.png",
      },
      {
        header: "MUI",
        imgSrc: "src/images/mui.png",
      },
      {
        header: "Ramda",
        imgSrc: "src/images/ramda.svg",
      },
    ],
  },
  {
    title: "tools",
    skills: [
      {
        header: "Docker",
        imgSrc: "src/images/docker.webp",
      },
      {
        header: "Node.JS",
        imgSrc: "src/images/node.png",
      },
      {
        header: "AWS",
        imgSrc: "src/images/aws.png",
      },
      {
        header: "Azure",
        imgSrc: "src/images/azure.webp",
      },
      {
        header: "Storybook",
        imgSrc: "src/images/storybook.png",
      },
      { header: "Turbo", imgSrc: "src/images/turbo.png" },
      {
        header: "Jira",
        imgSrc: "src/images/jira.svg",
      },
      {
        header: "Postman",
        imgSrc: "src/images/postman.svg",
      },
      {
        header: "Vite",
        imgSrc: "src/images/vite.png",
      },
      {
        header: "Yarn",
        imgSrc: "src/images/yarn.png",
      },
      {
        header: "SQLite",
        imgSrc: "src/images/sqlite.png",
      },
      {
        header: "NPM",
        imgSrc: "src/images/npm.png",
      },
      {
        header: "ESLint",
        imgSrc: "src/images/eslint.png",
      },
      {
        header: "Prettier",
        imgSrc: "src/images/prettier.png",
      },
      {
        header: "Vim",
        imgSrc: "src/images/vim.png",
      },
      {
        header: "tmux",
        imgSrc: "src/images/tmux.svg",
      },
    ],
  },
  {
    title: "concepts",
    skills: [
      {
        header: "TDD",
        imgSrc: "src/images/tdd.Default",
      },
      {
        header: "OOP",
        imgSrc: "src/images/oop.png",
      },
      {
        header: "Cloud Computing",
        imgSrc: "src/images/cloud-computing.png",
      },
      {
        header: "Clean Code",
        imgSrc: "src/images/clean-code.jpg",
      },
      {
        header: "Clean Architecture",
        imgSrc: "src/images/clean-arch.jpg",
      },
      {
        header: "Domain Driven Design",
        imgSrc: "src/images/ddd.jpg",
      },
      {
        header: "Functional",
        imgSrc: "src/images/functional.png",
      },
      {
        header: "Asynchronous",
        imgSrc: "src/images/async.png",
      },
    ],
  },
  {
    title: "low code",
    skills: [
      {
        header: "Power Automate",
        imgSrc: "src/images/power-automate.png",
      },
      {
        header: "Model Driven Apps",
        imgSrc: "src/images/power-apps.webp",
      },
      {
        header: "Canvas Apps",
        imgSrc: "src/images/power-apps.webp",
      },
      {
        header: "Dataverse",
        imgSrc: "src/images/dataverse.png",
      },
      {
        header: "SharePoint",
        imgSrc: "src/images/sharepoint.png",
      },
    ],
  },
];

const Skills = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "75vw",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    height: "3rem",
  },
  button: {
    flex: "1",
    height: "100%",
    fontWeight: "700",
    fontSize: "1.3rem",
    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.5),
      cursor: "pointer",
    },
  },
  skills: {
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    gap: "2rem",
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    padding: "1.5rem",
    maxHeight: "15rem",
    scrollBehavior: "smooth",
    width: "100%",
    WebkitOverflowScrolling: "touch",
  },
  skill: {
    color: theme.palette.secondary.main,
  },
  active: {
    borderTop: `4px solid ${theme.palette.secondary.main}`,
    borderRight: `4px solid ${theme.palette.secondary.main}`,
    borderLeft: `4px solid ${theme.palette.secondary.main}`,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "default",
    },
  },
  hide: {
    display: "none",
  },
}))(({ classes }) => {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        {skillsData.map((section) => (
          <button
            className={clsx(
              classes.button,
              activeTab === section.title ? classes.active : {},
            )}
            onClick={() => setActiveTab(section.title)}
          >
            {toTitleCase(section.title)}
          </button>
        ))}
      </div>
      {skillsData.map((section) => (
        <div
          id={section.title}
          className={
            activeTab === section.title ? classes.skills : classes.hide
          }
        >
          {section.skills.map((skill) => (
            <Skill imgSrc={skill.imgSrc} header={skill.header} />
          ))}
        </div>
      ))}
    </div>
  );
});

export default Skills;
