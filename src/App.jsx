import { CreditInformationProvider } from "./context/CreditInformation";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./pages/home/Home";
import ResultTable from "./pages/result/Result";

function App() {
  return (
    <CreditInformationProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payback" element={<ResultTable />} />
      </Routes>
    </CreditInformationProvider>
  );
}

export default App;
