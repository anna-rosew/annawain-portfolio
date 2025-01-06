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
    linkText: "Qualifications",
    link: "https://www.shecodes.io/graduates/68516-anna-rose-wain",
  },
];

export default function Home() {
  return (
    <div>
      <div className="block pt-[20px] lg:pt-[50px]">
        <h1 className="text-center text-l lg:text-5xl font-semibold">
          Hi, I&apos;m Anna, <br />a multidisciplinary developer <br />
          and designer.
        </h1>
        <h1 className="text-center font-light text-[20px]">
          Specialising in creative and interactive web experiences. Based in the
          UK.
        </h1>
      </div>

      <div className="p-[20px]">
        <div className="relative items-center justify-center ">
          <Image src={emoji} alt="Robot Gif" className=" h-[70px]" />
          <Image src={arrow} alt="Arrow pointing down" className=" h-[150px]" />
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-col md:flex-row gap-4">
        {detailsItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg w-full md:w-auto"
          >
            <h2 className="text-lg mb-2">{item.title}</h2>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" underline"
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
