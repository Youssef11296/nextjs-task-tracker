// modules
import Link from "next/link";
import { NextPage } from "next";
// components
import FetchedTask from "../../../components/FetchedTaskComponent";
import Message from "../../../shared/components/Message";
// api
import { url } from "../../../shared/api";
// styles
import Styles from "../../../styles/TasksStyles/FetchedTask.module.css";

// props
interface Props {
  task: Task;
}

const fetchedTask: NextPage<Props> = ({ task }) => {
  if (!task)
    return (
      <Message
        title="Oops"
        message="There is no task here, it seems that the task was deleted or some error occured."
        success={false}
      />
    );

  return (
    <div className={Styles.fetchedTask}>
      <FetchedTask task={task} />
      <button className="linkedBtn">
        <Link href="/">Back to Home</Link>
      </button>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const { data } = await (
    await fetch(`${url}/tasks/${context.params.taskId}`)
  ).json();

  return {
    props: {
      task: data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await (await fetch(`${url}/tasks`)).json();
  const paths = data.map((task: Task) => ({
    params: { taskId: task._id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default fetchedTask;
