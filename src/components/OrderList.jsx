import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/components.css";

const Orders = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div>
      <Header />
      <main className="orders-container">
        <h1>Ваши заказы</h1>
        {bookings.length === 0 ? (
          <p>Нет активных заказов.</p>
        ) : (
          <ul>
            {bookings.map((booking, index) => (
              <li key={index} className="order-card">
                <p><strong>Имя:</strong> {booking.name}</p>
                <p><strong>Дата:</strong> {booking.date}</p>
                <p><strong>Гости:</strong> {booking.guests}</p>
                <p><strong>Телефон:</strong> {booking.phone}</p>
                <p><strong>Комментарий:</strong> {booking.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Orders;
