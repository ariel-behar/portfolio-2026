import Image from "next/image";

import { S3_BASE_URL } from "@/constants";
import { languages } from "@/data";
import { getYearsOfExperience } from "@/utils";

import { FlagCard } from "./FlagCard";

export function AboutSection() {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral py-6 text-neutral-content [text-shadow:1px_1px_7px_#000] lg:py-12"
    >
      <div
        aria-hidden
        style={{ backgroundImage: `url(${S3_BASE_URL}/ariel.png)` }}
        className="absolute inset-0 hidden bg-bottom-right bg-no-repeat min-[600px]:block"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-black/50"
      />

      <div className="relative mx-auto max-w-[1200px] pl-2 min-[900px]:pl-0">
        <div className="flow-root max-w-[900px]">
          <h4 className="mb-4 font-sans text-3xl">About Me</h4>

          <div className="relative float-right mb-2 ml-4 h-[175px] w-[204px] min-[600px]:hidden">
            <Image
              src={`${S3_BASE_URL}/ariel.png`}
              alt="Ariel Behar Photo"
              fill
              className="object-contain"
            />
          </div>

          <p className="px-4 text-justify">
            Certified Full-Stack Web Developer with over {yearsOfExperience} years of
            comprehensive experience. Multilingual and self-taught in a variety of web
            technologies and programming languages. Proficient in working with Next.js, MERN
            stack, Three.js, Shopify, and WordPress. Highly reliable and self-propelled to success
            and professionalism with a constant hunger for knowledge and improvement.
          </p>
        </div>

        <div className="mt-4 flex max-w-[950px] flex-col min-[600px]:flex-row min-[600px]:justify-between">
          <div className="order-2 w-full min-[600px]:order-1 min-[600px]:w-[70%]">
            <h4 className="mb-4 font-sans text-3xl">Languages</h4>

            <div className="grid grid-cols-3 gap-4 min-[900px]:grid-cols-6">
              {languages.map((language) => (
                <FlagCard key={language.language} language={language} />
              ))}
            </div>

            <p className="mt-2 text-center text-sm text-muted-light">
              *Speaking / Writing / Reading / Understanding rated from 1 to 5 (5 being the
              highest)
            </p>
          </div>

          <div className="order-1 my-4 flex w-full flex-col min-[600px]:order-2 min-[600px]:my-0 min-[600px]:w-[30%]">
            <h4 className="font-sans text-3xl text-left min-[900px]:text-center">Experience</h4>

            <div className="flex flex-1 flex-col items-center justify-center min-[600px]:mb-1">
              <p className="text-center text-[130px] leading-[0.8] text-white">
                {yearsOfExperience}+
              </p>
              <span className="text-sm">years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
