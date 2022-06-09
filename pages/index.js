import Head from "next/head";
import Image from "next/image";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A software engineer portfolio for Joseph Brisibe that showcases his achievements and skills at building modern software solutions to solve real world problems."
        ></meta>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <title>Brisibe Joseph</title>
      </Head>

      <div className={styles.content_wrapper}>
        {/* box bg animation */}
        <div className={styles.area}>
          <ul className={styles.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.hero_section}>
          <div className={styles.hero_section_info}>
            <h1>
              <b>JOSEPH BRISIBE</b>
              <span>.</span>{" "}
            </h1>
            <br />
            <p>
              A Software Engineer based in Lagos, Nigeria. I design and build
              for the web.
              {/* &#128578; */}
            </p>

            <div className={styles.social_section}>
              <div className={styles.social_icon}>
                <a
                  href="https://github.com/brisibe"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/github.svg" alt="github" />
                </a>
              </div>
              <div className={styles.social_icon}>
                <a
                  href="https://www.linkedin.com/in/joseph-brisibe-416a03171/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/linkedin.svg" alt="github" />
                </a>
              </div>
              <div className={styles.social_icon}>
                <a
                  href="https://twitter.com/callmijesse"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="/twitter.svg" alt="github" />
                </a>
              </div>
              <div className={styles.social_resume}>
                <a href="https://drive.google.com/file/d/1Ty3Uzxv7707SaNzdi6N8r032SgOQQp1H/view?usp=sharing">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3>About me</h3>

        <div className={styles.about_wrapper} id="about">
          <div className={styles.about_info}>
            <div className={styles.about_image_wrapper}>
              <div className={styles.about_image}>
                <img
                  src="/me.jpg"
                  className={styles.about_photo}
                  alt="Brisibe Joseph Biography Photo"
                />
              </div>
            </div>
            <div className={styles.about_details}>
              <p>
                Currently building cool stuffs at{" "}
                <b className={styles.skills}>Conclase</b>.{/* <br /> */}
                Part of the team responsible for performance, security and
                scaling client-side products. 
//                
                <br />
                <p>
                  Studied Computer Engineering at Houdegbe North American
                  University
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.project_section} id="projects">
          <h2>Projects</h2>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
