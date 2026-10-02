function Organization() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black text-black">

      {/* =================================
          ORGANIZATION CONTENT
      ================================= */}
      <div className="relative z-10 px-4 pb-10 pt-20 sm:px-6 sm:pt-24">

        {/* =================================
            MAIN WHITE CARD
        ================================= */}
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">

          <div className="p-6 sm:p-10 md:p-14">

            {/* =================================
                TOP SECTION
                TEXT LEFT - IMAGE RIGHT
            ================================= */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">

              {/* =================================
                  LEFT : IEEE INFORMATION
              ================================= */}
              <div>

                {/* TITLE */}
                <h1 className="text-[clamp(3rem,9vw,5.5rem)] font-light leading-none tracking-[-0.05em]">
                  IEEE
                </h1>

                {/* ORGANIZATION NAME */}
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-black/55 sm:text-base">
                  Institute of Electrical and Electronics Engineers
                </p>

                {/* POSITION */}
                <div className="mt-10">

                  <p className="text-lg font-medium tracking-tight">
                    Active Member
                  </p>

                  <p className="mt-2 text-xs tracking-[0.15em] text-black/45">
                    AUGUST 2025 – PRESENT
                  </p>

                </div>

              </div>


              {/* =================================
                  RIGHT : IMAGE 2
              ================================= */}
              <div className="overflow-hidden rounded-[1.5rem]">

                <img
                  src="/images/image 2.jpeg"
                  alt="IEEE activity"
                  className="h-72 w-full object-cover transition duration-700 hover:scale-105 md:h-[360px]"
                />

              </div>

            </div>


            {/* =================================
                DESCRIPTION
            ================================= */}
            <div className="mt-10 max-w-4xl">

              {/* PARAGRAPH 1 */}
              <p className="text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-black/75 sm:text-base md:text-lg">

                As an active member of IEEE, I participate in various
                organizational programs, including community service
                initiatives funded by IEEE grants. These activities focus on
                introducing electrical engineering to the public through
                hands-on demonstrations and educational outreach.

              </p>


              {/* PARAGRAPH 2 */}
              <p className="mt-6 text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-black/75 sm:text-base md:text-lg">

                I also take part in the IEEE Xtreme 24-Hour Programming
                Competition, a global coding challenge that strengthens my
                problem-solving abilities, teamwork, and resilience under
                pressure.

              </p>

            </div>


            {/* =================================
                IMAGE 3
                LANDSCAPE - FULL IMAGE
            ================================= */}
            <div className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-[1.5rem] bg-black/5">

              <img
                src="/images/image 3.jpeg"
                alt="IEEE Xtreme activity"
                className="block h-auto w-full object-contain transition duration-700 hover:scale-[1.02]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Organization;