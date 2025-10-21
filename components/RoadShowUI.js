"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RoadshowAfterPictureCard from "./RoadshowAfterPictureCard";
import CopyLink from "./CopyLink";
import CopyToClipboard from "react-copy-to-clipboard";

function generateRandomRotation() {
  const maxRotation = 12;
  const rotation = (Math.random() * 2 - 1) * maxRotation;
  return rotation;
}

const TitleExpandDetails = ({ title, description, upcoming, id }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center ">
        <div className="flex items-center justify-between border bg-purpledk max-w-sm lg:max-w-[425px]">
          <div className="text-center lg:text-justify p-2 font-bold text-white uppercase">
            {copied && (
              <div className="text-xs text-green-400 w-full text-center">Event copied!</div>
            )}
            <CopyToClipboard
              onCopy={() => setCopied(true)}
              text={`https://runme.dev/roadshow/#${id}`}
            >
              <div className="flex items-center w-full p-3 space-x-2">
                <div className="flex flex-row items-center space-x-2 cursor-pointer text-covey-600 hover:text-covey-700">
                  {copied ? "👍" : "📋"}{" "}
                </div>
                {upcoming ? (
                  <div className="overflow-hidden text-xs sm:text-base">Upcoming - {title}</div>
                ) : (
                  <div className="overflow-hidden text-xs sm:text-base">{title}</div>
                )}
              </div>
            </CopyToClipboard>
          </div>
          <button
            className="cursor-pointer text-white -ml-2"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-down"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="absolute top-[100%] h-auto flex justify-center items-center mx-auto w-full lg:min-w-[500px]">
          {showDescription && (
            <div className="p-4 bg-purpledk text-white w-3/4 text-center text-sm 2xl:text-base">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RoadShowUI = ({ shows }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const rotation = generateRandomRotation();

  return (
    <div>
      <div className="relative space-y-96 lg:space-y-[600px] flex flex-col mx-auto overflow-hidden">
        {shows.map((show, i) => {
          return (
            <div id={show.id} className="relative" key={i}>
              <div
                key={i}
                data-aos={i === 0 ? "fade-up" : i % 2 === 0 ? "fade-right" : "fade-left"}
                className={`relative z-10 max-w-[750px] 2xl:max-w-[1000px] w-full min-h-[350px] lg:min-h-[325px] lg:h-[400px] 2xl:h-[500px] text-black ${
                  i === 0 ? "mx-auto" : i % 2 ? "ml-auto" : "mr-auto"
                }`}
              >
                <Image
                  className="object-cover w-full bg-blend-darken"
                  src={show.background}
                  fill
                  style={{ filter: "brightness(50%)" }}
                  alt={show.location}
                />
                <div className="absolute w-full p-4 grid-corners">
                  {show?.hostAvatars?.map((host, i) => (
                    <Image
                      key={i}
                      src={host}
                      width={150}
                      height={150}
                      className="max-w-[50px] max-h-[50px] lg:max-w-[125px] lg:max-h-[125px] rounded-full"
                      alt={show?.host[i]}
                    />
                  ))}
                </div>
                <div className="absolute z-20 flex items-center justify-center w-full h-full mx-auto ">
                  <div className="flex flex-col text-center md:space-y-2 lg:space-y-6">
                    <TitleExpandDetails
                      id={show.id}
                      title={show.title}
                      description={show.description}
                      upcoming={show.upcoming}
                    />
                    <p
                      id={show.title}
                      className="leading-[3rem] font-medium text-white lg:text-5xl"
                    >
                      {show.location}
                    </p>
                    <p className="text-lg font-medium lg:text-2xl text-neutral-200">{show.date}</p>
                    <div className="lg:text-xl text-neutral-200 ">
                      {show.link && show.link != "tbd" && (
                        <CopyLink title={show.link} href={show.link} />
                      )}
                    </div>
                    {show.postShowLinks?.length > 0 && (
                      <div className="lg:text-xl text-white text-center">
                        Show Notes:{" "}
                        {show.postShowLinks.map((link, i) => (
                          <Link href={link} className="underline" key={i}>
                            {link}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`max-w-screen-xl px-10 -mt-12 hidden absolute z-[999] lg:flex items-center space-x-12 ${
                  i === 0 ? "justify-center" : i % 2 ? "right-10" : "left-10"
                }`}
              >
                {show.eventAssets.map((picture, i) => (
                  <RoadshowAfterPictureCard
                    text={show.title}
                    rotation={rotation}
                    imageSrc={picture}
                    key={i}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <div className="-top-32 absolute max-h-[inherit] h-full">
          <svg
            width={"100%"}
            height={"100%"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 2365"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M147 10.5V313.5C147 313.5 67.5 525.5 67.5 584C67.5 642.5 224.5 794.5 224.5 842.5C224.5 890.5 67.5 1031 67.5 1080.5C67.5 1130 224.5 1236.5 224.5 1285C224.5 1333.5 67.5005 1446.5 67.5 1499C67.4995 1551.5 224.5 1665.5 224.5 1713C224.5 1760.5 67.5 1878 67.5 1927C67.5 1976 224.5 2099 224.5 2141C224.5 2183 10.4995 2355 10.4995 2355"
              stroke="white"
              strokeWidth="5"
              strokeDasharray={"10"}
            />
          </svg>
        </div>
      </div>
      <section className="mt-16 lg:mt-32 text-white">
        <div className="mx-auto max-w-screen-sm text-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex flex-col space-y-8">
            <h2 className="font-plex text-3xl md:text-[48px] leading-tight">
              Want some Runme at your event?
            </h2>
            <div className="text-[18px] font-normal tracking-widest">
              Please reach out, we love to present, sponsor and help promote events for devs and
              operators.
            </div>

            <Link href="https://discord.gg/runme">
              <button className="text-[16px] px-8 py-2 rounded font-medium tracking-widest bg-purple-next-button hover:brightness-90">
                Join us on Discord
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadShowUI;
