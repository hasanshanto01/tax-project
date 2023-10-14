import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const TestForm = () => {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  // const [num3, setNum3] = useState(0);

  const [num, setNum] = useState({
    num1: 0,
    num2: 0,
    num3: 0,
  });

  const { num1, num2, num3 } = num;

  // const { handleSubmit, watch, setValue, register } = useForm();

  // const num1 = watch("num1");
  // const num2 = watch("num2");

  // const handleChange = (e) => {
  //   const fieldName = e.target.name;
  //   const value = e.target.value;
  //   console.log(fieldName, value);

  //   // Check if num1 and num2 have values and update num3 with their sum
  //   // if (!isNaN(num1) && !isNaN(num2)) {
  //   //   setValue("num3", num1 + num2);
  //   // }
  //   // if (fieldName === "num1") {
  //   //   setNum1(value);
  //   // } else if (fieldName === "num2") {
  //   //   setNum2(value);
  //   // }
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(num1, num2, num3);
    console.log(num);
    // console.log("b:", data);
    // const formData = new FormData();
    // if (data) {
    //   formData.append("n1", data.num1);
    //   formData.append("n2", data.num2);
    //   formData.append("n3", data.num3);
    // }
    // console.log("fd:", formData.num3);
  };

  useEffect(() => {
    // set(num1 + num2);
    setNum({ ...num, num3: num1 + num2 });
    // setValue("num3", num3);
    // console.log(num3);
  }, [num1, num2]);

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <form onSubmit={onSubmit}>
      <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">Num1</label>
        <input
          type="number"
          // defaultValue={0}
          defaultValue={num1}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          // {...register(`num1`, {
          //   valueAsNumber: true,
          // })}
          onChange={(e) => {
            setNum({ ...num, num1: Number(e.target.value) });
          }}
        />
      </div>
      <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">num2</label>
        <input
          type="number"
          // defaultValue={0}
          defaultValue={num2}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          // {...register(`num2`, {
          //   valueAsNumber: true,
          // })}
          onChange={(e) => {
            setNum({ ...num, num2: Number(e.target.value) });
          }}
        />
      </div>
      <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">num3</label>
        <input
          type="number"
          defaultValue={num3}
          // value={num3}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          // {...register(`num3`, {
          //   valueAsNumber: true,
          // })}
          // onChange={(e) => {
          //   setNum3(Number(e.target.value));
          // }}
        />
      </div>

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default TestForm;
