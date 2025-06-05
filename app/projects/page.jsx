"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";

// Project 1 - ULBI Library
import ReactChat1 from "@/public/projects/project1/project1_1.png";
import ReactChat2 from "@/public/projects/project1/project1_2.png";
import ReactChat3 from "@/public/projects/project1/project1_3.png";

// Project 2 - IoT Bird Feeder
import ReactChat4 from "@/public/projects/project2/project2_1.jpg";
import ReactChat5 from "@/public/projects/project2/project2_2.jpg";
import ReactChat6 from "@/public/projects/project2/project2_3.jpg";
import ReactChat7 from "@/public/projects/project2/project2_4.jpg";
import ReactChat8 from "@/public/projects/project2/project2_5.jpg";

// Project 3 - SSG
import SSG1 from "@/public/projects/project3/ssg1.png";
import SSG2 from "@/public/projects/project3/ssg2.png";
import SSG3 from "@/public/projects/project3/ssg3.png";

// Project 4 - Cafe Cashier
import Cafe1 from "@/public/projects/project4/cafe1.png";
import Cafe2 from "@/public/projects/project4/cafe2.png";
import Cafe3 from "@/public/projects/project4/cafe3.png";

// Project 5 - Portfolio
import Portfolio1 from "@/public/projects/project5/portfolio1.png";
import Portfolio2 from "@/public/projects/project5/portfolio2.png";
import Portfolio3 from "@/public/projects/project5/portfolio3.png";

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

export default function Page() {
  // State untuk carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSSGImageIndex, setCurrentSSGImageIndex] = useState(0);
  const [currentCafeImageIndex, setCurrentCafeImageIndex] = useState(0);
  const [currentPortfolioImageIndex, setCurrentPortfolioImageIndex] = useState(0);

  // Data gambar untuk carousel
  const project2Images = [
    { src: ReactChat4, alt: "IoT Bird Feeder - Device" },
    { src: ReactChat5, alt: "IoT Bird Feeder - Mobile App" },
    { src: ReactChat6, alt: "IoT Bird Feeder - Full System" },
    { src: ReactChat7, alt: "IoT Bird Feeder - Full System" },
    { src: ReactChat8, alt: "IoT Bird Feeder - Full System" }
  ];

  const ssgImages = [
    { src: SSG1, alt: "SSG Project - Homepage" },
    { src: SSG2, alt: "SSG Project - Blog Page" },
    { src: SSG3, alt: "SSG Project - Markdown Support" }
  ];

  const cafeImages = [
    { src: Cafe1, alt: "Cafe Cashier - Dashboard" },
    { src: Cafe2, alt: "Cafe Cashier - Order Management" },
    { src: Cafe3, alt: "Cafe Cashier - Transaction History" }
  ];

  const portfolioImages = [
    { src: Portfolio1, alt: "Portfolio - Homepage" },
    { src: Portfolio2, alt: "Portfolio - Projects Section" },
    { src: Portfolio3, alt: "Portfolio - Contact Section" }
  ];

  // Fungsi navigasi carousel
  const navigateCarousel = (images, currentIndex, setIndex, direction) => {
    setIndex((prevIndex) => 
      (prevIndex + direction + images.length) % images.length
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Komponen Carousel yang bisa digunakan kembali
  const ProjectCarousel = ({ 
    images, 
    currentIndex, 
    onNext, 
    onPrev,
    projectTitle,
    description,
    technologies,
    githubLink,
    demoLink 
  }) => (
    <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
      <div className="flex justify-center items-start flex-col mb-5">
        <div className="images relative w-full aspect-square">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="relative w-[80%] h-[70%] flex justify-center items-center">
              <div
                className="relative w-[80%] h-[80%] cursor-grab active:cursor-grabbing"
                onMouseDown={(e) => {
                  const startX = e.clientX;
                  const handleMouseMove = (moveEvent) => {
                    const diff = startX - moveEvent.clientX;
                    if (Math.abs(diff) > 50) {
                      diff > 0 ? onNext() : onPrev();
                      document.removeEventListener("mousemove", handleMouseMove);
                    }
                  };
                  document.addEventListener("mousemove", handleMouseMove);
                  document.addEventListener("mouseup", () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                  }, { once: true });
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100, rotateY: 45 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -100, rotateY: -45 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full shadow-lg rounded-xl overflow-hidden border-2 border-gray-200 z-50 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        layout="fill"
                        objectFit="contain"
                        placeholder="blur"
                        className="rounded-xl"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={onPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                aria-label="Previous image"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
              </button>

              <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                aria-label="Next image"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-700" />
              </button>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => navigateCarousel(images, currentIndex, index === currentIndex ? () => {} : index > currentIndex ? () => onNext() : () => onPrev(), 0)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index ? "bg-blue-500 scale-125" : "bg-gray-300"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 whitespace-nowrap">
                Drag image to change • Click arrows to navigate
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex justify-center items-start flex-col mb-5 md:px-10"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <h2 className="text-2xl font-bold tracking-wider mb-3">{projectTitle}</h2>
        <p className="text-gray-600 text-justify title text-lg">{description}</p>
        <div className="mt-3 text-black font-medium bg-white py-1 px-3 rounded-full inline-block">
          {technologies}
        </div>
        {(githubLink || demoLink) && (
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon={faCode} />
                <span>View Source Code</span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );

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
                alt="All Projects"
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

        {/* Project 1 - ULBI Library */}
        <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
          <div className="flex justify-center items-start flex-col mb-5 ">
            <div className="images relative w-full aspect-square">
              <div className="absolute top-28 left-10 h-[40%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  className="w-full h-full shadow-lg"
                >
                  <Image
                    src={ReactChat1}
                    alt="ULBI Library Interface"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
              <div className="absolute top-16 right-28 h-[30%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full h-full shadow-lg"
                >
                  <Image
                    src={ReactChat2}
                    alt="ULBI Library Book Search"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-16 right-20 h-[35%] aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full h-full shadow-lg"
                >
                  <Image
                    src={ReactChat3}
                    alt="ULBI Library Admin Panel"
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
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <h2 className="text-2xl font-bold tracking-wider mb-3">
              ULBI Library Book Borrowing System
            </h2>
            <p className="text-gray-600 text-justify title text-lg">
              A comprehensive digital solution for ULBI's library management, enabling students, 
              lecturers, and staff to borrow and return books efficiently. The system provides 
              real-time book availability, reduces manual queues, and ensures accurate transaction 
              records. Features include an intuitive search interface, reservation system, and 
              automated reminders for due dates.
            </p>
            <div className="mt-3 text-black font-medium bg-white py-1 px-3 rounded-full inline-block">
              JavaScript, PHP, CSS, SCSS, CodeIgniter
            </div>
          </motion.div>
        </div>

        {/* Project 2 - IoT Bird Feeder */}
        <ProjectCarousel
          images={project2Images}
          currentIndex={currentImageIndex}
          onNext={() => navigateCarousel(project2Images, currentImageIndex, setCurrentImageIndex, 1)}
          onPrev={() => navigateCarousel(project2Images, currentImageIndex, setCurrentImageIndex, -1)}
          projectTitle="IoT-Based Automatic Bird Feeder"
          description="An innovative IoT solution for bird enthusiasts with busy schedules. The system 
          automates bird feeding and can be controlled remotely via smartphone. It includes 
          features like scheduled feeding, portion control, and low-food alerts. The companion 
          mobile app provides real-time monitoring and control from anywhere."
          technologies="C++, IoT, Blynk Platform"
        />

        {/* Project 3 - SSG Website */}
        <ProjectCarousel
          images={ssgImages}
          currentIndex={currentSSGImageIndex}
          onNext={() => navigateCarousel(ssgImages, currentSSGImageIndex, setCurrentSSGImageIndex, 1)}
          onPrev={() => navigateCarousel(ssgImages, currentSSGImageIndex, setCurrentSSGImageIndex, -1)}
          projectTitle="Santri Siap Guna Website"
          description="A comprehensive platform for the Santri Siap Guna program, facilitating student 
          registration, attendance tracking, and activity monitoring. The system utilizes QR code 
          technology for efficient check-ins and provides administrators with real-time analytics. 
          Features include student progress tracking, event management, and integrated communication tools."
          technologies="Next.js, React.js, HTML, CSS, JavaScript"
          githubLink="https://github.com/BrillianHaikal89/SSG"
          demoLink="https://santri.siapguna.org/"
        />

        {/* Project 4 - Cafe Cashier */}
        <ProjectCarousel
          images={cafeImages}
          currentIndex={currentCafeImageIndex}
          onNext={() => navigateCarousel(cafeImages, currentCafeImageIndex, setCurrentCafeImageIndex, 1)}
          onPrev={() => navigateCarousel(cafeImages, currentCafeImageIndex, setCurrentCafeImageIndex, -1)}
          projectTitle="Cafe Cashier Management System"
          description="A complete point-of-sale solution for cafes and small restaurants. The system 
          streamlines order taking, payment processing, and inventory management. Features include 
          table management, menu customization, sales reporting, and staff performance tracking. 
          The intuitive interface reduces training time and improves order accuracy."
          technologies="React.js, Node.js, Express, MongoDB, Tailwind CSS"
          githubLink="https://github.com/BrillianHaikal89/caffe-cashier"
          demoLink="https://caffe-cashier-att.brlnz.my.id/"
        />

        {/* Project 5 - Portfolio */}
        <ProjectCarousel
          images={portfolioImages}
          currentIndex={currentPortfolioImageIndex}
          onNext={() => navigateCarousel(portfolioImages, currentPortfolioImageIndex, setCurrentPortfolioImageIndex, 1)}
          onPrev={() => navigateCarousel(portfolioImages, currentPortfolioImageIndex, setCurrentPortfolioImageIndex, -1)}
          projectTitle="Modern Portfolio Website"
          description="A professional portfolio showcasing my skills, projects, and experience. The 
          responsive design features smooth animations and transitions, with sections for projects, 
          skills, and contact information. Built with performance optimization, the site loads 
          quickly across all devices while maintaining a distinctive visual style that reflects 
          my personal brand."
          technologies="Next.js, React.js, Tailwind CSS, Framer Motion"
          githubLink="https://github.com/BrillianHaikal89/portfolio"
          demoLink="https://portofolio-blue-zeta.vercel.app/"
        />
      </main>
    </>
  );
}