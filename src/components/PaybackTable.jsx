import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { CreditInformationContext } from "../context/CreditInformation";
import "./style.css";

export default function PaybackTable() {
  const { creditInformation } = useContext(CreditInformationContext);

  // cerditInformation objects string to float
  const amount = parseFloat(creditInformation.amount);
  const installments = parseFloat(creditInformation.installments);
  const profitRate = parseFloat(creditInformation.profitRate);
  const KKDVCreadit = parseFloat(creditInformation.KKDF);
  const BSMVCreadit = parseFloat(creditInformation.BSMV);

  let paybackResult = [];

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
        interest: interest,
        KKDF: KKDF,
        BSMV: BSMV,
        mainMoney: mainMoney,
        remainingAmount: remainingAmount,
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
        interest: interest,
        KKDF: KKDF,
        BSMV: BSMV,
        mainMoney: mainMoney,
        remainingAmount: remainingAmount,
      });
    }
  }

  return (
    <div className="table-content">
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Taksit No</th>
            <th>Taksit Tutari</th>
            <th>Ana Para</th>
            <th>Kalan Ana Para</th>
            <th>Kar Tutari</th>
            <th>KKDF</th>
            <th>BSMV</th>
          </tr>
        </thead>
        <tbody>
          {paybackResult.map((item) => (
            <tr>
              <td>{item.installmentNumber}</td>
              <td>{item.payment.toFixed(2)}</td>
              <td>{item.mainMoney.toFixed(2)}</td>
              <td>{item.remainingAmount.toFixed(2)}</td>
              <td>{item.interest.toFixed(2)}</td>
              <td>{item.KKDF.toFixed(2)}</td>
              <td>{item.BSMV.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
