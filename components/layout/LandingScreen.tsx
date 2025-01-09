import React from "react";
import Link from "next/link";
import Image from "next/image";
import emoji from "@/public/icons/robot.svg";
import arrow from "@/public/icons/arrow.svg";
import EmojiIcon from "@/public/icons/robot.svg";

const detailsItems = [
  {
    title: "Get in touch",
    linkText: "Email Me",
    link: "mailto:annarosewain9@gmail.com",
  },
  {
    title: "GitHub",
    linkText: "/anna-rosew",
    link: "https://github.com/anna-rosew",
  },
  {
    title: "LinkedIn",
    linkText: "/anna-rose-wain",
    link: "https://www.linkedin.com/in/anna-rose-wain/",
  },
  {
    title: "SheCodes",
    linkText: "/Qualifications",
    link: "https://www.shecodes.io/graduates/68516-anna-rose-wain",
  },
];

const LandingScreen = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        {/* Top Content Section */}
        <div className="flex flex-col justify-center items-center pt-4 lg:pt-6 px-4 lg:mx-[30vw] flex-shrink-0">
          <Image
            src={emoji}
            alt="Robot Gif"
            className="m-auto h-[70px] text-black dark:text-white"
          />
          <EmojiIcon className="m-auto h-[70px] text-black dark:text-white" />
          <h1 className="text-center text-l lg:text-5xl font-semibold">
            Hi, I&apos;m Anna! <br />
          </h1>
          <h1 className="text-center font-light text-[20px] mt-2 mb-8">
            A multidisciplinary developer and designer, Specialising in creative
            and interactive web experiences. Based in the UK.
          </h1>
          <Image
            src={arrow}
            alt="Arrow pointing down"
            className="m-auto hidden lg:h-[150px]"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center sm:flex-col md:flex-row gap-3 px-4 flex-grow">
          {detailsItems.map((item, index) => (
            <div
              key={index}
              className="lg:p-4 px-2 py-1 rounded-lg w-full md:w-auto"
            >
              <h2 className="mb-1 text-left text-sm">{item.title}</h2>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-left text-sm lg:text-l"
              >
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
