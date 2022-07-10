import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello ,my name is Deepak KUmar pursuing btech cse from Lovely Professional University. 
                I got 82 percent in class 12 and 88 percent in class 10. I am doing my specialisation in 
                front end web Developer.this is the project given during summer training.
                
                </p>
             
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default About;
