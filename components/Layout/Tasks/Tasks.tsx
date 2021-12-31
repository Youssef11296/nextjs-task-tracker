// children
import Task from "./Task";
// styles
import Styles from "../../../styles/Tasks.module.css";

interface Props {
  tasks: Task[];
}

const Tasks: React.FC<Props> = ({ tasks }: Props) => {
  return (
    <div className={Styles.tasks}>
      {tasks.map((task: Task, index: number) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
