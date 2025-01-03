import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </>
  );
}

export default App;
