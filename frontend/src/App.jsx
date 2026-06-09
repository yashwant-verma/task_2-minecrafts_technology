import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  const API = "http://localhost:5000/tasks";

  // GET TASKS
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
      setMessage("✅ Tasks Fetched Successfully");
    } catch (error) {
      setMessage("❌ Failed to Fetch Tasks");
      console.log(error);
    }
  };

  // ADD TASK
  const addTask = async () => {
    if (!title.trim()) {
      setMessage("⚠️ Please Enter a Task");
      return;
    }

    try {
      await axios.post(`${API}/add`, {
        title,
      });

      setTitle("");
      setMessage("✅ Task Added Successfully");

      fetchTasks();
    } catch (error) {
      setMessage("❌ Failed to Add Task");
      console.log(error);
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);

      setMessage("🗑️ Task Deleted Successfully");

      fetchTasks();
    } catch (error) {
      setMessage("❌ Failed to Delete Task");
      console.log(error);
    }
  };

  // EDIT BUTTON
  const startEdit = (task) => {
    setTitle(task.title);
    setEditId(task._id);
    setMessage("✏️ Edit Mode Enabled");
  };

  // UPDATE TASK
  const updateTask = async () => {
    if (!title.trim()) {
      setMessage("⚠️ Please Enter a Task");
      return;
    }

    try {
      await axios.put(`${API}/${editId}`, {
        title,
      });

      setTitle("");
      setEditId(null);

      setMessage("✅ Task Updated Successfully");

      fetchTasks();
    } catch (error) {
      setMessage("❌ Failed to Update Task");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Todo CRUD App</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {editId ? (
        <button onClick={updateTask}>
          Update Task
        </button>
      ) : (
        <button onClick={addTask}>
          Add Task
        </button>
      )}

      <button onClick={fetchTasks}>
        Get Tasks
      </button>

      {message && (
        <p className="message">
          {message}
        </p>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}

            <button
              onClick={() => startEdit(task)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;