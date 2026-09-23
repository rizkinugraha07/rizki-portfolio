function Skills() {
  const skillGroups = [
    {
      title: "ELECTRICAL",
      skills: [
        "Power Systems",
        "Electrical Protection",
        "Motor Control",
        "Electrical Installation",
      ],
    },
    {
      title: "AUTOMATION",
      skills: [
        "PLC",
        "HMI",
        "SCADA",
        "Industrial Automation",
      ],
    },
    {
      title: "EMBEDDED",
      skills: [
        "ESP32",
        "Sensors",
        "Embedded Systems",
        "IoT",
      ],
    },
    {
      title: "ENGINEERING TOOLS",
      skills: [
        "MATLAB",
        "AutoCAD",
        "ETAP",
      ],
    },
  ];

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black text-white">

      <div className="relative z-10 min-h-[100dvh] px-6 pb-12 pt-16 sm:px-10">

        <div className="mx-auto w-full max-w-5xl">

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">

            {skillGroups.map((group) => (

              <div
                key={group.title}
                className="p-2 sm:p-4"
              >

                {/* CATEGORY */}

                <h2 className="text-xl font-light tracking-[0.08em] sm:text-2xl">
                  {group.title}
                </h2>


                {/* SKILLS */}

                <div className="mt-6 space-y-4">

                  {group.skills.map((skill) => (

                    <div
                      key={skill}
                      className="group flex items-center gap-4 text-sm font-light text-white/55 transition-all duration-300 hover:translate-x-1 hover:text-white sm:text-base"
                    >

                      {/* ICON */}

                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-white group-hover:bg-white">

                        <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-black" />

                      </span>


                      {/* SKILL */}

                      <span>
                        {skill}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;