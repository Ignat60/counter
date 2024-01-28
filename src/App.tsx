import React, { useState } from "react";
import "./App.css";
import { Calculator } from "./components/calculator/Calculator";

let minValue = 0;
let maxValue = 6;
let invalidMessage = "";

function App() {
  const [value, setValue] = useState(0);
  const [minValueState, setMin] = useState(0);
  const [maxValueState, setMax] = useState(0);

  const increaseAmount = () => {
    if (value < maxValue) setValue(value + 1);
  };

  // const resetAmount = () => {
  //   setValue(minValue);
  // };

  const onMinValueChanged = (newValue: number) => {
    setMin(newValue);
    // console.log("New min value " + newValue);

    // if (minValueState < 0) {
    //   invalidMessage = "Min value can not be less than 0";
    // } else {
    //   invalidMessage = "";
    // }
  };
  const onMaxValueChanged = (newValue: number) => {
    setMax(newValue);
    // console.log("New max value " + newValue);
  };

  const setMinMaxValues = () => {
    setValue(minValueState);

    console.log("Set Settings Clicked");
    minValue = minValueState;
    maxValue = maxValueState;
    if (minValueState < 0) {
      invalidMessage = "Min value can not be less than 0";
    } else {
      invalidMessage = "";
    }
    // setValue(minValueState);
    // Here we need set New Min and Max values
  };
  const resetAmount = () => {
    setValue(minValue);
  };

  return (
    <div className="App">
      <Calculator
        maxValue={maxValue}
        value={value}
        increaseAmount={increaseAmount}
        resetAmount={resetAmount}
        minValue={minValue}
        invalidMessage={invalidMessage}
        setSetting={setMinMaxValues}
        callBackMinValueChanged={onMinValueChanged}
        callBackMaxValueChanged={onMaxValueChanged}
      />
    </div>
  );
}

export default App;
