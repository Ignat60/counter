import React from "react";
import s from "./Screen.module.css";

type screenPropsType = {
  maxValue: number;
  value: number;
  callBackInc: () => void;
  callBackRes: () => void;
};

export const Display = (props: screenPropsType) => {
  const figureColor = props.value === props.maxValue ? s.figureRed : s.figure;

  return (
    <div className={s.displayBlok}>
      <div className={s.screenWrapper}>
        <div className={figureColor}>{props.value}</div>
      </div>

      <div className={s.buttonBlok}>
        <div className={s.buttonWrapper}>
          <button onClick={props.callBackInc} className={s.button}>
            INC
          </button>
        </div>
        <div className={s.buttonWrapper}>
          <button onClick={props.callBackRes} className={s.button}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
