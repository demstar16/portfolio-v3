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
        imgSrc: "static/images/bash.png",
      },
      {
        header: "JavaScript",
        imgSrc: "static/images/js.png",
      },
      {
        header: "TypeScript",
        imgSrc: "static/images/ts.png",
      },
      {
        header: "Python",
        imgSrc: "static/images/python.webp",
      },
      {
        header: "Java",
        imgSrc: "static/images/java.png",
      },
      {
        header: "Lisp",
        imgSrc: "static/images/lisp.png",
      },
      {
        header: "Lua",
        imgSrc: "static/images/lua.png",
      },
    ],
  },
  {
    title: "libraries",
    skills: [
      {
        header: "React",
        imgSrc: "static/images/react.png",
      },
      {
        header: "Redux",
        imgSrc: "static/images/redux.png",
      },
      { header: "Next JS", imgSrc: "static/images/nextjs.svg" },
      {
        header: "Flask",
        imgSrc: "static/images/flask.webp",
      },
      {
        header: "Tailwind",
        imgSrc: "static/images/tailwind.png",
      },
      {
        header: "Styled Components",
        imgSrc: "static/images/styled-components.png",
      },
      {
        header: "Jest",
        imgSrc: "static/images/jest.png",
      },
      {
        header: "Vitest",
        imgSrc: "static/images/vitest.png",
      },
      {
        header: "Socket.IO",
        imgSrc: "static/images/socket-io.png",
      },
      {
        header: "MUI",
        imgSrc: "static/images/mui.png",
      },
      {
        header: "Ramda",
        imgSrc: "static/images/ramda.svg",
      },
    ],
  },
  {
    title: "tools",
    skills: [
      {
        header: "Docker",
        imgSrc: "static/images/docker.webp",
      },
      {
        header: "Node.JS",
        imgSrc: "static/images/node.png",
      },
      {
        header: "AWS",
        imgSrc: "static/images/aws.png",
      },
      {
        header: "Azure",
        imgSrc: "static/images/azure.webp",
      },
      {
        header: "Storybook",
        imgSrc: "static/images/storybook.png",
      },
      { header: "Turbo", imgSrc: "static/images/turbo.png" },
      {
        header: "Jira",
        imgSrc: "static/images/jira.svg",
      },
      {
        header: "Postman",
        imgSrc: "static/images/postman.svg",
      },
      {
        header: "Vite",
        imgSrc: "static/images/vite.png",
      },
      {
        header: "Yarn",
        imgSrc: "static/images/yarn.png",
      },
      {
        header: "SQLite",
        imgSrc: "static/images/sqlite.png",
      },
      {
        header: "NPM",
        imgSrc: "static/images/npm.png",
      },
      {
        header: "ESLint",
        imgSrc: "static/images/eslint.png",
      },
      {
        header: "Prettier",
        imgSrc: "static/images/prettier.png",
      },
      {
        header: "Vim",
        imgSrc: "static/images/vim.png",
      },
      {
        header: "tmux",
        imgSrc: "static/images/tmux.svg",
      },
    ],
  },
  {
    title: "concepts",
    skills: [
      {
        header: "TDD",
        imgSrc: "static/images/tdd.Default",
      },
      {
        header: "OOP",
        imgSrc: "static/images/oop.png",
      },
      {
        header: "Cloud Computing",
        imgSrc: "static/images/cloud-computing.png",
      },
      {
        header: "Clean Code",
        imgSrc: "static/images/clean-code.jpg",
      },
      {
        header: "Clean Architecture",
        imgSrc: "static/images/clean-arch.jpg",
      },
      {
        header: "Domain Driven Design",
        imgSrc: "static/images/ddd.jpg",
      },
      {
        header: "Functional",
        imgSrc: "static/images/functional.png",
      },
      {
        header: "Asynchronous",
        imgSrc: "static/images/async.png",
      },
    ],
  },
  {
    title: "low code",
    skills: [
      {
        header: "Power Automate",
        imgSrc: "static/images/power-automate.png",
      },
      {
        header: "Model Driven Apps",
        imgSrc: "static/images/power-apps.webp",
      },
      {
        header: "Canvas Apps",
        imgSrc: "static/images/power-apps.webp",
      },
      {
        header: "Dataverse",
        imgSrc: "static/images/dataverse.png",
      },
      {
        header: "SharePoint",
        imgSrc: "static/images/sharepoint.png",
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
