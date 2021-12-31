import { NextComponentType } from "next";
import Task from "./Task";

interface Props {
  tasks: Task[];
}

const Tasks: React.FC<Props> = ({ tasks }: Props) => {
  return (
    <div>
      {tasks.map((task: Task, index: number) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
