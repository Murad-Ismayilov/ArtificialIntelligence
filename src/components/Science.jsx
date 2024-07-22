import React, { useState } from "react";

import './Science.css'

const Science = () => {
    const [openList, setOpenList] = useState(null);

    const toggleList = (listIndex) => {
      if (openList === listIndex) {
        setOpenList(null);
      } else {
        setOpenList(listIndex);
      }
    };
  
  return (
    <>
    <div className="science py-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8">
                    <div className="science-row row">
                        <div className="col-lg-6">
                            <h2> Data Science and artificial intelligence </h2>
                            <ul>
                                <li>
                                <i class="fa-regular fa-circle-check regular"></i>
                                Little our played lively she adieus far sussex.
                                </li>
                                <li>
                                <i class="fa-regular fa-circle-check regular"></i>
                                Removed demands expense account in outward tedious do. Particular way thoroughly.
                                </li>
                            </ul>
                            <a href="#" className="btn circle btn-md btn-gradient"> Start a project </a>
                        </div>
                        <div className="col-lg-6">
                            <p> Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favourable mrs can projecting own. Thirty it matter enable become admire in giving. </p>
                            <p>Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings. Acceptance unreserved old admiration projection nay yet him.</p> 
                        </div>
                    </div>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1720267523/1_yo6bej.jpg" alt="" />
                    <h2> Expolre Our Data Services </h2>
                    <p>  We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to.  </p>
                    <div className="service-item">
                    <h4> Digital Analytics Services</h4>
                    <p> Outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up. </p>
                    <h4> Artificial Intelligence </h4>
                    <p> Outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up. </p>
                    <div className="card">
              <h3 onClick={() => toggleList(1)}>
                Where can I get analytics help?
                <span
                  onClick={() => toggleList(1)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {openList === 1 ? (
                    <i className="fa-solid fa-eye"></i>
                    
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
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

            <div className="card">
              <h3 onClick={() => toggleList(2)}>
                How much does data analytics costs?
                <span
                  onClick={() => toggleList(2)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {openList === 2 ? (
                    <i className="fa-solid fa-eye eye"></i>
                    
                  ) : (
                    <i className="fa-solid fa-eye-slash eye"></i>
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

            <div className="card">
              <h3 onClick={() => toggleList(3)}>
                What kind of data is needed for analysis?
                <span
                  onClick={() => toggleList(3)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {openList === 3 ? (
                    <i className="fa-solid fa-eye eye "></i>
                    
                  ) : (
                    <i className="fa-solid fa-eye-slash eye"></i>
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
                   
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="sidebar-item">
                        <h4 className="sidebar-title"> Anada Services </h4>
                        <ul className="sidebar">
                            <li>
                                <a href="#"> Advertising & Marketing </a>
                            </li>
                            <li>
                                <a href="#"> Software Development </a>
                            </li>
                            <li className="active">
                            <i class="fa-solid fa-hand-point-right"></i>
                                <a href="#"> Advertising & Marketing </a>
                            </li>
                            <li>
                                <a href="#"> Financials & Banking </a>
                            </li>
                            <li>
                                <a href="#"> Business Intelligence </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-item">
                        <h4 className="sidebar-title"> Our Company </h4>
                        <p> Attempt offices own improve now see. Called person are around county talked her esteem. Those fully these way. </p>
                        <a href="#" className="sidebar-solid"> 
                            <i class="fa-solid fa-file-arrow-down down"></i>
                            Download PDF</a>
                    </div>
                    <div className="sidebar-item">
                        <h4 className="sidebar-title"> Contact Us </h4>
                        <ul className="contact">
                        <li>
                                <div className="icon">
                                <i class="fa-regular fa-envelope-open open"></i>
                                </div>
                            
                            
                            <div className="info-span">
                                <span>Email</span>
                                Info@gmail.com
                            </div>
                            </li>
                            <li>
                                <div className="icon">
                                <i class="fa-solid fa-phone-volume open"></i>
                                </div>
                            
                            
                            <div className="info-span">
                                <span>Phone</span>
                                +123 456 7890
                            </div>
                            </li>
                            <li>
                                <div className="icon">
                                <i class="fa-regular fa-clock open"></i>
                                </div>
                            
                            
                            <div className="info-span">
                                <span>Office Hours</span>
                             Sat - Wed : 8:00 - 4:00
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Science