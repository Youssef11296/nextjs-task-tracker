import Task from '../../../models/Task';
import db from '../../../utils/db';

db.connect ();

export default async function (req, res) {
  const {method, body, query: {taskId}} = req;

  switch (method) {
    case 'GET':
      try {
        const filteredTask = await Task.findOne ({_id: taskId});
        res.status (200).json ({success: true, data: filteredTask});
      } catch (error) {
        res.status (404).json ({success: false, message: error.message});
      }
      break;
    case 'DELETE':
      try {
        await Task.findByIdAndDelete (taskId);
        res.status (200).json ({
          success: true,
          message: 'The task is successfully deleted',
        });
      } catch (error) {
        res.status (400).json ({success: false, message: error.message});
      }
      break;
    case 'PATCH':
      try {
        const updatedTask = await Task.findByIdAndUpdate (taskId, body);

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
          message: 'The task is successfully updated',
          data: updatedTask,
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
}
