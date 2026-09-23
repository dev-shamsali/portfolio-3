import FadeIn from "./FadeIn";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dev-shamsali",
    icon: "/icons/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shams-ali-shaikh-27194425a",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shamsss.in",
    icon: "/icons/instagram.svg",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-10 sm:py-12">
      <FadeIn>
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="opacity-80 transition-opacity duration-200 hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- local SVG, next/image blocks SVG optimization */}
              <img
                src={icon}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 sm:h-7 sm:w-7"
              />
            </a>
          ))}
        </div>
      </FadeIn>
    </footer>
  );
}
