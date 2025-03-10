import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Brillian | Portofolio",
	description:
		"My name is Brillian, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",
	author: "Brillian Shafelbilyunazra",
	siteUrl: "https://www.Brillian.my.id",
	applicationName: "Brillian",
	keywords: [
		"Brillian",
		"Brillian",
		"Brillian shafel",
		"shafel",
		"Brillian shafelbilyunazra",
		"Brillian shafel bilyunazra",
		"bloodfallen",
		"Brillian porto",
		"Brillian um",
	],
	openGraph: {
		type: "website",
		url: "https://www.Brillian.my.id",
		title: "Brillian | Portofolio",
		site_name: "Brillian | Portofolio",
		description: "My name is Brillian, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Brillian Portofolio",
			},
		],
		site_name: "Brillian | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
