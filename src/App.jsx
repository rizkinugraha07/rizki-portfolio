import { useState } from "react";

import Home from "./slides/Home";
import About from "./slides/About";
import Organization from "./slides/Organization";
import Skills from "./slides/Skills";
import Experience from "./slides/Experience";

import "./App.css";

function App() {
  const [activeSlide, setActiveSlide] = useState("home");

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-black text-white">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">

        <div className="flex h-14 items-center px-5">

          <div className="flex w-full items-center justify-between gap-5 overflow-x-auto">

            {/* HOME */}

            <button
              onClick={() => setActiveSlide("home")}
              className={`relative whitespace-nowrap py-5 text-[8px] tracking-[0.18em] transition-all duration-300 ${
                activeSlide === "home"
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              HOME

              {activeSlide === "home" && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white" />
              )}
            </button>


            {/* ABOUT */}

            <button
              onClick={() => setActiveSlide("about")}
              className={`relative whitespace-nowrap py-5 text-[8px] tracking-[0.18em] transition-all duration-300 ${
                activeSlide === "about"
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              ABOUT

              {activeSlide === "about" && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white" />
              )}
            </button>


            {/* ORGANIZATION */}

            <button
              onClick={() => setActiveSlide("organization")}
              className={`relative whitespace-nowrap py-5 text-[8px] tracking-[0.18em] transition-all duration-300 ${
                activeSlide === "organization"
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              ORGANIZATION

              {activeSlide === "organization" && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white" />
              )}
            </button>


            {/* SKILLS */}

            <button
              onClick={() => setActiveSlide("skills")}
              className={`relative whitespace-nowrap py-5 text-[8px] tracking-[0.18em] transition-all duration-300 ${
                activeSlide === "skills"
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              SKILLS

              {activeSlide === "skills" && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white" />
              )}
            </button>


            {/* EXPERIENCE */}

            <button
              onClick={() => setActiveSlide("experience")}
              className={`relative whitespace-nowrap py-5 text-[8px] tracking-[0.18em] transition-all duration-300 ${
                activeSlide === "experience"
                  ? "text-white"
                  : "text-white/40"
              }`}
            >
              EXPERIENCE

              {activeSlide === "experience" && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-white" />
              )}
            </button>

          </div>

        </div>

      </nav>


      {/* =====================================================
          SLIDES
      ===================================================== */}

      {activeSlide === "home" && <Home />}

      {activeSlide === "about" && <About />}

      {activeSlide === "organization" && <Organization />}

      {activeSlide === "skills" && <Skills />}

      {activeSlide === "experience" && <Experience />}

    </main>
  );
}

export default App;