import "./globals.css";
import "./nprogress.css";

import Navbar from "@/components/Navbar";
import Chat from "@/components/Chat";
import TopProgressbar from "@/components/TopProgressbar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";

config.autoAddCss = false;

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
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Brillian Portofolio",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressbar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}