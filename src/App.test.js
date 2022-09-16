import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import { Calc } from "./helper/Calc";
import PaybackTable from "./components/PaybackTable";

const data = {
  amount: 100000,
  installments: 12,
  profitRate: 2.28,
  installmentInterval: 30,
  BSMV: 0.05,
  KKDF: 0.15,
};
const resultArray = Calc(data);

describe("paybackTable", () => {
  afterEach(cleanup);
  it("Check table values is correct", () => {
    render(<PaybackTable resultArray={resultArray} />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    const tableRows = screen.getAllByRole("row");
    expect(tableRows.length).toBe(13);

    const tableCells = screen.getAllByRole("cell");
    expect(tableCells.length).toBe(84);

    const tableHeaders = screen.getAllByRole("columnheader");
    expect(tableHeaders.length).toBe(7);
  });

  it("Check resultAarray in table", () => {
    render(<PaybackTable resultArray={resultArray} />);

    const tableRows = screen.getAllByRole("row");

    const row1 = tableRows[1];

    for (let i = 1; i < 7; i++) {
      // eslint-disable-next-line testing-library/no-node-access
      const cell = row1.children[i];

      expect(cell.textContent).toBe(
        Object.values(resultArray[0])[i].toFixed(2).toString()
      );
    }
  });
});
