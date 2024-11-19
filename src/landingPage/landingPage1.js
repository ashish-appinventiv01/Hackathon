import React, { useState, useEffect } from "react";
import "../styling/Styling.css";

import Select from "react-select";

const LandingPage = () => {
  const [input, setInput] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [container, setContainer] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [search, setSearch] = useState(0);
  const [searchList, setSearchList] = useState([]);
  const [searchCheck, setSearchCheck] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const handleExpenses = () => {
    if (input !== "" && expenseType !== "") {
      const newObject = {
        input: parseFloat(input),
        expenseType,
        date: new Date().toLocaleDateString(),
        selectedType,
      };
      // console.log(typeof(input), "<<<<<<<<<CHECK>>>>>>>>")

      setContainer([newObject, ...container]);
      setTotalExpense((prevTotal) => prevTotal + parseFloat(input));
      setInput("");
      setExpenseType("");
    } else {
      window.alert("Please provide valid input and Expense Type.");
    }
  };
  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem('items'));
    console.log(items, ">>>>>>>>>>>>>>>>......");
    if (items) {
     setContainer(items);
    }
    console.log("><><<><><><><>>><>><><><><", items)
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(container), "dhjcvje")
    window.localStorage.setItem('items', JSON.stringify(container))

  },[handleExpenses])

  const handleDelete = (index) => {
    // console.log("<><><><<><><><><<><><><><><><><><", index);
    setSearchCheck(false)
    const deletedExpense = container[index];
    const updatedContainer = container.filter((_, id) => id !== index);
    setContainer(updatedContainer);
    setTotalExpense((prevTotal) => prevTotal - deletedExpense.input);
  };
  const options = [
    { value: "Expenditure", label: "Expenditure" },
    { value: "Earning", label: "Earning" },
  ];
  const handleSearch = () => {
    const searchValue = container.filter((entity, id) => entity.input < search);
    // console.log("Checking filter value",searchValue);
    setSearchList(searchValue);
    setSearchCheck(true);
  };
  return (
    <div className="parent-landing-page">
      <input
        type="text"
        placeholder="Expense type"
        className="inputBoxes"
        value={expenseType}
        onChange={(e) => setExpenseType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your Expense/Income"
        className="inputBoxes"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Select
        style={{ color: "white" }}
        onChange={(e) => {
        //   console.log("hjvchj", e.value);
          setSelectedType(e.value);
        }}
        options={options}
      />
      <button onClick={handleExpenses} className="submit-button">
        {" "}
        Add Expense{" "}
      </button>
      <input
        type="expenditure"
        placeholder="Search on basis of Expenditure"
        className="inputBoxes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
       
      <button className="submit-button" onClick={() => handleSearch()}> Enter filter Amount </button> 

      <div className="LandingPage-display">
        { searchCheck == false ? (
          <div>
            {" "}
            <div>Total Expense List</div>
            <div>
              {container.length > 0 ? (
                container.map((entity, id) => (
                  <div className="GridTable" key={id}>
                    <ul>
                      <li className="list-line">
                        <span className="spanblock">{entity.input}</span>
                        <span className="spanblock">{entity.expenseType}</span>
                        <span className="spanblock">{entity.date}</span>
                        <span className="spanblock">{entity.selectedType}</span>
                        <button
                          className="submit-button"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                ))
              ) : (
                <p>Nothing in queue</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div>Filter the list on the basis of Search amount</div>
            <div>
              {searchList.length > 0 ? (
                searchList.map((entity, id) => (
                  <div className="GridTable" key={id}>
                    <ul>
                      <li className="list-line" style={{width:"100%"}}>
                        <span className="spanblock" >{entity.input}</span>
                        <span className="spanblock" >{entity.expenseType}</span>
                        <span className="spanblock">{entity.date}</span>
                        <button
                          className="submit-button"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                ))
              ) : (
                <p>Nothing in queue</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div>
        <strong>Total Expenditure: {totalExpense}</strong>
      </div>
      {/* <Summary/> */}
    </div>
  );
};

export default LandingPage;
