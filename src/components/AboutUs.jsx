import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./AboutUs.css";
const AboutUs = () => {
  const [openList, setOpenList] = useState(null);

  const toggleList = (listIndex) => {
    if (openList === listIndex) {
      setOpenList(null);
    } else {
      setOpenList(listIndex);
    }
  };

  return (
    <div className="about-as">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 py-5">
            <h1> We are master in Data science And big data analysis</h1>
            <div className="cart">
              <h3 onClick={() => toggleList(1)}>
                Where can I get analytics help?
                <span
                  onClick={() => toggleList(1)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {openList === 1 ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </span>
              </h3>
              {openList === 1 && (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  consectetur at, sunt maxime, quod alias ullam officiis, ex
                  necessitatibus similique odio aut! Provident, adipisci esse
                  vero magni necessitatibus quisquam commodi.
                </p>
              )}
            </div>

            <div className="cart">
              <h3 onClick={() => toggleList(2)}>
                How much does data analytics costs?
                <span
                  onClick={() => toggleList(2)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {openList === 2 ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </span>
                
              </h3>
              {openList === 2 && (

              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                  illum earum nobis dolorum aliquid! Quos pariatur ipsam eum
                  voluptates. Illum provident consequatur non aut labore,
                  voluptates repudiandae maxime cum dolorem.
                </p>
                )}
            </div>

            <div className="cart">
              <h3 onClick={() => toggleList(3)}>
                What kind of data is needed for analysis?
                <span
                  onClick={() => toggleList(3)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {openList === 3 ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </span>
              </h3>
              {openList === 3 && (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Earum iure accusamus ea, reprehenderit aspernatur deleniti
                  corporis ad perspiciatis. Magnam sit enim animi, esse deleniti
                  nobis quaerat veniam suscipit odit officiis.
                </p>
              )}
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1715001849/Artificial_Intelligence_1_o6mokm.png"
              alt=""
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
