"use client";
import { useState } from "react";

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
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-[#e8daef] border-t border-b border-black"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume when hover ends
    >
      <div
        className={`flex w-[200%] gap-7 py-2 ${
          isPaused
            ? "[animation-play-state:paused]"
            : "[animation-play-state:running]"
        } animate-marquee`}
        aria-hidden="true"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="flex justify-around items-center flex-shrink-0 whitespace-nowrap px-4"
          >
            <p>{item}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
