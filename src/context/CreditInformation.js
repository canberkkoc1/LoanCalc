import { createContext, useReducer } from "react";

export const CreditInformationReducer = (state, action) => {
  switch (action.type) {
    case "SET_CREDIT_INFORMATION":
      return {
        ...state,
        creditInformation: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  creditInformation: {},
};

export const CreditInformationContext = createContext();

export const CreditInformationProvider = (props) => {
  const [state, dispatch] = useReducer(CreditInformationReducer, initialState);

  const addCreditInformation = (creditData) => {
    dispatch({
      type: "SET_CREDIT_INFORMATION",
      payload: creditData,
    });
  };

  /* const [userValues, setUserValues] = useState({
    amount: null,
    installments: null,
    profitRate: null,
    installmentInterval: null,
    taxRate: {
      BSMV: 0.05,
      KKDF: 0.15,
    },
  });

  const [result, setResult] = useState(0);

  const data = {
    userValues,
    setUserValues,
    result,
    setResult,
  }; */

  return (
    <CreditInformationContext.Provider
      value={{
        addCreditInformation,
        creditInformation: state.creditInformation,
      }}
    >
      {props.children}
    </CreditInformationContext.Provider>
  );
};
