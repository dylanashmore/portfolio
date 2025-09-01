export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Entrepreneur by practice, developer at heart.</h1>
        <a className="cta" href="#portfolio">see my work</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hey, I’m Dylan—builder of web tools, compilers student, and FE study-tool maker.
          I enjoy shipping clean, fast interfaces and tinkering with low-level systems.
        </p>
      </section>

      <section id="background" className="section">
        <h2>My Background</h2>
        <ul className="bullets">
          <li>React + Vite, Node, C/C++ (systems + compilers coursework)</li>
          <li>UI/UX, PDF.js customizations, timers, scoring logic</li>
          <li>Projects across web apps, study tools, and automation</li>
        </ul>
      </section>

      <section id="portfolio" className="section">
        <h2>Work showcase</h2>
        <div className="grid">
          <a className="card" href="#" target="_blank" rel="noreferrer">
            <h3>Foundation Exam Study Tool →</h3>
            <p>React + PDF.js site for practice exams and scoring.</p>
          </a>
          <a className="card" href="#" target="_blank" rel="noreferrer">
            <h3>Garage Simulator (C) →</h3>
            <p>Data structures: queues, circular lists, and reports.</p>
          </a>
          <a className="card" href="#" target="_blank" rel="noreferrer">
            <h3>Compiler Codegen →</h3>
            <p>SimpleIR → x86 codegen: arithmetic & branching.</p>
          </a>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Get in touch</h2>
        <p>me [at] yourdomain.com</p>
        <div className="icons">
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourname" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Dylan Ashmore. All rights reserved.</footer>
    </>
  )
}
