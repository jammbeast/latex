"use client";

import { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function FormulaEditor({ onFormulaChange }) {
  const [latex, setLatex] = useState("\\( E = mc^2 \\)");

  const handleInputChange = (event) => {
    setLatex(event.target.value);
    onFormulaChange(event.target.value);    
  };

  return (
    <MathJaxContext>
    <div className = "">
      <h2>Редактор формул</h2>
      <textarea className = "text-black"
        value={latex}
        onChange={handleInputChange}
        style={{ width: "100%", height: "100px", fontFamily: "monospace" }}
        placeholder="Введите формулу LaTeX"
      />
      </div>
    </MathJaxContext>
  );
}