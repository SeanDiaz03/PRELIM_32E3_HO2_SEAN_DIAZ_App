import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" or "todo"

  const navigateTo = (page) => setCurrentPage(page);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FF7F50, #1E90FF)", // Orange-Blue gradient
        color: "#FFFFFF",
        padding: "60px",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        animation: "fadeIn 1.5s ease-out",
      }}
    >
      {currentPage === "home" && <HomePage navigateTo={navigateTo} />}
      {currentPage === "todo" && <ToDoList navigateTo={navigateTo} />}
    </div>
  );
}

function HomePage({ navigateTo }) {
  return (
    <div>
      <img
        src="https://staticg.sportskeeda.com/editor/2023/10/863b8-16965197990729-1920.jpg"
        alt="Header Image"
        style={{
          width: "100%",
          maxWidth: "700px",
          borderRadius: "30px",
          marginBottom: "50px",
          boxShadow: "0 6px 30px rgba(0, 0, 0, 0.5)",
        }}
      />
      <h1 style={{ fontSize: "70px", fontWeight: "800", marginBottom: "30px" }}>
        SEAN DIAZ
      </h1>
      <h2 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "30px" }}>
        ABOUT ME:
      </h2>
      <p style={{ fontSize: "26px", maxWidth: "750px", opacity: 0.9 }}>
        ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      </p>
      <div
        style={{
          marginTop: "50px",
          padding: "40px",
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "3px 6px 35px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
          Skills:
        </h3>
        <ul style={{ listStyleType: "none", padding: 0, fontSize: "24px" }}>
          <li>✔ EDITING</li>
          <li>✔ DOING PR</li>
          <li>✔ WALA NA</li>
          <li>✔ </li>
          <li>✔ </li>
        </ul>
      </div>

      {/* Button to go to To-Do List */}
      <button
        onClick={() => navigateTo("todo")}
        style={{
          marginTop: "40px",
          background: "linear-gradient(135deg, #FF6347, #1E90FF)", // Gradient for button
          color: "#FFFFFF",
          padding: "20px 40px",
          fontSize: "26px",
          fontWeight: "700",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        Go to To-Do List
      </button>
    </div>
  );
}

function ToDoList({ navigateTo }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        marginTop: "50px",
        padding: "40px",
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        boxShadow: "3px 6px 35px rgba(0, 0, 0, 0.4)",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
        To-Do List
      </h3>

      {/* Input Field */}
      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={{
            width: "100%",
            padding: "20px",
            fontSize: "22px",
            borderRadius: "15px",
            backgroundColor: "#FFFFFF",
            color: "#333",
            border: "none",
            marginBottom: "20px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
          }}
        />
      </div>

      <button
        onClick={addTask}
        style={{
          background: "linear-gradient(135deg, #FF6347, #1E90FF)",
          color: "#FFFFFF",
          padding: "20px 40px",
          fontSize: "26px",
          fontWeight: "700",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        Add Task
      </button>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          marginTop: "30px",
          fontSize: "24px",
        }}
      >
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "20px", fontWeight: "500" }}>
            {task}{" "}
            <button
              onClick={() => removeTask(index)}
              style={{
                marginLeft: "20px",
                backgroundColor: "#FF4500",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "12px",
                padding: "10px 25px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#FF6347'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#FF4500'}
            >
              DONE
            </button>
          </li>
        ))}
      </ul>

      {/* Button to go back to Home */}
      <button
        onClick={() => navigateTo("home")}
        style={{
          marginTop: "30px",
          background: "linear-gradient(135deg, #FF6347, #1E90FF)",
          color: "#FFFFFF",
          padding: "20px 40px",
          fontSize: "26px",
          fontWeight: "700",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        Back to Home
      </button>
    </div>
  );
}

export default App;
