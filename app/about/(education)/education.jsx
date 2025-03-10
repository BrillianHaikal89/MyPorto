import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Me4 from "@/public/img/photoportofolio4.jpg";

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
					<div className="px-5">
						<div className="font-medium text-lg">
							2022 - Present
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
									src={Me4}
									width={400}
									height={225}
									alt="University"
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
									Aspiring to become a software engineer, 
									I am currently pursuing a Diploma in Informatics Engineering at the University of Logistics and International Business. 
									Fascinated by the world of technology, 
									I want to learn and explore new things in the field of informatics engineering.
								</p>
							</div>
							{/* add gpa in a style */}
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 3.9 out of 4
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start ">
            <h2 className="font-semibold text-xl mt-7">
              Achievements
            </h2>
            <p className="text-md font-normal mb-3 md:mb-12">
              Some of my achievements during my study.
            </p>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									has completed the SAP Course
								</h3>
								<p className="text-sm">
									Introduction to the Abap Workbench | July
									2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									Most Valuable Player (MVP Medal)
								</h3>
								<p className="text-sm">
									Zeallion Badminton Tournament | July
									2024
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									1st place (Gold Medal)
								</h3>
								<p className="text-sm">
									Youth Pledge Day Badminton Tournament | Okt
									2023
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 mb-4">
							<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
								<FontAwesomeIcon
									icon={faMedal}
									className="text-white h-5 w-5"
								/>
							</div>
							<div>
								<h3 className="font-medium">
									2nd place (Silver Medal)
								</h3>
								<p className="text-sm">
									Independence Day Badminton Tournament | Aug
									2023
								</p>
							</div>
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
