import React, { useState, useEffect } from "react";

export default function TicketCounter({ id, price, fee, label, description }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = parseInt(localStorage.getItem(id)) || 0;
    setCount(saved);
  }, [id]);

  useEffect(() => {
    localStorage.setItem(id, count);
    window.dispatchEvent(new CustomEvent("ticketsUpdated"));
  }, [id, count]);

  return (
    <section className="mb-5 md:mb-10">
      <div className="mb-5 md:mb-10">
        <h3 className="mb-2 md:mb-4 md:text-3xl font-bold">{label}</h3>
        <p className="md:text-lg">{description}</p>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <p className="font-medium">Price: </p>
        <p className="text-primary-600 font-semibold">{price} DKK</p>
      </div>
      <div className="flex items-center justify-between w-full mt-2">
        <p className="text-sm text-primary-500">Ticket fee {fee} DKK</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCount((c) => Math.max(0, c - 1))}
            className="bg-primary-300 text-primary-50 hover:bg-primary-400 px-2 py-1 md:px-4 md:py-2"
          >
            -
          </button>
          <span className="bg-primary-50 px-3 py-1 md:px-6 md:py-2 font-bold">{count}</span>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="bg-primary-600 text-primary-50 hover:bg-primary-700 px-2 py-1 md:px-4 md:py-2"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
