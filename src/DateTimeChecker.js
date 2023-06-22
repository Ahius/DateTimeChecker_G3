import React, { useState } from "react";

function DateTimeChecker() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  function checkDateTime() {
    if (day === "") {
      //showMessage("Input data for day is null");  //Correct
      showMessage('Input data for Day is out of range') //Defect001
      return;
    }

    if (month === "") {
      showMessage("Input data for Month is null");
      return;
    }

    if (year === "") {
      //showMessage("Input data for year is null"); //Correct
      showMessage('Input data for Year is out of range') //Defect003
      return;
    }

    if (!isNumeric(day)) {
      //showMessage("Input data for day is incorrect format"); //Correct
      showMessage('Input data for Day is null') //Defect002
      return;
    }

    if (!isNumeric(month)) {
      showMessage("Input data for Month is incorrect format");
      return;
    }

    if (!isNumeric(year)) {
      //showMessage("Input data for year is incorrect format"); //Correct
      showMessage('Input data for Year is null') //Defect004
      return;
    }

    const dayValue = parseInt(day);
    const monthValue = parseInt(month);
    const yearValue = parseInt(year);

    if (dayValue < 1 || dayValue > 31) {
      //showMessage("Input data for day is out of range");//Correct
      showMessage('Input data for Month is out of range') //DEFECT005 & DEFECT006
      return;
    }

    if (monthValue < 1 || monthValue > 12) {
      //showMessage("Input data for Month is out of range"); //Correct
      showMessage('Input data for Day is out of range') //DEFECT007 & DEFECT008
      return;
    }

    if (yearValue < 1000 || yearValue > 3000) {
      showMessage("Input data for Year is out of range");
      return;
    }

    const dateTimeString = `${day}/${month}/${year}`;

    if (isValidDateTime(dateTimeString)) {
      showMessage(`${dateTimeString} is a correct date time`);
    } else {
      showMessage(`${dateTimeString} is NOT a correct date time`);
    }
  }

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  function isValidDateTime(dateTimeString) {
    const dateTimeRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if (!dateTimeRegex.test(dateTimeString)) {
      return false;
    }

    const [, day, month, year] = dateTimeString.match(dateTimeRegex);
    const date = new Date(year, month - 1, day);

    if (
      date.getDate() !== parseInt(day) ||
      date.getMonth() !== parseInt(month) - 1 ||
      date.getFullYear() !== parseInt(year)
    ) {
      return false;
    }

    if (parseInt(month) === 2) {
      if (parseInt(day) > 29) {
        return false;
      }
      if (parseInt(day) === 29) {
        if (parseInt(year) % 400 === 0) {
          return true;
        } else if (parseInt(year) % 100 === 0) {
          return false;
        } else if (parseInt(year) % 4 === 0) {
          return true;
        }

      }
    } else if ([4, 6, 9, 11].includes(parseInt(month))) {
      if (parseInt(day) > 30) {
        return false;
      }
    }
    return true;
  }
  function showMessage(message) {
    setMessage(message);
    setMessageVisible(true);
  }

  function closeMessage() {
    setMessageVisible(false);
  }

  function resetFields() {
    setDay("");
    setMonth("");
    setYear("");
    setMessage("");
    setMessageVisible(false);
  }

  return (
    <div className="container">
      <img
        width="150px"
        height="110px"
        src="./images/logo.jpg"
        alt="logo-fpt-university"
      />
      <h1>Date Time Checker</h1>

      <div className="form-group">
        <label htmlFor="dayInput">Day:</label>
        <input
          type="text"
          id="dayInput"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="monthInput">Month:</label>
        <input
          type="text"
          id="monthInput"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="yearInput">Year:</label>
        <input
          type="text"
          id="yearInput"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button onClick={checkDateTime}>Check</button>
        <button onClick={resetFields}>Reset</button>
      </div>

      {messageVisible && (
        <div data-testid="messageTable">
          <div className="error">
            {message}
          </div><br />
          <button onClick={closeMessage}>OK</button>
        </div>
      )}
    </div>
  );
}

export default DateTimeChecker;
