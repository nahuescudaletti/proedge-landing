// Testimonials.tsx

import Image from "next/image";
import { dataTestimonials } from "./Testimonials.data";
import clsx from "clsx";

// Definición de TestimonialType
interface TestimonialType {
  avatarImg: string;
  name: string;
  heading: string;
  description: string;
  bgColor: string;
  textColor: string;
  className?: string;
}

export default function Testimonials() {
  return (
    <main
      style={{}}
      className="flex justify-center items-center min-h-screen p-8 font-montserrat"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[960px]">
        {dataTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            className={testimonial.className}
          />
        ))}
      </div>
    </main>
  );
}

function TestimonialCard(props: TestimonialType) {
  return (
    <div
      style={{ backgroundColor: props.bgColor, color: props.textColor }}
      className={clsx(
        "p-6 rounded-lg h-auto flex flex-col gap-4 max-w-[400px] md:max-w-none",
        props.className
      )}
    >
      {/* Avatar and name */}
      <section className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <Image
            src={props.avatarImg}
            alt="profile-img"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-semibold">{props.name}</div>
          <p className="text-[10px] opacity-50">Verified Graduate</p>
        </div>
      </section>

      <h3 className="font-semibold text-lg">{props.heading}</h3>
      <p className="text-sm opacity-70 leading-relaxed">
        “{props.description}”
      </p>
    </div>
  );
}
