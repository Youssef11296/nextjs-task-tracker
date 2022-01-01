// styles
import Link from "next/link";
import Styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h2>About the app</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industries standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button className="linkedBtn">
          <Link href="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default about;
