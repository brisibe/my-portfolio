import { Nav } from "../Navbar/Nav";
import styles from "../../styles/Home.module.css";

export const Page = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Nav />
      {children}
    </div>
  );
};
