"use client";
import React from "react";
import { useState } from "react";

export default function clickCounter() {

    const [count, setCount] = useState(0);
    const threshold = 9;

    const addClick = event => {
        setCount(count + 1);
      };

    const decrementClick = event => {
        setCount(count - 1);
      };
    
    return (
        <div className="flex-col min-w-max max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-1">
            <p className="font-bold text-xl mb-2">Click counter</p>
            <p className="mx-11 my-12">{count}</p>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addClick}>Click me</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={decrementClick}>Do not Click me</button>

            {count >= threshold && (
                <p className="text-green-500 font-semibold mt-4">
                Count has reached the threshold!
                </p>
            )}
        </div>
    )
}