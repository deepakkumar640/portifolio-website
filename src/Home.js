import React, {useState} from "react";
import "./Home.css";


function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          
         
          
         
          
        </div>
        
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">LOVELY PROFESSIONAL UNIVERSITY</h1>
              <h2 className="home__text pz__10">Hi, I’m Deepak Kumar</h2>
              <h3 className="home__text sweet pz__10">Front End Developer</h3>
              <h4 className="home__text pz__10">Phagwara</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
