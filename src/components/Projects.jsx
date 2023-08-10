import React from "react";
import Project from "./Project";
import p1 from "@/assets/p1.jpg";
import styles from "./styles/projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container} id="projects">
      <Project
        className={styles.projects}
        imgUrl={p1}
        imgAlt={"project 1"}
        key={Math.random()}
        heading="Travel Website"
        text="Best Traveling website for your project.Create a beautiful website for your client"
      />{" "}
      <Project
        className={styles.projects}
        imgUrl={p1}
        imgAlt={"project 1"}
        key={Math.random()}
        heading="Medical website"
        text="Best Traveling website for your project.Create a beautiful website for your client"
      />{" "}
      <Project
        className={styles.projects}
        imgUrl={p1}
        imgAlt={"project 1"}
        key={Math.random()}
        heading="Travel Website"
        text="Best Traveling website for your project.Create a beautiful website for your client"
      />{" "}
      <Project
        className={styles.projects}
        imgUrl={p1}
        imgAlt={"project 1"}
        key={Math.random()}
        heading="Travel Website"
        text="Best Traveling website for your project.Create a beautiful website for your client"
      />{" "}
      <Project
        className={styles.projects}
        imgUrl={p1}
        imgAlt={"project 1"}
        key={Math.random()}
        heading="Travel Website"
        text="Best Traveling website for your project.Create a beautiful website for your client"
      />
    </div>
  );
}
