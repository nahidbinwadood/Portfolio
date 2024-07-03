"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Modals from "./Modal";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="projects" className="text-white mt-24">
      <h2 className="text-2xl md:text-4xl font-bold text-center ">
        Project Showcase
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl"
        >
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/elite.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">
              {" "}
              EliteEstate Solutions
            </h2>
            <h2 className="  md:text-lg mt-6">
              {" "}
              This is a Real Estate platform for buying, listing, and selling
              properties with role-specific dashboards, secure transactions, and
              admin controls for approvals and fraud detection.
            </h2>
            <h2 className=" font-semibold  md:text-lg mt-6"> Features:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Wishlist and Offers: </span>Users can add properties to their wishlist and make offers.</li>
              <li><span className="font-semibold">Property Sales: </span> Agents can sell properties to the highest bidder.</li>
              <li><span className="font-semibold">Property Management: </span> Agents add and update properties; listings require admin approval.</li>
            </ul>
            <h2 className=" font-semibold  md:text-lg mt-6"> Used Technology:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li> <span className="font-semibold">Frontend: </span> HTML,CSS3,TailwindCSS,Material Tailwind,React,React Router.</li>
              <li> <span className="font-semibold">Backend: </span> NodeJs,MongoDb,ExpressJs </li>
            </ul>
          </div>
          <div className="flex items-center justify-between py-6">
            <Link
              target="_blank"
              href={"https://eliteestate-solutions.web.app"}
              className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full"
            >
              Live{" "}
            </Link>

            <Link
              target="_blank"
              href={"https://github.com/nahidbinwadood/EliteEstate-Solutions"}
              className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
            >
              <FaGithub className="size-5 lg:size-8 text-[#fff]" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl"
        >
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/VolunteerHub.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">
              {" "}
              VolunteerHub{" "}
            </h2>
            <h2 className="  md:text-lg mt-6">
              {" "}
              VolunteerHub is a volunteer management system website allowing users to post, apply, manage, and track volunteer opportunities with Google account integration for easy access and interaction.
            </h2>
            <h2 className=" font-semibold  md:text-lg mt-6"> Features:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Post and Manage Volunteer Opportunities: </span> Users can post their volunteer opportunities and hire volunteers for their projects.</li>
              <li><span className="font-semibold">Apply for Opportunities: </span>  Users can apply for various volunteer opportunities where they want to contribute.</li>
              <li><span className="font-semibold">Advanced Filtering and Search:</span>  Features advanced filtering and search functionality on the volunteer page to easily find desired posts.</li>
            </ul>
            <h2 className=" font-semibold  md:text-lg mt-6"> Used Technology:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li> <span className="font-semibold">Frontend: </span> HTML,CSS3,TailwindCSS,Material Tailwind,React,React Router.</li>
              <li> <span className="font-semibold">Backend: </span> NodeJs,MongoDb,ExpressJs </li>
            </ul>
          </div>
          <div className="flex items-center justify-between py-6">
            <Link
              target="_blank"
              href={"https://volunteer-management-sys-66dad.web.app/"}
              className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full"
            >
              Live{" "}
            </Link>

            <Link
              target="_blank"
              href={
                "https://github.com/nahidbinwadood/Volunteer-Management-System"
              }
              className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
            >
              <FaGithub className="size-5 lg:size-8 text-[#fff]" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl"
        >
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/paintHomee.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">
              PaintHome{" "}
            </h2>
            <h2 className="  md:text-lg mt-6">
              {" "}
              Developed Paint Home, a responsive, full-stack website for drawing and painting with various categories, extensive art information, and a platform for users to share their creations.
            </h2>
            <h2 className=" font-semibold  md:text-lg mt-6"> Features:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">User Accounts: </span> Seamless account creation via Google login for full access..</li>
              <li><span className="font-semibold">Post and Manage Art:  </span> Users can post, update, and delete their painting information on the  My Art & Craft List  page.</li>
              <li><span className="font-semibold">Data Security: </span>  Ensures each users data is secure and private; users can only access and modify their own data</li>
            </ul>
            <h2 className=" font-semibold  md:text-lg mt-6"> Used Technology:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li> <span className="font-semibold">Frontend: </span> HTML,CSS3,TailwindCSS,Material Tailwind,React,React Router.</li>
              <li> <span className="font-semibold">Backend: </span> NodeJs,MongoDb,ExpressJs </li>
            </ul>
          </div>
          <div className="flex items-center justify-between py-6">
            <Link
              target="_blank"
              href={"https://painting-drawing-auth.web.app/"}
              className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full"
            >
              Live{" "}
            </Link>
            {/* <button
              onClick={() => setIsOpen(true)}
              className="  font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full border border-[#FFF]"
            >
              Details{" "}
            </button> */}

            <Link
              target="_blank"
              href={"https://github.com/nahidbinwadood/Paint-Home"}
              className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
            >
              <FaGithub className="size-5 lg:size-8 text-[#fff]" />
            </Link>
          </div>
          {/* <Modal description={"Paint Home is a responsive, full-stack website catering to drawing and painting enthusiasts. It offers diverse art categories with detailed information to aid skill development. The platform enables users to showcase their creations and receive community feedback, fostering a supportive artistic environment. Whether users are beginners or seasoned artists, Paint Home serves as a comprehensive resource for learning, exploring different styles, and sharing artwork. It addresses the challenges of accessing diverse art resources and building a community for creative expression and improvement."} feature1={"Seamless account creation via Google login for full access."} feature2={"Users can post, update, and delete their painting information on the My Art & Craft List page."} feature3={"Ensures each user's data is secure and private; users can only access and modify their own data."} isOpen={isOpen} setIsOpen={setIsOpen}></Modal> */}
        </motion.div>

        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl"
        >
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/bistroBoss.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">
              BistroBoss{" "}
            </h2>
            <h2 className="text-center  md:text-lg mt-6">Restaurant Website</h2>
          </div>
          <div className="flex items-center justify-between py-6">
            <Link
              target="_blank"
              href={"https://bistro-boss-5eb34.web.app/"}
              className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full"
            >
              Live{" "}
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/nahidbinwadood/Bistro-Boss-Restaurant"}
              className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
            >
              <FaGithub className="size-5 lg:size-8 text-[#fff]" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl"
        >
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/bookVibe.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">
              BooKVibe{" "}
            </h2>
            <h2 className="text-center  md:text-lg mt-6">Book Store Website</h2>
          </div>
          <div className="flex items-center justify-between py-6">
            <Link
              target="_blank"
              href={"https://guileless-lolly-a03759.netlify.app/"}
              className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full"
            >
              Live{" "}
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/nahidbinwadood/Book-Vibe"}
              className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
            >
              <FaGithub className="size-5 lg:size-8 text-[#fff]" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className=" flex flex-col justify-center bg-[#2EB2D300] border-2 border-gray-500 p-4 lg:p-12 rounded-xl"
        >
          <div className=" ">
            <Image
              className=" "
              height={240}
              width={540}
              alt="eliteEstate"
              src="/assets/empireProperties.png"
            />
          </div>
          <div>
            <h2 className="font-medium text-center text-lg md:text-2xl mt-6">
              Empire Properties{" "}
            </h2>
            <h2 className="text-center  md:text-lg mt-6">
              Luxurious Estate Website
            </h2>
          </div>
          <div className="flex items-center justify-between py-6">
            <Link
              target="_blank"
              href={"https://real-esate-business.web.app/"}
              className="bg-[#2EB2D3] font-medium block md:font-semibold px-6 py-2 md:px-8 md:py-3 text-white rounded-full"
            >
              Live{" "}
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/nahidbinwadood/Empire-Properties"}
              className="flex items-center gap-3 md:font-semibold border-2 border-[#2EB2D3] text-[#2EB2D3] px-6 py-2 md:px-8 md:py-2  rounded-full hover:bg-[#2EB2D3] hover:text-white transition duration-500"
            >
              <FaGithub className="size-5 lg:size-8 text-[#fff]" />
            </Link>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Projects;
