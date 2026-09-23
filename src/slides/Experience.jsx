function Experience() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black text-white">

      <div className="relative z-10 min-h-[100dvh] px-6 pb-20 pt-16 sm:px-10">

        <div className="mx-auto w-full max-w-5xl">


          {/* =====================================================
              01 — SAMSUNG SOLVE FOR TOMORROW
          ===================================================== */}

          <article className="py-6 sm:py-8">

            <div className="mb-8">

              <h2 className="text-[clamp(2.2rem,8vw,5rem)] font-light leading-none tracking-[-0.05em]">
                SAMSUNG
              </h2>

              <p className="mt-3 text-sm tracking-[0.15em] text-white/45 sm:text-base">
                SOLVE FOR TOMORROW 2026
              </p>

            </div>


            <div className="max-w-3xl">

              <p className="text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-white/70 sm:text-base md:text-lg">
                Participated in Samsung Solve for Tomorrow 2026 as a
                semifinalist with HYPO TEAM, developing HYPO JACKET, a
                wearable system designed to help protect users from
                hypothermia in cold environments.
              </p>

              <p className="mt-6 text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-white/70 sm:text-base md:text-lg">
                The project combines embedded systems, sensor fusion,
                heating control, and real-time monitoring to create a
                responsive solution for outdoor safety.
              </p>

            </div>


            {/* VIDEO */}

            <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-white/[0.04] shadow-2xl">

              <video
                className="block aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src="/images/sft-pitch.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>

            </div>

          </article>



          {/* =====================================================
              02 — PT APP PURINUSA EKA PERSADA
          ===================================================== */}

          <article className="mt-16 py-8 sm:mt-20 sm:py-10">

            <div className="mb-8">

              <h2 className="text-[clamp(2rem,7vw,4.5rem)] font-light leading-none tracking-[-0.05em]">
                PT APP
              </h2>

              <p className="mt-3 text-sm tracking-[0.12em] text-white/45 sm:text-base">
                PURINUSA EKA PERSADA
              </p>

            </div>


            <div>

              <p className="text-sm font-medium tracking-[0.12em] text-white/65">
                ELECTRICAL ENGINEERING INTERNSHIP
              </p>

              <p className="mt-2 text-[10px] tracking-[0.25em] text-white/35">
                JULY — DECEMBER 2026
              </p>

            </div>


            <div className="mt-8 max-w-3xl">

              <p className="text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-white/70 sm:text-base md:text-lg">
                During my internship at PT APP Purinusa Eka Persada,
                I am gaining hands-on exposure to industrial electrical
                engineering and automation systems. My activities include
                interpreting electrical schematics, reviewing and
                understanding electrical wiring configurations, analyzing
                control systems, and working with PLC programming and
                industrial automation applications.
              </p>

              <p className="mt-6 text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-white/70 sm:text-base md:text-lg">
                This experience allows me to strengthen my ability to
                translate electrical drawings and control concepts into
                practical industrial applications while developing a
                deeper understanding of electrical systems,
                troubleshooting, and automation.
              </p>

            </div>

          </article>



          {/* =====================================================
              03 — PT TMMIN
          ===================================================== */}

          <article className="mt-16 py-8 sm:mt-20 sm:py-10">

            {/* TITLE */}

            <div className="mb-8">

              <h2 className="text-[clamp(2rem,7vw,4.5rem)] font-light leading-none tracking-[-0.05em]">
                PT TMMIN
              </h2>

              <p className="mt-3 text-sm tracking-[0.12em] text-white/45 sm:text-base">
                TOYOTA MOTOR MANUFACTURING INDONESIA
              </p>

            </div>


            {/* ROLE */}

            <div>

              <p className="text-sm font-medium tracking-[0.12em] text-white/65">
                PRODUCTION OPERATOR — BODY PRODUCTION
              </p>

              <p className="mt-2 text-[10px] tracking-[0.25em] text-white/35">
                NOVEMBER 2021 — NOVEMBER 2023
              </p>

            </div>


            {/* DESCRIPTION */}

            <div className="mt-8 max-w-3xl">

              <p className="text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-white/70 sm:text-base md:text-lg">
                Worked in the Body Production division, gaining
                hands-on experience in an automotive manufacturing
                environment and contributing to daily production
                operations and continuous improvement activities.
              </p>

              <p className="mt-6 text-justify text-[15px] font-light leading-[1.9] tracking-[0.01em] text-white/70 sm:text-base md:text-lg">
                My experience included performing spot welding
                operations, conducting quality checks, applying 5S
                practices, and participating in Kaizen activities to
                support workplace improvement, production efficiency,
                and quality standards.
              </p>

            </div>


            {/* =================================================
                TMMIN PHOTO GALLERY
            ================================================= */}

            <div className="mt-12">

              {/* TWO PORTRAIT PHOTOS */}

              <div className="grid grid-cols-2 gap-4 sm:gap-6">

                <div className="overflow-hidden rounded-[1.5rem] bg-white/[0.04]">

                  <img
                    src="/images/tmmin-1.jpeg"
                    alt="PT TMMIN experience"
                    className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>


                <div className="overflow-hidden rounded-[1.5rem] bg-white/[0.04]">

                  <img
                    src="/images/tmmin-2.jpeg"
                    alt="PT TMMIN experience"
                    className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>

              </div>


              {/* ONE LANDSCAPE PHOTO */}

              <div className="mt-4 overflow-hidden rounded-[1.5rem] bg-white/[0.04] sm:mt-6">

                <img
                  src="/images/tmmin-3.jpeg"
                  alt="PT TMMIN Body Production"
                  className="aspect-[16/9] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </article>


        </div>

      </div>

    </section>
  );
}

export default Experience;