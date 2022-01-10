// modules
import { useState } from "react";
import { useForm } from "react-hook-form";
// styles
import Styles from "../../styles/Tasks.module.css";
import { url } from "../../shared/api";

const CreateTask = () => {
  const [message, setMessage] = useState(null);

  const defaultValues: Task = {
    title: "",
    describtion: "",
    reminder: false,
  };

  const { register, reset, handleSubmit } = useForm({ defaultValues });

  const submitHandler = handleSubmit(async (formData: any) => {
    console.log({ formData });

    const { success, message, data } = await (
      await fetch(`${url}/tasks`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (!success) return;

    setMessage(message);

    setTimeout(() => {
      setMessage(null);
    }, 5000);

    reset();
  });

  return (
    <div className={Styles.createTask}>
      <div className={`${message && "active"} message`}>{message}</div>
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
