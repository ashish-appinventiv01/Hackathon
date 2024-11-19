import React, { useEffect, useState } from "react";
import Select from "react-select";

const Summary = (container) => {
    console.log(container.container[0].date, "???????????????????????????????/")

    // useEffect(()=>{
    //     const calculate =( ) =>{
    //         // container.container.filter((date,id)= >{})
    //         const dateStr = ""
    //         const obj = new Date(dateStr)
    //         const day = obj.getDate()
           
    //     }
    //     calculate(container.container);
    
    // },[])
   

  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const options = [
    { value: "Expenditure", label: "Expenditure" },
    { value: "Earning", label: "Earning" },
  ];
  const options2 = [
    { value: "Days", label: "Days" },
    { value: "Month", label: "Month" },
    { value: "Year", label: "Year" },
  ];
  return (
    <>
      <div>Total Expense in {selectedTab}</div>
      <Select
        style={{ color: "white" }}
        onChange={(e) => {
        //   console.log("hjvchj", e.value);
          setSelectedType(e.value);
        }}
        options={options}
      />
      <Select
        style={{ color: "white" }}
        onChange={(e) => {
          setSelectedTab(e.value);
        }}
        options={options2}
      />
      <div>Total {selectedType} : </div>

    </>
  );
};

export default Summary;
