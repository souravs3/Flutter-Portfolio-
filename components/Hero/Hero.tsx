import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="py-10 w-full xl:h-[90vh] xl:pt-0">
      <div className="container h-full">
        <div className="w-full flex flex-col items-center justify-center tab:flex-row gap-10 h-full">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="text-2xl font-semibold md:text-3xl"
            >
              Hello, my name is{" "}
              <i className="font-styleFont text-secondary">Sourav S</i>
            </motion.h1>
            <TypeAnimation
              sequence={[
                "I'm a Software Engineer",
                1000,
                "I'm a Flutter developer",
                1000,
                "I'm a UI UX Designer",
                1000,
                "It's Nice meeting you...😊",
                1000,
              ]}
              speed={50}
              className="text-2xl font-semibold md:text-3xl"
              repeat={Infinity}
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 3 }}
              className="text-base md:text-lg font-medium"
            >
              I am a self-taught Mobile App developer with a strong foundation in App development.My objectives as a Flutter developer are to advance professionally and make excellent Mobile applications. I would like to work in a team with dedication. I will acquire knowledge day by day to improve my skills.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="flex items-center justify-start gap-5"
            >
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                className="text-base font-normal text-white cursor-pointer hover:bg-transparent border-secondary border flex items-center justify-center gap-3 w-fit bg-secondary py-2 px-5 md:px-8 rounded-lg transition-all duration-300"
              >
                Projects
              </ScrollLink>
              <Link
                href="/CvFile/myCv.pdf"
                download
                target="_blank"
                rel="noreferrer noopener"
                className="text-base font-normal text-white cursor-pointer hover:bg-secondary border-secondary border flex items-center justify-center gap-3 w-fit bg-transparent py-2 px-5 md:px-8 rounded-lg transition-all duration-300"
              >
                Download CV
              </Link>
            </motion.div>
          </div>
          <div className="tab:flex-1 w-full relative flex items-center justify-center h-full md:overflow-hidden">
            <div className="w-full bg-black md:absolute h-[600px] rounded-full flex items-center justify-center overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 2 }}
                src="/img/sou.png"
                alt="hero_image"
                className="w-[564px] h-[564px] rounded-lg relative z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
