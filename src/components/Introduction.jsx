import React from 'react'

import './Introduction.css'

const Introduction = () => {
  return (
    <div className='introduction'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 py-5">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1715001854/Artificial_Intelligence_2_kc8ulx.png" alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <h1>Apply AI, Deep Learning and Data Sciece to solve </h1>
                    <p> Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </p>
                    <div className="button-groups">
                        <a href="#" className="button btn-primary"> Learn More </a>                    
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Introduction