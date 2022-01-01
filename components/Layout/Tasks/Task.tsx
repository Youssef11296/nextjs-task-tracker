// styles
import Link from "next/link";
import Styles from "../../../styles/Tasks.module.css";

interface Props {
  task: Task;
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className={`${task.reminder ? Styles.remindedTask : Styles.taskItem}`}>
      <div className={Styles.taskContent}>
        <h3>{task.title}</h3>
        <p>{task.describtion.slice(0, 20)}..</p>
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
