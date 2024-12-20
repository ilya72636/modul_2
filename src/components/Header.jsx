import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css";

const Header = ({ orderCount }) => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/menu">Меню</Link></li>
          <li><Link to="/events">Афиша</Link></li>
          <li><Link to="/collaboration">Сотрудничество</Link></li>
          <li><Link to="/gallery">Галерея</Link></li>
          <li className="orders-link">
            <Link to="/orders">
              Заказы
              {orderCount > 0 && (
                <span className="badge">{orderCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <button className="booking-btn"><Link to="/booking">Забронировать</Link></button>
    </header>
  );
};

export default Header;
