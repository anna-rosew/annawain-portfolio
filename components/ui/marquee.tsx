import React from "react";

// List of values for the marquee
const marqueeItems = [
  "REACT.JS",
  "JAVASCRIPT",
  "HTML & CSS",
  "VANILLA.JS",
  "REST APIS",
  "WIREFRAMING",
  "FIGMA",
  "BOOTSTRAP",
  "RESPONSIVE WEB DESIGN",
  "ADOBE CREATIVE SUITE",
  "GIT",
  "GITHUB",
  "BLENDER 3D",
  "SPLINE 3D",
  "NODE.JS",
  "REACT.JS",
  "HTML, CSS & JAVASCRIPT",
  "VANILLA.JS",
  "REST APIs",
  "WIREFRAMING",
  "FIGMA",
  "BOOTSTRAP",
  "RESPONSIVE WEB DESIGN",
  "ADOBE ILLUSTRATOR & PHOTOSHOP",
  "GIT",
  "GITHUB",
  "BLENDER 3D",
  "SPLINE 3D",
  "NODE.JS",
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden [--offset:10vw] [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] group bg-[#e8daef] border-t border-b border-black">
      <div
        className="w-full flex min-w-full relative transform-[translate3d(var(--move-initial),0,0)] animate-marquee [animation-play-state:running] group-hover:[animation-play-state:paused] gap-7 py-2"
        aria-hidden="true"
      >
        {/* Map over marqueeItems to display each item */}
        {marqueeItems.map((item, index) => (
          <span
            key={index}
            className="flex justify-around items-center flex-shrink-0"
          >
            <p>{item}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
