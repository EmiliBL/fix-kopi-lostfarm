import React, { useState, useEffect } from "react";

export default function Summary() {
  const [count3Days, setCount3Days] = useState(0);
  const [countChild, setCountChild] = useState(0);

  const price3Days = 900;
  const priceChild = 400;

  function updateCountsFromStorage() {
    setCount3Days(parseInt(localStorage.getItem("ticket-3days")) || 0);
    setCountChild(parseInt(localStorage.getItem("ticket-child")) || 0);
  }

  useEffect(() => {
    updateCountsFromStorage();
    window.addEventListener("ticketsUpdated", updateCountsFromStorage);
    return () => window.removeEventListener("ticketsUpdated", updateCountsFromStorage);
  }, []);

  const total = count3Days * price3Days + countChild * priceChild;

  useEffect(() => {
    localStorage.setItem("ticket-total", total);
  }, [total]);

  return (
    <section className="mb-5 md:mb-10">
      <h4 className="mb-5 md:mb-10 text-primary-500 font-semibold">Order Summary</h4>
      <div className="text-primary-50 font-lora pb-6 leading-relaxed">
        <p>3 Days Ticket: {count3Days} × {price3Days} DKK</p>
        <p className="mb-5 md:mb-10">Child Ticket: {countChild} × {priceChild} DKK</p>
        <hr className="border-t-1 border-primary-50 pb-2" />
        <p className="font-bold text-xl font-montserrat text-primary-500">Total: {total} DKK</p>
      </div>
    </section>
  );
}
