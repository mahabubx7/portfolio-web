import React from "react";
import Project from "./Project";
import styles from "./styles/projects.module.css";
import dataJson from "./data.json";

export default function Projects() {
  const { projects } = dataJson;
  return (
    <div className={styles.container} id="projects">
      {projects.map((project) =>
        project.featured ? (
          <Project
            className={styles.projects}
            imgUrl={project.image}
            imgAlt={project.name}
            key={Math.random()}
            heading={project.name}
            text={project.description}
            preview={project.preview}
            details={project.code}
            tags={project.tags}
          />
        ) : null,
      )}
    </div>
  );
}
