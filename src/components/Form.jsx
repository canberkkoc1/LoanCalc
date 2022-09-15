import React, { useContext, useEffect, useRef, useState } from "react";
import { CreditInformationContext } from "../context/CreditInformation";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useImperativeHandle } from "react";

export default function FormCredit() {
  const { addCreditInformation } = useContext(CreditInformationContext);

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const navigate = useNavigate();

  // form states

  const [userValues, setUserValues] = useState({
    amount: null,
    installments: null,
    profitRate: null,
    installmentInterval: null,

    BSMV: null,
    KKDF: null,
  });

  // form handlers

  const handleSubmit = (e) => {
    addCreditInformation(userValues);

    navigate("/payback");
  };

  return (
    <div className="login-box">
      <h2>Loan Calculater </h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            ref={ref}
            type="text"
            name="total"
            id="total_credit"
            onChange={(e) =>
              setUserValues({ ...userValues, amount: e.target.value })
            }
          />
          <label>Amount</label>
        </div>
        <div className="user-box">
          <select
            name=""
            id=""
            onChange={(e) =>
              setUserValues({ ...userValues, installments: e.target.value })
            }
          >
            <option value="">Please choose</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="profit_rate"
            id=""
            onChange={(e) =>
              setUserValues({ ...userValues, profitRate: e.target.value })
            }
          />
          <label>Rate</label>
        </div>
        <div className="user-box">
          <select
            name=""
            id=""
            onChange={(e) =>
              setUserValues({
                ...userValues,
                installmentInterval: e.target.value,
              })
            }
          >
            <option value="">Please choose</option>
            <option value="7">Week</option>
            <option value="30">Month</option>
            <option value="360">Year</option>
          </select>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="KKDV"
            id=""
            onChange={(e) =>
              setUserValues({
                ...userValues,
                KKDF: e.target.value,
              })
            }
          />
          <label>KKDF</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="KKDV"
            id=""
            onChange={(e) =>
              setUserValues({
                ...userValues,
                BSMV: e.target.value,
              })
            }
          />
          <label>BSMV</label>
        </div>
        <button type="submit" className="custom-btn btn-submit">
          Calculate
        </button>
      </form>
    </div>
  );
}
