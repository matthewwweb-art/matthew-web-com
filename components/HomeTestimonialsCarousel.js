"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Chris P.",
    image:
      "https://d14tal8bchn59o.cloudfront.net/jAUSVFAMGYYYrZvpVQRsWCzikJIBjjhLwTxNbbCHrp0/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374794/Testimonial_1_original.jpg",
    quote:
      "I can't thank the team at Matthew enough for the amazing job they did on my website. They listened to my needs and created a site that perfectly reflects my brand and message. Plus, they were able to get it done in a short amount of time and at a price that was very reasonable. I highly recommend their services.",
  },
  {
    name: "Walter D.",
    image:
      "https://d14tal8bchn59o.cloudfront.net/UD8mSLCxtmpYrnQIK_bCGUQ1sPX2EcRGadXMESU10uw/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374792/Testimonial_3_original.jpg",
    quote:
      "I had a great experience working with this web design firm. They were able to take my vision for my website and turn it into a reality, all while being very professional and easy to work with. Plus, they were able to complete the project within my budget and timeline. I'm extremely satisfied with the end result and would highly recommend their services.",
  },
  {
    name: "Samantha H",
    image:
      "https://d14tal8bchn59o.cloudfront.net/nNVN4poq2uTeyfeypAVIUmxup5-QprXLq2tT640D4Cg/rs:fill:360:360:1/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/115347/photos/23374790/Testimonial_4_original.jpg",
    quote:
      "I was hesitant to invest in a website for my small business, but I'm so glad I did! The team at Matthew was great to work with – they were knowledgeable, responsive, and patient with all of my questions. And the end result was a beautiful, professional website that has helped me reach a wider audience and increase my sales. I highly recommend their services.",
  },
];

export default function HomeTestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="home-testimonial-carousel">
      <button
        type="button"
        className="testimonial-arrow testimonial-arrow-left"
        onClick={goPrevious}
        aria-label="Previous testimonial"
      >
        ❮
      </button>

      <div className="home-testimonial-slide">
        <img
          src={active.image}
          alt={`${active.name} testimonial`}
          className="home-testimonial-image"
        />

        <div className="home-testimonial-stars">★ ★ ★ ★ ★</div>

        <p className="home-testimonial-quote">"{active.quote}"</p>

        <strong className="home-testimonial-name">— {active.name}</strong>
      </div>

      <button
        type="button"
        className="testimonial-arrow testimonial-arrow-right"
        onClick={goNext}
        aria-label="Next testimonial"
      >
        ❯
      </button>
    </div>
  );
}