import React, { useRef } from "react";

import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import "./ReturnSchema.css";

const ReturnSchema = () => {
  const returnReportData = useLoaderData();
  console.log("rr:", returnReportData);

  const {
    Basic_Info,
    Particulars_f_Income,
    Particulars_of_Tax_Payment,
    Tax_Consumption,
  } = returnReportData;

  const Particulars_f_Income_Array = Object.entries(Particulars_f_Income);
  // console.log(Particulars_f_Income_Array);

  // const {Net_wealth_surcharge
  // } = Tax_Consumption;

  // const {}

  // const { Circle, TIN } = returnReportData || {};

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "TestPdf",
  });

  const tinNumber = "123456789012";
  const dob = "01012023";

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
      particulars: "Net Tax after Rebate (12 - 13)",
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

  const table3Datas = [
    {
      particulars: "Tax Deducted or Collected at Source (attach proof)",
      amount: 21,
    },
    {
      particulars: "Advance Tax paid (attach proof",
      amount: 22,
    },
    {
      particulars:
        " Adjustment of Tax Refund {mention assessment year(s) of refund}",
      amount: 23,
    },
    {
      particulars: "Minimum TaxTax Paid with this Return",
      amount: 24,
    },
  ];

  const handleSum = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      // console.log(element);
      sum += element[1];
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

  const totalIncome = handleSum(Particulars_f_Income_Array);
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
        className="w-full lg:w-[65%] lg:mx-auto my-3 lg:my-0 mb-6 p-3 text-sm"
        ref={componentRef}
      >
        <div className="w-[210mm] h-[270mm] border p-2">
          <br />
          <br />
          <div className="flex items-center justify-center ">
            <div className="text-center">
              <p className="font-bold text-base">National Board of Revenue</p>
              <Link to="www.nbr.gov.bd" className="font-bold underline">
                www.nbr.gov.bd
              </Link>
            </div>
            {/* <p className="font-bold text-base">IT-11GA (2023)</p> */}
          </div>
          <div className="mt-8 flex justify-between">
            <div>
              <table className="w-full border-collapse border border-black">
                <thead>
                  <tr>
                    <th className="font-bold text-base" colSpan={2}>
                      For Office Use
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold">
                  <tr>
                    <td className="border border-black pl-2 pr-14">
                      Serial No. of Return Register
                    </td>
                    <td className="border border-black text-right w-36 lg:w-40 pr-2">
                      {}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black pl-2">
                      Volume No. of Return Register
                    </td>
                    <td className="border border-black text-right w-36 lg:w-40 pr-2">
                      {}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black pl-2">
                      Date of Return Submission
                    </td>
                    <td className="border border-black text-right w-36 lg:w-40 pr-2">
                      {}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-center mr-4 font-bold text-base">
                FORM OF RETURN OF INCOME <br /> FOR NATURAL PERSON
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="my-1 flex gap-3">
              <p>1. Name of the Taxpayer:</p>
              <p className="border-dashed border-b-2 border-black w-[75%]">
                {Basic_Info?.Name_of_the_Assessee}
              </p>
            </div>
            <div className="my-1 flex gap-3">
              <p>2. National ID No. / Passport No. (If No NID):</p>
              <p className="border-dashed border-b-2 border-black w-3/5">
                {Basic_Info?.nid}
              </p>
            </div>
            <div className="flex  items-center gap-8 my-1">
              <p>3. TIN:</p>
              <table className="border-collapse border border-black">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    {Array.from(Basic_Info?.TIN).map((element, i) => (
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
            <div className="my-1 flex">
              <div className="my-1 flex gap-3 w-1/2">
                <p>4. (a) Circle:</p>
                <p className="border-dashed border-b-2 border-black w-[65%]">
                  {Basic_Info?.Circle}
                </p>
              </div>
              <div className="my-1 flex gap-3 w-1/2">
                <p>(b) Taxes Zone:</p>
                <p className="border-dashed border-b-2 border-black w-[65%]">
                  {Basic_Info?.Tax_Zone}
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-1">
              <div className="my-1 flex gap-3 w-1/2">
                <p>5. Assessment Year:</p>
                <p className="border-dashed border-b-2 border-black w-[55%]">
                  {Basic_Info?.Assessment_Year}
                </p>
              </div>
              <p className="flex items-center">
                6. Residential Status: Resident{" "}
                <input
                  type="checkbox"
                  className="mx-1"
                  checked={Basic_Info?.Resident_Status === "Resident"}
                />{" "}
                / Non-resident{" "}
                <input
                  type="checkbox"
                  className="mx-1"
                  checked={Basic_Info?.Resident_Status === "Non-Resident"}
                />
              </p>
            </div>
            <div className="flex items-center my-1">
              7. Taxpayer's Status:
              <p className="flex items-center mx-8">
                Individual <input type="checkbox" className="mx-1" />
              </p>
              <p className="flex items-center mx-8">
                Firm <input type="checkbox" className="mx-1" />
              </p>
              <p className="flex items-center mx-8">
                Hindu Undivided Family
                <input type="checkbox" className="mx-1" />
              </p>
              <p className="flex items-center mx-8">
                Others <input type="checkbox" className="mx-1" />
              </p>
            </div>
            <div className="my-1">
              8. Tick on the box for getting special benefit:
              <div className="grid grid-cols-4 items-center">
                <p className="flex items-center col-span-2">
                  A gazette war-wounded freedom fighter{" "}
                  <input type="checkbox" className="mx-1" />
                </p>
                <p className="flex items-center">
                  Female <input type="checkbox" className="mx-1" />
                </p>
                <p className="flex items-center">
                  Third gender
                  <input type="checkbox" className="mx-1" />
                </p>
                <p className="flex items-center">
                  Disable person <input type="checkbox" className="mx-1" />
                </p>
                <p className="flex items-center">
                  Aged 65 years or more{" "}
                  <input type="checkbox" className="mx-1" />
                </p>
                <p className="flex items-center col-span-2">
                  A parent of a person with disability
                  <input type="checkbox" className="mx-1" />
                </p>
              </div>
            </div>
            <div className="my-1">
              <p>9. Date of Birth (DD MM YYYY)</p>

              <table className="border-collapse border border-black ml-3">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    {Array.from(dob).map((element, i) => (
                      <td
                        className="border border-black w-8 text-center font-bold"
                        key={i}
                      >
                        {element}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-1">
              <p>
                10. Wife/Husband's Name:
                ...............................................................................................................................................................................................
              </p>
              <p className="ml-6">
                TIN (if spouse is a Taxpayer):
                ....................................................................................................................................................................................
              </p>
            </div>
            <div className="my-1">
              <div className="my-1 flex gap-3">
                <p>11. Address:</p>
                <p className="border-dashed border-b-2 border-black w-[85%]">
                  {Basic_Info?.address}
                </p>
              </div>
            </div>
            <div className="my-1 ml-8 flex gap-5">
              <div className="my-1 flex gap-3 w-1/3">
                <p>Telephone:</p>
                <p className="border-dashed border-b-2 border-black w-3/5">
                  {Basic_Info?.telephone.slice(3)}
                </p>
              </div>
              <div className="my-1 flex gap-3 w-1/3">
                <p>Mobile:</p>
                <p className="border-dashed border-b-2 border-black w-3/4">
                  {}
                </p>
              </div>
              <div className="my-1 flex gap-3 w-1/3">
                <p>e-mail:</p>
                <p className="border-dashed border-b-2 border-black w-3/5">
                  {Basic_Info?.email}
                </p>
              </div>
            </div>
            <div className="my-1">
              <p>
                12. If employed, employer's name (latest employer's name in case
                of multiple employment):
              </p>
              <p className="ml-20">
                ...........................................................................................................................................................................................................................
              </p>
              <p className="ml-20">
                ...........................................................................................................................................................................................................................
              </p>
            </div>
            <div className="my-1">
              <p>
                13. (a) Name of Organization:
                .........................................................................................................................................................................................
              </p>
              <p className="ml-6">
                (b) Business Identification number (BIN)
                ............................................................................................................................................................
              </p>
            </div>
            <div className="my-1">
              <p>
                14. Name and TIN of Partners / Members in case of Firm /
                Association of Persons:
              </p>
              <p className="ml-20">
                ...........................................................................................................................................................................................................................
              </p>
              <p className="ml-20">
                ...........................................................................................................................................................................................................................
              </p>
              <p className="ml-20">
                ...........................................................................................................................................................................................................................
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="w-[210mm] h-[270mm] border p-2">
          <br />
          <br />
          <div className="mt-8">
            <div className="">
              <p className="font-bold text-center mb-2">
                Statement of Income and Tax during the Income Year ended on{" "}
                <span className="border-dashed border-b-2 border-black">
                  {Basic_Info?.year_ended_on}
                </span>
              </p>
              <p className="my-3 font-bold">
                Name of the Taxpayer:{" "}
                <span className="border-dashed border-b-2 border-black inline-block w-3/5">
                  {Basic_Info?.Name_of_the_Assessee}
                </span>
              </p>
              <div className="flex justify-center items-center gap-2">
                <p className="font-bold">TIN:</p>
                <table className="border-collapse border border-black">
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Array.from(Basic_Info?.TIN).map((element, i) => (
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
            <div className="mt-2">
              <table className="w-full border-collapse border border-black">
                <thead>
                  <tr>
                    <th className="border border-black">Sl.</th>
                    <th className="border border-black">
                      Particulars of Income
                    </th>
                    <th className="border border-black w-36 lg:w-56">
                      Amount in Taka
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Particulars_f_Income_Array.map((data, i) => (
                    <tr key={i}>
                      <td className="border border-black text-center">
                        {i + 1}
                      </td>
                      <td className="border border-black pl-2">{data[0]}</td>
                      <td className="border border-black text-right w-36 lg:w-56 pr-2">
                        {data[1]}
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
                      {/* {amount} */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
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
                    {/* {amount} */}
                  </td>
                </tr>
                {/* <tr>
                  <td className="border border-black text-center"></td>
                  <td className="border border-black pl-2">
                    (b) Environmental Surcharge (if applicable)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    
                  </td>
                </tr> */}
                <tr>
                  <td className="border border-black text-center">18</td>
                  <td className="border border-black pl-2">
                    Delay Interest, Penalty or any other amount Under Income Tax
                    Act (if any)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="border border-black text-center">19</td>
                  <td className="border border-black pl-2">
                    Total Amount Payable (16 + 17 + 18)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <div className="w-[210mm] h-[270mm] border p-2">
          <br />
          <br />
          <div className="mt-8">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black">Sl.</th>
                  <th className="border border-black">
                    Particulars of Tax Payment
                  </th>
                  <th className="border border-black w-36 lg:w-56">
                    Amount in Taka
                  </th>
                </tr>
              </thead>
              <tbody>
                {table3Datas.map((data, i) => (
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
                  <td className="border border-black text-center">24</td>
                  <td className="border border-black pl-2">
                    Total Tax Paid and Adjusted (20 + 21 + 22 + 23)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black text-center">25</td>
                  <td className="border border-black pl-2">
                    Excess Payment (24 - 19)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {/* {amount} */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <table className="w-full border-collapse border border-black">
              <thead>{/*  */}</thead>
              <tbody>
                <tr>
                  <td className="border border-black text-center">26</td>
                  <td className="border border-black pl-2">
                    Tax Exempted / Tax Free Income (attach proof)
                  </td>
                  <td className="border border-black text-right w-36 lg:w-56 pr-2">
                    {}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <p className="text-center font-bold">
              List of Documents Furnished with this Return
            </p>
            <div className="h-60 border border-black"></div>
          </div>

          <div className="mt-8">
            <p className="text-center underline mb-3">Verification</p>
            <p className="ml-16 text-justify">
              I
              .................................................................................................
              father / husband
              ..................................................................................................
            </p>
            <p className="text-justify">
              TIN:
              .............................................................................
              Solemnly declare that to the best of my knowledge and belief the
              information given in this return and statements and documents
              annexed herewith is correct and complete.
            </p>
            <div className="my-4">
              <p>Place: ..............................................</p>
              <p>Date: ...............................................</p>
            </div>
            <div className="flex justify-end">
              <div className="text-center w-[200px]">
                <p className="my-3">Signature</p>
                <p>(Name in block letters)</p>
              </div>
            </div>
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
