import { footerLinks, socialMedia } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import favicon from "../assets/images/favicon.svg";

const icons = {
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaInstagram: FaInstagram,
};

function Footer() {
  const handleSmoothScroll = (targetId) => {
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact-us">
    <footer className="bg-zinc-950 text-white py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 blur-3xl"></div>

      <div className="relative max-container flex flex-col md:flex-row justify-between items-start gap-12 z-10">
        {/* Left Section - Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <img src={favicon} alt="Beats logo" className="w-10 h-10" />
            <h3 className="text-2xl font-bold">
              Beats{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                by
              </span>{" "}
              Dre
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Turn up your vibe this season. Find your sound with Beats and get rewarded.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            {socialMedia.map(({ name, icon, link }) => {
              const IconComponent = icons[icon];
              return (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-2xl text-gray-400 hover:text-pink-500 transition-all duration-300"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left flex-1 ">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                    target="_blank"
                      href={link.link}
                      onClick={(e) => {
                      
                        // Smooth scroll only for internal home links
                        if (link.link === "/" || link.link.startsWith("#")) {
                          e.preventDefault();
                          handleSmoothScroll("#home");
                        }
                      }}
                      className="text-gray-400 relative group transition duration-300 cursor-pointer"
                    >
                      <span className="group-hover:text-white transition-all duration-300">
                        {link.name}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm z-10">
        © {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-semibold">
          Beats by Dre
        </span>
        . All rights reserved.
        <span className="block">
          © Salman{"  "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-semibold">
            Zulfiqar
          </span>{"  "}
          Shaikh
        </span>
      </div>
    </footer>
    </section>
  );
}

export default Footer;
