"use client";

import {
  MotionValue,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type ExperienceItemProps = {
  index: number;
  progress: MotionValue<number>;
  startRange: number;
  targetScale: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  keyContributions?: string[];
  projects: {
    name: string;
    client: string;
    details: string[];
    teamSize: number;
    technologies: string[];
  }[];
};

function ExperienceItem(props: ExperienceItemProps) {
  const {
    index,
    progress,
    startRange,
    targetScale,
    company,
    position,
    duration,
    keyContributions,
    description,
    projects,
  } = props;
  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });
  const scaleCard = useTransform(progress, [startRange, 1], [1, targetScale]);
  // const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <motion.article
      style={{
        top: `${index * 25}px`,
        scale: scaleCard,
      }}
      className="sticky flex md:items-center justify-center h-screen backdrop-blur-md max-w-3xl mx-auto px-7 pt-7"
    >
      
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="flex md:flex-1 items-start justify-end">
        <p className="w-max bg-slate-500/30 px-3 py-1.5 font-medium" style={{ borderRadius: "8px" }}>
          {duration}
        </p>
      </div>
      <div className="flex-[3_3_0%] space-y-2">
        <h3 className="text-xl font-semibold text-slate-200">
          {company} - {position}
        </h3>
        <div>
          <h4 className="text-lg font-medium text-slate-300 underline">
            Experience
          </h4>
          <p className="text-sm text-slate-500">{description}</p>
          <h4 className="text-lg font-medium text-slate-300 underline">
            Key Contributions
          </h4>
          {keyContributions?.map((contribution, idx) => (
            <p key={idx} className="text-sm text-slate-500">
              {contribution}
            </p>
          ))}
        </div>
        <div>
          <h4 className="text-lg font-medium text-slate-300 underline">
            Project Highlights
          </h4>
          {projects.map((project, idx) => (
            <div key={idx} className="mt-2">
              <h5 className="text-base font-medium text-slate-400 underline">
                {project.name}
              </h5>
              <p className="text-sm text-slate-500">Client: {project.client}</p>
              {project.details.map((detail, detailIdx) => (
                <p key={detailIdx} className="text-sm text-slate-500">
                  {detail}
                </p>
              ))}
              <p className="text-sm text-slate-500">
                Team sizes: {project.teamSize}
              </p>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                      delayChildren: stagger(0.1),
                    },
                  },
                }}
                className="text-sm text-slate-500"
              >
                Technologies: React
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </motion.article>
  );
}

const experienceItems = [
  {
    id: 1,
    company: "Viettel Software",
    position: "Front-end Developer",
    duration: "10/2024 – 04/2025",
    description:
      "Developed scalable front-end solutions using React within a cross-functional team, contributing to a core financial system for a leading bank.",
    keyContributions: [
      "Built and maintained user interfaces for an integrated asset management and valuation system.",
      "Collaborated closely with back-end developers to implement APIs and ensure seamless data flow.",
      "Worked alongside UX/UI designers to deliver an intuitive and consistent user experience.",
      "Delivered a comprehensive asset valuation system within the first 4 months, including on-site deployment and client coordination.",
    ],
    projects: [
      {
        name: "MB AMC – Asset Management & Valuation System",
        client: "MB Asset Management Company (MB AMC)",
        details: [
          "A financial system designed to manage and evaluate assets with high accuracy and real-time data processing.",
          "Developed key UI components and implemented front-end logic integrated with back-end services.",
          "Ensured responsive design and usability across devices in collaboration with UX/UI team.",
          "Participated in agile development cycles, contributing to timely delivery of critical features.",
        ],
        technologies: ["React"],
        teamSize: 7,
      },
    ],
  },
  {
    id: 2,
    company: "VietSoftware International",
    position: "React Developer",
    duration: "12/2022 – 10/2024",
    description:
      "Over 3 years of experience developing React applications, contributing to 6+ company projects.",
    keyContributions: [
      "Strong foundation building: Constructed reusable base components across various projects.",
      "Diverse project involvement: Participated in projects ranging from AI-powered object recognition to payment processing and international landing pages.",
    ],
    projects: [
      {
        name: "AI Object Recognition Project",
        client: "Internal Project",
        details: [
          "Built core components for the application.",
          "Developed login and form functionalities.",
        ],
        technologies: [
          "ReactJS",
          "react-router",
          "socket-io",
          "Radix UI",
          "Tailwind CSS",
        ],
        teamSize: 5,
      },
      {
        name: "Payslip Delivery Project",
        client: "Ngân Lượng",
        details: [
          "Created base components and payment page with Ngân Lượng integration.",
        ],
        technologies: ["NextJS", "next-i18n-router", "Material UI"],
        teamSize: 4,
      },
      {
        name: "Landing Page Projects (4+)",
        client: "Various Clients",
        details: [
          "Developed multiple international landing pages using NextJS with i18n support.",
        ],
        technologies: ["NextJS", "i18n"],
        teamSize: 3,
      },
    ],
  },
  {
    id: 3,
    company: "Rikkeisoft Corporation",
    position: "Full-Stack JavaScript Developer",
    duration: "04/2022 - 11/2022",
    description:
      "Full-stack development experience gained through participation in 2 projects.",
    keyContributions: [
      "Strong front-end and back-end capabilities: Proficient in building user interfaces, data fetching, and backend logic integration.",
    ],
    projects: [
      {
        name: "SaaS-based HRM Project",
        client: "Internal Project",
        details: [
          "Developed core functionalities like forms, login, and data fetching with ApolloClient.",
          "Contributed to backend development tasks.",
        ],
        technologies: ["NestJS", "MySQL", "GraphQL", "ReactJS", "Ant Design"],
        teamSize: 6,
      },
      {
        name: "Educational Management & Statistics Project",
        client: "Internal Project",
        details: [
          "Established the foundation of the front-end, including project setup and folder structure.",
        ],
        technologies: ["ReactJS", "Material UI", "Redux"],
        teamSize: 4,
      },
    ],
  },
  {
    id: 4,
    company: "Unitech Corporation",
    position: "Java Full-Stack Developer",
    duration: "06/2021 - 03/2022",
    description:
      "Full-stack development for internal digital transformation project.",
    keyContributions: [
      "Experience modernizing legacy systems: Effectively worked within an existing system, contributing to its modernization.",
      "Expertise in both server-side and client-side development: Developed APIs using Java Spring Boot to handle data processing and utilized ReactJS for the user interface.",
    ],
    projects: [
      {
        name: "Internal Digital Transformation Project",
        client: "Unitech Corporation",
        details: [
          "Worked on a legacy system modernization project, enhancing its functionality and user experience.",
          "Developed APIs using Java Spring Boot and built the front-end with ReactJS.",
        ],
        technologies: ["Java Spring Boot", "ReactJS", "PostgreSQL"],
        teamSize: 5,
      },
    ],
  },
];

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <section id="experience">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col pt-[100px]">
        <motion.h2
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="top-19 sticky text-center text-4xl font-medium text-slate-200 md:text-5xl lg:text-6xl"
        >
          Experience
        </motion.h2>
        <div
          className="mt-10 flex flex-1 flex-col justify-center space-y-5"
          ref={containerRef}
        >
          {experienceItems.map((item, index) => (
            <ExperienceItem
              key={item.id}
              index={index}
              progress={scrollYProgress}
              startRange={index * 0.1}
              targetScale={1 - (experienceItems.length - index) * 0.05}
              company={item.company}
              position={item.position}
              duration={item.duration}
              keyContributions={item.keyContributions}
              description={item.description}
              projects={item.projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
