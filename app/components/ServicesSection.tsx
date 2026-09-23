import FadeIn from "./FadeIn";
import { services } from "../data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="mb-16 sm:mb-20 md:mb-28 text-center font-black uppercase text-[#0C0C0C]"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div
        className="mx-auto max-w-5xl border-t"
        style={{ borderColor: "rgba(12, 12, 12, 0.15)" }}
      >
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1}>
            <div
              className="grid grid-cols-1 items-center gap-3 border-b py-8 sm:py-10 md:py-12 md:grid-cols-[auto_1fr_1.5fr] md:gap-8"
              style={{ borderColor: "rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="font-black text-[#0C0C0C]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
