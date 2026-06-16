import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[640px] items-center overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:min-h-[720px] lg:px-8"
    >
      <div className="bubble absolute left-6 top-32 h-3 w-3 rounded-full border border-white/40 sm:left-10 sm:top-40 sm:h-4 sm:w-4" />
      <div className="bubble absolute left-16 bottom-24 h-4 w-4 rounded-full border border-pink-200/40 sm:left-32 sm:bottom-32 sm:h-6 sm:w-6" />
      <div className="bubble absolute right-10 top-28 h-2.5 w-2.5 rounded-full border border-cyan-200/50 sm:right-40 sm:top-36 sm:h-3 sm:w-3" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] md:gap-16 lg:gap-20">
        <div className="max-w-3xl text-center md:text-left">
          <p className="mb-3 text-base text-pink-200 sm:text-xl">Hi, I&apos;m</p>

          <h1 className="gradient-motion-text text-4xl font-bold leading-none sm:text-5xl md:text-6xl lg:text-7xl">
            Kaewkloaw
          </h1>

          <h2 className="mt-4 text-lg text-blue-100 sm:text-2xl md:text-3xl">
            Punchaya Chancharoen
          </h2>

          <p className="mt-6 text-base text-white/80 sm:text-lg sm:text-xl">
            Data Science & AI/ML Engineer
          </p>

          <p className="mx-auto mt-4 max-w-lg text-sm text-white/60 sm:text-base sm:text-lg md:mx-0">
            Building intelligent solutions with creativity and curiosity ✨
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-pink-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-pink-300/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-pink-200 hover:shadow-2xl hover:shadow-pink-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071A2F] sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                <span>View My Work</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  🪼
                </span>
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/50 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
            >
              Contact Me →
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-[260px] w-[260px] rounded-full border border-pink-200/40 bg-white/10 shadow-2xl shadow-pink-300/30 backdrop-blur-xl sm:h-[320px] sm:w-[320px] lg:h-[340px] lg:w-[340px]">
            <div className="absolute inset-5 rounded-full bg-gradient-to-br from-white/35 via-pink-200/10 to-cyan-200/10" />

            <div className="bubble absolute -left-5 top-16 h-8 w-8 rounded-full border border-white/30 bg-white/10 sm:-left-7 sm:top-20 sm:h-10 sm:w-10" />
            <div className="bubble absolute -right-5 bottom-20 h-4 w-4 rounded-full border border-pink-200/40 bg-white/10 sm:-right-8 sm:bottom-24 sm:h-6 sm:w-6" />
            <div className="bubble absolute right-10 top-8 h-3 w-3 rounded-full border border-cyan-200/40 bg-white/10 sm:right-16 sm:top-10 sm:h-4 sm:w-4" />

            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/profile/profile.png"
                alt="profile"
                width={200}
                height={200}
                priority
                className="h-[200px] w-[200px] rounded-full border border-pink-200/30 object-cover shadow-2xl shadow-pink-300/20 sm:h-[240px] sm:w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}