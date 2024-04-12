import {
  Facebook,
  FileScan,
  Github,
  Linkedin,
  UserRoundPlus,
} from "lucide-react";

export function Home() {
  return (
    <section className="relative h-screen" id="home">
      <div className="absolute right-[15%] top-20 h-[400px] w-[300px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-40 blur-[50px] md:blur-[90px]"></div>
      <div className="grid h-full grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center">
        <div className="space-y-4">
          <p
            className="w-max bg-clip-text text-xl font-medium"
            style={{
              backgroundImage:
                "linear-gradient(120deg, #8b5cf6 40%, #0ea5e9 70%, #d946ef 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hello there!
          </p>
          <h3 className="text-4xl font-medium text-slate-200">
            I&apos;m Nguyen Long Phin
          </h3>
          <h2
            className="w-max bg-clip-text text-6xl font-semibold"
            style={{
              backgroundImage:
                "linear-gradient(120deg, #8b5cf6 40%, #0ea5e9 70%, #d946ef 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frontend Developer
          </h2>
          <p className="text-balance text-lg text-slate-200">
            With years of experience in web development, I specialize in
            building and developing stunning and modern user interfaces using
            the latest front-end technologies like React, Next.js, and Tailwind
            CSS. I am passionate about delivering high-quality web experiences
            that are responsive, accessible, and meet the needs of users.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/phinnl_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-2 rounded-3xl bg-black px-6 py-3 text-base font-medium hover:opacity-70"
            >
              <FileScan />
              See my CV
            </a>
            <a
              href="https://www.linkedin.com/in/phinnl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex gap-2 rounded-3xl bg-white px-6 py-3 text-base font-medium text-fuchsia-500 hover:opacity-70"
            >
              <UserRoundPlus />
              Hire Me
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/PhinDepZai/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#4a4856] p-2.5 text-slate-200 hover:opacity-70"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/in/phinnl/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#4a4856] p-2.5 text-slate-200 hover:opacity-70"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/phinnl"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#4a4856] p-2.5 text-slate-200 hover:opacity-70"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
