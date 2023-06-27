import React, { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { EditTask } from "./EditTask";
import { v4 as uuidv4 } from "uuid";
import { getData } from "../api/get";
import { postData } from "../api/post";
import { updateData } from "../api/put";
import { deleteData } from "../api/delete";
uuidv4();

export const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await getData();
    setTasks(data.data.result);
  };

  const addTask = async (task) => {
    await postData({ title: task, status: "pending" });
    return fetchdata();
  };

  const toggleComplete = async (id, status) => {
    const updateStatus = status === "completed" ? "pending" : "completed";
    await updateData({ id: id, status: updateStatus });
    return fetchdata();
  };

  const deleteTask = async (id) => {
    await deleteData({ id: id });
    return fetchdata();
  };

  const editTodo = (id) => {
    const t = tasks.map((task) =>
      task._id === id ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(t);
  };

  return (
    <div className="TaskWrapper">
      <h1>Get things Done!</h1>
      <TaskForm addTask={addTask} />
      {tasks.map((task, index) =>
        task.isEditing ? (
          <EditTask fetchdata={fetchdata} task={task} />
        ) : (
          <Task
            task={task}
            key={index}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTodo}
          />
        )
      )}
    </div>
  );
};
