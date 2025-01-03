import React, { useState, useEffect } from "react";

const TaskForm = ({ saveTask, currentTask }) => {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    status: "Pending",
  });

  useEffect(() => {
    if (currentTask) {
      setFormData(currentTask);
    } else {
      setFormData({ id: null, title: "", description: "", status: "Pending" });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.description.trim().length >= 10) {
      saveTask(formData);
    } else {
      alert(
        "Please ensure the title is filled and the description is at least 10 characters long."
      );
    }
  };

  return (
    <div
      style={{ border: "1px solid #ddd", padding: "10px", marginTop: "20px" }}
    >
      <h2>{formData.id ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{
              marginLeft: "10px",
              padding: "5px",
              width: "200px",
              height: "60px",
            }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={{ marginLeft: "10px", padding: "5px", width: "210px" }}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          style={{ padding: "5px 10px", cursor: "pointer" }}
        >
          {formData.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
