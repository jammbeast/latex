export default function FormulaToolBox({onInsertElement}){
    const elements = [
        {label: "Дробь", code: " \\frac{a}{b} "},
        {label: "Интеграл", code: " \\int_{a}^{b} f(x) dx "},
        {label: "Сумма", code: " \\sum_{i=0}^{n} f(i) "},
        {label: "Предел", code: " \\lim_{x \\to a} f(x) "},
    ];

    return(
        <aside className="w-64 m-4 bg-transparent p-4 rounded">
            <h3 className = "text-lg "> Математические элементы</h3>
            <ul className = "mt-4 space-y-2">
                {elements.map((element) => (
                    <li key = {element.code}>
                        <button 
                        className = "w-full px-3 py-2 text-left text-white bg-gray-700 rounded hover:bg-slate-400" 
                        onClick = {() => onInsertElement(element.code)}>
                            {element.label}
                        </button>
                
                </li>
    ))}
                </ul>

            </aside>
    );

}