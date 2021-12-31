import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema (
  {
    title: {
      type: String,
      required: true,
      minlength: [3, 'The task title must contain 3 letters at least'],
      maxlength: [20, 'The task title can not contain more than 20 letters'],
    },
    describtion: {
      type: String,
      required: true,
      minlength: [10, 'The task descrintion must contain 10 letters at least'],
      maxlength: [
        200,
        'The task descrintion can not contain more than 200 letters',
      ],
    },
    reminder: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Task || mongoose.model ('Task', taskSchema);
