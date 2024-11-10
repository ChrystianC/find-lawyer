"use client";
import React, { useEffect, useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

export default function Appoiments({ date }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  useEffect(() => {
    date(selectedDate);
  }, [selectedDate]);
  const renderHeader = () => {
    return (
      <div className="px-4 flex items-center justify-between">
        <span className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800">
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <div className="flex items-center">
          <button
            aria-label="calendar backward"
            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button
            aria-label="calendar forward"
            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <thead>
        <tr>
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
            <th key={index}>
              <div className="w-full flex justify-center p-2">
                <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                  {day}
                </p>
              </div>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <td
            key={day.toString()}
            className={`px-2 py-2 cursor-pointer  justify-center items-center text-center ${!isSameMonth(day, monthStart) ? "text-gray-400" : isSameDay(day, selectedDate) ? "bg-indigo-700 rounded-full text-white" : "text-gray-800 dark:text-gray-100"}`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span>{formattedDate}</span>
          </td>
        );
        day = addDays(day, 1);
      }
      rows.push(<tr key={day.toString()}>{days}</tr>);
      days = [];
    }
    return <tbody>{rows}</tbody>;
  };

  return (
    <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
      {renderHeader()}
      <div className="flex items-center justify-between pt-4">
        <table className="w-full">
          {renderDays()}
          {renderCells()}
        </table>
      </div>
    </div>
  );
}
