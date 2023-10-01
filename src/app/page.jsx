
import React from "react";
import Products from "./components/products";
import Counter from "./components/counter";

// use client
export default function Home() {
  return (
    <div className="items-end py-3.5 px-3.5 flex">
     
      <Products
        name="Coffee"
        price="220.89"
        description="Savor the rich, velvety notes of dark chocolate and toasted hazelnuts, beautifully harmonized with a hint of warm caramel. Each sip is an exquisite journey through layers of flavor, leaving your taste buds tingling with delight."
      />
      
      <Counter/>
    </div>
  );
}