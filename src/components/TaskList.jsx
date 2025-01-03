import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #ddd",
        padding: "10px",
      }}
    >
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task to get started.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Title
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Description
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Status
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {task.title}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {task.description}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {task.status}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button
                    onClick={() => onEdit(task)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>
                  <button onClick={() => onDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
