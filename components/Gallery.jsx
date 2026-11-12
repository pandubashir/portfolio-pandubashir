"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PHOTOS } from "@/data/photos";

export default function GalleryCarousel() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [active, setActive] = useState(null);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  function scrollByCard(dir) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  }

  return (
    <>
      <div className="cert-wrap">
        <button
          type="button"
          className="cert-arrow cert-arrow-left gallery-arrow"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Foto sebelumnya"
        >
          ‹
        </button>

        <div className="cert-track" ref={trackRef} onScroll={updateArrows}>
          {PHOTOS.map((p) => (
            <figure className="gallery-item" key={p.src}>
              <button
                type="button"
                className="gallery-btn"
                onClick={() => setActive(p)}
                aria-label={`Perbesar foto: ${p.caption}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.caption} loading="lazy" />
              </button>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="cert-arrow cert-arrow-right gallery-arrow"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Foto berikutnya"
        >
          ›
        </button>
      </div>

      {active && (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
          data-lenis-prevent
        >
          <div className="cert-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setActive(null)}
              aria-label="Tutup"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.caption} />
            <div className="cert-modal-bar">
              <div>
                <strong>{active.caption}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
