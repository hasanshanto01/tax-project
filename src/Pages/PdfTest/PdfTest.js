import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useReactToPrint } from "react-to-print";

const PdfTest = () => {
  const [dynamicValue, setDynamicValue] = useState("");
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "TestPdf",
  });

  const { handleSubmit, control, reset, setValue } = useForm();

  useEffect(() => {
    setDynamicValue("abc");
  }, []);

  const onSubmit = (data) => {
    // Handle the submitted data here, you can access it as 'data.fieldName'
    console.log("d:", data);
    // reset();
    // setValue("fieldName", "abc");
    console.log("a:", data);
  };

  // const e = "kabu";

  // const handleOnchange = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   // setFieldValue(value);
  // };

  // useEffect(() => {
  //   setValue("example", fieldValue);
  // }, [setValue]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.fieldName.value);
  // };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">PDF</h2>
      <div className="overflow-x-auto" ref={componentRef}>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary btn-sm my-5" onClick={handlePrint}>
        Print
      </button>

      <div className="border border-red-400 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fieldName">Field Name:</label>
          <Controller
            name="fieldName"
            control={control}
            defaultValue={dynamicValue}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="border border-yellow-500"
              />
            )}
          />
          {/* <input
            type="text"
            name="fieldName"
            defaultValue={dynamicValue}
            className="border border-yellow-500"
          /> */}
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PdfTest;
