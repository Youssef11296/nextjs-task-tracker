// modules
import Link from "next/link";
import { NextComponentType } from "next";
// styles
import Styles from "../../styles/Layout.module.css";

const Layout: NextComponentType = ({ children }) => {
  return (
    <div className={Styles.layout}>
      <header className={Styles.header}>
        <div className="logo">
          <h1>Task tracker</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={Styles.footer}>
        <p>All copy rights are reserved {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
