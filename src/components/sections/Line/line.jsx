import React, { useEffect, useRef } from "react";
import "./line.css";

const LineDivider = () => {
  const DividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            DividerRef.current.classList.add("animate-divider");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    observer.observe(DividerRef.current)
    
    return () => observer.disconnect()
  }, []);
  return (
    <div className="w-full py-14">
      <div className="divider" ref={DividerRef}></div>
    </div>
  );
};

export default LineDivider;

// import React, { useEffect, useRef } from 'react';

// const LineDivider = () => {
//   const lineRef = useRef(null);

//   useEffect(() => {
//     let animationFrameId;
//     let lineWidth = 0;
//     const animationDuration = 500; // Duration of the animation in milliseconds
//     const startTime = performance.now();

//     const animateLine = (timestamp) => {
//       const progress = (timestamp - startTime) / animationDuration;
//       lineWidth = progress < 1 ? progress * 100 : 100; // Cap the width at 100%

//       lineRef.current.style.width = lineWidth + '%';

//       if (progress < 1) {
//         animationFrameId = requestAnimationFrame(animateLine);
//       }
//     };

//     animateLine(startTime);

//     return () => {
//       // Cleanup: Cancel the animation frame when the component unmounts
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <div className="w-full py-14" >
//     <div className='line-animation divider' ref={lineRef}></div>
//   </div>;
// };

// export default LineDivider;

