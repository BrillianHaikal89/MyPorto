"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";

// images project 1
import ReactChat1 from "@/public/projects/project1/project1_1.png";
import ReactChat2 from "@/public/projects/project1/project1_2.png";
import ReactChat3 from "@/public/projects/project1/project1_3.png";

// images project 2
import ReactChat4 from "@/public/projects/project2/project2_1.jpg";
import ReactChat5 from "@/public/projects/project2/project2_2.jpg";
import ReactChat6 from "@/public/projects/project2/project2_3.jpg";
import ReactChat7 from "@/public/projects/project2/project2_4.jpg";
import ReactChat8 from "@/public/projects/project2/project2_5.jpg";

// images project 3 (SSG)
import SSG1 from "@/public/projects/project3/ssg1.png";
import SSG2 from "@/public/projects/project3/ssg2.png";
import SSG3 from "@/public/projects/project3/ssg3.png";

import ProjectAll from "@/public/img/projects.png";

import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faExternalLinkAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const category = {
  1: "Web Development",
};

export default function Page() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSSGImageIndex, setCurrentSSGImageIndex] = useState(0);

  // Project 2 images array for carousel
  const project2Images = [
    {
      src: ReactChat4,
      alt: "IoT Bird Feeder - Device",
    },
    {
      src: ReactChat5,
      alt: "IoT Bird Feeder - Mobile App",
    },
    {
      src: ReactChat6,
      alt: "IoT Bird Feeder - Full System",
    },
    {
      src: ReactChat7,
      alt: "IoT Bird Feeder - Full System",
    },
    {
      src: ReactChat8,
      alt: "IoT Bird Feeder - Full System",
    }
  ];

  // Project 3 (SSG) images array for carousel
  const ssgImages = [
    {
      src: SSG1,
      alt: "SSG Project - Homepage",
    },
    {
      src: SSG2,
      alt: "SSG Project - Blog Page",
    },
    {
      src: SSG3,
      alt: "SSG Project - Markdown Support",
    }
  ];

  // Function to cycle to next image
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project2Images.length
    );
  };

  // Function to cycle to previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project2Images.length) % project2Images.length
    );
  };

  // Functions for SSG project carousel
  const nextSSGImage = () => {
    setCurrentSSGImageIndex(
      (prevIndex) => (prevIndex + 1) % ssgImages.length
    );
  };

  const prevSSGImage = () => {
    setCurrentSSGImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + ssgImages.length) % ssgImages.length
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/#projects">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButon>
        <div className="relative h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16 ">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.6 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 "
            >
              <Image
                src={ProjectAll}
                alt="Brillian"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
              My Projects
            </h1>
            <Hr />
            <p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
              List of my projects that I have done and{" "}
              <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                currently working on.
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
              className="mb-3"
            >
              <Button variation="primary">Scroll Down</Button>
            </motion.div>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
          <div className="flex justify-center items-center flex-col my-5 self-start ">
            <div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
            <div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
            <h1 className="text-3xl font-bold mt-3">Highlight</h1>
          </div>
        </div>
        
        {/* Project 1 */}
        <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
          <div className="flex justify-center items-start flex-col mb-5 ">
            <div className="images relative w-full aspect-square">
              <div className="absolute top-28 left-10 h-[40%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  className="w-full h-full shadow-lg"
                >
                  <Image
                    src={ReactChat1}
                    alt="Brillian"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    className="rat"
                  />
                </motion.div>
              </div>
              <div className="absolute top-16 right-28 h-[30%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{ delay: 0.3 }}
                  className="w-full h-full shadow-lg "
                >
                  <Image
                    src={ReactChat2}
                    alt="Brillian"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    objectPosition="0% 0%"
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-16 right-20 h-[35%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="w-full h-full shadow-lg"
                >
                  <Image
                    src={ReactChat3}
                    alt="Brillian"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            className="flex justify-center items-start flex-col mb-5 md:px-10"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            <h2 className="text-2xl font-bold tracking-wider mb-3">
              ULBI Library Book Borrowing and Return Application Website Based
            </h2>
            <p className="text-gray-600 text-justify title text-lg">
              This website-based ULBI library book borrowing and returning application was created to make it easier for students, 
              lecturers, and staff to manage the book borrowing and returning process digitally. 
              This application aims to improve the efficiency of library services, reduce manual queues, and ensure transparency and accuracy in recording transactions. 
              In addition, this application is also designed to provide access to information on book availability in real time, make it easier for users to search for and order books, 
              and help the library manage book inventory in a more structured and integrated manner.
            </p>
            <div className="mt-3 text-black font-medium bg-white py-1 px-3 rounded-full inline-block">
              Using Technology JavaScript, PHP, CSS, SCSS, CodeIgniter
            </div>
          </motion.div>
        </div>
        
        {/* Project 2 - With Interactive Carousel */}
        <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
          <div className="flex justify-center items-start flex-col mb-5">
            <div className="images relative w-full aspect-square">
              {/* Interactive Carousel for Project 2 */}
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Main carousel container */}
                <div className="relative w-[80%] h-[70%] flex justify-center items-center">
                  {/* Image carousel */}
                  <div
                    className="relative w-[80%] h-[80%] cursor-grab active:cursor-grabbing"
                    onMouseDown={(e) => {
                      const startX = e.clientX;

                      const handleMouseMove = (moveEvent) => {
                        const currentX = moveEvent.clientX;
                        const diff = startX - currentX;

                        if (Math.abs(diff) > 50) {
                          if (diff > 0) {
                            nextImage();
                          } else {
                            prevImage();
                          }
                          document.removeEventListener(
                            "mousemove",
                            handleMouseMove
                          );
                          document.removeEventListener(
                            "mouseup",
                            handleMouseUp
                          );
                        }
                      };

                      const handleMouseUp = () => {
                        document.removeEventListener(
                          "mousemove",
                          handleMouseMove
                        );
                        document.removeEventListener("mouseup", handleMouseUp);
                      };

                      document.addEventListener("mousemove", handleMouseMove);
                      document.addEventListener("mouseup", handleMouseUp);
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100, rotateY: 45 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, x: -100, rotateY: -45 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full shadow-lg rounded-xl overflow-hidden border-2 border-gray-200 z-50 flex items-center justify-center"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={project2Images[currentImageIndex].src}
                            alt={project2Images[currentImageIndex].alt}
                            layout="fill"
                            objectFit="contain"
                            placeholder="blur"
                            className="rounded-xl"
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation controls */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={prevImage}
                      className="bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                      aria-label="Previous image"
                    >
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-gray-700"
                      />
                    </button>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={nextImage}
                      className="bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                      aria-label="Next image"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-gray-700"
                      />
                    </button>
                  </div>

                  {/* Thumbnail indicators */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {project2Images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-blue-500 scale-125"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Instructions overlay */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 whitespace-nowrap">
                    Drag image to change • Click arrows to navigate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="flex justify-center items-start flex-col mb-5 md:px-10"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            <h2 className="text-2xl font-bold tracking-wider mb-3">
              IoT-Based Automatic Bird Feeder Design
            </h2>
            <p className="text-gray-600 text-justify title text-lg">
              This automatic bird feeder design system is made for bird lovers but have limited time so they don&apos;t have time to feed their pet birds regularly. 
              This automatic bird feeder design system can be controlled using a smartphone so that it can make it easier for someone who keeps birds but has limited time to feed them via smartphone wherever they are. 
              For now, the application on the smartphone or used to control the provision of bird feed still uses a second party, namely Blynk IoT, which you can find in your PlayStore or AppStore.
            </p>
            <div className="mt-3 text-black font-medium bg-white py-1 px-3 rounded-full inline-block">
              Using Technology C++
            </div>
          </motion.div>
        </div>

        {/* Project 3 - SSG Project */}
        <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-20">
          <div className="flex justify-center items-start flex-col mb-5">
            <div className="images relative w-full aspect-square">
              {/* Interactive Carousel for SSG Project */}
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Main carousel container */}
                <div className="relative w-[80%] h-[70%] flex justify-center items-center">
                  {/* Image carousel */}
                  <div
                    className="relative w-[80%] h-[80%] cursor-grab active:cursor-grabbing"
                    onMouseDown={(e) => {
                      const startX = e.clientX;

                      const handleMouseMove = (moveEvent) => {
                        const currentX = moveEvent.clientX;
                        const diff = startX - currentX;

                        if (Math.abs(diff) > 50) {
                          if (diff > 0) {
                            nextSSGImage();
                          } else {
                            prevSSGImage();
                          }
                          document.removeEventListener(
                            "mousemove",
                            handleMouseMove
                          );
                          document.removeEventListener(
                            "mouseup",
                            handleMouseUp
                          );
                        }
                      };

                      const handleMouseUp = () => {
                        document.removeEventListener(
                          "mousemove",
                          handleMouseMove
                        );
                        document.removeEventListener("mouseup", handleMouseUp);
                      };

                      document.addEventListener("mousemove", handleMouseMove);
                      document.addEventListener("mouseup", handleMouseUp);
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSSGImageIndex}
                        initial={{ opacity: 0, x: 100, rotateY: 45 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, x: -100, rotateY: -45 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full shadow-lg rounded-xl overflow-hidden border-2 border-gray-200 z-50 flex items-center justify-center"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={ssgImages[currentSSGImageIndex].src}
                            alt={ssgImages[currentSSGImageIndex].alt}
                            layout="fill"
                            objectFit="contain"
                            placeholder="blur"
                            className="rounded-xl"
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation controls */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={prevSSGImage}
                      className="bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                      aria-label="Previous image"
                    >
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-gray-700"
                      />
                    </button>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
                    <button
                      onClick={nextSSGImage}
                      className="bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                      aria-label="Next image"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-gray-700"
                      />
                    </button>
                  </div>

                  {/* Thumbnail indicators */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {ssgImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSSGImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentSSGImageIndex === index
                            ? "bg-blue-500 scale-125"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Instructions overlay */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 whitespace-nowrap">
                    Drag image to change • Click arrows to navigate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="flex justify-center items-start flex-col mb-5 md:px-10"
            initial={{
              opacity: 0,
              x: 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            <h2 className="text-2xl font-bold tracking-wider mb-3">
              Static Site Generator (SSG) with Markdown Support
            </h2>
            <p className="text-gray-600 text-justify title text-lg">
              A custom Static Site Generator (SSG) built with Node.js that transforms Markdown files into a fully functional static website. 
              This project features automatic routing, syntax highlighting for code blocks, and a clean, responsive design. 
              The generator supports front matter for metadata, allowing for blog posts with titles, dates, and tags. 
              It&apos;s perfect for documentation sites, blogs, or personal websites that need fast loading times and easy content updates.
            </p>
            <div className="mt-3 text-black font-medium bg-white py-1 px-3 rounded-full inline-block">
              Using Technology Node.js, Markdown, HTML, CSS, JavaScript
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/BrillianHaikal89/SSG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                View Source Code
              </a>
              <a 
                href="https://santri.siapguna.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}