import { CreditInformationProvider } from "./context/CreditInformation";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import ResultTable from "./pages/result/Result";

function App() {
  return (
    <CreditInformationProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payback" element={<ResultTable />} />
      </Routes>
    </CreditInformationProvider>
  );
}

export default App;
