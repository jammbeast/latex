"use client";

import { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function FormulaEditor({ onFormulaChange, latex }) {
  const [localLatex, setlocalLatex] = useState(latex);

  useEffect(() => {
    setlocalLatex(latex);
  },[latex]);
  const handleInputChange = (event) => {
    const newLatex = event.target.value;
    setlocalLatex(newLatex);
    onFormulaChange(newLatex);

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