// styles
import Styles from "../../../styles/Tasks.module.css";

interface Props {
  task: Task;
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className={`${task.reminder ? Styles.remindedTask : Styles.taskItem}`}>
      <div className={Styles.taskContent}>
        <h3>{task.title}</h3>
        <p>{task.describtion}</p>
      </div>
    </div>
  );
};

export default Task;
