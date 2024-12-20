import React, { useState } from "react";
import "../styles/components.css";

const Booking = ({ onAddBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    guests: "",
    phone: "",
    comment: "",
    room: "VIP",
    event: "Хэллоуин",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBooking(formData);
    setFormData({
      name: "",
      date: "",
      guests: "",
      phone: "",
      comment: "",
      room: "VIP",
      event: "Хэллоуин",
    });
  };

  return (
    <main className="booking-container">
      <h1>Бронирование вечеринки</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Дата:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Количество гостей:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min="1"
            max="10"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Комната:
          <select name="room" value={formData.room} onChange={handleChange}>
            <option value="VIP">VIP</option>
            <option value="Чёрная">Чёрная</option>
            <option value="Белая">Белая</option>
            <option value="Розовая">Розовая</option>
            <option value="Оранжевая">Оранжевая</option>
          </select>
        </label>
        <label>
          Тип мероприятия:
          <select name="event" value={formData.event} onChange={handleChange}>
            <option value="Хэллоуин">Хэллоуин</option>
            <option value="Новый год">Новый год</option>
            <option value="Просто вечеринка">Просто вечеринка</option>
            <option value="День рождения">День рождения</option>
          </select>
        </label>
        {/*  */}
        <button type="submit" className="submit-btn">
          Забронировать
        </button>
      </form>
    </main>
  );
};

export default Booking;
