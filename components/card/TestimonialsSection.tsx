import { template1Themes } from "@/components/data/themes";

type Theme = (typeof template1Themes)[keyof typeof template1Themes];

type TestimonialsSectionProps = {
  theme: Theme;
};

const testimonials = [
  {
    name: "S. Kumar",
    role: "Business Owner",
    review:
      "Excellent service and very professional work. The final result was exactly what we expected.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Entrepreneur",
    review:
      "Very responsive and creative. The quality of work and support was really good.",
    rating: 5,
  },
  {
    name: "Arun",
    role: "Small Business Owner",
    review:
      "Great experience from start to finish. Highly satisfied with the service.",
    rating: 5,
  },
];

export default function TestimonialsSection({
  theme,
}: TestimonialsSectionProps) {
  return (
    <section className="px-5 py-8">
      {/* Heading */}
      <div className="mb-5">
        <p
          className="mb-1 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: `${theme.primary}70` }}
        >
          Testimonials
        </p>

        <h2
          className="text-2xl font-bold tracking-tight"
          style={{ color: theme.primary }}
        >
          What Clients Say
        </h2>
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-3xl border p-5 shadow-sm transition-all duration-500"
            style={{
              backgroundColor: `${theme.primary}06`,
              borderColor: `${theme.accent}25`,
            }}
          >
            {/* Rating */}
            <div className="mb-3 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span
                  key={i}
                  className="text-sm"
                  style={{ color: theme.accent }}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review */}
            <p
              className="text-sm leading-6"
              style={{ color: `${theme.primary}90` }}
            >
              “{testimonial.review}”
            </p>

            {/* Client */}
            <div className="mt-4">
              <p
                className="text-sm font-semibold"
                style={{ color: theme.primary }}
              >
                {testimonial.name}
              </p>

              <p
                className="mt-0.5 text-xs"
                style={{ color: `${theme.primary}60` }}
              >
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}