import axios from "axios";

export const postData = async (task) => {
  try {
    const response = await axios.post("http://localhost:3000/api/task", {
      title: task.title,
      status: "pending",
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
