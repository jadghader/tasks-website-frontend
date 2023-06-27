import axios from "axios";

export const deleteData = async (task) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/task/${task.id}`,
      { id: task.id }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
