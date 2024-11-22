"use client";

import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section
      className="relative flex h-screen flex-col py-[100px]"
      id="contact"
    >
      <div className="absolute left-[15%] top-[30%] h-[400px] w-[300px] rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 opacity-40 blur-[50px] md:blur-[90px]"></div>
      <h2 className="text-center text-4xl font-medium text-slate-200">
        Contact
      </h2>
      <div className="mt-10 grid flex-1 grid-cols-2 items-center gap-5">
        <div className="flex flex-col justify-center max-w-lg mx-auto">
          <h3 className="text-center text-5xl font-medium text-slate-200">
            Let&apos;s Talk
          </h3>
          <p className="text-slate-400 mt-2">
            I&apos;m always open to discussing new projects, design challenges or
            opportunities to be part of your visions.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="w-auto md:w-96">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
