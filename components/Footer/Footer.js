import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy;
        {new Date().getFullYear()}{" "}
        <a
          href="https://twitter.com/callmijesse"
          target="_blank"
          rel="noreferrer noopener"
   
        >
          Joseph Brisibe
        </a>
      </p>
    </footer>
  );
};

export default Footer;
