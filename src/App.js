import TestimonialCard from "./components/TestimonialCard";

function App() {

  const testimonials = [
    {
      name: `Tanya Sinclair`,
      job: `UX Engineer`,
      pic: `./images/image-tanya.jpg`,
      quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
    },
    {
      name: `John Tarkpor`,
      job: `Junior Front-end Developer`,
      pic: `./images/image-john.jpg`,
      quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
    }
  ]

  return (
    <div className="App">
      <TestimonialCard testimonials={testimonials} />
    </div>
  );
}

export default App;
