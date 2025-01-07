import Image from "next/image";
import emoji from "@/public/icons/robot.svg";
import arrow from "@/public/icons/arrow.svg";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";

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

export default function Home() {
  return (
    <div>
      <div className="block pt-[20px] lg:pt-[50px]">
        <Image src={emoji} alt="Robot Gif" className="m-auto h-[70px]" />
        <h1 className="text-center text-l lg:text-5xl font-semibold">
          Hi, I&apos;m Anna! <br />
        </h1>
        <h1 className="text-center font-light text-[20px] mx-65">
          A multidisciplinary developer and designer, Specialising in creative
          and interactive web experiences. Based in the UK.
        </h1>
        <Image
          src={arrow}
          alt="Arrow pointing down"
          className="m-auto h-[150px]"
        />
      </div>
      <div className="flex flex-wrap sm:flex-col md:flex-row gap-1">
        {detailsItems.map((item, index) => (
          <div
            key={index}
            className=" lg:p-4 px-2 py-2 rounded-lg w-full md:w-auto "
          >
            <h2 className="mb-1 text-left text-sm">{item.title}</h2>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-left"
            >
              {item.linkText}
            </Link>
          </div>
        ))}
      </div>

      <Marquee />
    </div>
  );
}
