"use client";
import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";

// images project 1 (Library)
import ReactChat1 from "@/public/projects/project1/project1_1.png";
import ReactChat2 from "@/public/projects/project1/project1_2.png";
import ReactChat3 from "@/public/projects/project1/project1_3.png";

// images project 2 (Bird Feeder)
import ReactChat4 from "@/public/projects/project2/project2_1.jpg";
import ReactChat5 from "@/public/projects/project2/project2_2.jpg";
import ReactChat6 from "@/public/projects/project2/project2_3.jpg";
import ReactChat7 from "@/public/projects/project2/project2_4.jpg";
import ReactChat8 from "@/public/projects/project2/project2_5.jpg";

// images project 3 (SSG)
import SSG1 from "@/public/projects/project3/ssg1.png";
import SSG2 from "@/public/projects/project3/ssg2.png";
import SSG3 from "@/public/projects/project3/ssg3.png";

// images project 4 (Cafe Cashier)
import Cafe1 from "@/public/projects/project4/cafe1.png";
import Cafe2 from "@/public/projects/project4/cafe2.png";
import Cafe3 from "@/public/projects/project4/cafe3.png";

// images project 5 (Portfolio)
import Portfolio1 from "@/public/projects/project5/portfolio1.png";
import Portfolio2 from "@/public/projects/project5/portfolio2.png";
import Portfolio3 from "@/public/projects/project5/portfolio3.png";

// images project 6 (Dashboard PMP Jabar)
import Pmp1 from "@/public/projects/project6/portfolio1.png";
import Pmp2 from "@/public/projects/project6/portfolio2.png";
import Pmp3 from "@/public/projects/project6/portfolio3.png";

// images project 7 (Dashboard SPMB Provinsi Jawa Barat)
import Spmb1 from "@/public/projects/project7/portfolio1.png";
import Spmb2 from "@/public/projects/project7/portfolio2.png";
import Spmb3 from "@/public/projects/project7/portfolio3.png";

// images project 8 (Website Marketplace)
import Marketplace1 from "@/public/projects/project8/portfolio1.png";
import Marketplace2 from "@/public/projects/project8/portfolio2.png";
import Marketplace3 from "@/public/projects/project8/portfolio3.png";

import ProjectAll from "@/public/img/projects.png";

import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faExternalLinkAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

/* -------------------------------------------------------------------------- */
/*  Helper                                                                     */
/* -------------------------------------------------------------------------- */

const Photo = ({ img, cover = true, className = "" }) => (
  <div className={`relative w-full h-full ${className}`}>
    <Image
      src={img.src}
      alt={img.alt}
      layout="fill"
      objectFit={cover ? "cover" : "contain"}
      placeholder="blur"
    />
  </div>
);

const GRAY =
  "grayscale hover:grayscale-0 transition-all ease duration-300";

/* -------------------------------------------------------------------------- */
/*  1. COLLAGE  — slide masuk dari samping + scale (asli projek perpustakaan)  */
/* -------------------------------------------------------------------------- */
function CollageGallery({ images }) {
  const items = [
    { pos: "top-28 left-10 h-[40%] z-10", x: 100, delay: 0 },
    { pos: "top-16 right-28 h-[30%]", x: -100, delay: 0.3 },
    { pos: "bottom-16 right-20 h-[35%]", x: -100, delay: 0.5 },
  ];
  return (
    <>
      {items.map((it, i) => (
        <div
          key={i}
          className={`absolute ${it.pos} aspect-video ${GRAY} hover:scale-150`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: it.x }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: it.delay }}
            className="w-full h-full shadow-lg"
          >
            <Photo img={images[i]} />
          </motion.div>
        </div>
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. FAN  — kartu menyebar seperti kipas dari tengah                         */
/* -------------------------------------------------------------------------- */
function FanGallery({ images }) {
  const cfg = [
    { x: -90, rotate: -14, y: 20 },
    { x: 0, rotate: 0, y: -10 },
    { x: 90, rotate: 14, y: 20 },
  ];
  return (
    <>
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.6 }}
          whileInView={{ ...cfg[i], opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 70, damping: 12, delay: i * 0.2 }}
          whileHover={{ y: -40, rotate: 0, scale: 1.2, zIndex: 50 }}
          style={{ zIndex: i === 1 ? 20 : 10 }}
          className="absolute top-[25%] left-[22%] w-[56%] aspect-video shadow-2xl rounded-lg overflow-hidden border-4 border-white"
        >
          <Photo img={img} />
        </motion.div>
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. WIPE  — terbuka seperti tirai (clip-path) membentuk tangga              */
/* -------------------------------------------------------------------------- */
function WipeGallery({ images }) {
  const pos = [
    "top-[6%] left-[4%]",
    "top-[32%] left-[22%]",
    "top-[58%] left-[40%]",
  ];
  return (
    <>
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: i * 0.35 }}
          whileHover={{ scale: 1.08, zIndex: 40 }}
          className={`absolute ${pos[i]} w-[55%] aspect-video shadow-xl rounded-md overflow-hidden ${GRAY}`}
        >
          <Photo img={img} />
        </motion.div>
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. FLIP  — tile berputar 3D (rotateY) seperti kartu dibalik                */
/* -------------------------------------------------------------------------- */
function FlipGallery({ images }) {
  const pos = [
    "top-[6%] left-[5%] w-[90%] h-[48%]",
    "bottom-[6%] left-[5%] w-[44%] h-[38%]",
    "bottom-[6%] right-[5%] w-[44%] h-[38%]",
  ];
  return (
    <div className="absolute inset-0" style={{ perspective: 1000 }}>
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ rotateY: 90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.25, type: "spring", damping: 14 }}
          whileHover={{ rotateY: 12, rotateX: -6, scale: 1.05 }}
          style={{ transformStyle: "preserve-3d" }}
          className={`absolute ${pos[i]} shadow-xl rounded-xl overflow-hidden border border-gray-200`}
        >
          <Photo img={img} />
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. BOUNCE  — muncul membal dari bawah lalu melayang terus (floating)       */
/* -------------------------------------------------------------------------- */
function BounceGallery({ images }) {
  const pos = [
    "top-[8%] left-[8%] w-[50%]",
    "top-[30%] right-[6%] w-[48%]",
    "bottom-[8%] left-[18%] w-[52%]",
  ];
  return (
    <>
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, y: 150 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1, delay: i * 0.25 }}
          className={`absolute ${pos[i]} aspect-video`}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2, rotate: 2 }}
            className={`w-full h-full shadow-2xl rounded-2xl overflow-hidden ${GRAY}`}
          >
            <Photo img={img} />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  6. TILT  — parallax 3D mengikuti gerakan mouse                             */
/* -------------------------------------------------------------------------- */
function TiltLayer({ img, sx, sy, depth, className, delay }) {
  const x = useTransform(sx, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(sy, [-0.5, 0.5], [-depth, depth]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute ${className}`}
    >
      <motion.div
        style={{ x, y, translateZ: depth * 2 }}
        className="w-full h-full shadow-2xl rounded-lg overflow-hidden"
      >
        <Photo img={img} />
      </motion.div>
    </motion.div>
  );
}

function TiltGallery({ images }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 15 });
  const sy = useSpring(my, { stiffness: 120, damping: 15 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-15, 15]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [15, -15]);

  const layers = [
    { className: "top-[8%] left-[6%] w-[60%] aspect-video", depth: 12, delay: 0 },
    { className: "top-[32%] right-[6%] w-[55%] aspect-video", depth: 28, delay: 0.2 },
    { className: "bottom-[8%] left-[14%] w-[55%] aspect-video", depth: 44, delay: 0.4 },
  ];

  return (
    <div
      className="absolute inset-0"
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        {layers.map((l, i) => (
          <TiltLayer key={i} img={images[i]} sx={sx} sy={sy} {...l} />
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  7. POLAROID  — foto jatuh berputar seperti polaroid ditaburkan             */
/* -------------------------------------------------------------------------- */
function PolaroidGallery({ images }) {
  const cfg = [
    { pos: "top-[3%] left-[4%]", r: -8 },
    { pos: "top-[6%] right-[6%]", r: 6 },
    { pos: "top-[34%] left-[28%]", r: -3 },
    { pos: "bottom-[6%] left-[5%]", r: 7 },
    { pos: "bottom-[8%] right-[6%]", r: -6 },
  ];
  return (
    <>
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ y: -400, rotate: 60, opacity: 0 }}
          whileInView={{ y: 0, rotate: cfg[i].r, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 11, delay: i * 0.2 }}
          whileHover={{ rotate: 0, scale: 1.25, zIndex: 50 }}
          className={`absolute ${cfg[i].pos} w-[38%] aspect-[4/5] bg-white p-2 pb-8 shadow-2xl`}
        >
          <div className="relative w-full h-full">
            <Photo img={img} />
          </div>
        </motion.div>
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  8. FOCUS  — blur ke fokus (diagonal) + efek zoom perlahan (Ken Burns)      */
/* -------------------------------------------------------------------------- */
function FocusGallery({ images }) {
  const cfg = [
    { pos: "top-[6%] left-[6%]", from: { x: -80, y: -80 } },
    { pos: "top-[30%] right-[6%]", from: { x: 80, y: -40 } },
    { pos: "bottom-[6%] left-[16%]", from: { x: -60, y: 80 } },
  ];
  return (
    <>
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, filter: "blur(20px)", scale: 1.3, ...cfg[i].from }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: i * 0.3 }}
          className={`absolute ${cfg[i].pos} w-[58%] aspect-video shadow-xl rounded-lg overflow-hidden`}
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Photo img={img} />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

const GALLERIES = {
  collage: CollageGallery,
  fan: FanGallery,
  wipe: WipeGallery,
  flip: FlipGallery,
  bounce: BounceGallery,
  tilt: TiltGallery,
  polaroid: PolaroidGallery,
  focus: FocusGallery,
};

/* -------------------------------------------------------------------------- */
/*  Data projek (urutan sama seperti sebelumnya, tiap projek beda animasi)     */
/* -------------------------------------------------------------------------- */

const projects = [
  {
    variant: "collage",
    title: "ULBI Library Book Borrowing and Return Application Website Based",
    desc: "This website-based ULBI library book borrowing and returning application was created to make it easier for students, lecturers, and staff to manage the book borrowing and returning process digitally. This application aims to improve the efficiency of library services, reduce manual queues, and ensure transparency and accuracy in recording transactions. In addition, this application is also designed to provide access to information on book availability in real time, make it easier for users to search for and order books, and help the library manage book inventory in a more structured and integrated manner.",
    tech: "JavaScript, PHP, CSS, SCSS, CodeIgniter",
    images: [
      { src: ReactChat1, alt: "ULBI Library - 1" },
      { src: ReactChat2, alt: "ULBI Library - 2" },
      { src: ReactChat3, alt: "ULBI Library - 3" },
    ],
  },
  {
    variant: "fan",
    title: "Website Santri Siap Guna",
    desc: "The Santri Siap Guna website is a web-based platform designed to support the registration process, attendance, and monitoring of daily activities of students in the Santri Siap Guna program. This website utilizes modern technology such as QR codes, and provides integrated main features to support digital and efficient student development.",
    tech: "Next.js, React.js, HTML, CSS, JavaScript",
    github: "https://github.com/BrillianHaikal89/SSG",
    demo: "https://santri.siapguna.org/",
    images: [
      { src: SSG1, alt: "SSG Project - Homepage" },
      { src: SSG2, alt: "SSG Project - Blog Page" },
      { src: SSG3, alt: "SSG Project - Markdown Support" },
    ],
  },
  {
    variant: "wipe",
    title: "Dashboard SPMB Provinsi Jawa Barat",
    desc: "Dashboard SPMB Provinsi Jawa Barat is a web-based information system built with Next.js to support the implementation of SPMB (Sistem Penerimaan Murid Baru) in West Java Province. The dashboard provides real-time monitoring of student admission data, school capacity management, applicant verification, and comprehensive reporting features for education authorities. With a modern and responsive interface, the platform enables administrators to track registration progress, manage school quotas, verify applicant documents, and generate accurate reports to ensure a transparent, fair, and efficient student admission process across the region.",
    tech: "Next.js, React.js, Tailwind CSS, TypeScript",
    github: "https://github.com/BrillianHaikal89/dashboard-spmb-jabar",
    demo: "#",
    images: [
      { src: Spmb1, alt: "Dashboard SPMB - Overview" },
      { src: Spmb2, alt: "Dashboard SPMB - Data Management" },
      { src: Spmb3, alt: "Dashboard SPMB - Reports & Analytics" },
    ],
  },
  {
    variant: "flip",
    title: "Dashboard PMP Provinsi Jawa Barat",
    desc: "Dashboard PMP Jabar is a web-based information system built with Next.js to support monitoring and management of the PMP (Peta Mutu Pendidikan) program in West Java. The dashboard provides real-time data visualization, participant management, and reporting features that help administrators track program progress efficiently. With a modern and responsive interface, the platform enables stakeholders to access critical insights, generate reports, and make data-driven decisions to improve the quality of education across the region.",
    tech: "Next.js, React.js, Tailwind CSS, TypeScript",
    github: "https://github.com/BrillianHaikal89/dashboard-pmp-jabar",
    demo: "https://dashboard-pmp-jabar.vercel.app/",
    images: [
      { src: Pmp1, alt: "Dashboard PMP Jabar - Overview" },
      { src: Pmp2, alt: "Dashboard PMP Jabar - Data Management" },
      { src: Pmp3, alt: "Dashboard PMP Jabar - Reports & Analytics" },
    ],
  },
  {
    variant: "bounce",
    title: "Website Marketplace",
    desc: "HypeBoss Store is a modern e-commerce marketplace platform built with Next.js that provides a seamless online shopping experience for customers and a powerful management system for sellers. The platform features product catalog browsing, advanced search and filtering, shopping cart, secure checkout process, order tracking, and user authentication. With a responsive and intuitive interface, customers can easily discover products, manage their wishlist, and complete transactions securely. The marketplace also includes seller dashboards for product management, inventory tracking, and sales analytics, making it a complete solution for digital commerce.",
    tech: "Next.js, React.js, Tailwind CSS, TypeScript",
    github: "https://github.com/BrillianHaikal89/fe-hypeboss-store",
    demo: "https://hypeboss-store.vercel.app/",
    images: [
      { src: Marketplace1, alt: "Marketplace - Homepage" },
      { src: Marketplace2, alt: "Marketplace - Product Listing" },
      { src: Marketplace3, alt: "Marketplace - Checkout & Cart" },
    ],
  },
  {
    variant: "tilt",
    title: "Modern Portfolio Website",
    desc: "A sleek and responsive portfolio website designed to showcase my professional work, skills, and achievements. The website features a clean, modern design with smooth animations and transitions. It includes sections for projects, skills, experience, and contact information. Built with performance in mind, the portfolio loads quickly and is optimized for all device sizes. The design emphasizes readability and user experience while maintaining a distinctive visual style that reflects my personal brand.",
    tech: "Next.js, React.js, Tailwind CSS, Framer Motion",
    github: "https://github.com/BrillianHaikal89/portfolio",
    demo: "https://portofolio-blue-zeta.vercel.app/",
    images: [
      { src: Portfolio1, alt: "Portfolio - Homepage" },
      { src: Portfolio2, alt: "Portfolio - Projects Section" },
      { src: Portfolio3, alt: "Portfolio - Contact Section" },
    ],
  },
  {
    variant: "polaroid",
    title: "IoT-Based Automatic Bird Feeder Design",
    desc: "This automatic bird feeder design system is made for bird lovers but have limited time so they don't have time to feed their pet birds regularly. This automatic bird feeder design system can be controlled using a smartphone so that it can make it easier for someone who keeps birds but has limited time to feed them via smartphone wherever they are. For now, the application on the smartphone or used to control the provision of bird feed still uses a second party, namely Blynk IoT, which you can find in your PlayStore or AppStore.",
    tech: "C++",
    images: [
      { src: ReactChat4, alt: "IoT Bird Feeder - Device" },
      { src: ReactChat5, alt: "IoT Bird Feeder - Mobile App" },
      { src: ReactChat6, alt: "IoT Bird Feeder - Full System 1" },
      { src: ReactChat7, alt: "IoT Bird Feeder - Full System 2" },
      { src: ReactChat8, alt: "IoT Bird Feeder - Full System 3" },
    ],
  },
  {
    variant: "focus",
    title: "Cafe Cashier Management System",
    desc: "A comprehensive cafe cashier system designed to streamline order management, payment processing, and inventory tracking for small to medium-sized cafes. The system features an intuitive interface for cashiers, real-time sales reporting, and integration with kitchen display systems. It helps cafe owners manage their business more efficiently with features like customer loyalty programs, sales analytics, and employee performance tracking.",
    tech: "React.js, Node.js, Express, MongoDB, Tailwind CSS",
    github: "https://github.com/BrillianHaikal89/caffe-cashier",
    demo: "https://caffe-cashier-att.brlnz.my.id/",
    images: [
      { src: Cafe1, alt: "Cafe Cashier - Dashboard" },
      { src: Cafe2, alt: "Cafe Cashier - Order Management" },
      { src: Cafe3, alt: "Cafe Cashier - Transaction History" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <FixedButon href="/#projects">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButon>

        {/* Hero */}
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
                window.scrollTo({ top: 1000, behavior: "smooth" });
              }}
              className="mb-3"
            >
              <Button variation="primary">Scroll Down</Button>
            </motion.div>
          </div>
        </div>

        {/* Highlight title */}
        <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
          <div className="flex justify-center items-center flex-col my-5 self-start ">
            <div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
            <div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
            <h1 className="text-3xl font-bold mt-3">Highlight</h1>
          </div>
        </div>

        {/* Projects */}
        {projects.map((p, idx) => {
          const Gallery = GALLERIES[p.variant];
          return (
            <div
              key={p.title}
              className={`relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 ${
                idx === projects.length - 1 ? "mb-20" : "mb-10"
              }`}
            >
              <div className="flex justify-center items-start flex-col mb-5">
                <div className="images relative w-full aspect-square">
                  <Gallery images={p.images} />
                </div>
              </div>

              <motion.div
                className="flex justify-center items-start flex-col mb-5 md:px-10"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <h2 className="text-2xl font-bold tracking-wider mb-3">
                  {p.title}
                </h2>
                <p className="text-gray-600 text-justify title text-lg">
                  {p.desc}
                </p>
                <div className="mt-3 text-black font-medium bg-white py-1 px-3 rounded-full inline-block">
                  Using Technology {p.tech}
                </div>
                {(p.github || p.demo) && (
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        <span>View Source Code</span>
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
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
        })}
      </main>
    </>
  );
}