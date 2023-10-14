import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const DynamicForm = () => {
  // const preloadedData = {
  //   name: "Abu",
  //   age: 27,
  // };

  // const { control, handleSubmit, watch, setValue, register } = useForm({
  //   defaultValues: preloadedData,
  // });

  const [numbers, setNumbers] = useState({
    num1: 0,
    num2: 0,
    num3: 0,
  });

  const { control, handleSubmit, watch, setValue, register } = useForm();

  const onSubmit = (data) => {
    console.log("b:", data);

    // if (data.age === NaN) {
    //   setValue("age", 0);
    // }
    // console.log("a:", data);
  };

  // const datas = {
  //   name: "x",
  //   changed_name: "y",
  //   changed_name2: "z",
  //   changed_name3: 3,
  // };

  // const handleNameChange = (newName) => {
  //   // Update the greeting field whenever the name field changes
  //   const greeting = `${newName}!`;
  //   setValue("greeting", greeting);
  // };

  // useEffect(() => {
  //   setValue("name", datas?.name);
  //   setValue("changed_name", datas?.changed_name);
  //   setValue("changed_name2", datas?.changed_name2);
  //   setValue("changed_name3", datas?.changed_name3);
  // }, [setValue]);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    // console.log(fieldName, value);
    // // setValue("changed_name", e.target.value + "x");
    // // setValue("changed_name2", e.target.value + "y");
    // // setValue("changed_name3", e.target.value + "z");
    // // setValue("num2", parseFloat(e.target.value) + 10);
    // if (isNaN(value)) {
    //   setValue(fieldName, 0);
    //   // setNumbers(fieldName:0)
    //   numbers.fieldName = 0;
    // } else {
    //   numbers.fieldName = value;
    // }
    // console.log("numbers:", numbers);
    numbers.fieldName = value;

    // const { num1, num2 } = numbers;
    // setValue("num3", num1 + num2);
  };

  useEffect(() => {
    // const num1Value = numbers.num1;
    // const num2Value = numbers.num1;
    // setValue("num3", num1Value + num2Value);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div>
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleNameChange(e.target.value);
              }}
              className="border border-black"
            />
          )}
        />
      </div>

      <div>
        <label>Greeting</label>
        <Controller
          name="greeting"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input {...field} readOnly className="border border-black" />
          )}
        />
      </div> */}

      {/* <div>
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          defaultValue="" // This will be overridden by the useEffect
          render={({ field }) => (
            <input {...field} className="border border-black" />
          )}
        />
      </div> */}
      <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">
          Num1
          {/* {requiredStatus && <span className="text-red-500">*</span>} */}
        </label>
        <input
          type="number"
          // placeholder="Type here"
          defaultValue={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`num1`, {
            valueAsNumber: true,
          })}
          onChange={handleChange}
        />
      </div>
      <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">
          num2{" "}
          {/* {requiredStatus && <span className="text-red-500">*</span>} */}
        </label>
        <input
          type="number"
          // placeholder="Type here"
          defaultValue={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`num2`, {
            valueAsNumber: true,
          })}
          onChange={handleChange}
        />
      </div>
      <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">
          num3
          {/* {requiredStatus && <span className="text-red-500">*</span>} */}
        </label>
        <input
          type="number"
          // placeholder="Type here"
          defaultValue={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`num3`, {
            valueAsNumber: true,
          })}
        />
      </div>
      {/* <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">
          Changed Name
          {requiredStatus && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          placeholder="Type here"
          defaultValue={}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`changed_name2`, {
            required: true,
          })}
        />
      </div>
      <div className="w-full lg:w-3/4 my-2 flex items-center">
        <label className="w-3/5 p-[6px]">
          Changed Name
          {requiredStatus && <span className="text-red-500">*</span>}
        </label>
        <input
          type="number"
          placeholder="Type here"
          defaultValue={0}
          className="w-2/5 p-1 border border-primary rounded-sm focus:outline-none"
          {...register(`changed_name3`, {
            valueAsNumber: true,
          })}
        />
      </div> */}

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;

// import React from "react";
// import { useForm } from "react-hook-form";

// function MyForm() {
//   const { handleSubmit, register, setValue, getValues } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const inputValue = getValues("numberField");
//   const inputDisplayValue = isNaN(inputValue) ? 0 : inputValue;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="numberField">Number Field</label>
//       <input
//         type="number"
//         {...register("numberField", {
//           valueAsNumber: true,
//         })}
//         value={inputDisplayValue} // Set a default value of 0 if empty
//         // onChange={(e) => setValue("numberField", e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;
