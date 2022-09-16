import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

export default function PaybackTable({ resultArray }) {
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
          {resultArray.map((item, index) => (
            <tr key={index}>
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
