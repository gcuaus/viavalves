'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Source industrial valves',
    accent: 'Without risk.',
    secondLine: 'Without guesswork.',
    image: '/assets/aistudio/10854679-hd_1920_1080_30fps_7e3f9fb3.mp4',
    kind: 'video',
  },
  {
    title: 'Verified valve quality',
    accent: 'Before shipping.',
    secondLine: 'From factory to site.',
    image: '/assets/inspection-D-THaamM.jpg',
    kind: 'image',
  },
  {
    title: 'China sourcing',
    accent: 'Made simpler.',
    secondLine: 'Built around your needs.',
    image: '/assets/hero-factory-CE2Be8TK.jpg',
    kind: 'image',
  },
];

export function MinimalValveHero() {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[300px] lg:min-h-[340px] flex flex-col justify-between overflow-hidden bg-[#edf3f1] text-[#10241f]">
      {/* Auto-advancing app hero */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {slides.map((slide, index) =>
          slide.kind === 'video' ? (
            <video
              key={slide.image}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover scale-[1.01] transition-opacity duration-1000 ${
                index === slideIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={slide.image} type="video/mp4" />
            </video>
          ) : (
            <div
              key={slide.image}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === slideIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )
        )}
        <div className="absolute inset-0 bg-white/88 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* 2. Main Hero Content (Positioned over the Video with Expanded Width) */}
      <div className="relative z-10 container-px mx-auto w-full max-w-7xl pt-6 pb-6 flex-1 flex flex-col justify-center">
        <div className="app-hero-copy w-full min-w-0 max-w-none">
          {/* Main Headline - Wide, Bold & High Contrast */}
          <h1 className="break-words text-[25px] sm:text-3xl lg:text-2xl font-extrabold tracking-tight text-[#10241f] leading-[1.08]">
            {slides[slideIndex].title}
            <span className="block mt-2 sm:mt-3">
              <span className="text-[#47751e]">
                {slides[slideIndex].accent}
              </span>{' '}
              <span className="text-[#10241f]">{slides[slideIndex].secondLine}</span>
            </span>
          </h1>

          {/* Subtitle / Description - Expanded width */}
          <p className="mt-3 text-[13px] sm:text-sm font-medium text-[#40564d] leading-relaxed max-w-xl">
            Verified factories. Quality checked. Delivered reliably.
          </p>

          {/* Value Highlights Chips */}
          {/* Call to Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B7FF35] hover:bg-[#C8FF63] text-[#10170A] px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-lg shadow-lime-400/20 hover:shadow-lime-400/30 transition-all duration-200 active:scale-[0.98] group"
            >
              <span>Get a Sourcing Plan</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </div>
        </div>
      </div>

    </section>
  );
}
