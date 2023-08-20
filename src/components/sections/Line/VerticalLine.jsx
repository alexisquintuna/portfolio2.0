import React, { useEffect, useRef } from "react"
import "./line.css"

const VerticalLine = () => {
    const DividerVerticalRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                DividerVerticalRef.current.classList.add("animate-divider-vertical");
              }
            });
          },
          {
            threshold: 1,
          }
        );
        observer.observe(DividerVerticalRef.current)
        
        return () => observer.disconnect()
      }, []);

    return (
        <div className="hidden md:flex">
            <div ref={DividerVerticalRef} className="verticalLine"></div>
        </div>
    )
}

export default VerticalLine;