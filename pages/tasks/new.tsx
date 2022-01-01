// modules
import { useForm } from "react-hook-form";
// styles
import Styles from "../../styles/Tasks.module.css";

const CreateTask = () => {
  const defaultValues: Task = {
    title: "",
    describtion: "",
    reminder: false,
  };

  const { register, reset, handleSubmit } = useForm({ defaultValues });

  const submitHandler = handleSubmit((data: any) => {
    console.log({ data });
    reset();
  });

  return (
    <div className={Styles.createTask}>
      <form onSubmit={submitHandler}>
        <div className="inputField">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            {...register("title")}
          />
        </div>
        <div className="inputField">
          <label htmlFor="title">Describtion</label>
          <input
            type="text"
            placeholder="Enter task describtion"
            {...register("describtion")}
          />
        </div>
        <div className={Styles.checkField}>
          <label htmlFor="reminder">Set task reminder</label>
          <input type="checkbox" {...register("reminder")} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateTask;
