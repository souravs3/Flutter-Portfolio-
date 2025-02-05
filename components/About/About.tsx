import React from "react";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TfiRulerPencil } from "react-icons/tfi";
import { motion } from "framer-motion";
import { FaDatabase, FaCloud  } from 'react-icons/fa'; 

const About = () => {
  const data = [
    {
      icon: TfiRulerPencil,
      title: (
        <span>
          UI & UX <br /> Designing
        </span>
      ),
    },
    {
      icon: FaLaptopCode,
      title: (
        <span>
          Cross Platform 
          <br />App DEVELOPMENT - Flutter
        </span>
      ),
    },
    {
      icon: FaDatabase,
      title: (
        <span>
          Local Databases
          <br /> Sqflite,Hive
        </span>
      ),
    },
    {
      icon: FaCloud ,
      title: (
        <span>
          Rest Api,
          <br /> Firebase
        </span>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
        duration: 0.3,
        type: "spring",
      },
    },
  };

  const itemdisplay = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      duration: 2,
      type: "spring",
    },
  };

  return (
    <section id="about" className="py-10 w-full">
      <div className="container">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="text-2xl md:text-3xl font-semibold text-red-600"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 4 }}
            className="text-sm md:text-base font-medium"
          >
            Hi, my name is Sourav S, I am a Flutter developer,
             I have honed my skills in
            Mobile App Development and advance I have core understanding of advance UI
            design principles. Here are the major skills I do dominate.
          </motion.p>
          <div className="flex items-start justify-start gap-5 flex-col md:flex-row md:items-center">
            {/* <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="text-3xl md:text-4xl lg:text-6xl font-semibold text-red-600"
            >
              4+
            </motion.span> */}
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="text-lg md:text-xl font-medium"
            >
               Specialised in building Mobile applications,
              while ensuring a seamless
              <br className="hidden lg:block" /> App performance and user
              experience.
            </motion.span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {data.map((item, i) => (
              <motion.div
                variants={itemdisplay}
                key={i}
                className="w-full h-[254px] bg-primary transition-all duration-300 hover:bg-secondary rounded flex flex-col items-start justify-end gap-4 p-4"
              >
                <span>
                  <item.icon size={40} />
                </span>
                <h2 className="font-semibold text-2xl">{item.title}</h2>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
