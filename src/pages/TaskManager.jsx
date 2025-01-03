import React, { useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Sample Task",
      description: "This is a sample task.",
      status: "Pending",
    },
  ]);
  const [currentTask, setCurrentTask] = useState(null);

  // Add or Update Task
  const saveTask = (task) => {
    if (task.id) {
      // Update existing task
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      // Add new task
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
    setCurrentTask(null); // Reset form after save
  };

  // Edit Task
  const handleEditTask = (task) => {
    setCurrentTask(task);
  };

  // Delete Task
  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <p>Here you can view, add, edit, and delete your tasks.</p>
      <div>
        {/* Task List Component */}
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />

        {/* Task Form Component */}
        <TaskForm saveTask={saveTask} currentTask={currentTask} />
      </div>
    </div>
  );
};

export default TaskManager;
