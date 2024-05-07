import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(Array.from({ length: 4 }, () => false));
  const cardsRef = useRef([]);

  useEffect(() => {
    function checkVisible() {
      const newShow = cardsRef.current.map((card) => {
        const rect = card.getBoundingClientRect();
        console.log(rect);
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      setShow(newShow);
    }

    window.addEventListener("scroll", checkVisible);
    return () => {
      window.removeEventListener("scroll", checkVisible);
    };
  }, []);

  return (
    <div className="App">
      <div className="intro">introduction</div>
      <div
        className={`card first ${show[0] ? "visible" : ""}`}
        ref={(el) => (cardsRef.current[0] = el)}
      >
        div 1
      </div>
      <div
        className={`card ${show[1] ? "visible" : ""}`}
        ref={(el) => (cardsRef.current[1] = el)}
      >
        div 2
      </div>
      <div
        className={`card ${show[2] ? "visible" : ""}`}
        ref={(el) => (cardsRef.current[2] = el)}
      >
        div 3
      </div>
      <div
        className={`card last ${show[3] ? "visible" : ""}`}
        ref={(el) => (cardsRef.current[3] = el)}
      >
        div 4
      </div>
    </div>
  );
}

export default App;
