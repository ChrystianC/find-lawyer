"use client";
import { getCookie } from "cookies-next";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function BookApoiment({ date, book, isBooked, idAppointment }) {
  const [booked, setBook] = useState(isBooked);

  useEffect(() => {
    book(booked, idAppointment, getCookie("user"), JSON.stringify(date));
  }, [booked]);

  return (
    <div className="text-center flex justify-center items-center group relative">
      <button
        className="focus:outline-none font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2 border-5 border-transparent inline-block hover:border-gray-700  hover:text-gray-900 p-1 border rounded disabled:opacity-15 disabled:border-none"
        disabled={!!isBooked}
      >
        {dayjs(date).format("HH:mm A").toString()}
      </button>

      <span className="fixed scale-0  z-10 inset-0 group-focus-within:scale-100  min-h-screen flex justify-center items-center">
        <span className="rounded bg-gray-800 p-10 ">
          <div className="flex flex-col text-white items-end">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
              Confirm Appointment
            </h1>
            <p className="m-2">
              Are you sure you want to schedule an appointment at{" "}
              {dayjs(date).format("HH:mm A").toString()}?
            </p>
            <div>
              <button
                id={`book-button-${idAppointment}`}
                className="focus:outline-none p-2  font-medium leading-5  mt-2 border-5 border-transparent inline-block hover:border-green-500  border rounded"
                onClick={() => setBook(true)}
              >
                Accept
              </button>
            </div>
          </div>
        </span>
      </span>
    </div>
  );
}
