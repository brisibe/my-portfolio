import React from "react";
import { projectDetails } from "./projects";
import styles from "../../styles/Home.module.css";

export const ProjectCard = () => {
  return (
    <div className={styles.projects_wrapper}>
      {projectDetails.map((data, index) => {
        return (
          <div className={styles.project} key={index}>
            <img className={styles.project_image} src={data.imageUrl} />
            <div className={styles.project_header}>
              <a href={data.url}>
                {" "}
                <h3 className={styles.project_name}>{data.name}</h3>
              </a>{" "}
              <div className={styles.live_link}>
                <p>
                  <a href={data.url}> Link</a>
                </p>{" "}
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
            {data.isPublic && <a href={data.SourceCode}>Source code</a>}
          </div>
        );
      })}
    </div>
  );
};
