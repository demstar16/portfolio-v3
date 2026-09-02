import { alpha } from "@mui/material";
import { withStyles } from "@mui/styles";
import clsx from "clsx";
import Wrapper from "../Wrapper";
import ProjectBox from "../ProjectBox";
import Header from "../Header";
import { useMemo, useState } from "react";
import ProjectModal from "../ProjectModal";
import Notes from "../../icons/Notes";
import projectData from "../../data/projects.json";

const NOTES_CALLOUT_KEY = "notesCalloutDismissed";
const PROJECTS_PER_PAGE = 6;

const allTags = [
  ...new Set(projectData.flatMap((p) => p.tags)),
].sort();

const Projects = withStyles((theme) => ({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "80%",
    width: "100%",
  },
  notesCallout: {
    position: "absolute",
    top: "3rem",
    left: "-10rem",
    width: "9rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1rem",
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    boxShadow: `0 8px 25px ${alpha(theme.palette.secondary.main, 0.2)}`,
    animation:
      "fadeInUp 0.6s ease-out backwards, floatBob 3s ease-in-out 0.6s infinite",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: `0 8px 30px ${alpha(theme.palette.secondary.main, 0.4)}`,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "1.5rem",
      right: "-0.65rem",
      width: 0,
      height: 0,
      borderTop: "0.5rem solid transparent",
      borderBottom: "0.5rem solid transparent",
      borderLeft: `0.65rem solid ${theme.palette.secondary.main}`,
    },
  },
  notesCalloutHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notesCalloutIcon: {
    width: "1.4rem",
    height: "1.4rem",
    color: theme.palette.secondary.main,
  },
  notesCalloutClose: {
    color: alpha(theme.palette.secondary.main, 0.6),
    fontSize: "1rem",
    lineHeight: "1",
    padding: "0.15rem",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  notesCalloutText: {
    fontSize: "0.85rem",
    lineHeight: "1.5",
    fontStyle: "italic",
  },
  notesCalloutLink: {
    color: theme.palette.secondary.main,
    fontWeight: "700",
    textDecoration: "underline",
  },
  "@media (max-width: 1700px)": {
    notesCallout: {
      display: "none",
    },
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
    marginBottom: "0.5rem",
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
    padding: "1rem",
  },
  projectWrapper: {
    animation: "fadeInUp 0.5s ease backwards",
  },
  projectPlaceholder: {
    width: "100%",
    aspectRatio: "16 / 8.55",
    visibility: "hidden",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "0.5rem",
    width: "100%",
  },
  pageButton: {
    position: "relative",
    minWidth: "2.25rem",
    height: "2.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: "0.95rem",
    color: alpha(theme.palette.secondary.main, 0.6),
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "50%",
      width: "0",
      height: "3px",
      backgroundColor: theme.palette.secondary.main,
      transform: "translateX(-50%)",
      transition: "width 0.3s ease",
      borderRadius: "2px 2px 0 0",
    },
    "&:hover": {
      color: alpha(theme.palette.secondary.main, 0.8),
      cursor: "pointer",
    },
    "&:hover::after": {
      width: "60%",
    },
  },
  pageButtonActive: {
    color: theme.palette.secondary.main,
    "&::after": {
      width: "60%",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "default",
    },
  },
  pageButtonDisabled: {
    opacity: 0.3,
    pointerEvents: "none",
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
    },
    projectPlaceholder: {
      aspectRatio: "16 / 9",
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
  const [currentPage, setCurrentPage] = useState(1);
  const [showNotesCallout, setShowNotesCallout] = useState(
    () => !localStorage.getItem(NOTES_CALLOUT_KEY)
  );

  const dismissNotesCallout = () => {
    localStorage.setItem(NOTES_CALLOUT_KEY, "true");
    setShowNotesCallout(false);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  );

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    const pageItems = filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
    const placeholderCount = PROJECTS_PER_PAGE - pageItems.length;
    return [
      ...pageItems,
      ...Array.from({ length: placeholderCount }, (_, i) => ({
        placeholder: true,
        key: `placeholder-${i}`,
      })),
    ];
  }, [filteredProjects, currentPage]);

  return (
    <Wrapper
      id="projects"
      style={{
        justifyContent: "flex-start",
        paddingTop: "3.5rem",
        paddingBottom: "2rem",
      }}
    >
      <div className={classes.container}>
        {showNotesCallout && (
          <div className={classes.notesCallout}>
            <div className={classes.notesCalloutHeader}>
              <Notes className={classes.notesCalloutIcon} />
              <span
                className={classes.notesCalloutClose}
                onClick={dismissNotesCallout}
                role="button"
                aria-label="Dismiss"
              >
                ×
              </span>
            </div>
            <p className={classes.notesCalloutText}>
              Some of these projects have full write-ups over on my{" "}
              <a
                href="https://notes.d-sons.com"
                className={classes.notesCalloutLink}
              >
                Notes
              </a>{" "}
              site.
            </p>
          </div>
        )}
        <Header className={classes.header}>Projects</Header>
        <div className={classes.filterBar}>
          <button
            className={clsx(
              classes.tag,
              selectedTags.length === 0 && classes.tagActive
            )}
            onClick={() => {
              setSelectedTags([]);
              setCurrentPage(1);
            }}
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
          {paginatedProjects.map((project, index) =>
            project.placeholder ? (
              <div
                key={project.key}
                className={classes.projectPlaceholder}
                aria-hidden="true"
              />
            ) : (
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
            )
          )}
        </div>
        {totalPages > 1 && (
          <div className={classes.pagination}>
            <button
              className={clsx(
                classes.pageButton,
                currentPage === 1 && classes.pageButtonDisabled
              )}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  className={clsx(
                    classes.pageButton,
                    currentPage === page && classes.pageButtonActive
                  )}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            )}
            <button
              className={clsx(
                classes.pageButton,
                currentPage === totalPages && classes.pageButtonDisabled
              )}
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        )}
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
