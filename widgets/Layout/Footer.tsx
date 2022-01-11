// styles
import Styles from "../../shared/styles/Layout.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <p>All copy rights are reserved {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
