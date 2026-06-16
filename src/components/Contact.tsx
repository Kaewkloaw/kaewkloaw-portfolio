import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "punchaya.chan@gmail.com",
    href: "mailto:punchaya.chan@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "Kaewkloaw",
    href: "https://github.com/Kaewkloaw",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Kaewkloaw",
    href: "https://www.linkedin.com/in/kaewkloaw/",
    icon: FaLinkedin,
  },
  {
    label: "Location",
    value: "Nonthaburi, Thailand",
    icon: FaMapMarkerAlt,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <p className="theme-accent-pink text-xs font-semibold uppercase tracking-[0.35em] sm:text-sm">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold theme-title-soft-pink sm:text-4xl lg:text-5xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm theme-subtitle-blush sm:text-base">
            If you want to talk about projects, freelance work, or new ideas,
            this is the quickest way to reach me.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/20 bg-white/10 p-5 shadow-2xl shadow-pink-300/10 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-pink-300/15 blur-3xl sm:h-56 sm:w-56" />
          <div className="pointer-events-none absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl sm:h-64 sm:w-64" />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="relative z-10 flex flex-col justify-between gap-6 sm:gap-8">
              <div>
                <span className="theme-surface inline-flex rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-xs">
                  Available for new projects
                </span>

                <h3 className="mt-5 max-w-xl text-2xl font-bold leading-tight text-white sm:mt-6 sm:text-3xl lg:text-4xl">
                  One message is enough to start something useful.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 theme-subtitle-blush sm:text-base lg:text-lg">
                  Reach out if you want help with AI, web products, data work,
                  or if you just need a quick conversation about an idea.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:punchaya.chan@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-pink-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-pink-300/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-200 sm:px-8 sm:py-4 sm:text-base"
                >
                  <FaEnvelope className="mr-2" />
                  Email me
                </a>

                <a
                  href="#projects"
                  className="theme-surface inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 sm:px-8 sm:py-4 sm:text-base"
                >
                  See projects
                </a>
              </div>
            </div>

            <div className="relative z-10 rounded-[28px] border border-white/15 bg-black/10 p-3 sm:p-4 sm:p-5">
              <div className="space-y-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  const card = (
                    <div className="theme-surface flex items-center gap-3 rounded-[22px] p-3.5 transition hover:-translate-y-1 sm:gap-4 sm:p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-pink-300/15 text-pink-200 sm:h-12 sm:w-12">
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 sm:text-xs">
                          {item.label}
                        </p>
                        <p className="mt-1 truncate text-sm font-medium text-white sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if ("href" in item && item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {card}
                      </a>
                    );
                  }

                  return <div key={item.label}>{card}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}