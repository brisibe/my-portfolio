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
        {/* box bg animation */}
        <div class={styles.area}>
          <ul class={styles.circles}>
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
              Hi, I'm <b>Joseph</b>.<br /> A fullstack developer based in Lagos,
              Nigeria. I design and build web solutions that are user friendly.
              &#128578;
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
          <h3>About Me</h3>
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
                Been coding for more than 2years now, within this period i've
                worked with different languages and frameworks like{" "}
                <b>Javascript, C#, Reactjs, NodeJs, and Asp.Net Core.</b>
                <br />
                When I'm not coding you'll find me on the basketball court or on
                the chess board totally annihilating my opponents.&#129323;{" "}
                <br />I sometimes write about tech and other stuffs on{" "}
                <a
                  href="https://josephbrisibe.hashnode.dev"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.blog}
                >
                  Blog
                </a>
                <br />
                Got a gig for me? or you just want to chill and talk about tech
                or basketball lol, you can shoot me a DM on{" "}
                <a
                  href="https://twitter.com/callmijesse"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.blog}
                >
                  Twitter{" "}
                </a>
                , I reply in seconds... wanna bet? :)
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
