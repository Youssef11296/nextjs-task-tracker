// modules
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
// api
import { url } from "../../shared/api";
import Message from "../../shared/components/Message";
// styles
import Styles from "../../styles/TasksStyles/CreateTask.module.css";

// props
interface Props {
  task?: Task;
  type: "CREATE" | "UPDATE";
}

const CreateTaskForm: React.FC<Props> = ({ type, task }) => {
  const router = useRouter();

  console.log({ task });
  let defaultValues: Task;

  if (task) {
    const { title, describtion, reminder } = task;
    defaultValues = {
      title,
      describtion,
      reminder,
    };
  } else {
    defaultValues = {
      title: "",
      describtion: "",
      reminder: false,
    };
  }

  console.log({ defaultValues });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const { register, reset, handleSubmit } = useForm({ defaultValues });

  const submitHandler = handleSubmit(async (formData: any) => {
    console.log({ formData });

    if (type === "UPDATE") {
      const { success, message, data } = await (
        await fetch(`${url}/tasks/${task?._id}`, {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      setMessage(message);
      setSuccess(success);

      if (success) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } else {
      const { success, message, data } = await (
        await fetch(`${url}/tasks`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      setMessage(message);
      setSuccess(success);
      reset();
    }

    if (!success) {
      setTimeout(() => {
        setMessage("");
        setSuccess(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setMessage("");
        setSuccess(false);
      }, 2000);
    }
  });

  return (
    <div className={Styles.createTask}>
      {message ? <Message message={message} success={success} /> : null}
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
        <button type="submit">{type === "UPDATE" ? "Save" : "Add"}</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
