"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";

// CLIENT ISLAND:
// Only the testimonial controls require React state. Keeping this
// interaction isolated avoids hydrating the rest of the homepage.
export default function HomeTestimonialsClient({
  testimonials,
}) {
  const [testimonialIndex, setTestimonialIndex] =
    useState(0);

  if (
    !Array.isArray(testimonials) ||
    testimonials.length === 0
  ) {
    return null;
  }

  const currentTestimonial =
    testimonials[testimonialIndex];

  function previousTestimonial() {
    setTestimonialIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  }

  function nextTestimonial() {
    setTestimonialIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  }

  return (
    <section
      className="mwh-section mwh-testimonials"
      id="testimonials"
    >
      <div className="mwh-container">
        <div className="mwh-section-heading center">
          <div className="mwh-section-kicker orange">
            <MessageSquare />
            Client Feedback
          </div>

          <h2>
            What Clients{" "}
            <span className="mwh-orange-text">
              Say
            </span>
          </h2>
        </div>

        <div className="mwh-testimonial-carousel">
          <button
            type="button"
            className="mwh-testimonial-arrow"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            {"\u25C0"}
          </button>

          <div className="mwh-testimonial-card">
            <div className="mwh-testimonial-avatar">
              {currentTestimonial.initials}
            </div>

            <div className="mwh-stars">
              {"\u2605 \u2605 \u2605 \u2605 \u2605"}
            </div>

            <blockquote>
              {"\u201C"}
              {currentTestimonial.quote}
              {"\u201D"}
            </blockquote>

            <strong>
              {"\u2014 "}
              {currentTestimonial.name}
            </strong>
          </div>

          <button
            type="button"
            className="mwh-testimonial-arrow"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            {"\u25B6"}
          </button>
        </div>
      </div>
    </section>
  );
}