import { useEffect, useRef } from "react"
import Nav from "./components/Nav"
import ContactBar from "./components/ContactBar"
import "./App.css"

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealBlock({ className = "", children, delay = 0 }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal-block ${className}`} style={{ "--delay": `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section id="home" className="section hero">
        <div className="hero-bg-grid" />
        <div className="container center hero-content">
          <p className="hero-eyebrow">Portfolio — 2026</p>
          <h1 className="headline">
            <span className="line line-1">Dylan</span>
            <span className="line line-2">Ashmore.</span>
          </h1>
          <p className="sub">CS Student · UI/UX Design · Full-Stack Development</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#portfolio">See My Work</a>
            <a className="btn btn-ghost" href="#about">About Me</a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container about-container">
          <RevealBlock className="about-text-block">
            <p className="section-label">// About</p>
            <h2 className="about-title">Design-driven<br />developer.</h2>
            <p>
              I'm a second-year Computer Science student at UCF with a background in Graphic Design
              from Hillsborough Community College. That design foundation is what draws me to UI/UX —
              it lives at the intersection of aesthetics, logic, and user empathy.
            </p>
            <p>
              Currently working IT Help Desk at Dr. Phillips Center for the Performing Arts, where I
              support staff systems and infrastructure. Outside of work I'm building full-stack apps,
              sharpening my systems knowledge, and prepping for a future in product-focused engineering.
            </p>
            <div className="pill-row">
              <span className="pill">UCF — B.S. Computer Science</span>
              <span className="pill">HCC — A.A. Graphic Design</span>
              <span className="pill">IT Help Desk @ Dr. Phillips Center</span>
            </div>
          </RevealBlock>

          <RevealBlock delay={120} className="about-image-block">
            <img src="/about.jpg" alt="Dylan Ashmore" />
            <div className="about-image-accent" />
          </RevealBlock>
        </div>
      </section>

      {/* SKILLS */}
      <section id="background" className="section skills-section">
        <div className="container">
          <RevealBlock>
            <p className="section-label center">// Skills &amp; Background</p>
            <h2 className="section-title center">What I bring.</h2>
          </RevealBlock>
          <div className="skills-grid">
            {[
              {
                num: "01",
                title: "Design",
                body: "Graphic Design degree. Fluent in visual hierarchy, typography, photo & video editing. Translates directly into UI work.",
              },
              {
                num: "02",
                title: "Frontend",
                body: "React, TypeScript, Tailwind CSS, Vite. User-centered component architecture and responsive, accessible interfaces.",
              },
              {
                num: "03",
                title: "Backend & Systems",
                body: "Node.js, Express, MongoDB, REST APIs, JWT Auth. C, Java, Python. Passed UCF Foundation Exam.",
              },
              {
                num: "04",
                title: "DevOps & Tooling",
                body: "Docker, DigitalOcean, Nginx, GitHub, Postman, Swagger. Deployment pipelines and domain configuration.",
              },
            ].map((s, i) => (
              <RevealBlock key={s.num} delay={i * 80}>
                <div className="skill-card">
                  <span className="skill-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section portfolio-section">
        <div className="container">
          <RevealBlock>
            <p className="section-label center">// Work</p>
            <h2 className="section-title center">Selected projects.</h2>
          </RevealBlock>
          <div className="projects-list">
            {[
              {
                year: "2026",
                title: "NitroPicks",
                role: "Full-Stack Developer",
                stack: ["MERN", "TypeScript", "JWT", "DigitalOcean", "Nginx"],
                desc: "Full-stack sports betting platform with real-time event data, JWT-secured REST APIs, and a dynamic React + TypeScript front-end. Deployed on DigitalOcean with Nginx reverse proxy.",
                href: "https://nitropicks.xyz/",
              },
              {
                year: "2025",
                title: "U Can't Fail — Foundation Exam",
                role: "Developer",
                stack: ["React", "Vite", "Reinforcement Learning UX"],
                desc: "Interactive study platform for UCF's Foundation Exam, recognized by the UCF CS Department. Focused on reinforcement-learning UX patterns and intuitive interface design.",
                href: "https://ucantfail-foundationexam.vercel.app",
              },
              {
                year: "2026",
                title: "Salesman's Tool",
                role: "Developer",
                stack: ["React Native", "Expo", "ZIP mapping"],
                desc: "Mobile app for Toyota sales reps to compare vehicles and calculate location-based fuel costs. Built a multi-item comparison cart with real-time data inputs.",
                href: null,
              },
              {
                year: "2025",
                title: "Ramos Fencing",
                role: "Web Developer",
                stack: ["React", "React Router", "CSS", "Form Backend"],
                desc: "Business website for a local fencing company. Dynamic service pages, responsive galleries, and a form-submission backend for customer inquiries.",
                href: "https://www.dramosfence.com",
              },
            ].map((p, i) => (
              <RevealBlock key={p.title} delay={i * 60}>
                <div className={`project-row${p.href ? " is-link" : ""}`}
                  onClick={() => p.href && window.open(p.href, "_blank")}>
                  <div className="project-meta">
                    <span className="project-year">{p.year}</span>
                    <span className="project-role">{p.role}</span>
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">
                      {p.title}
                      {p.href && <span className="project-arrow">↗</span>}
                    </h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="tag-row">
                      {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <ContactBar />
    </>
  )
}
