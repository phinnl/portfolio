"use client";

import { motion, stagger } from "framer-motion";

export function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col py-[100px]">
        <motion.h2
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="top-19 sticky text-center text-4xl font-medium text-slate-200 md:text-5xl lg:text-6xl"
        >
          Experience
        </motion.h2>
        <div className="mt-10 flex flex-1 flex-col justify-center space-y-5">
          <div className="flex gap-4">
            <div className="flex flex-1 items-start justify-end">
              <p className="w-max rounded-md bg-slate-500 px-3 py-1.5 font-medium">
                10/2024 – 04/2025
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="flex h-6 items-center">
                <span className="size-5 rounded-full bg-fuchsia-500"></span>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="h-full w-[1px] bg-white"></div>
              </div>
            </div>
            <div className="flex-[3_3_0%] space-y-2">
              <h3 className="text-xl font-semibold text-slate-200">
                Viettel Software - Front-end Developer
              </h3>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Experience
                </h4>
                <p className="text-sm text-slate-500">
                  Developed scalable front-end solutions using React within a
                  cross-functional team, contributing to a core financial system
                  for a leading bank.
                </p>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Key Contributions
                </h4>
                <p className="text-sm text-slate-500">
                  Built and maintained user interfaces for an integrated asset
                  management and valuation system.
                </p>
                <p className="text-sm text-slate-500">
                  Collaborated closely with back-end developers to implement
                  APIs and ensure seamless data flow.
                </p>
                <p className="text-sm text-slate-500">
                  Worked alongside UX/UI designers to deliver an intuitive and
                  consistent user experience.
                </p>
                <p className="text-sm text-slate-500">
                  Delivered a comprehensive asset valuation system within the
                  first 4 months, including on-site deployment and client
                  coordination.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Project Highlights
                </h4>
                <h5 className="mt-2 text-base font-medium text-slate-400 underline">
                  MB AMC – Asset Management & Valuation System
                </h5>
                <p className="text-sm font-medium text-slate-500">
                  Client: MB Asset Management Company (MB AMC)
                </p>
                <p className="text-sm text-slate-500">
                  A financial system designed to manage and evaluate assets with
                  high accuracy and real-time data processing.
                </p>
                <p className="text-sm text-slate-500">
                  Developed key UI components and implemented front-end logic
                  integrated with back-end services.
                </p>
                <p className="text-sm text-slate-500">
                  Ensured responsive design and usability across devices in
                  collaboration with UX/UI team.
                </p>
                <p className="text-sm text-slate-500">
                  Participated in agile development cycles, contributing to
                  timely delivery of critical features.
                </p>
                <p className="text-sm text-slate-500">Team Size: 7</p>
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
                  Technologies: 
                  React
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 items-start justify-end">
              <p className="w-max rounded-md bg-slate-500 px-3 py-1.5 font-medium">
                12/2022 – 10/2024
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="flex h-6 items-center">
                <span className="size-5 rounded-full bg-fuchsia-500"></span>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="h-full w-[1px] bg-white"></div>
              </div>
            </div>
            <div className="flex-[3_3_0%] space-y-2">
              <h3 className="text-xl font-semibold text-slate-200">
                VietSoftware International - React Developer
              </h3>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Experience
                </h4>
                <p className="text-sm text-slate-500">
                  Over 3 years of experience developing React applications,
                  contributing to 6+ company projects.
                </p>
                <p className="text-sm text-slate-500">
                  Strong foundation building: Constructed reusable base
                  components across various projects.
                </p>
                <p className="text-sm text-slate-500">
                  Diverse project involvement: Participated in projects ranging
                  from AI-powered object recognition to payment processing and
                  international landing pages
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Project Highlights
                </h4>
                <h5 className="mt-2 text-base font-medium text-slate-400 underline">
                  AI Object Recognition Project
                </h5>
                <p className="text-sm text-slate-500">
                  Built core components for the application.
                </p>
                <p className="text-sm text-slate-500">
                  Developed login and form functionalities.
                </p>
                <p className="text-sm text-slate-500">
                  Technologies used: ReactJS, react-router, socket-io, Radix UI,
                  Tailwind CSS.
                </p>
                <h5 className="mt-2 text-base font-medium text-slate-400 underline">
                  Payslip Delivery Project
                </h5>
                <p className="text-sm text-slate-500">
                  Created base components and payment page with Ngân Lượng
                  integration.
                </p>
                <p className="text-sm text-slate-500">
                  Technologies used: NextJS, next-i18n-router, Material UI.
                </p>
                <p className="text-sm text-slate-500">
                  Landing Page Projects (4+)
                </p>
                <p className="text-sm text-slate-500">
                  Developed multiple international landing pages using NextJS
                  with i18n support.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 items-start justify-end">
              <p className="w-max rounded-md bg-slate-500 px-3 py-1.5 font-medium">
                04/2022 - 11/2022
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="flex h-6 items-center">
                <span className="size-5 rounded-full bg-fuchsia-500"></span>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="h-full w-[1px] bg-white"></div>
              </div>
            </div>
            <div className="flex-[3_3_0%] space-y-2">
              <h3 className="text-xl font-semibold text-slate-200">
                Rikkeisoft Corporation - Full-Stack JavaScript Developer
              </h3>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Experience
                </h4>
                <p className="text-sm text-slate-500">
                  Full-stack development experience gained through participation
                  in 2 projects.
                </p>
                <p className="text-sm text-slate-500">
                  Strong front-end and back-end capabilities: Proficient in
                  building user interfaces, data fetching, and backend logic
                  integration.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Project Highlights
                </h4>
                <h5 className="mt-2 text-base font-medium text-slate-400 underline">
                  SaaS-based HRM Project
                </h5>
                <p className="text-sm text-slate-500">
                  Developed core functionalities like forms, login, and data
                  fetching with ApolloClient.
                </p>
                <p className="text-sm text-slate-500">
                  Contributed to backend development tasks.
                </p>
                <p className="text-sm text-slate-500">
                  Technologies used: NestJS, MySQL, GraphQL, ReactJS, Ant
                  Design.
                </p>
                <h5 className="mt-2 text-base font-medium text-slate-400 underline">
                  Educational Management & Statistics Project
                </h5>
                <p className="text-sm text-slate-500">
                  Established the foundation of the front-end, including project
                  setup and folder structure.
                </p>
                <p className="text-sm text-slate-500">
                  Technologies used: ReactJS, Material UI, Redux.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 items-start justify-end">
              <p className="w-max rounded-md bg-slate-500 px-3 py-1.5 font-medium">
                06/2021 - 03/2022
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="flex h-6 items-center">
                <span className="size-5 rounded-full bg-fuchsia-500"></span>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="h-full w-[1px] bg-white"></div>
              </div>
            </div>
            <div className="flex-[3_3_0%] space-y-2">
              <h3 className="text-xl font-semibold text-slate-200">
                Unitech Corporation - Java Full-Stack Developer
              </h3>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Experience
                </h4>
                <p className="text-sm text-slate-500">
                  Full-stack development for internal digital transformation
                  project.
                </p>
                <p className="text-sm text-slate-500">
                  Experience modernizing legacy systems: Effectively worked
                  within an existing system, contributing to its modernization.
                </p>
                <p className="text-sm text-slate-500">
                  Expertise in both server-side and client-side development:
                  Developed APIs using Java Spring Boot to handle data
                  processing and utilized ReactJS for the user interface
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-300 underline">
                  Technical Skills
                </h4>
                <p className="text-sm text-slate-500">Java Spring Boot</p>
                <p className="text-sm text-slate-500">ReactJS</p>
                <p className="text-sm text-slate-500">PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
