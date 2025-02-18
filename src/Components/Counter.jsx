import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Counter() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="counter" ref={ref}>
      <div className="counter-1">
        <span>
          <CountUp
            end={5000}
            duration={2.5}
            suffix="+"
            start={0}
            enableScrollSpy
          />
        </span>
        <div>Admissions </div>
      </div>
      <div className="counter-1">
        <span>
          <CountUp
            end={1000}
            duration={2.5}
            suffix="+"
            start={0}
            enableScrollSpy
          />
        </span>
        <div>Universities</div>
      </div>
      <div className="counter-1">
        <span>
          <CountUp
            end={250}
            duration={2.5}
            suffix="+"
            start={0}
            enableScrollSpy
          />
        </span>
        <div>Counsellors</div>
      </div>
    </div>
  );
}
