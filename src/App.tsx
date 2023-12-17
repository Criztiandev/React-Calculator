import { MouseEvent, useState } from "react";
import Buttons from "./components/Buttons";
import {
  actionButtonData,
  buttonData,
  outerButtonData,
} from "./data/button.data";

function App() {
  const [currentInput, setCurrentInput] = useState<string>("");

  const handleUpdateInput = (e: MouseEvent<HTMLButtonElement>) => {
    const currentValue = e.currentTarget.value;
    const operator = ["+", "-", "*", "/"];

    if (operator.includes(currentValue)) {
      try {
        const evaludatedResult = eval(currentInput) || 0;
        setCurrentInput(evaludatedResult);
      } catch (e) {
        const lastIndex = currentInput.length - 1;
        if (operator.includes(currentInput[lastIndex])) {
          setCurrentInput((prev) => prev.slice(0, lastIndex) + currentValue);
        }
        return;
      }
    }

    setCurrentInput((prev) => prev + currentValue);
  };

  const handleAction = (e: MouseEvent<HTMLButtonElement>) => {
    const currentValue = e.currentTarget.value;

    // Delete Everything
    if (currentValue === "Del") {
      setCurrentInput("");
    }

    // Single Character Delete
    if (currentValue === "C") {
      setCurrentInput((prev) => prev?.slice(0, -1));
    }

    // result
    if (currentValue === "=") {
      const evaludatedResult = eval(currentInput).toString();
      setCurrentInput(evaludatedResult);
    }
  };

  return (
    <div
      className="min-w-[300px] max-w-[350px] border-2 border-black rounded-[10px] bg-primary overflow-hidden shadow-primary"
      style={{ boxShadow: "5px 5px 0px 5px black" }}>
      <div className="flex justify-end items-end mb-8 flex-col p-4">
        <span className="value font-bold text-[48px]">{currentInput || 0}</span>
      </div>
      <div className="bg-secondary pt-8 p-4 rounded-t-2xl">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {actionButtonData.map((props) => (
            <Buttons key={props.title} {...props} onClick={handleAction} />
          ))}
          {buttonData.map((props) => (
            <Buttons key={props.title} {...props} onClick={handleUpdateInput} />
          ))}
        </div>
        <div className="grid grid-cols-[64px_64px_auto] gap-4 ">
          {outerButtonData.map((props) => (
            <Buttons key={props.title} {...props} onClick={handleUpdateInput} />
          ))}
          <Buttons title="Result" value={"="} onClick={handleAction} />
        </div>
      </div>
    </div>
  );
}

export default App;
