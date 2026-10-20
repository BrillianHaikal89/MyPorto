import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Me4 from "@/public/img/photoportofolio4.jpg";
import Me5 from "@/public/img/photoportofolio5.jpg";

export default function Education() {
    return (
        <section className="grid gap-8 md:gap-12">
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    Education
                </h1>
                <p className="text-muted-foreground max-w-[800px] mx-auto">
                    Get to know more about my educational background.
                </p>
            </div>
            <div className="grid gap-8 md:gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* ===== KOLOM KIRI: RIWAYAT PENDIDIKAN ===== */}
                    <div className="px-5 space-y-10">
                        {/* ===== D4 (2025 - 2026) ===== */}
                        <div>
                            <div className="font-medium text-lg">
                                2025 - 2026 | Fresh Graduate
                            </div>
                            <div>
                                <h2 className="font-semibold text-xl">
                                    University of Logistics and International Business
                                </h2>
                                <h3 className="text-md font-normal mb-3">
                                    D4 Teknik Informatika | Informatics Engineering
                                </h3>
                                <div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
                                    <Image
                                        src={Me4}
                                        width={400}
                                        height={225}
                                        alt="University - D4"
                                        className="rounded-lg"
                                        style={{
                                            aspectRatio: "16/9",
                                            objectFit: "cover",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-justify">
                                        I have completed my D4 (Applied Bachelor) degree in Informatics Engineering at the University of Logistics and International Business, 
                                        where I focused on data analysis and system development. 
                                        Through my final thesis, I conducted in-depth research on analyzing and solving real-world problems using data-driven approaches, 
                                        strengthening my skills in analytical thinking, problem-solving, and technical writing. 
                                        This program also bridged the gap between academic theory and industry practices, 
                                        preparing me to become a professional software engineer with a strong analytical mindset.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ===== D3 (2022 - 2025) ===== */}
                        <div>
                            <div className="font-medium text-lg">
                                2022 - 2025 | Fresh Graduate
                            </div>
                            <div>
                                <h2 className="font-semibold text-xl">
                                    University of Logistics and International Business
                                </h2>
                                <h3 className="text-md font-normal mb-3">
                                    D3 Teknik Informatika | Informatics Engineering
                                </h3>
                                <div className="grid gap-4 mb-4 grayscale hover:grayscale-0 transition-all ease duration-300">
                                    <Image
                                        src={Me5}
                                        width={400}
                                        height={225}
                                        alt="University - D3"
                                        className="rounded-lg"
                                        style={{
                                            aspectRatio: "16/9",
                                            objectFit: "cover",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-justify">
                                        During my Diploma (D3) in Informatics Engineering at the University of Logistics and International Business, 
                                        I built a strong foundation in software engineering and information technology. 
                                        Fascinated by the world of technology, I continuously explored new things in the field of informatics engineering 
                                        and applied my knowledge through various academic projects, internships, and organizational activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== KOLOM KANAN: ACHIEVEMENTS ===== */}
                    <div className="flex flex-col justify-start">
                        <h2 className="font-semibold text-xl mt-7">
                            Achievements
                        </h2>
                        <p className="text-md font-normal mb-3 md:mb-8">
                            Some of my achievements during my study. Click to view the certificate or document.
                        </p>

                        <div className="space-y-4">
                            {/* Achievement: BNSP Jaringan Komputer */}
                            <a
                                href="https://drive.google.com/drive/folders/1b9FatV4MvPSUpEqnTXO6l612jP2dJk-Q"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors"
                            >
                                <div className="aspect-square w-10 shrink-0 rounded-full bg-black flex items-center justify-center text-primary-foreground">
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className="text-white h-5 w-5"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium flex items-center gap-2 group-hover:underline">
                                        BNSP Certification — Computer Networking
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                            className="h-3 w-3 text-gray-400 group-hover:text-gray-700"
                                        />
                                    </h3>
                                    <p className="text-sm">
                                        Badan Nasional Sertifikasi Profesi | Certificate
                                    </p>
                                </div>
                            </a>

                            {/* Achievement: SAP BC400 */}
                            <a
                                href="https://drive.google.com/file/d/1wetSmkRwBwj0zQCSssSeMKRVGWOg34J6/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors"
                            >
                                <div className="aspect-square w-10 shrink-0 rounded-full bg-black flex items-center justify-center text-primary-foreground">
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className="text-white h-5 w-5"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium flex items-center gap-2 group-hover:underline">
                                        SAP BC400 — Introduction to the ABAP Workbench
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                            className="h-3 w-3 text-gray-400 group-hover:text-gray-700"
                                        />
                                    </h3>
                                    <p className="text-sm">
                                        SAP Course | July 2024
                                    </p>
                                </div>
                            </a>

                            {/* Achievement: Jurnal & Project */}
                            <a
                                href="https://ojs.ninetyjournal.com/index.php/JKBTI/article/view/371"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors"
                            >
                                <div className="aspect-square w-10 shrink-0 rounded-full bg-black flex items-center justify-center text-primary-foreground">
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className="text-white h-5 w-5"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium flex items-center gap-2 group-hover:underline">
                                        Published Journal & Project — Coffee Recommendation System
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                            className="h-3 w-3 text-gray-400 group-hover:text-gray-700"
                                        />
                                    </h3>
                                    <p className="text-sm">
                                        Collaborative Filtering Method, Web-Based | JKBTI Journal
                                    </p>
                                </div>
                            </a>

                            {/* Achievement: TOEIC */}
                            <a
                                href="https://drive.google.com/file/d/1g8aKFzZtKUkmYhbA_B9UhvPHo20Ddkwc/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors"
                            >
                                <div className="aspect-square w-10 shrink-0 rounded-full bg-black flex items-center justify-center text-primary-foreground">
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className="text-white h-5 w-5"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium flex items-center gap-2 group-hover:underline">
                                        TOEIC Score 635
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                            className="h-3 w-3 text-gray-400 group-hover:text-gray-700"
                                        />
                                    </h3>
                                    <p className="text-sm">
                                        Test of English for International Communication | Certificate
                                    </p>
                                </div>
                            </a>

                            {/* Achievement: BWF Coach Level 1 */}
                            <a
                                href="https://drive.google.com/file/d/1sf4h2SMmqQnU77UOnZk4PLIqL1SPpn-r/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group hover:bg-gray-50 p-2 -m-2 rounded-lg transition-colors"
                            >
                                <div className="aspect-square w-10 shrink-0 rounded-full bg-black flex items-center justify-center text-primary-foreground">
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className="text-white h-5 w-5"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium flex items-center gap-2 group-hover:underline">
                                        BWF Coach Level 1
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                            className="h-3 w-3 text-gray-400 group-hover:text-gray-700"
                                        />
                                    </h3>
                                    <p className="text-sm">
                                        Badminton World Federation | Coaching Certificate
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GraduationCapIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
    );
}