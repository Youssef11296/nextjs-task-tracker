import type { NextPage } from "next";
import Head from "next/head";
import Tasks from "../components/Layout/Tasks/Tasks";
import { url } from "../utils/api";
import Styles from "../styles/Home.module.css";

interface Props {
  tasks: Task[];
}

const Home: NextPage<Props> = ({ tasks }) => {
  return (
    <div className={Styles.home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Styles.mainContent}>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

// Get server side props
export const getServerSideProps = async () => {
  const { data } = await (await fetch(`${url}/tasks`)).json();

  return {
    props: {
      tasks: data,
    },
  };
};

export default Home;
