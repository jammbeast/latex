"use client";

import { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function FormulaEditor({ onFormulaChange, latex }) {
  const [localLatex, setlocalLatex] = useState(latex || "\\( E = mc^2 \\)");

  const handleInputChange = (event) => {
    setlocalLatex(event.target.value);
    onFormulaChange(event.target.value);    
  };

  return (
    <MathJaxContext>
      <div className="h-full w-full">
        <h2>Редактор формул</h2>
        <textarea
          className="w-full h-full p-4 bg-transparent border border-gray-300 rounded resize-none focus:outline-none"
          value={localLatex}
          onChange={handleInputChange}
          placeholder="Введите формулу LaTeX"
          style={{
            fontFamily: "monospace",
          }}
        />
      </div>
    </MathJaxContext>
  );
}