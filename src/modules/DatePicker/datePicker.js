import React, { useState } from 'react';
import './datePickerStyles.css';
import arrowLeft from './arrow_left.svg';
import arrowRight from './arrow_right.svg';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayNames = [
  'Mn',
  'Sn',
  'Sl',
  'Rb',
  'Km',
  'Jm',
  'Sb',
];


function DatePicker(params) {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

  const [active, setActive] = useState({date, month, year});
 
  const getDaysInMonth = () => {
    const daysArray = [];
    const daysInMonth = new Date(active.year, active.month +1, 0).getDate();
    
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    return daysArray;
  };

  const days = dayNames.map((value) => {
    return (<button className="days">{value}</button>);
  });

  const calendar = getDaysInMonth().map((value) => {
    const today = `${date}${month}${year}`;
    const activeDate = `${value}${active.month}${active.year}`;
    const isSelected = activeDate === `${active.date}${active.month}${active.year}`;;

    return (
      <button
        onClick={()=>setActive({
          ...active,
          date: value,
        })}
        className={`days ${today === activeDate ? 'today' : ''} ${isSelected ? 'selected':''}`}
      >
        {value}
      </button>);
  });

  const setPrevMonth = () => {
    setActive({
      ...active,
      month: active.month - 1,
    });
  }

  const setNextMonth = () => {
    let nextMonth = active.month +1
    let nextYear = year;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear = active.year + 1;
    }
    setActive({
      ...active,
      year: nextYear,
      month: nextMonth,
    });
  }

  const currentMonth = monthNames[active.month];
  const currentYear = active.year;
  return (
    <div className="calendar">
      <div className="navigation">
        <button className="arrow" onClick={setPrevMonth} ><img src={arrowLeft} alt="menu" /></button>
        <span>{currentMonth} {currentYear}</span>
        <button className="arrow" onClick={setNextMonth} ><img src={arrowRight} alt="menu" /></button>
      </div>
      <div className="dateContent">
        {days}
        {calendar}
      </div>
    </div>
  );
}

export default DatePicker;
