import Task from '../../../models/Task';
import db from '../../../utils/db';

db.connect ();

const tasksController = async (req, res) => {
  const {method, body} = req;

  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find ();
        res.status (200).json ({success: true, data: tasks});
      } catch (error) {
        res.status (404).json ({success: false, message: error.message});
      }
      break;
    case 'POST':
      try {
        const newTask = new Task (body);
        await newTask.save ();

        if (
          !body.title ||
          body.title.length < 3 ||
          !body.describtion ||
          body.describtion.length < 10
        ) {
          res
            .status (400)
            .json ({success: false, message: 'All fields are required'});
        }

        res.status (201).json ({
          success: true,
          message: 'The new task is successfully created',
          data: newTask,
        });
      } catch (error) {
        res.status (400).json ({success: false, message: error.message});
      }
      break;
    default:
      res
        .status (400)
        .json (`Sorry, You can not do a ${method} request in this api`);
  }
};

export default tasksController;
