/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, resolveMotionValue } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const containerX = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: delay },
    },
  });
  const containerY = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: delay },
    },
  });
  return (
    <motion.div id="hero" className="flex flex-col gap-12 pt-16 md:pt-0 md:h-[90vh] sm:my-16 md:my-0 lg:flex-row justify-between items-center">
      <motion.div
        variants={containerX(0.2)}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-12"
      >
        <div className="text-white text-center lg:text-start text-2xl md:text-5xl space-y-4 font-bold">
          <h2>Hello !</h2>
          <h2>
            I'm <span className="text-[#2EB2D3]"></span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "React Developer",
                1000,
                "MERN Developer",
                1000,
              ]}
              wrapper="span"
              speed={1}
              style={{ display: "inline-block", color: "#2EB2D3" }}
              repeat={Infinity}
            />
          </h2>
          <h2>Akm Nahid Bin Wadood</h2>
        </div>
        <motion.div
          variants={containerX(0.6)}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <div className="">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-140}
              duration={1100}
              className="md:font-semibold cursor-pointer bg-[#2EB2D3] px-12 py-2 md:px-12 md:py-4 text-white rounded-full"
            >
              Hire me
            </Link>
          </div>
          <div className="">
            <a
              href={
                "https://drive.google.com/uc?export=download&id=1vankp2j-CHVIYh8auEcTUFMesC1u4qDx"
              }
              download={"Resume.pdf"}
              className="md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-12 md:py-4   rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Image
          className="rounded-full"
          height="640"
          width="540"
          alt="myProfile"
          src="/assets/myProfile.jpg"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
