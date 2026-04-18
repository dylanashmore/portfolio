import { useState, useEffect } from "react"

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => { if (window.innerWidth > 640) setOpen(false) }
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const links = [
    { href: "#about",      label: "About" },
    { href: "#background", label: "Background" },
    { href: "#portfolio",  label: "Portfolio" },
    { href: "#contact",    label: "Contact" },
  ]

  return (
    <header className="site-header">
      <nav className="nav">
        <a className="nav-home" href="#home" onClick={() => setOpen(false)}>
          <span className="nav-wordmark">Dylan <span>Ashmore</span></span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`nav-burger${open ? " is-open" : ""}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? " is-open" : ""}`}>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="drawer-link"
            style={{ "--i": i }}
            onClick={() => setOpen(false)}
          >
            <span className="drawer-num">0{i + 1}</span>
            {l.label}
          </a>
        ))}
      </div>

      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </header>
  )
}
