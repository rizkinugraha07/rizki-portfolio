function Home() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">

      {/* ================================
          HOME BACKGROUND
      ================================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/image 1.jpeg')",
        }}
      />

      {/* ================================
          DARK OVERLAY
      ================================= */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================================
          HOME CONTENT
      ================================= */}
      <div className="relative z-10 flex min-h-[100dvh] items-end px-6 pb-0 pt-20">

        <div className="mb-8 flex items-end gap-8 animate-[fadeIn_0.6s_ease-out]">

          {/* ================================
              NAME
          ================================= */}
          <h1 className="leading-[1.05] tracking-[-0.045em]">

            <span className="block text-[clamp(2.2rem,9vw,4rem)] font-light">
              RIZKI
            </span>

            <span className="mt-1 block text-[clamp(2.2rem,9vw,4rem)] font-semibold">
              NUGRAHA
            </span>

          </h1>

          {/* ================================
              SOCIAL MEDIA
          ================================= */}
          <div className="mb-1 flex items-center gap-4">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/rizki.ngrh_?stkn=dTd6Z3hieXczN245"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-all duration-300 hover:scale-110 hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/rizki-nugraha-6861a02b4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-all duration-300 hover:scale-110 hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5Z" />

                <path d="M.5 8.5h4V23h-4V8.5Z" />

                <path d="M8 8.5h3.8v2h.05c.53-1 1.83-2.5 4.05-2.5 4.33 0 5.1 2.85 5.1 6.55V23h-4v-7.52c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.91 1.97-2.91 4v7.64H8V8.5Z" />
              </svg>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;