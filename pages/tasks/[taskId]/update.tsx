// components
import { NextPage } from "next";
import CreateTaskForm from "../../../components/CreateTaskComponent";
import { url } from "../../../shared/api";
// styles
import Styles from "../../../styles/TasksStyles/UpdateTask.module.css";

// props
interface Props {
  task: Task;
}

const UpdateTask: NextPage<Props> = ({ task }) => {
  return (
    <div className={Styles.upadteTaskContainer}>
      <CreateTaskForm type="UPDATE" task={task} />
    </div>
  );
};

// get static props
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

// get static paths
export const getStaticPaths = async () => {
  const { data } = await (await fetch(`${url}/tasks`)).json();

  const paths = data.map((task: Task) => ({
    params: {
      taskId: task._id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default UpdateTask;
