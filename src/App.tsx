import { MouseEvent, useState } from "react";
import Buttons from "./components/Buttons";
import {
  actionButtonData,
  buttonData,
  outerButtonData,
} from "./data/button.data";

const calculateResult = (value: string) => {
  try {
    if (value.length > 22) {
      return eval(value.slice(0, 22)).toString() || 0;
    }

    return eval(value).toString();
  } catch (e) {
    alert(e);
    return "";
  }
};

function App() {
  const [currentInput, setCurrentInput] = useState<string>("");

  const handleUpdateInput = (e: MouseEvent<HTMLButtonElement>) => {
    const currentValue = e.currentTarget.value;
    const operator = ["+", "-", "*", "/"];

    if (operator.includes(currentValue)) {
      try {
        setCurrentInput(calculateResult(currentInput) || 0);
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
      setCurrentInput(calculateResult(currentInput));
    }
  };

  return (
    <div
      className="min-w-[300px] max-w-[350px] border-2 border-black rounded-[10px]  bg-primary shadow-primary"
      style={{ boxShadow: "5px 5px 0px 5px black" }}>
      <div className="flex justify-end items-end mb-8 p-4">
        <span className="value font-bold text-[48px] w-full  text-right ">
          {currentInput.substring(0, 11) || 0}
        </span>
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
