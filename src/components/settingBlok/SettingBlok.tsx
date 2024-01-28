import React, { ChangeEvent } from "react";
import s from "./Setting.module.css";

type SettingBlokPropsType = {
  callBackMinValueChanged: (newValue: number) => void;
  callBackMaxValueChanged: (newValue: number) => void;
  setSetting: () => void;
  invalidMessage: string;
  onChange: () => void;
};

export const SettingBlok = (props: SettingBlokPropsType) => {
  const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callBackMinValueChanged(Number(e.target.value));
  };

  const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callBackMaxValueChanged(Number(e.target.value));
  };

  return (
    <div className={s.settingWrapper}>
      <div className={s.inputWrapper}>
        <div className={s.inputCommon}>
          <span>maxValue </span>
          <input
            type="number"
            name="startValue"
            id=""
            className={s.input}
            onChange={onChangeMaxValueInputHandler}
          />
        </div>
        <div className={s.inputCommon}>
          <span>minValue </span>
          <input
            type="number"
            name="maxValue"
            id=""
            className={s.input}
            onChange={onChangeMinInputHandler}
          />
        </div>
      </div>
      <div className={s.buttonBlok}>
        <div className={s.buttonWrapper}>
          <button onClick={props.setSetting} className={s.button}>
            SET
          </button>
        </div>
      </div>
      <div>{props.invalidMessage}</div>
    </div>
  );
};
