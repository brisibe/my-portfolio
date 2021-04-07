import Head from "next/head";
import Image from "next/image";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { Nav } from "../components/Navbar/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A fullstack software developer portfolio built on Next.js"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <title>Brisibe's Software Developer Portfolio</title>
      </Head>

      <Nav />

      <div className={styles.content_wrapper}>
        <div className={styles.hero_section}>
          <div className={styles.hero_section_info}>
            <h1>
              Hi, I'm <b>Joseph</b>,<br /> A fullstack developer based in Lagos,
              Nigeria. I design and build web solutions that are user friendly.
            </h1>

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
              <div className={styles.social_icon}>
                <a href="mailto:brisibejoseph1@gmail.com">
                  <img src="/email.svg" alt="github" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.project_section} id="projects">
          <h2>Projects</h2>
          <ProjectCard />
        </div>

        <div className={styles.about_wrapper}>
          <h3>About</h3>
          <div className={styles.about_info}>
            <div className={styles.about_image_wrapper}>
              <i className={`${styles.image_icons} ${styles.triangle}`}>
                <img src="/triangle.svg" alt="triangle" />{" "}
              </i>
              <i className={`${styles.image_icons} ${styles.orange}`}>
                <img src="/orange-circle.svg" alt="circle" />
              </i>
              <i className={`${styles.image_icons} ${styles.blue_circle}`}>
                <img src="/blue-circle.svg" alt="circle" />
              </i>
              <i className={`${styles.image_icons} ${styles.blue_triangle}`}>
                <img
                  className={styles.image}
                  src="/blue-triangle.svg"
                  alt="triangle"
                />
              </i>

              <div className={styles.about_image}>
                {" "}
                <Image
                  src="/img.jpg"
                  width={280}
                  height={280}
                  quality={100}
                  alt="A portrait image of Joseph Brisibe"
                />
              </div>
            </div>
            <div className={styles.about_details}>
              <p>
                I am just trying to make it in this life, if we sleep with our
                eyes closed at night, do we wake up with. we off ev io ei
                lksjkjf fjioefj fj dkfj kjsfj fsjhgjfh jf njf jfjk jfhfj ksfjhf
                js. fjioefj fj dkfj kjsfj fsjhgjfh jf njf jfjk jfhfj ksfjhf jsh
                jfhjkhsfhj k j ofjoijreio
                <br />
                jiorr rirjfodv iremio eom evio oeo ev io ei lksjkjf fjioefj fj
                dkfj kjsfj fsjhg. vjokrkjoirokf mvoe eij iorr rirjfodv iremio
                eom evio oeo ev io ei lksjkjf fjioefj fj dkfj kjsfj fsjhgjfh jf
                njf jfjk jfhfj ksfjhf jsh jfhjkhsfhj k j ofjoijreio jfka km
                fjvva ivjir vjokrkjoirokf mvoe eij iorr.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          Made with &#10084;&#65039; by{" "}
          <a
            href="https://twitter.com/callmijesse"
            target="_blank"
            rel="noreferrer noopener"
          >
            Joseph Brisibe
          </a>
        </p>
      </footer>
    </div>
  );
}
