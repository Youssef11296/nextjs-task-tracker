// modules
import Link from "next/link";
// components
import CreateTaskForm from "../../components/CreateTaskComponent";
// styles
import Styles from "../../styles/TasksStyles/CreateTask.module.css";

const CreateTask = () => {
  return (
    <div className={Styles.createTask}>
      <CreateTaskForm type="CREATE" />
      <button className="linkedBtn">
        <Link href="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default CreateTask;
