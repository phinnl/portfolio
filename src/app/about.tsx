import Image from "next/image";
import aboutImg from "@/assets/about.jpg";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section className="flex h-screen flex-col py-[100px]" id="about">
      <h2 className="text-center text-4xl font-medium text-slate-200">
        About Me
      </h2>
      <div className="mt-10 grid flex-1 grid-cols-2 items-center gap-5">
        <div className="flex items-center justify-center">
          <Image
            src={aboutImg}
            alt="about image"
            className="w-3/4 rounded-md"
            priority={true}
          />
        </div>
        <div className="space-y-4">
          <p>
            Im Nguyen Long Phin, 23 years old. Im a Frontend Developer. I was
            born in Da Nang, currently working in Ha Noi. I have 3 years of
            experience in web development with a strong foundation in frontend.
          </p>
          <div className="border-t border-dashed border-slate-500"></div>
          <div className="space-y-2">
            <a className="flex gap-2" href="">
              <MapPin />
              Cau Giay, Ha Noi, Vietnam
            </a>
            <a className="flex gap-2" href="tel:+84778512349">
              <Phone />
              +84 778 512 349
            </a>
            <a className="flex gap-2" href="mailto:phinnguyenlong@gmail.com">
              <Mail />
              phinnguyenlong@gmail.com
            </a>
          </div>
          <Link href="/#contact" className="inline-flex gap-2 rounded-3xl bg-black px-6 py-3 text-base font-medium hover:opacity-70">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
