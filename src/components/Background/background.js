import React, { useEffect, useRef } from "react";
import "./background.css";

const Background = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const lines = [
      "<html>",
      "<body>",
      "<h1>Hello, World!</h1>",
      "function compute() { return 42; }",
      "console.log('Loading...');",
      "let devMode = true;",
    ];

    for (let i = 0; i < 8; i++) {
      let codeElement = document.createElement("div");
      codeElement.classList.add("code-line");
      codeElement.textContent = lines[Math.floor(Math.random() * lines.length)];
      codeElement.style.left = Math.random() * 90 + "vw";
      codeElement.style.animationDuration = Math.random() * 5 + 5 + "s";
      codeElement.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(codeElement);
    }
  }, []);

  return <div className="animation-container" ref={containerRef}></div>;
};

export default Background;
