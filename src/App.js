import React, { useState } from "react";

const services = [
  { name: "Admin Service", path: "/admin-ms", port: 8001 },
  { name: "Scenario Service", path: "/scenario-ms", port: 8002 },
  { name: "Customers Service", path: "/customers-ms", port: 8003 },
  { name: "U Service", path: "/u-ms", port: 8004 },
  { name: "Reports Service", path: "/reports", port: 8005 },
  { name: "Promotions Service", path: "/promotions", port: 8006 },
];





function App() {
  const [response, setResponse] = useState("");

  const callService = async (port) => {
    try {
      const res = await fetch(`http://localhost:${port}/info`);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponse("Error connecting to service: " + err.message);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Frontend UI - Click a service to call backend</h1>

      <div style={{ margin: "20px 0" }}>
        {services.map((svc) => (
          <button
            key={svc.name}
            style={{ margin: "5px", padding: "10px" }}
            onClick={() => callService(svc.port)}
          >
            {svc.name}
          </button>
        ))}
      </div>

      <h2>Response:</h2>
      <pre>{response}</pre>
    </div>
  );
}

export default App;

