import dineshImg from "./assets/dinesh.jpg"
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black text-white overflow-x-hidden scroll-smooth font-sans">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-violet-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/20 border-b border-cyan-500/10 z-50">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-black tracking-wider text-cyan-400">
            Dinesh K
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

            <li>
              <a href="#home" className="hover:text-cyan-400 transition duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-400 transition duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#education" className="hover:text-cyan-400 transition duration-300">
                Education
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-cyan-400 transition duration-300">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-cyan-400 transition duration-300">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-cyan-400 transition duration-300">
                Contact
              </a>
            </li>

          </ul>

        </div>

      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
<div className="flex flex-col md:flex-row items-center justify-center gap-16">

  {/* Left Content */}
  <div className="text-center md:text-left">

    <p className="uppercase tracking-[6px] text-cyan-400 font-semibold mb-5">
      Frontend Developer | Engineer
    </p>

    <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">

      I'm{" "}

      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
        Dinesh
      </span>

    </h1>

    <p className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-10 mb-10">
      Passionate about building futuristic,
      responsive and modern web applications using React.js.
    </p>

    <div className="flex gap-6 flex-wrap justify-center md:justify-start">

      <a href="#projects">
        <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-2xl font-bold transition duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
          View Projects
        </button>
      </a>

      <a href="#contact">
        <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-2xl font-bold transition duration-300 hover:scale-105">
          Contact Me
        </button>
      </a>

    </div>

  </div>

  {/* Right Image */}
  <div className="relative">

    <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

 <img
  src={dineshImg}
  alt="Dinesh"
  className="relative w-[320px] h-[320px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30 hover:scale-105 transition duration-500"
/>

  </div>

</div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-8 md:px-20"
      >

        <h2 className="text-5xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-12 shadow-2xl hover:border-cyan-400 transition duration-300">

          <p className="text-gray-300 text-xl leading-10 text-center">
            I'm Dinesh, an Electrical and Electronics Engineering graduate
            passionate about frontend development, React.js and modern UI design.
            I enjoy creating futuristic applications with smooth animations,
            responsive layouts and premium user experiences.
          </p>

        </div>

      </section>

      {/* Education */}
      <section
        id="education"
        className="py-24 px-8 md:px-20"
      >

        <h2 className="text-5xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 mb-5">
              Diploma
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              <span className="text-violet-400 font-semibold">
                Muthayammal Polytechnic College
              </span>

              <br />

              Electrical and Electronics Engineering

              <br />

              2020 - 2023

              <br />

              Percentage: 92.4%
            </p>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 mb-5">
              Engineering
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              <span className="text-violet-400 font-semibold">
                Karpagam College of Engineering
              </span>

              <br />

              Electrical and Electronics Engineering

              <br />

              2023 - 2026

              <br />

              CGPA: 6.49
            </p>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 px-8 md:px-20"
      >

        <h2 className="text-5xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-10 hover:scale-105 hover:border-cyan-400 transition duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 mb-5">
              Frontend
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              HTML, CSS, JavaScript, React.js, Tailwind CSS
            </p>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-10 hover:scale-105 hover:border-cyan-400 transition duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 mb-5">
              Programming
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              Java, Problem Solving
            </p>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-10 hover:scale-105 hover:border-cyan-400 transition duration-300">

            <h3 className="text-3xl font-bold text-cyan-400 mb-5">
              Hardware
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              PLC, Raspberry Pi, Industrial Automation
            </p>

          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 px-8 md:px-20"
      >

        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="space-y-6">

          <details className="group bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

            <summary className="text-2xl font-bold text-cyan-400 cursor-pointer flex justify-between items-center list-none">

              Multilingual Voice & Text Communication System

              <span className="group-open:rotate-180 transition duration-300">
                ▼
              </span>

            </summary>

            <p className="text-gray-300 text-lg leading-10 mt-6">
              Developed a Raspberry Pi based communication system supporting
              multilingual voice and text interaction using microphone input,
              keyboard support, LCD display and text-to-speech output.
            </p>

          </details>

          <details className="group bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

            <summary className="text-2xl font-bold text-cyan-400 cursor-pointer flex justify-between items-center list-none">

              BooksKey Web Application

              <span className="group-open:rotate-180 transition duration-300">
                ▼
              </span>

            </summary>

            <p className="text-gray-300 text-lg leading-10 mt-6">
              Developed a responsive book management web application using
              HTML, CSS and JavaScript with popup based interaction.
            </p>

          </details>

          <details className="group bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

            <summary className="text-2xl font-bold text-cyan-400 cursor-pointer flex justify-between items-center list-none">

              Smart Water Pump Automation

              <span className="group-open:rotate-180 transition duration-300">
                ▼
              </span>

            </summary>

            <p className="text-gray-300 text-lg leading-10 mt-6">
              Developed an automated water pump control system using ladder logic
              programming with manual and automatic operating modes.
            </p>

          </details>
          <details className="group bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 transition duration-300">

  <summary className="text-2xl font-bold text-cyan-400 cursor-pointer flex justify-between items-center list-none">

    Furniture E-Commerce Website

    <span className="group-open:rotate-180 transition duration-300">
      ▼
    </span>

  </summary>

  <p className="text-gray-300 text-lg leading-10 mt-6">
    Designed and developed a MERN stack based furniture e-commerce
    website with responsive frontend UI, product sections,
    modern layouts and scalable backend architecture.
    Focused on smooth navigation, clean user experience
    and mobile responsive shopping interface.
  </p>

</details>

        </div>

      </section>

   {/* Contact */}
<section
  id="contact"
  className="py-24 px-8 md:px-20"
>

  <h2 className="text-5xl font-black text-center mb-14 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
    Contact Me
  </h2>

  <div className="max-w-5xl mx-auto bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-3xl p-12">

    <div className="flex justify-center gap-12 flex-wrap">

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/dinesh1002"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-4 hover:scale-110 transition duration-300"
      >
        <FaLinkedin className="text-[60px] text-[#0A66C2]" />
        <span className="text-gray-300 font-medium">
          LinkedIn
        </span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/dineshkumar1003"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-4 hover:scale-110 transition duration-300"
      >
        <FaGithub className="text-[60px] text-white" />
        <span className="text-gray-300 font-medium">
          GitHub
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:Dineshsk1003@gmail.com"
        className="flex flex-col items-center gap-4 hover:scale-110 transition duration-300"
      >
        <FaEnvelope className="text-[60px] text-red-400" />
        <span className="text-gray-300 font-medium">
          Dineshsk1003@gmail.com
        </span>
      </a>

      {/* Location */}
      <a
        href="https://maps.app.goo.gl/cN3zArHZV8esES378"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-4 hover:scale-110 transition duration-300"
      >
        <FaMapMarkerAlt className="text-[60px] text-green-400" />
        <span className="text-gray-300 font-medium text-center">
          Attur, Salem, Tamil Nadu
        </span>
      </a>
      {/* Phone */}
<a
  href="tel:+916374689844"
  className="flex flex-col items-center gap-4 hover:scale-110 transition duration-300"
>
  <FaPhone className="text-[60px] text-cyan-400" />
  <span className="text-gray-300 font-medium">
    +91 6374689844
  </span>
</a>

    </div>

  </div>

</section>
      {/* Footer */}
      <footer className="py-8 text-center border-t border-cyan-500/10 text-gray-500">
        © 2026 Dinesh. All rights reserved.
      </footer>

    </div>
  )
}

export default App