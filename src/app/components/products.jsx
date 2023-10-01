import React from "react";

export default function Products(props) {
    return(
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-10">
            <div className="font-bold text-xl mb-2">{props.name}</div>
            <p className="text-slate-50 text-base">Price: ${props.price}</p>
            <p className="text-slate-50 text-base text-yellow-200 italic">{props.description}</p>
        </div>
    )
}