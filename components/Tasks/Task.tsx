// styles
import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../../styles/Tasks.module.css";
import { url } from "../../shared/api";

interface Props {
  task: Task;
}

const Task: React.FC<Props> = ({ task }) => {
  const [taskItem, setTaskItem] = useState(task);
  // toggle task reminder
  const toggleReminder = async () => {
    const { success, message, data } = await (
      await fetch(`${url}/tasks/${task._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...task, reminder: !task.reminder }),
      })
    ).json();

    if (success) {
      setTaskItem({ ...task, reminder: !task.reminder });
      task.reminder = !task.reminder;
    }

    console.log({ reminder: taskItem.reminder });
  };

  return (
    <div
      className={`${taskItem.reminder ? Styles.remindedTask : Styles.taskItem}`}
      onDoubleClick={toggleReminder}
    >
      <div className={Styles.taskContent}>
        <h3>{taskItem.title}</h3>
        <p>{taskItem.describtion.slice(0, 20)}..</p>
      </div>
      <div className={Styles.taskOptions}>
        <button className="linkedBtn">
          <Link href={`/tasks/${task._id}`}>View</Link>
        </button>
      </div>
    </div>
  );
};

export default Task;
