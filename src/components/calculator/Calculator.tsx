/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { SettingBlok } from "../settingBlok/SettingBlok";
import { Display } from "../displayBlok/Display";

type calculPropsType = {
  value: number;
  maxValue: number;
  increaseAmount: () => void;
  resetAmount: () => void;
  setSetting: () => void;
  callBackMinValueChanged: (newValue: number) => void;
  callBackMaxValueChanged: (newValue: number) => void;
  minValue: number;
  invalidMessage: string;
};

export const Calculator = (props: calculPropsType) => {
  const [newStartValue, setNewStartValue] = useState(props.minValue);

  const newStartValueHandler = () => {
    setNewStartValue(newStartValue);
  };

  return (
    <div className="calculator">
      <SettingBlok
        callBackMinValueChanged={props.callBackMinValueChanged}
        callBackMaxValueChanged={props.callBackMaxValueChanged}
        setSetting={props.setSetting}
        invalidMessage={props.invalidMessage}
        onChange={newStartValueHandler}
      />
      <Display
        maxValue={props.maxValue}
        value={props.value}
        callBackInc={props.increaseAmount}
        callBackRes={props.resetAmount}
      />
    </div>
  );
};
