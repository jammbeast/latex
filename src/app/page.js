"use client";
import { useState } from "react";
import FormulaEditor from './formulaEditor';
import FormulaRenderer from './formulaRenderer';
export default function Home() {
  const [latex, setLatex] = useState("");

  const handleFormulaChange = (newLatex) => {
    setLatex(newLatex);
  };
  return (
    <div>
      <FormulaEditor onFormulaChange={handleFormulaChange} />
      <FormulaRenderer latex={latex} />
    </div>
  );
}