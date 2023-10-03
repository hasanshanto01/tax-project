import React from "react";
import { Link } from "react-router-dom";

const ReportPage = () => {
  const reportList = [
    {
      reportName: "Salary",
      path: "salarySchema",
    },
    {
      reportName: "Home & Agriculture",
      path: "home&AgricultureSchema",
    },
    {
      reportName: "Business & Credit",
      path: "business&CreditSchema",
    },
  ];

  return (
    <div className="w-full lg:w-[82%] mx-8 my-5">
      <div className="overflow-x-auto bg-secondary my-5 p-2">
        <table className="w-3/5 table table-zebra">
          {/* head */}
          <thead className="text-base">
            <tr>
              <th></th>
              <th>Report Name</th>
            </tr>
          </thead>
          <tbody>
            {reportList.map((report, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Link
                    to={`/report/${report.path}`}
                    className="hover:underline"
                  >
                    {report.reportName}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportPage;
