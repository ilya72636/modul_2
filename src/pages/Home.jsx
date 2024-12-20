import React, { useState } from "react";
import MenuSection from "../components/MenuSection";
// import CardSlider from "../components/CardSlider";
import botom_1 from "../../public/botom_1.png";
import botom_2 from "../../public/botom_2.png";
import botom_3 from "../../public/botom_3.png";
import botom_4 from "../../public/botom_4.png";


const Home = () => { 
   
  return (
    <div>
      {/* <Header /> */}       
      <main>
        <div  className="maincontainer">
          <div className="leftcontainer">
            <div className="a">
              <button className="f">Since 1996</button>
              <h2 className="g">True. Fontanka. Underground.</h2>
            </div>
          </div>
          <div className="rightcontainer">
             <div className="top">
             <button className="active">Ближайшие</button>
             <button className=" active soon">скоро</button>
             </div>
             <div className="bottom">
              <img src={botom_1} alt="" />
              <img src={botom_2} alt="" />
              <img src={botom_3} alt="" />
              <img src={botom_4} alt="" />
             </div>
          </div>
        </div>
          
      </main>
      {/* <CardSlider /> */}
      <MenuSection />
    </div>
  );
};

export default Home;
