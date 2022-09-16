import React, { useContext } from "react";
import PaybackTable from "../../components/PaybackTable";
import "./style.css";
import { CreditInformationContext } from "../../context/CreditInformation";
import { Calc } from "../../helper/Calc";

export default function ResultTable() {
  const { creditInformation } = useContext(CreditInformationContext);

  // Get the array from the helper function
  let resultArray = Calc(creditInformation);
  return (
    <div className="result-page">
      <PaybackTable resultArray={resultArray} />
    </div>
  );
}
