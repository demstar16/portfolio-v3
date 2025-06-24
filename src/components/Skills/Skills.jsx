import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Skill from "../Skill";

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
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <button
          className={clsx(
            classes.button,
            activeIndex === 1 ? classes.active : {}
          )}
          onClick={() => setActiveIndex(1)}
        >
          Languages
        </button>
        <button
          className={clsx(
            classes.button,
            activeIndex === 2 ? classes.active : {}
          )}
          onClick={() => setActiveIndex(2)}
        >
          Frameworks
        </button>
        <button
          className={clsx(
            classes.button,
            activeIndex === 3 ? classes.active : {}
          )}
          onClick={() => setActiveIndex(3)}
        >
          Tools
        </button>
        <button
          className={clsx(
            classes.button,
            activeIndex === 4 ? classes.active : {}
          )}
          onClick={() => setActiveIndex(4)}
        >
          Concepts
        </button>
        <button
          className={clsx(
            classes.button,
            activeIndex === 5 ? classes.active : {}
          )}
          onClick={() => setActiveIndex(5)}
        >
          Low Code
        </button>
      </div>
      <div
        id="languages"
        className={activeIndex === 1 ? classes.skills : classes.hide}
      >
        <Skill imgSrc="src/images/bash.png" header="Bash" />
        <Skill imgSrc="src/images/js.png" header="JavaScript" />
        <Skill imgSrc="src/images/ts.png" header="TypeScript" />
        <Skill imgSrc="src/images/python.webp" header="Python" />
        <Skill imgSrc="src/images/java.png" header="Java" />
        <Skill imgSrc="src/images/lisp.png" header="Lisp" />
        <Skill imgSrc="src/images/lua.png" header="Lua" />
      </div>
      <div
        id="frameworks"
        className={activeIndex === 2 ? classes.skills : classes.hide}
      >
        <Skill imgSrc="src/images/react.png" header="React" />
        <Skill imgSrc="src/images/redux.png" header="Redux" />
        <Skill imgSrc="src/images/flask.webp" header="Flask" />
        <Skill imgSrc="src/images/tailwind.png" header="Tailwind" />
        <Skill
          imgSrc="src/images/styled-components.png"
          header="Styled Components"
        />
        <Skill imgSrc="src/images/jest.png" header="Jest" />
        <Skill imgSrc="src/images/vitest.png" header="Vitest" />
        <Skill imgSrc="src/images/socket-io.png" header="Socket.IO" />
        <Skill imgSrc="src/images/mui.png" header="MUI" />
        <Skill imgSrc="src/images/ramda.svg" header="Ramda" />
      </div>
      <div
        id="tools"
        className={activeIndex === 3 ? classes.skills : classes.hide}
      >
        <Skill imgSrc="src/images/docker.webp" header="Docker" />
        <Skill imgSrc="src/images/node.png" header="Node.js" />
        <Skill imgSrc="src/images/storybook.png" header="Storybook" />
        <Skill imgSrc="src/images/jira.svg" header="Jira" />
        <Skill imgSrc="src/images/postman.svg" header="Postman" />
        <Skill imgSrc="src/images/vite.png" header="Vite" />
        <Skill imgSrc="src/images/yarn.png" header="Yarn" />
        <Skill imgSrc="src/images/sqlite.png" header="SQLite" />
        <Skill imgSrc="src/images/npm.png" header="NPM" />
        <Skill imgSrc="src/images/eslint.png" header="ESLint" />
        <Skill imgSrc="src/images/prettier.png" header="Prettier" />
        <Skill imgSrc="src/images/aws.png" header="AWS" />
        <Skill imgSrc="src/images/azure.webp" header="Azure" />
        <Skill imgSrc="src/images/vim.png" header="VIM" />
        <Skill imgSrc="src/images/tmux.svg" header="tmux" />
      </div>
      <div
        id="concepts"
        className={activeIndex === 4 ? classes.skills : classes.hide}
      >
        <Skill imgSrc="src/images/tdd.Default" header="TDD" />
        <Skill imgSrc="src/images/oop.png" header="OOP" />
        <Skill
          imgSrc="src/images/cloud-computing.png"
          header="Cloud Computing"
        />
        <Skill imgSrc="src/images/clean-code.jpg" header="Clean Code" />
        <Skill imgSrc="src/images/ddd.jpg" header="Domain Driven Design" />
        <Skill imgSrc="src/images/clean-arch.jpg" header="Clean Architecture" />
        <Skill imgSrc="src/images/functional.png" header="Functional" />
        <Skill imgSrc="src/images/async.png" header="Asynchronous" />
      </div>
      <div
        id="low-code"
        className={activeIndex === 5 ? classes.skills : classes.hide}
      >
        <Skill imgSrc="src/images/power-automate.png" header="Power Automate" />
        <Skill imgSrc="src/images/power-apps.webp" header="Model Driven Apps" />
        <Skill imgSrc="src/images/power-apps.webp" header="Canvas Apps" />
        <Skill imgSrc="src/images/dataverse.png" header="Dataverse" />
        <Skill imgSrc="src/images/sharepoint.png" header="SharePoint" />
      </div>
    </div>
  );
});

export default Skills;
