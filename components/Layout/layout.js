import { Nav } from "../Navbar/Nav";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ width: "100%", position: "sticky", top: 0, zIndex: 100 }}>
        <Nav />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
