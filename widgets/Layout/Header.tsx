// modules
import Link from "next/link";
// styles
import Styles from "../../shared/styles/Layout.module.css";

const Header = () => {
  return (
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
  );
};

export default Header;
