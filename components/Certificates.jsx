"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import { CERTIFICATES } from "@/data/certificates";
import GalleryCarousel from "./Gallery";

function CertCarousel() {
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
    const card = el.querySelector(".cert-card");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <>
      <div className="cert-wrap">
        <button
          type="button"
          className="cert-arrow cert-arrow-left"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Sertifikat sebelumnya"
        >
          ‹
        </button>

        <div className="cert-track" ref={trackRef} onScroll={updateArrows}>
          {CERTIFICATES.map((c) => (
            <article className="cert-card glass" key={c.id}>
              <button
                type="button"
                className="cert-thumb"
                onClick={() => setActive(c)}
                aria-label={`Lihat sertifikat ${c.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={`Sertifikat ${c.title}`} loading="lazy" />
                <span className="cert-view">⤢ View Certificate</span>
              </button>
              <div className="cert-body">
                <span className="cert-tag">{c.category}</span>
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-sub">{c.subtitle}</p>
                <div className="cert-meta">
                  <span>{c.issuer}</span>
                  <span>{c.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="cert-arrow cert-arrow-right"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Sertifikat berikutnya"
        >
          ›
        </button>
      </div>

      {active && (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
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
            <img src={active.image} alt={`Sertifikat ${active.title}`} />
            <div className="cert-modal-bar">
              <div>
                <strong>{active.title}</strong>
                <span>
                  {active.issuer} · {active.date}
                </span>
              </div>
              {active.link && (
                <a href={active.link} target="_blank" rel="noopener noreferrer">
                  Verifikasi ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const TABS = [
  { id: "certificates", label: "Certificates", icon: "🎓" },
  { id: "gallery", label: "Gallery", icon: "📸" },
];

export default function Certificates() {
  const [tab, setTab] = useState("certificates");

  // Link navbar "#gallery" membuka tab Gallery, "#certificates" membuka tab Certificates.
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#gallery") setTab("gallery");
      else if (window.location.hash === "#certificates") setTab("certificates");
    };
    sync();
    window.addEventListener("hashchange", sync);
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href="#gallery"], a[href="#certificates"]');
      if (a) setTab(a.getAttribute("href") === "#gallery" ? "gallery" : "certificates");
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <section id="certificates">
      <span id="gallery" className="anchor-offset" aria-hidden="true" />
      <FadeIn className="section-label">{tab === "gallery" ? "Beyond the Code" : "Credentials"}</FadeIn>
      <FadeIn as="h2" className="section-title">
        {tab === "gallery" ? "Gallery." : "Certificates."}
      </FadeIn>

      <FadeIn className="cert-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={`cert-tab ${tab === t.id ? "active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            <span aria-hidden="true">{t.icon}</span> {t.label}
          </button>
        ))}
      </FadeIn>

      <FadeIn>{tab === "gallery" ? <GalleryCarousel key="g" /> : <CertCarousel key="c" />}</FadeIn>
    </section>
  );
}