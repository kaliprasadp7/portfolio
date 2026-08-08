"use client";
import Container from "../ui/Container";
import Socials from "../ui/Socials";
import Image from "next/image";

export default function Hero() {
  const handleResume = () => {
    window.open(
      "/files/resume_kali_prasad.pdf",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleContact = () => {
    window.location.href = "mailto:kaliprasadp7@gmail.com";
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-64px)] flex items-center bg-gray-100"
    >
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          <div id="hero-content" className="space-y-6 text-center lg:text-left">
            <p className="text-2xl md:text-3xl font-bold">👋 Hi, I'm</p>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Kali Prasad Panda
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600">
              Frontend Developer
            </h2>
            <p className="text-gray-700 max-w-xl mx-auto lg:mx-0 leading-8">
              I build fast, responsive and user-friendly web applications using
              React, Next.js, TypeScript and modern frontend technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                aria-label="Download Resume"
                onClick={handleResume}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Download CV
              </button>
              <button
                type="button"
                aria-label="Contact Me"
                onClick={handleContact}
                className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </button>
            </div>
            <Socials />
          </div>
          <div id="hero-image" className="shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="Kali Prasad Panda"
              width={450}
              height={450}
              priority
              className="w-full max-w-md rounded-2xl shadow-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
