"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [formData, setFormData] = useState({ name: "", role: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(headlineRef.current, { xPercent: gsap.utils.mapRange(0, 1, 6, -14, self.progress) });
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setFormData({ name: "", role: "", email: "", message: "" });
  };

  const roles = ["Brand / Company", "Agency / Studio", "Creator / Collab", "Other"];

  return (
    <section ref={sectionRef} id="contact" className="bg-[#F1F1EB] py-[clamp(100px,14vw,180px)] overflow-hidden relative">
      <div className="grain" />

      {/* Scroll-linked headline */}
      <div className="overflow-hidden mb-[clamp(60px,8vw,100px)]">
        <h2
          ref={headlineRef}
          className="font-serif italic text-[#050505] whitespace-nowrap will-change-transform leading-[0.95]"
          style={{ fontSize: "clamp(3.5rem,11vw,10rem)", letterSpacing: "-0.03em" }}
        >
          LET&apos;S MAKE IT HAPPEN
        </h2>
      </div>

      <div className="max-w-[1340px] mx-auto px-[clamp(20px,4vw,60px)] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-start">

          {/* Form */}
          <div>
            <p className="font-body text-[12px] tracking-[0.15em] uppercase text-[#8D8D87] mb-10">
              Send me an email
            </p>

            {sent ? (
              <p className="font-serif italic text-[#050505] leading-[1.4]" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)" }}>
                Message received! I&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                <div className="flex flex-col gap-2 pt-6">
                  <label htmlFor="cname" className="font-body text-[10px] tracking-[0.15em] uppercase text-[#8D8D87] font-medium">Name</label>
                  <input id="cname" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="form-input" />
                </div>

                <div className="flex flex-col gap-2 pt-6">
                  <label className="font-body text-[10px] tracking-[0.15em] uppercase text-[#8D8D87] font-medium">Role</label>
                  <div className="flex flex-wrap gap-2 pb-6 border-b border-black/[0.1]">
                    {roles.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setFormData({ ...formData, role: r })}
                        className={`font-body text-[12px] tracking-[0.04em] rounded-full px-4 py-1.5 border transition-all duration-200 cursor-pointer ${
                          formData.role === r
                            ? "bg-[#050505] text-[#F1F1EB] border-[#050505]"
                            : "bg-transparent text-[#8D8D87] border-black/[0.12] hover:border-black/30"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-6">
                  <label htmlFor="cemail" className="font-body text-[10px] tracking-[0.15em] uppercase text-[#8D8D87] font-medium">Email</label>
                  <input id="cemail" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className="form-input" />
                </div>

                <div className="flex flex-col gap-2 pt-6">
                  <label htmlFor="cmsg" className="font-body text-[10px] tracking-[0.15em] uppercase text-[#8D8D87] font-medium">Message</label>
                  <textarea id="cmsg" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project..." className="form-input resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-9 self-start bg-[#050505] text-[#F1F1EB] rounded-full px-9 py-3.5 font-body text-[12px] tracking-[0.15em] uppercase font-semibold cursor-pointer border-none hover:bg-[#222] hover:-translate-y-px transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "SENDING..." : "SEND →"}
                </button>
              </form>
            )}
          </div>

          {/* Stylized map */}
          <div>
            <p className="font-body text-[12px] tracking-[0.15em] uppercase text-[#8D8D87] mb-10">Location</p>
            <div className="aspect-[4/3] bg-[#E8E8E0] rounded border border-black/[0.08] overflow-hidden relative">
              <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#E8E8E0" />
                {[0,1,2,3,4].map((i) => <line key={`h${i}`} x1="0" y1={i*75} x2="400" y2={i*75} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />)}
                {[0,1,2,3,4,5].map((i) => <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="300" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />)}
                <path d="M40,150 Q120,120 200,150 Q280,180 360,150" stroke="rgba(0,0,0,0.12)" strokeWidth="2" fill="none" />
                <path d="M200,40 L200,260" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" fill="none" />
                <circle cx="200" cy="150" r="8" fill="#050505" opacity="0.85" />
                <circle cx="200" cy="150" r="16" fill="none" stroke="#050505" strokeWidth="1" opacity="0.25" />
                <circle cx="200" cy="150" r="28" fill="none" stroke="#050505" strokeWidth="0.5" opacity="0.12" />
              </svg>
              <div className="absolute bottom-5 left-5 bg-[#050505] text-[#F1F1EB] px-4 py-2 rounded-full font-body text-[11px] tracking-[0.1em] uppercase">
                📍 {portfolioData.location}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex gap-4 items-center">
                <span className="font-body text-[11px] tracking-[0.1em] uppercase text-[#8D8D87] min-w-[60px]">Email</span>
                <a href={`mailto:${portfolioData.email}`} className="font-body text-[14px] text-[#050505] no-underline border-b border-black/[0.15] pb-0.5 hover:border-black/40 transition-colors">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <span className="font-body text-[11px] tracking-[0.1em] uppercase text-[#8D8D87] min-w-[60px]">Phone</span>
                <a href={`tel:${portfolioData.phone}`} className="font-body text-[14px] text-[#050505] no-underline border-b border-black/[0.15] pb-0.5 hover:border-black/40 transition-colors">
                  {portfolioData.phone}
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <span className="font-body text-[11px] tracking-[0.1em] uppercase text-[#8D8D87] min-w-[60px]">Based in</span>
                <span className="font-body text-[14px] text-[#050505]">{portfolioData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
