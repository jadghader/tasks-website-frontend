import axios from "axios";

export const updateData = async (task) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/task/${task.id}`,
      { title: task.title, status: task.status }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
