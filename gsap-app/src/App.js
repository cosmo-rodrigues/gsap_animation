import React, { useRef, useEffect, useState } from 'react';

import { gsap, Power3, TweenMax } from 'gsap';

import './App.css';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [clicked, setClicked] = useState(false);

  const handleExpand = (circle) => {
    TweenMax.to(circle, 0.8, { width: 200, height: 200, ease: Power3.easeOut });
    setClicked(true);
  };

  const handleShrink = (circle) => {
    TweenMax.to(circle, 0.8, { width: 75, height: 75, ease: Power3.easeOut });
    setClicked(false);
  };

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
    TweenMax.from(
      [circle, circleRed, circleBlue],
      2,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.6
    );
  });
  return (
    <div className='App' ref={(el) => (app = el)}>
      <div className='circle-container'>
        <div
          onClick={() =>
            clicked !== true ? handleExpand(circle) : handleShrink(circle)
          }
          className='circle'
          ref={(el) => (circle = el)}
        ></div>
        <div
          onClick={() =>
            clicked !== true ? handleExpand(circleRed) : handleShrink(circleRed)
          }
          className='circle red'
          ref={(el) => (circleRed = el)}
        ></div>
        <div
          onClick={() =>
            clicked !== true
              ? handleExpand(circleBlue)
              : handleShrink(circleBlue)
          }
          className='circle blue'
          ref={(el) => (circleBlue = el)}
        ></div>
      </div>
    </div>
  );
}

export default App;
