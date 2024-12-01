import Image from "next/image";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-[#1E152A] via-[#2B1A40] to-[#6A1B9A] text-white flex flex-col justify-center items-center min-h-[50vh] py-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        {/* Email and Phone */}
        <div className="mb-6 text-sm sm:text-base text-gray-300">
          {/* Phone */}
          <div className="flex items-center gap-4 justify-center mb-4">
            <Image
              src="/phone.svg"
              alt="Phone Icon"
              width={24}
              height={24}
              className="inline-block"
            />
            <span className="font-medium text-white">+33 06 34 02 15 91</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 justify-center">
            <Image
              src="/email.svg"
              alt="Email Icon"
              width={24}
              height={24}
              className="inline-block"
            />
            <span className="font-medium text-white">
              kellyangel2330@gmail.com
            </span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://www.linkedin.com/in/daveena-seeneevassen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-purple-500 text-white text-sm font-medium rounded-full hover:bg-purple-600 transition"
          >
            <LinkedinIcon className="h-5 w-5 text-white" /> LinkedIn
          </a>
          <a
            href="https://github.com/Daveena30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-purple-500 text-white text-sm font-medium rounded-full hover:bg-purple-600 transition"
          >
            <GithubIcon className="h-5 w-5 text-white" /> GitHub
          </a>
        </div>

        {/* Footer */}
        <div className="text-foreground/70 text-sm">
          <p>Daveena Seeneevassen © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
