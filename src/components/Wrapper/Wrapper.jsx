import { withStyles } from "@mui/styles";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const Wrapper = withStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    paddingTop: "90px",
    paddingBottom: "90px",
    boxSizing: "border-box",
    scrollMarginTop: "80px",
  },
  animated: {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  "@media (max-width: 768px)": {
    root: {
      minHeight: "auto",
      paddingTop: "5rem",
      paddingBottom: "3rem",
    },
  },
}))(({ classes, className, children, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        classes.root,
        classes.animated,
        isVisible && classes.visible,
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
});

export default Wrapper;
