import React, { useState } from "react";
import "./App.css";
import { SettingBlok } from "./components/settingBlok/SettingBlok";
import { Screen } from "./components/displayBlok/Screen";

let minValue = 0;
let maxValue = 5;

function App() {
  const [value, setValue] = useState(minValue);
  if (value < maxValue) setValue(value + 1);

  return (
    <div className="App">
      <SettingBlok />
      <Screen />
    </div>
  );
}

export default App;
