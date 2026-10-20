import Image from "next/image";

const experiences = [
  {
    period: "2022-Now",
    title:
      "Parahyangan Badminton Academy | Bumi Pancasona Sports Club | Kota Baru Parahyangan",
    role: "Badminton Coach | Freelance",
    description:
      "responsible for the children I train, punctuality, and working together with the Bumi Pancasona Sports Club.",
    tags: ["Coach", "Team Work", "Problem Solving"],
    images: ["/experience/experience1.jpg", "/experience/experience1b.jpg"],
  },
  {
    period: "2024-Now",
    title: "Private Badminton | Kota Baru Parahyangan",
    role: "Badminton Coach | Freelance",
    description:
      "Provided personalized private badminton coaching for children, adults, and seniors, focusing on comprehensive technique and footwork development while maintaining strict punctuality and dedication to student progress.",
    tags: ["Coach", "Leader", "Problem Solving"],
    images: ["/experience/experience2.jpg", "/experience/experience2b.jpg"],
  },
  {
    period: "2025-2026",
    title:
      "Balai Besar Penjaminan Mutu Pendidikan Provinsi Jawa Barat | Batujajar Street",
    role: "Pranata Komputer | Apprenticeship | Maganghub",
    description:
      "Responsible for supporting information technology operations, maintaining web-based education systems, troubleshooting application issues, processing and validating education data, and assisting the development team in improving system functionality and digital services at BBPMP West Java.",
    tags: [
      "Team Work",
      "Problem Solving",
      "Analysis Data",
      "Web Design",
      "Web Development",
      "Dashboard Maintenance",
      "Technical Support",
    ],
    images: ["/experience/experience3.jpg", "/experience/experience3b.jpg"],
  },
  {
    period: "2025-2026",
    title:
      "SMAK BPK Penabur Kota Baru Parahyangan School | Kota Baru Parahyangan",
    role: "Head Badminton Coach | Freelance",
    description:
      "Responsible for the children I train, punctuality, and working together with the SMAK BPK Penabur Kota Baru Parahyangan School.",
    tags: ["Leader", "Team Work", "Problem Solving"],
    images: ["/experience/experience4.jpg", "/experience/experience4b.jpg"],
  },
  {
    period: "2025",
    title:
      "Lembaga Pendidikan Masyarakat Santri Siap Guna Daarut Tauhiid | Gegerkalong Street",
    role: "Front-End Developer | Internship",
    description:
      "Responsible for creating the website interface for the LPM SSG education and training information system using Next.JS, and also working with the developer team.",
    tags: ["NextJS", "Team Work", "Problem Solving"],
    images: ["/experience/experience5.jpg", "/experience/experience5b.jpg"],
  },
  {
    period: "2023-2024",
    title: "STAI Daarut Tauhid | Gegerkalong Street",
    role: "Electrical installation | Freelance",
    description:
      "Responsible for installing electricity in the STAI Daarut Tauhid area, and working closely with contractors and project foremen.",
    tags: ["Electrical Engineering", "Problem Solving"],
    images: ["/experience/experience6.jpg", "/experience/experience6b.jpg"],
  },
  {
    period: "2023",
    title: "ULBI UKM Badminton Shirt Design | ULBI",
    role: "Badminton Shirt Design | Freelance",
    description:
      "Designing and designing ulbi badminton clothes to be used in UKM Badminton activities.",
    tags: ["CorelDraw", "Problem Solving"],
    images: ["/experience/experience7.jpg", "/experience/experience7b.jpg"],
  },
  {
    period: "2022-2023",
    title: "Parahyangan Badminton Club | Pandiga",
    role: "Badminton Coach | Freelance",
    description:
      "responsible for the children I train, punctuality, and working together with the Parahyangan Badminton Club.",
    tags: ["Coach", "Leader", "Problem Solving"],
    images: ["/experience/experience8.jpg", "/experience/experience8b.jpg"],
  },
];

export default function Experience() {
  return (
    <section className="grid gap-8 md:gap-12">
      <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid gap-4 relative">
            <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />

            <div className="font-medium text-lg">{exp.period}</div>

            <div>
              <h3 className="font-semibold text-xl text-black">{exp.title}</h3>
              <h4 className="font-light text-md mb-4">{exp.role}</h4>
              <p className="text-justify">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-4 text-sm">
                {exp.tags.map((tag, i) => (
                  <div
                    key={i}
                    className="bg-gray-300 text-black px-2 py-1 rounded-2xl"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* 2 FOTO BERSEBELAHAN */}
              <div className="mt-4 grid grid-cols-2 gap-3 max-w-md">
                {exp.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
                  >
                    <Image
                      src={src}
                      alt={`${exp.title} - ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 45vw, 220px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}