
import "../styles/components.css";
import React, { useState } from "react";


const menuItems = [
  { id: 1, image: "../../public/menu_1.jpg", title: "AMET DONEC.", price: "550₽", description: "200 гр",p:'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.' },
  { id: 2, image: "../../public/menu_2.jpg", title: "AMET DONEC.", price: "550₽", description: "400 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 3, image: "../../public/menu_3.jpg", title: "AMET DONEC.", price: "550₽", description: "300 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 4, image: "../../public/menu_4.jpg", title: "AMET DONEC.", price: "550₽", description: "100 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 5, image: "../../public/menu_5.jpg", title: "AMET DONEC.", price: "550₽", description: "500 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 6, image: "../../public/menu_6.jpg", title: "AMET DONEC.", price: "550₽", description: "300 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 7, image: "../../public/menu_7.jpg", title: "AMET DONEC.", price: "550₽", description: "350 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 8, image: "../../public/menu_8.jpg", title: "AMET DONEC.", price: "550₽", description: "250 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 9, image: "../../public/menu_3.jpg", title: "AMET DONEC.", price: "550₽", description: "450 гр" ,p:'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.'},
  { id: 10, image: "../../public/menu_5.jpg", title: "AMET DONEC.", price: "550₽", description: "150 гр",p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf' },
  { id: 4, image: "../../public/menu_6.jpg", title: "AMET DONEC.", price: "550₽", description: "100 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 2, image: "../../public/menu_7.jpg", title: "AMET DONEC.", price: "550₽", description: "400 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 7, image: "../../public/menu_8.jpg", title: "AMET DONEC.", price: "550₽", description: "350 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 3, image: "../../public/menu_3.jpg", title: "AMET DONEC.", price: "550₽", description: "300 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'}, 
  { id: 1, image: "../../public/menu_2.jpg", title: "AMET DONEC.", price: "550₽", description: "200 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 9, image: "../../public/menu_3.jpg", title: "AMET DONEC.", price: "550₽", description: "450 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 10, image: "../../public/menu_4.jpg", title: "AMET DONEC.", price: "550₽", description: "150 гр",p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf' },
  { id: 6, image: "../../public/menu_5.jpg", title: "AMET DONEC.", price: "550₽", description: "300 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 5, image: "../../public/menu_6.jpg", title: "AMET DONEC.", price: "550₽", description: "500 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
  { id: 8, image: "../../public/menu_7.jpg", title: "AMET DONEC.", price: "550₽", description: "250 гр" ,p:'dasdasd fsdfsdcsdc dscvsdsdvvsd sfsdfsdf sfsfsdf'},
];

const MenuSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < menuItems.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <section className="menu-slider">
      <h2 className="menu-title">КУХНЯ</h2>
      <div className="slider-container">
        <button className="slider-button left" onClick={prevSlide}>&lt;</button>
        <div className="menu-grid">
          {menuItems.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.title} className="menu-image" />
              <div className="menu-content">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",  }}>
                  <h3 className="menu-title-card">{item.title}</h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-description">{item.description}</p>
                <p className="menu-description">{item.p}</p>
                
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button right" onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
};

export default MenuSlider;

