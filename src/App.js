export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FF3D00, #FF8C00, #FFD700)",
        color: "#FFFFFF",
        padding: "40px",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        animation: "fadeIn 1.5s ease-out",
      }}
    >
      {/* Image Added Here */}
      <img
        src="https://staticg.sportskeeda.com/editor/2023/10/863b8-16965197990729-1920.jpg" // Replace with your image URL
        alt="Header Image"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "15px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      />

      <h1
        style={{
          fontSize: "48px",
          fontWeight: "800",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)",
          animation: "bounce 1.5s infinite alternate",
        }}
      >
        SEAN DIAZ
      </h1>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
          opacity: "0.8",
        }}
      >
        ABOUT ME:
      </h2>
      <p style={{ fontSize: "20px", maxWidth: "650px", opacity: 0.9 }}>
        ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      </p>
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.4)",
          animation: "zoomIn 1s ease-out",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "12px",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Skills:
        </h3>
        <ul style={{ listStyleType: "none", padding: 0, fontSize: "18px" }}>
          <li>✔ WALA</li>
          <li>✔ WALA</li>
          <li>✔ WALA</li>
          <li>✔ WALA</li>
          <li>✔ WALA NGA!</li>
        </ul>
      </div>

      {/* Contact Section with Input Fields */}
      <div
        style={{
          marginTop: "50px",
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.4)",
          textAlign: "center",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "12px",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Contact:
        </h3>

        {/* Input fields for Name, Email, and Phone */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "18px",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#333",
              border: "none",
              marginBottom: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Your Gmail"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "18px",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#333",
              border: "none",
              marginBottom: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="tel"
            placeholder="Your Phone Number"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "18px",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              color: "#333",
              border: "none",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          style={{
            backgroundColor: "#FF6347",
            color: "#FFFFFF",
            padding: "12px 20px",
            fontSize: "18px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#FF4500")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FF6347")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
