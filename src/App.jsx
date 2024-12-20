import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Orders from "./pages/Orders";
import Header from "./components/Header";

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]); // Добавляем новый заказ
  };

  return (
    <>
      <Header orderCount={bookings.length} /> {/* Передаем количество заказов */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking onAddBooking={addBooking} />} />
        <Route path="/orders" element={<Orders bookings={bookings} />} />
      </Routes>
    </>
  );
}

export default App;
