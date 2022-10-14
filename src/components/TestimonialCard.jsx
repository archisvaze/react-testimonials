import React, { useState } from 'react'

export default function TestimonialCard({ testimonials }) {

  const [index, setindex] = useState(0);

  const [animation, setanimation] = useState('')

  function clickHandler(dir) {
    if (dir === "next") {
      setanimation("slideRightOut")
      setTimeout(() => {
        if (index >= testimonials.length - 1) setindex(0);
        else setindex(index + 1);
        setanimation("slideRightIn")
      }, 400)

    }
    else {
      setanimation("slideLeftOut")
      setTimeout(() => {
        if (index <= 0) setindex(testimonials.length - 1);
        else setindex(index - 1);
        setanimation("slideLeftIn")
      }, 400)
    }
  }




  return (
    <>
      <div className="card">

        <img src="./images/pattern-quotes.svg" alt="" className="patter-quotes" />
        <img src="./images/pattern-bg.svg" alt="" className="pattern-bg" />
        <img src="./images/pattern-curve.svg" alt="" className="pattern-curve" />


        <div className="img-container">

          <img src={testimonials[index].pic} alt="" className={"profile-pic " + animation} />


          <div className="button">
            <button onClick={() => { clickHandler("prev") }} className="prev">&lt;</button>
            <button onClick={() => { clickHandler("next") }} className="next">&gt;</button>
          </div>
        </div>


        <div className="text-container">
          <p className={"quote " + animation}>{testimonials[index].quote}</p>
          <div className="info">
            <p className={"name " + animation}>{testimonials[index].name}</p>
            <p className={"job " + animation}>{testimonials[index].job}</p>
          </div>
        </div>


      </div>
    </>
  )
}



