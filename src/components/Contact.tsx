import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-3xl font-bold theme-title-soft-pink sm:text-4xl lg:text-2xl">
          Contact
        </p>
        
        <div className="mt-12 flex justify-center gap-8 text-6xl text-white/80">
          <a
            href="mailto:punchaya.chan@gmail.com"
            aria-label="Email"
            className="transition duration-300 hover:scale-110 hover:text-pink-200"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Kaewkloaw"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition duration-300 hover:scale-110 hover:text-pink-200"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kaewkloaw/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition duration-300 hover:scale-110 hover:text-pink-200"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </section>
  );
}