import React, { useState } from 'react'

export default function TestimonialCard({ testimonials }) {

  const [index, setindex] = useState(0);

  const [animate, setanimate] = useState(false)

  function clickNext() {
    if (index >= testimonials.length - 1) setindex(0);
    else setindex(index + 1);

    setanimate(true);
    setTimeout(() => {
      setanimate(false);
    }, 100)
  }
  function clickPrev() {
    if (index <= 0) setindex(testimonials.length - 1);
    else setindex(index - 1);
  }

  return (
    <>
      <div className="card">

        <img src="./images/pattern-quotes.svg" alt="" className="patter-quotes" />
        <img src="./images/pattern-bg.svg" alt="" className="pattern-bg" />
        <img src="./images/pattern-curve.svg" alt="" className="pattern-curve" />


        <div className="img-container">
          <img src={testimonials[index].pic} alt="" className="profile-pic" />
          <div className="button">
            <button onClick={() => { clickPrev() }} className="prev">&lt;</button>
            <button onClick={() => { clickNext() }} className="next">&gt;</button>
          </div>
        </div>


        <div className="text-container">
          <p className="quote">{testimonials[index].quote}</p>
          <div className="info">
            <p className="name">{testimonials[index].name}</p>
            <p className="job">{testimonials[index].job}</p>
          </div>
        </div>


      </div>
    </>
  )
}



