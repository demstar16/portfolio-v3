import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import Header from "../Header";

const workExperienceData = [
  {
    company: "Ingentive",
    date: "Nov 2025 - May 2026",
    description: `At Ingentive, a London-based Microsoft Inner Circle partner, I delivered an end-to-end Canvas App with an admin Model Driven App component, integrated with Power BI reporting and backed by Dataverse and Power Automate. Designed the security model using Entra ID and Dataverse security principles. Conducted data integrations and migrations into Dataverse via Dataflows, and managed releases through pipelines and environment-aware solutions as part of Application Lifecycle Management (ALM). Beyond development, I contributed to QA testing, test script authoring, deployment guides, high-level documentation, project estimations, and client demonstrations to support adoption.`,
  },
  {
    company: "EvergreenOps",
    date: "Feb 2025 - Aug 2025",
    description: `Contracted through EvergreenOps to Sandfire, a copper mining company, working within the Microsoft Power Platform ecosystem. Supported and enhanced Canvas Power Apps, collaborated with product owners to troubleshoot issues and deliver new features, and developed a Model Driven App for an internal project. Deepened expertise in Power Automate, SharePoint, Dataverse, and Entra ID security practices while strengthening client-facing communication and stakeholder management skills.`,
  },
  {
    company: "JourneyOne",
    subExperiences: [
      {
        title: "Graduate Program",
        date: "Feb 2024 - Nov 2024",
        description: `An intensive graduate program where I studied SICP with Scheme (from the textbook), Clean Code, Clean Architecture, and Domain Driven Design, and delivered lightning talks on topics I'd researched myself. Went deep on JavaScript, Bash, Vim, Linux, Webpack, and CSS, picked up functional programming with Ramda, and built a strong foundation in Test Driven Development — skills I still lean on daily.`,
      },
      {
        title: "Jibility",
        date: "Nov 2024 - Feb 2025",
        description: `Shipped a couple of features inside a genuinely well-engineered, functional-first codebase built with Ramda. Rolled out i18n support across the product and led a restyle and re-theme using MUI, getting hands-on with the discipline that comes with maintaining a mature codebase at scale.`,
      },
      {
        title: "Sandfire",
        date: "Jun 2026 - Jul 2026",
        description: `Led a more ambitious AI initiative for Sandfire, designing and building three proof-of-concept agents across Agent Builder, Copilot Studio, and Microsoft Foundry to explore what agentic AI could do for their business, and provide the most value. It was really rewarding to spin up these PoC's in such a short time and see the genuine curiosity and excitement from the stakeholders as to what these agents can do for them.`,
      },
      {
        title: "CSIRO",
        date: "Aug 2026 - Sep 2026",
        description: `Engineered cost and budgeting controls for CSIRO's quantum computing AWS Hub, giving them tighter governance and security over a genuinely cutting-edge workload. Worked hands-on with Landing Zone Accelerator, DynamoDB, S3, AWS Braket, Lambda, API Gateway, Control Tower, and Cognito to get there.`,
      },
    ],
  },
  {
    company: "GeneS",
    date: "Dec 2021 - Apr 2022",
    description: `Joined a remote team at GeneS, a bioinformatics startup, to translate performance-critical Python code into Rust for faster data processing. Researched and evaluated Rust libraries for scientific computing and presented findings to guide technical decisions. Gained hands-on systems programming experience while adapting to an unfamiliar domain.`,
  },
];

const WorkExperience = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    minWidth: 0,
    backgroundColor: theme.palette.primary.main,
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    padding: "1rem",
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: `0 8px 30px ${alpha(theme.palette.secondary.main, 0.1)}`,
    },
  },
  experience: {
    display: "flex",
    height: "22rem",
    minHeight: 0,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: `2px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
    paddingRight: "0.5rem",
    overflowY: "auto",
    scrollbarGutter: "stable",
    minHeight: 0,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  subButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    animation: "staggerFadeIn 0.3s ease",
  },
  subButton: {
    width: "11rem",
    whiteSpace: "nowrap",
    textAlign: "left",
    padding: "0.5rem 1rem 0.5rem 2rem",
    cursor: "pointer",
    fontSize: "0.9rem",
    opacity: 0.7,
    borderRadius: "6px 0 0 6px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    "&:hover": {
      opacity: 1,
      backgroundColor: alpha(theme.palette.secondary.main, 0.05),
    },
  },
  subActive: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    opacity: 1,
    cursor: "auto",
    backgroundColor: alpha(theme.palette.secondary.main, 0.08),

    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: alpha(theme.palette.secondary.main, 0.08),
    },
  },
  button: {
    width: "10rem",
    textAlign: "left",
    padding: "1rem 1rem",
    cursor: "pointer",
    position: "relative",
    borderRadius: "6px 0 0 6px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    "&::before": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      width: "3px",
      height: "0",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "0 2px 2px 0",
      transition: "height 0.3s ease",
    },

    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.8),
      backgroundColor: alpha(theme.palette.secondary.main, 0.05),
    },

    "&:hover::before": {
      height: "60%",
    },
  },
  content: {
    flex: "1",
    minWidth: 0,
    minHeight: 0,
    overflowY: "auto",
    scrollbarGutter: "stable",
  },
  date: {
    padding: "0.5rem 2rem 0",
    fontSize: "0.9rem",
    fontWeight: "600",
    opacity: 0.7,
    animation: "textFadeIn 0.4s ease",
  },
  text: {
    padding: "0.3rem 2rem 0.5rem",
    fontStyle: "italic",
    animation: "textFadeIn 0.4s ease",
    lineHeight: "1.6",
    fontSize: "1.1rem",
  },
  active: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    cursor: "auto",
    backgroundColor: alpha(theme.palette.secondary.main, 0.08),

    "&::before": {
      height: "70%",
    },

    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: alpha(theme.palette.secondary.main, 0.08),
    },
  },
  "@media (max-width: 768px)": {
    root: {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    experience: { flexDirection: "column", height: "26rem" },
    buttons: {
      flexDirection: "row",
      borderRight: "none",
      borderBottom: `2px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
      paddingRight: "0",
      paddingBottom: "0.5rem",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
    },
    buttonGroup: {
      width: "auto",
    },
    subButton: {
      width: "auto",
      textAlign: "center",
      padding: "0.4rem 0.8rem",
    },
    button: {
      textAlign: "center",
      width: "auto",
      padding: "0.5rem 1rem",
      borderRadius: "6px 6px 0 0",
      "&::before": {
        display: "none",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "0",
        height: "3px",
        backgroundColor: theme.palette.secondary.main,
        transition: "width 0.3s ease",
      },
      "&:hover::after": {
        width: "60%",
      },
    },
    active: {
      "&::after": {
        width: "80%",
      },
    },
    text: {
      padding: "0.5rem 0.7rem",
      marginTop: "0.5rem",
    },
  },
}))(({ classes }) => {
  const [activeCompany, setActiveCompany] = useState(
    workExperienceData[0].company,
  );
  const [activeSub, setActiveSub] = useState(
    workExperienceData[0].subExperiences?.[0].title ?? null,
  );

  const activeCompanyData = workExperienceData.find(
    (workExperience) => workExperience.company === activeCompany,
  );
  const { date, description } = activeCompanyData.subExperiences
    ? activeCompanyData.subExperiences.find((sub) => sub.title === activeSub)
    : activeCompanyData;

  return (
    <div className={classes.root}>
      <Header>Professional Experience</Header>
      <div className={classes.experience}>
        <div className={classes.buttons}>
          {workExperienceData.map((workExperience) => (
            <div key={workExperience.company} className={classes.buttonGroup}>
              <button
                className={clsx(
                  classes.button,
                  activeCompany === workExperience.company
                    ? classes.active
                    : {},
                )}
                onClick={() => {
                  setActiveCompany(workExperience.company);
                  setActiveSub(
                    workExperience.subExperiences?.[0].title ?? null,
                  );
                }}
              >
                {workExperience.company}
              </button>
              {workExperience.subExperiences &&
                activeCompany === workExperience.company && (
                  <div className={classes.subButtons}>
                    {workExperience.subExperiences.map((sub) => (
                      <button
                        key={sub.title}
                        className={clsx(
                          classes.subButton,
                          activeSub === sub.title ? classes.subActive : {},
                        )}
                        onClick={() => setActiveSub(sub.title)}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
        <div key={`${activeCompany}-${activeSub}`} className={classes.content}>
          <div className={classes.date}>{date}</div>
          <div className={classes.text}>{description}</div>
        </div>
      </div>
    </div>
  );
});

export default WorkExperience;
