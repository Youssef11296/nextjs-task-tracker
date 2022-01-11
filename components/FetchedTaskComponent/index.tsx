// modules
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// api
import { url } from "../../shared/api";
// components
import Message from "../../shared/components/Message";
// styles
import Styles from "../../styles/TasksStyles/FetchedTask.module.css";

// props
interface Props {
  task: Task;
}

const FetchedTask: React.FC<Props> = ({ task }) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

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
    setSuccess(success);

    setTimeout(() => {
      setMessage("");
      setSuccess(false);
      router.push("/");
    }, 3000);
  };
  return (
    <div className={Styles.fetchedTask}>
      {message ? <Message success={success} message={message} /> : null}
      <div
        className={`${Styles.fetchedTaskContainer} ${
          task.reminder && Styles.reminder
        }`}
      >
        <div className={Styles.fetchedTaskContent}>
          <h2>{task.title}</h2>
          <p>{task.describtion}</p>
        </div>
        <div className={Styles.fetchedTaskOptions}>
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={() => router.push(`/tasks/${task._id}/update`)}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchedTask;
