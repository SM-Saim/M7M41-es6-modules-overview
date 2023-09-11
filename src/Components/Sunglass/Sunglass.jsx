import React from "react";
import "./Sunglass.css";
import Watch from "../Watch/Watch";
import {
  Calculators,
  Multi,
  divideByTheSecondNumbersWhrerTwoNumbersDataAreComingFromOutside as divide,
} from "../../Utils/calculators";

const Sunglass = () => {
  const num1 = 120;
  const num2 = 480;
  const addition = Calculators(num1, num2);
  const multiplication = Multi(num1 * num2);
  const div = divide(num1, num2);
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;
