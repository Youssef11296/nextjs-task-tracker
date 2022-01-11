// modules
import { NextComponentType } from "next";
// components
import Footer from "./Footer";
import Header from "./Header";
// styles
import Styles from "../../shared/styles/Layout.module.css";

const Layout: NextComponentType = ({ children }) => {
  return (
    <div className={Styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
