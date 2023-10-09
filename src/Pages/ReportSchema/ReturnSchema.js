import React, { useRef } from "react";

import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ReturnSchema = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "TestPdf",
  });

  const tinNumber = "123456789012";

  const tableDatas = [
    {
      particulars: "Income from Employment (annex Schedule 1)",
      amount: 10,
    },
    {
      particulars: "Income from Rent (annex Schedule 2)",
      amount: 11,
    },
    {
      particulars: "Income from Agriculture (annex Schedule 3)",
      amount: 12,
    },
    {
      particulars: "Income from Business (annex Schedule 4)",
      amount: 13,
    },
    {
      particulars: "Income from Capital Gain",
      amount: 14,
    },
    {
      particulars:
        "Income from Financial Assets (Bank Interest, Dividend, Securities Profit etc)",
      amount: 15,
    },
    {
      particulars:
        "Income from Other Sources (Royalty, License Fees, Honorarium, Govt. Incentive etc.)",
      amount: 16,
    },
    {
      particulars: "Share of Income from Firm or AoP",
      amount: 17,
    },
    {
      particulars: "Income of Minor or Spouse (if not Taxpayer)",
      amount: 18,
    },
    {
      particulars: "Taxable Income from Abroad",
      amount: 19,
    },
  ];

  const table2Datas = [
    {
      particulars: "Gross Tax on Taxable Income",
      amount: 10,
    },
    {
      particulars: "Tax Rebate (annex Schedule 5)",
      amount: 11,
    },
    {
      particulars: "Net Tax after Rebate (12 – 13)",
      amount: 12,
    },
    {
      particulars: "Minimum Tax",
      amount: 13,
    },
    {
      particulars: "Tax Payable (Higher of 14 and 15)",
      amount: 14,
    },
  ];

  const handleSum = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      sum += element.amount;
    });
    return sum;
  };

  const filteredSum = (arr, taxExemptedValue) => {
    const filteredArray = arr.filter(
      (element) => element.taxExempted === taxExemptedValue
    );
    const sum = handleSum(filteredArray);
    return sum;
  };

  const amount = handleSum(tableDatas);
  const taxExemptedIncome = filteredSum(tableDatas, true);
  const taxableIncome = filteredSum(tableDatas, false);

  return (
    <div className="w-full mb-10">
      <div className="justify-between mr-20 mt-5 mb-2 hidden lg:flex">
        <div className="ml-20">
          <Link to="/report" className="btn btn-sm btn-outline btn-primary">
            <FontAwesomeIcon icon={faArrowLeftLong} className="w-4 h-4" />
          </Link>
        </div>
        <button
          className="btn btn-sm btn-outline btn-primary"
          onClick={handlePrint}
        >
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
        </button>
      </div>
      <div
        className="w-full lg:w-[65%] lg:mx-auto my-3 lg:my-0 mb-6 p-3 text-sm border border-red-500"
        ref={componentRef}
      >
        <div>
          <div className="border border-yellow-400">
            <p className="font-bold text-center mb-2">
              Statement of Income and Tax during the Income Year ended
              on..........................
            </p>
            <p className="my-3 font-bold">
              Name of the Taxpayer: ……………………………………………………………………....
            </p>
            <div className="flex justify-center items-center gap-2">
              <p className="font-bold">TIN:</p>
              <table className="border-collapse border border-black">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    {Array.from(tinNumber).map((element, i) => (
                      <td
                        className="border border-black w-6 text-center font-bold"
                        key={i}
                      >
                        {element}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-2 border border-blue-600">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black">Sl.</th>
                  <th className="border border-black">Particulars</th>
                  <th className="border border-black w-36 lg:w-56">
                    Amount in Taka
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableDatas.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-black text-center">{i + 1}</td>
                    <td className="border border-black pl-2">
                      {data.particulars}
                    </td>
                    <td className="border border-black text-right w-36 lg:w-56 pr-2">
                      {data.amount}
                    </td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="border border-black text-center">
                    {tableDatas.length + 1}
                  </td>
                  <td className="border border-black pl-2">
                    Total Income (Aggregate of Serial 1 to 10)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {amount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="mt-8 border border-green-600">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black">Sl.</th>
                  <th className="border border-black">Tax Computation</th>
                  <th className="border border-black w-36 lg:w-56">
                    Amount in Taka
                  </th>
                </tr>
              </thead>
              <tbody>
                {table2Datas.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-black text-center">
                      {i + 12}
                    </td>
                    <td className="border border-black pl-2">
                      {data.particulars}
                    </td>
                    <td className="border border-black text-right w-36 lg:w-56 pr-2">
                      {data.amount}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="border border-black text-center">17</td>
                  <td className="border border-black pl-2">
                    (a) Net Wealth Surcharge (if applicable)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {amount}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black text-center"></td>
                  <td className="border border-black pl-2">
                    (b) Environmental Surcharge (if applicable)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {amount}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black text-center">18</td>
                  <td className="border border-black pl-2">
                    Delay Interest, Penalty or any other amount Under Income Tax
                    Act (if any)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {amount}
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="border border-black text-center">19</td>
                  <td className="border border-black pl-2">
                    Total Amount Payable (16 + 17 + 18)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {amount}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-16 flex justify-center gap-8 lg:hidden">
        <Link
          to="/report"
          className="w-[150px] btn btn-sm btn-outline btn-primary"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="w-4 h-4" />
        </Link>
        <button
          className="w-[150px] btn btn-sm btn-outline btn-primary"
          onClick={handlePrint}
        >
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ReturnSchema;
