import React from "react";
import { projectDetails } from "./projects";
import styles from "../../styles/Home.module.css";

export const ProjectCard = () => {
  return (
    <div className={styles.projects_wrapper}>
      {projectDetails.map((data, index) => {
        return (
          <div className={styles.project} key={index}>
            {/* TODO:replace with image */}

            <div className={styles.project_image}></div>
            <div className={styles.project_header}>
              <h3 className={styles.project_name}>{data.name}</h3>{" "}
              <div className={styles.live_link}>
                <p>
                  <a href={data.url}>Live</a>
                </p>{" "}
                {/* <i>
                  <img src="/arrow.svg" />
                </i> */}
              </div>
            </div>
            <p>{data.details}</p>
            <div className={styles.project_tags}>
              {data.tags.map((tag, index) => (
                <div className={styles.tag} key={index}>
                  {tag}
                </div>
              ))}
            </div>
            <a href={data.SourceCode}>Source code</a>
          </div>
        );
      })}
    </div>
  );
};
