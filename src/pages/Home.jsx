import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Task Management App</h1>
      <p>Organize your tasks efficiently.</p>
      <Link to="/tasks">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Go to Task Manager
        </button>
      </Link>
    </div>
  );
};

export default Home;
