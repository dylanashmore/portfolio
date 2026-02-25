import Nav from "./components/Nav"
import ContactBar from "./components/ContactBar"
import "./App.css"

export default function App() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section id="home" className="section hero">
        <div className="container center">
          <h1 className="headline">Hi, I'm Dylan Ashmore.</h1>
          <p className="sub">Computer Science Undergraduate Student</p>
          <a className="btn" href="#portfolio">SEE MY WORK</a>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="section alt split">
  <div className="container">
    {/* LEFT — text */}
    <div className="about-split">
      <h2 className="about-title">About Me</h2>

      <p>
           Hi! I'm a second-year Computer Science student at the University of Central Florida interested in UI/UX design and full stack development.
            Before CS, I studied Graphic Design at Hillsborough Community College and earned my associate's degree.
            I have always had a keen eye and love for design of all types, so when I learned about the field of UI/UX design,
            I knew it would be perfect for me since it combines design with logical systems and analytical thinking. I am currently working an I.T help desk
            position at the Doctor Phillips Center for the Performing Arts, where I have gained experience in troubleshooting and customer service. I am also working on a project to create a study website for the UCF Foundation Exam, which is a comprehensive exam that tests students on various computer science topics. I am passionate about learning and growing as a developer and designer, and I am excited to see where my skills will take me in the future.
      </p>
    </div>

    {/* RIGHT — image */}
    <aside className="about-image">
      <img src="/about.jpg"/>
    </aside>
  </div>
</section>

      {/* BACKGROUND */}
      <section id="background" className="section compact">
        <div className="container">
          <h2 className="background-title">Background</h2>
          <div className="grid">
  <div className="bgcard">
    <h3>Graphic Design</h3>
    <p>Degree in Graphic Design, strong knowledge of photo and video editing software.</p>
  </div>

  <div className="bgcard">
    <h3>Frontend</h3>
    <p>React + Vite, user-centered design, CSS</p>
  </div>

  <div className="bgcard">
    <h3>Systems &amp; CS</h3>
    <p>Data structures &amp; algorithms, passed UCF Foundation Exam, C, Java &amp; Python</p>
  </div>
</div>

        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section compact">
        <div className="container">
          <h2 className="portfolio-title">Portfolio</h2>
          <div className="grid">
            <a className="card" href="https://ucantfail-foundationexam.vercel.app" target="_blank" rel="noreferrer">
              <h3>U Can't Fail - Foundation Exam ➩</h3>
              <p>We made this project to help our fellow UCF Knights to study for the Foundation Exam utlizing previous exam questions. The main focus
                was to improve the user experience and functionality from previous study sites made by other students.
              </p>
            </a>
            <a className="card" href="https://www.dramosfence.com" target="_blank" rel="noreferrer">
              <h3>Ramos Fencing ➩</h3>
              <p>       I developed this website for a local fencing company using React and React Router to build dynamic service 
                        pages and responsive image galleries. This was my first full project where I also designed the mobile 
                        experience, ensuring smooth navigation and layouts across devices. I gained hands-on experience with CSS, 
                        JavaScript, and user experience design principles, and I set up the backend to handle form submissions so 
                        the company could easily receive customer inquiries.
                       </p>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <ContactBar />
    </>
  )
}
