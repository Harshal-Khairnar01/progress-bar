import "./App.css";

import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 50);
  }, []);
  return (
    <div className="app">
      <span className="head">Progress Bar</span>
      <ProgressBar
        value={value}
        onStart={() => {}}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <span style={{fontFamily:"serif"}}>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}
