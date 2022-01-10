import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Styles from "../../styles/Tasks.module.css";
import { url } from "../../shared/api";

interface Props {
  task: Task;
}

const fetchedTask: NextPage<Props> = ({ task }) => {
  const [message, setMessage] = useState(null);

  const router = useRouter();

  // delete task handler
  const deleteHandler = async () => {
    const { success, message } = await (
      await fetch(`${url}/tasks/${task._id}`, {
        method: "DELETE",
      })
    ).json();

    if (!success) return;
    setMessage(message);

    setTimeout(() => {
      setMessage(null);
      router.push("/");
    }, 3000);
  };

  if (!task)
    return (
      <div className="redirectedMessage">
        <h3>Oops</h3>
        <p>
          There is no task here, it seems that the task was deleted or some
          error occured.
        </p>
      </div>
    );

  return (
    <div className={Styles.fetchedTask}>
      <div className={`${message && "active"} message`}>{message}</div>
      <div className={Styles.fetchedTaskContainer}>
        <div className={Styles.fetchedTaskContent}>
          <h2>{task.title}</h2>
          <p>{task.describtion}</p>
        </div>
        <div className={Styles.fetchedTaskOptions}>
          <button onClick={deleteHandler}>Delete</button>
          <button>Completed</button>
        </div>
      </div>
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
