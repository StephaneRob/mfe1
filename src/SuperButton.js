import React, { useState } from "react";

const SuperButton = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      style={{
        backgroundColor: "#000000",
        border: "none",
        color: "white",
        padding: "10px 20px",
        cursor: "pointer",
        zIndex: 1000000,
      }}
      onClick={() => setCount((p) => p + 1)}
    >
      Button from MFE {count}
    </button>
  );
};

export default SuperButton;
