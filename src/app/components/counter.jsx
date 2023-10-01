"use client";
import React, { useState } from "react";

export default function Counter() {

const [count, setCount] = useState(0);

function decrementCount() {
  setCount(prevCount => prevCount - 1);
}

function incrementCount() {
  setCount(prevCount => prevCount + 1);
}
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-1">
      <p className="font-bold text-xl mb-2">Counter</p>
      <div className="px-20 py-16">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrementCount}>-</button>
        <span className="px-4">{count}</span>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}