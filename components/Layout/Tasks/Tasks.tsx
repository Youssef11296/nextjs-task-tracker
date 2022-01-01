// children
import Task from "./Task";
// styles
import Styles from "../../../styles/Tasks.module.css";

// props
interface Props {
  tasks: Task[];
}

const Tasks: React.FC<Props> = ({ tasks }: Props) => {
  return (
    <div className={Styles.tasks}>
      <h2>Here are your all tasks</h2>
      <div className={Styles.tasksContainer}>
        {tasks.map((task: Task, index: number) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
