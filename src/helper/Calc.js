import { useContext } from "react";
import { CreditInformationContext } from "../context/CreditInformation";

export const Calc = (props) => {
  let paybackResult = [];

  // cerditInformation objects string to float
  const amount = parseFloat(props.amount);
  const installments = parseFloat(props.installments);
  const profitRate = parseFloat(props.profitRate);
  const KKDVCreadit = parseFloat(props.KKDF);
  const BSMVCreadit = parseFloat(props.BSMV);

  // calculate payback
  let taxInterest = (profitRate / 100) * (1 + BSMVCreadit + KKDVCreadit);

  let firstValue = taxInterest * Math.pow(1 + taxInterest, +installments);

  let secondValue = Math.pow(1 + taxInterest, installments) - 1;

  let resultPayment = amount * (firstValue / secondValue);

  let interest = amount * (profitRate / 100);

  let KKDF = interest * KKDVCreadit;

  let BSMV = interest * BSMVCreadit;

  let mainMoney = resultPayment - (interest + KKDF + BSMV);

  let remainingAmount = amount - mainMoney;

  // push first row to paybackResult

  for (let i = 1; i <= installments; i++) {
    if (i === 1) {
      paybackResult.push({
        installmentNumber: i,
        payment: resultPayment,
        mainMoney: mainMoney,
        remainingAmount: remainingAmount,
        interest: interest,
        KKDF: KKDF,
        BSMV: BSMV,
      });
    }
    // push other rows to paybackResult
    else {
      interest = remainingAmount * (profitRate / 100);
      KKDF = interest * KKDVCreadit;
      BSMV = interest * BSMVCreadit;
      mainMoney = resultPayment - (interest + KKDF + BSMV);
      remainingAmount = remainingAmount - mainMoney;

      paybackResult.push({
        installmentNumber: i,
        payment: resultPayment,
        mainMoney: mainMoney,
        remainingAmount: remainingAmount,
        interest: interest,
        KKDF: KKDF,
        BSMV: BSMV,
      });
    }
  }

  return paybackResult;
};
