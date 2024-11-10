"use client";
import { useState } from "react";

export default function AddComment({ create, user }) {
  const [comment, setComment] = useState(null);

  return (
    <>
      <textarea
        className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out block"
        onChange={async (e) => {
          setComment(e.target.value);
        }}
      ></textarea>
      <button
        disabled={user === undefined}
        className="leading-relaxed text-base focus:outline-none font-medium  text-gray-800 dark:text-gray-100 mt-2 border-5 border-transparent inline-block hover:border-gray-700  hover:text-gray-900 p-1 border rounded disabled:opacity-15 disabled:border-none"
        onClick={async () => {
          await create(comment, user);
        }}
      >
        Add comment
      </button>
    </>
  );
}
