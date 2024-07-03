/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { ImSpinner4 } from "react-icons/im";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const text = e.target.message.value;
    console.log(name, email, text);
    setLoading(true)
    emailjs
      .sendForm(
        "service_9bx0e3x",
        "template_zsxh2ca",
        e.target,
        "HsltON4PACq4Z-FB9"
      )
      .then((res) => {
        if (res.status == 200) {
          toast.success("Your message sent successfully !");
          setLoading(false)
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  };

  return (
    <div id="contact" className="text-white mt-24 mb-16 ">
      <h2 className="text-2xl md:text-4xl font-bold text-center ">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center mt-16 border-2 border-gray-500 rounded-xl py-8 px-4 lg:px-12 lg:py-16">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 space-y-6 lg:pl-16"
        >
          <h2 className="font-semibold text-2xl lg:text-4xl">Let's Talk</h2>
          <p className="font-medium lg:text-lg lg:w-4/5">
            I am looking for new opportunities.My inbox is always open.Feel free
            to ask me questions and I will try to get back to you asap . You can mail me at <span className="font-semibold text-[#2EB2D3]">nahidbinwadood@gmail.com</span>
          </p>
          <div className="flex items-center gap-5">
            <Link href={"https://github.com/nahidbinwadood"}>
              {" "}
              <FaGithubSquare className="size-12 text-[#2EB2D3]" />
            </Link>
            <Link href={"https://www.facebook.com/nahid.bin.w/"}>
              {" "}
              <FaFacebookSquare className="size-12 text-[#2EB2D3] " />
            </Link>
            <Link href={"https://www.linkedin.com/in/akm-nahid-bin-wadood/"}>
              {" "}
              <FaLinkedin className="size-12 text-[#2EB2D3]" />
            </Link>
            <a href="mailto:nahidbinwadood@gmail.com">
              {" "}
              <SiGmail className="size-12 text-[#2EB2D3]" />
            </a>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <form onSubmit={handleSubmit} className="space-y-7 mx-8">
            <div>
              <div>
                <h2 className="mb-4 font-semibold text-lg">Name</h2>
              </div>
              <input
              required
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input input-bordered lg:w-4/5 p-5 text-slate-700  text-black  rounded-md placeholder:text-slate-600 "
              />
            </div>
            <div>
              <div>
                <h2 className="mb-4 font-semibold text-lg">Email</h2>
              </div>
              <input
              required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered lg:w-4/5  text-slate-700 p-5 text-black  rounded-md placeholder:text-slate-600 "
              />
            </div>
            <div>
              <div>
                <h2 className="mb-4 font-semibold text-lg">Message</h2>
              </div>
              <textarea
                rows={5}
                required
                placeholder="Enter Your Message"
                className="outline-none font-roboto w-full lg:w-4/5 text-slate-700 text-black  p-5 rounded-md placeholder:text-slate-600"
                name="message"
                id="message "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="text-center w-full lg:w-4/5 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-12 md:py-4 rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
              >
                {loading ? (
                    <ImSpinner4 className="animate-spin m-auto size-5" />
                  ) : (
                    "Send Message"
                  )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
