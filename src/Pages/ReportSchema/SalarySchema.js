import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SalarySchema = () => {
  const tableDatas = [
    {
      particulars: "Basic pay",
      income: 10,
      taxExempted: false,
    },
    {
      particulars: "Arrear pay (if not included in taxable income earlier)",
      income: 11,
      taxExempted: true,
    },
    {
      particulars: "Special allowance",
      income: 12,
      taxExempted: true,
    },
    {
      particulars: "House rent allowance",
      income: 13,
      taxExempted: true,
    },
    {
      particulars: "Medical allowance",
      income: 14,
      taxExempted: true,
    },
    {
      particulars: "Conveyance allowance",
      income: 15,
      taxExempted: true,
    },
    {
      particulars: "Festival Allowance",
      income: 16,
      taxExempted: false,
    },
    {
      particulars: "Allowance for support staff",
      income: 17,
      taxExempted: true,
    },
    {
      particulars: "Leave allowance",
      income: 18,
      taxExempted: true,
    },
    {
      particulars: "Honorarium/ Reward/Fee",
      income: 19,
      taxExempted: true,
    },
    {
      particulars: "Overtime allowance",
      income: 20,
      taxExempted: true,
    },
    {
      particulars: "Baisakhi Allowance",
      income: 21,
      taxExempted: true,
    },
    {
      particulars: "Interest accrued on provident fund",
      income: 22,
      taxExempted: true,
    },
    {
      particulars: "Lamp grant",
      income: 23,
      taxExempted: true,
    },
    {
      particulars: "Gratuity",
      income: 24,
      taxExempted: true,
    },
    {
      particulars: "Others, if any",
      income: 25,
      taxExempted: true,
    },
  ];

  const table2Datas = [
    {
      particulars: "Basic pay",
      income: 10,
    },
    {
      particulars: "Allowances",
      income: 11,
    },
    {
      particulars: "Advance Salary",
      income: 12,
    },
    {
      particulars: "Gratuity, Annuity, Pension or similar benefits",
      income: 13,
    },
    {
      particulars: "Perquisites",
      income: 14,
    },
    {
      particulars: "In lieu of or in addition to salary or wages",
      income: 15,
    },
    {
      particulars: "Income from Employees' share scheme",
      income: 16,
    },
    {
      particulars: "Accommodation benefits",
      income: 17,
    },
    {
      particulars: "Car benefits",
      income: 18,
    },
    {
      particulars: "Any other benefits provided by employer",
      income: 19,
    },
    {
      particulars: "Employer's contribution to recognized provident fund",
      income: 20,
    },
    {
      particulars: "Others",
      income: 21,
    },
  ];

  const handleSum = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
      sum += element.income;
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

  const total = handleSum(tableDatas);
  const taxExemptedIncome = filteredSum(tableDatas, true);
  const taxableIncome = filteredSum(tableDatas, false);

  const totalSalaryIncome = handleSum(table2Datas);
  const exemptedSalary = Math.min(totalSalaryIncome / 3, 350000);
  const totalIncome = totalSalaryIncome - exemptedSalary;
  //   console.log(total);
  //   console.log(taxExemptedIncome, taxableIncome);

  const tinNumber = "123456789012";
  // Array.from(tinNumber).forEach((element) => {
  //   console.log(element);
  // });

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "TestPdf",
  });

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
        <div>
          <div>
            <p className="font-bold text-center mb-2">
              Particulars of income from Salaries
            </p>
            <p>
              a. This part is applicable for employees receiving Salary under
              Govt. pay scale
            </p>
            <p className="mt-3 mb-[6px]">
              Name of the Assessee:{" "}
              <span className="ml-3 font-bold">Abu Babu</span>
            </p>
            <div className="flex justify-end items-center gap-2">
              <p className="font-bold">TIN:</p>
              <table className="border-collapse border border-slate-400 ...">
                <thead>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    {Array.from(tinNumber).map((element, i) => (
                      <td className="border border-black w-6 text-center font-bold">
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
                  <th className="border border-black">Particulars</th>
                  <th className="border border-black">Income ৳</th>
                  <th className="border border-black">
                    Tax exempted Income ৳ <br />
                    (B)
                  </th>
                  <th className="border border-black">Taxable Income ৳</th>
                </tr>
              </thead>
              <tbody>
                {tableDatas.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-black text-center">{i + 1}</td>
                    <td className="border border-black pl-2">
                      {data.particulars}
                    </td>
                    <td className="border border-black text-right w-16 lg:w-32 pr-2">
                      {data.income}
                    </td>
                    {data.taxExempted ? (
                      <td className="border border-black text-right w-16 lg:w-32 pr-2">
                        {data.income}
                      </td>
                    ) : (
                      <td className="border border-black text-center font-semibold w-16 lg:w-32">
                        -
                      </td>
                    )}
                    {!data.taxExempted ? (
                      <td className="border border-black text-right w-16 lg:w-32 pr-2">
                        {data.income}
                      </td>
                    ) : (
                      <td className="border border-black text-center font-semibold w-16 lg:w-32">
                        -
                      </td>
                    )}
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="border border-black text-center">
                    {tableDatas.length + 1}
                  </td>
                  <td className="border border-black pl-2">Total</td>
                  <td className="border border-black text-right w-16 lg:w-32 pr-2">
                    {total}
                  </td>
                  <td className="border border-black text-right w-16 lg:w-32 pr-2">
                    {taxExemptedIncome}
                  </td>
                  <td className="border border-black text-right w-16 lg:w-32 pr-2">
                    {taxableIncome}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="my-3">
            <p>
              b. This part is applicable for employees other than employees
              receiving Salary under Govt. pay scale
            </p>
          </div>
          <div className="my-2">
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black">Sl.</th>
                  <th className="border border-black">Particulars</th>
                  <th className="border border-black">Income ৳</th>
                  <th className="border border-black">Income ৳</th>
                </tr>
              </thead>
              <tbody>
                {table2Datas.map((data, i) => (
                  <tr key={i}>
                    <td className="border border-black text-center">{i + 1}</td>
                    <td className="border border-black pl-2">
                      {data.particulars}
                    </td>
                    <td className="border border-black text-right w-16 lg:w-32 pr-2">
                      {data.income}
                    </td>
                    {i[0] === 0 && (
                      <td className="border border-black text-right w-16 lg:w-32 pr-2"></td>
                    )}
                  </tr>
                ))}
                <tr>
                  <td className="border border-black text-center">
                    {table2Datas.length + 1}
                  </td>
                  <td className="border border-black pl-2">
                    Total salary income (aggregate of 1 to 12){" "}
                  </td>
                  <td rowSpan={3}></td>
                  <td className="border border-black text-right w-16 lg:w-32 pr-2">
                    {totalSalaryIncome}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black text-center">
                    {table2Datas.length + 2}
                  </td>
                  <td className="border border-black pl-2">
                    Exempted Salary (As per 6th schedule Part 1)
                  </td>
                  <td className="border border-black text-right w-16 lg:w-32 pr-2">
                    {exemptedSalary}
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="border border-black text-center">
                    {table2Datas.length + 3}
                  </td>
                  <td className="border border-black pl-2">
                    Total Income from Salary (13-14)
                  </td>
                  <td className="border border-black text-right w-16 lg:w-32 pr-2">
                    {totalIncome}
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

export default SalarySchema;
