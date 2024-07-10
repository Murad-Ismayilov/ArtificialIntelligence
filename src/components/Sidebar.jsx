import React from 'react'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
    <div className="sidebar py-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8 item">
                    <div className="thumb">
                    <a href=""> 
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1720344685/22_hzjpjw.jpg" alt="" />
                        <div className="date">
                            18 JUL
                            <span>2020</span>
                        </div>
                    </a>
                    </div>
                    
                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>
                                    <i class="fa-regular fa-folder-open"></i>
                                </li>
                                <li>
                                    <a href=""> Process </a>
                                </li>
                                <li>
                                    <a href=""> Store </a>
                                </li>
                            </ul>
                        </div>
                        <h4> 
                            <a href=""> Discovery incommode earnestly no he commanded </a>
                        </h4>
                        <p> Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected. Incommode so intention defective at convinced. Led income months itself and houses you </p>
                        <a href="" className="btn-simple">
                        <i class="fa-solid fa-angle-right"></i>
                        Read More
                        </a>
                    </div>

                    <div className="thumb">
                    <a href=""> 
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1720350263/33_tolyud.jpg" alt="" />
                        <div className="date">
                            5 Sep
                            <span>2020</span>
                        </div>
                    </a>
                    </div>

                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>
                                    <i class="fa-regular fa-folder-open"></i>
                                </li>
                                <li>
                                    <a href="">  DATA  </a>
                                </li>
                                <li>
                                    <a href=""> ANALYSIS </a>
                                </li>
                            </ul>
                        </div>
                        <h4> 
                            <a href=""> Lasted am so before on esteem vanity oh. </a>
                        </h4>
                        <p> Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected. Incommode so intention defective at convinced. Led income months itself and houses you </p>
                        <a href="" className="btn-simple">
                        <i class="fa-solid fa-angle-right"></i>
                        Read More
                        </a>
                    </div>

                    <div className="thumb">
                    <a href=""> 
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1720350982/11_xcvefq.jpg" alt="" />
                        <div className="date">
                            18 JUL
                            <span>2020</span>
                        </div>
                    </a>
                    </div>
                    
                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>
                                    <i class="fa-regular fa-folder-open"></i>
                                </li>
                                <li>
                                    <a href=""> ARTIFICIAL  </a>
                                </li>
                                <li>
                                    <a href=""> STORE </a>
                                </li>
                            </ul>
                        </div>
                        <h4> 
                            <a href=""> Repeated of endeavor mr position kindness. </a>
                        </h4>
                        <p> Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the partiality unaffected. Incommode so intention defective at convinced. Led income months itself and houses you </p>
                        <a href="" className="btn-simple">
                        <i class="fa-solid fa-angle-right"></i>
                        Read More
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <nav aria-label='navigation'>
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a href="" className="page-link">
                                        <i class="fa-solid fa-angles-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a href="" className="page-link">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="" className="page-link">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="" className="page-link">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="" className="page-link">
                                        <i class="fa-solid fa-angles-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-5">
                    <div className="container">
                        <div className="recent-post">
                            <div className="title">
                                <h4>Recent Post</h4>
                            </div>
                            <ul>
                                <li>
                                    <div className="thumb">
                                        <a href=""> <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1720371666/11_1_rcnoxo.jpg" alt="" /> </a>
                                    </div>
                                    <div className="info">
                                        <a href=""> Participate in staff meetingness manage dedicated </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar