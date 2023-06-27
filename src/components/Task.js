import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className="Task">
      <p
        onClick={() => toggleComplete(task._id, task.status)}
        className={`${task.status === "pending" ? "pending" : "completed"}`}
      >
        {task.title}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTask(task._id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};
