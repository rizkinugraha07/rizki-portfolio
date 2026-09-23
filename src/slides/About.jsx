function About() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black text-white">

      {/* ================================
          BACKGROUND
      ================================= */}
      <div className="absolute inset-0 bg-black" />

      {/* ================================
          ABOUT CONTENT
      ================================= */}
      <div className="relative z-10 flex min-h-[100dvh] items-center px-6 pb-10 pt-24">

        <div className="w-full max-w-4xl mx-auto">

          {/* ================================
              TRANSPARENT TEXT BOX
          ================================= */}
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md shadow-2xl sm:p-10 md:p-14">

            <p className="text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-white/85 sm:text-base md:text-lg">

              I am an Electrical Engineering student with a strong growth
              mindset and a deep sense of curiosity. I enjoy exploring new
              ideas, learning continuously, and adapting quickly to new
              environments. My ability to adjust and stay flexible helps me
              work effectively in different situations and collaborate with
              people from various backgrounds. I am passionate about
              developing my skills, solving real-world problems, and
              contributing to innovative technological solutions.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;