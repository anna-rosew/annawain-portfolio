"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import lightning from "@/public/icons/lightning.svg";
import internet from "@/public/icons/mouse.svg";
import paint from "@/public/icons/paint.svg";
import stars from "@/public/icons/stars.svg";
import flower from "@/public/icons/flower.svg";
import code from "@/public/icons/code.svg";
import www from "@/public/icons/www.svg";
import plane from "@/public/icons/airplane.svg";
import wave from "@/public/icons/wave.svg";
import ContactButton from "../common/contactButton";

const Bio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    //clean up listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-white p-10" id="about">
      <div className={isMobile ? "block bg-black" : "hidden"}>
        <div className="bg-black">
          {/* Mobile Version */}
          <p className="w-[70%] font-normal text-[36px] mb-8">
            <span className="flex items-center mb-5">
              <span>I&apos;m Anna-Rose, I&apos;m a</span>
              <span className="ml-2 invert hover:cursor-pointer">
                <Image
                  src={lightning}
                  alt="Lightning icon"
                  height={30}
                  width={30}
                />
              </span>
            </span>
            <span className="flex items-center mb-5">
              <span className="font-bold">web developer</span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={internet}
                  alt="Internet icon"
                  height={30}
                  width={30}
                />
              </span>
            </span>
            <span className="flex mb-5">
              <span>who specialises in creating</span>
            </span>
            <span className="flex mb-5">
              <span className="underline">interactive </span>
              <span className="italic">custom </span>
              <span>websites.</span>
            </span>
            <span className="flex mb-5">
              <span>With a background in the arts </span>
            </span>
            <span className="flex items-center mb-5">
              <span className="ml-2 hover:cursor-pointer">
                <Image src={paint} alt="Paint icon" height={30} width={30} />
              </span>
              <span>, I love using JavaScript</span>
            </span>
            <span className="flex items-center mb-5">
              <span>creatively </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image src={stars} alt="Stars icon" height={30} width={30} />
              </span>
              <span>to make unique </span>
            </span>
            <span className="flex mb-5">
              <span className="underline">user interfaces </span>
              <span>using clean code.</span>
            </span>
          </p>

          <p className="w-[70%] font-normal text-[36px] mb-8">
            <span className="flex items-center mb-5">
              <span>Inclusivity and sustainability </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image src={flower} alt="Flower icon" height={30} width={30} />
              </span>
            </span>
            <span className="flex mb-5">
              <span>on the web are also very </span>
            </span>
            <span className="flex mb-5">
              <span>important to me. When I&apos;m not at </span>
            </span>
            <span className="flex items-center mb-5">
              <span>my desk </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image src={code} alt="Code icon" height={30} width={30} />
              </span>
              <span>, you’ll probably find</span>
            </span>
            <span className="flex mb-5">
              <span>me running up a hill somewhere.</span>
            </span>
          </p>

          <p className="w-[70%] font-normal text-[36px]">
            <span className="flex items-center mb-5">
              <span>I love chatting about code, </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={www}
                  alt="Globe icon with www"
                  height={30}
                  width={30}
                />
              </span>
            </span>
            <span className="flex items-center mb-5">
              <span>design and all things collaboration </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={plane}
                  alt="Paper airplane icon"
                  height={30}
                  width={30}
                />
              </span>
              <span>say hello!</span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={wave}
                  alt="Waving hand icon"
                  height={30}
                  width={30}
                />
              </span>
            </span>
            <span className="flex items-center">
              <span>so, </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={plane}
                  alt="Paper airplane icon"
                  height={30}
                  width={30}
                />
              </span>
              <span>say hello!</span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={wave}
                  alt="Waving hand icon"
                  height={30}
                  width={30}
                />
              </span>
            </span>
          </p>
        </div>
      </div>

      {/* Desktop Version */}
      <div className={isMobile ? "hidden" : "block bg-black"}>
        <div className="bg-black">
          <p className="w-[70%] font-normal text-[36px] mb-8">
            <span className="flex items-center mb-5">
              <span>I&apos;m Anna-Rose, I&apos;m a</span>
              <span className="ml-2 invert hover:cursor-pointer">
                <Image
                  src={lightning}
                  alt="Lightning icon"
                  height={30}
                  width={30}
                />
              </span>
            </span>
            <span className="flex items-center mb-5">
              <span className="font-bold">web developer</span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={internet}
                  alt="Internet icon"
                  height={30}
                  width={30}
                />
              </span>
            </span>
            <span className="flex mb-5">
              <span>who specialises in creating</span>
            </span>
            <span className="flex mb-5">
              <span className="underline">interactive </span>
              <span className="italic">custom </span>
              <span>websites. With a background in the arts </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image src={paint} alt="Paint icon" height={30} width={30} />
              </span>
              <span>, I love using</span>
            </span>
            <span className="flex items-center mb-5">
              <span>JavaScript creatively </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image src={stars} alt="Stars icon" height={30} width={30} />
              </span>
              <span>to make unique </span>
              <span className="underline">user interfaces </span>
              <span>using clean code.</span>
            </span>
          </p>

          <p className="w-[70%] font-normal text-[36px] mb-8">
            <span className="flex items-center mb-5">
              <span>Inclusivity and sustainability </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image src={flower} alt="Flower icon" height={30} width={30} />
              </span>
              <span>on the web are also very important to me. When I’m </span>
            </span>
            <span className="flex items-center mb-5">
              <span className="underline">not at my desk </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image src={code} alt="Code icon" height={30} width={30} />
              </span>
              <span>
                , you’ll probably find me running up a hill somewhere.
              </span>
            </span>
          </p>

          <p className="w-[70%] font-normal text-[36px]">
            <span className="flex items-center mb-5">
              <span>I love chatting about code </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={www}
                  alt="Globe icon with www"
                  height={30}
                  width={30}
                />
              </span>
            </span>
            <span className="flex items-center mb-5">
              <span>, design and all things collaboration so </span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={plane}
                  alt="Paper airplane icon"
                  height={30}
                  width={30}
                />
              </span>
              <span>say hello!</span>
              <span className="ml-2 hover:cursor-pointer">
                <Image
                  src={wave}
                  alt="Waving hand icon"
                  height={30}
                  width={30}
                />
              </span>
            </span>
          </p>
        </div>

        <ContactButton />
      </div>
    </div>
  );
};

export default Bio;
