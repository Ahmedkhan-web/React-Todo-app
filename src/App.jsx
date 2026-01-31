import TodoApp from "./components/TodoApp";
import { useEffect, useState } from "react";

// background & hero
import bgImage from "./assets/pexels-kevin-ku-92347-577585.jpg";
import heroImg from "./assets/hero-img.jpg";
import userIcon from "./assets/user.png";

// blog images
import captureEcommerce from "./assets/Capture ecommerce.png";
import captureWeather from "./assets/Capture weather.PNG";
import capture from "./assets/Capture.PNG";
import musicImg from "./assets/music.png";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* HERO + NAV */}
      <div
        className="min-h-screen font-mono bg-center bg-cover bg-no-repeat bg-black/90 bg-blend-darken text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-md border-b border-white/30"
              : "border-b border-transparent"
          }`}
        >
          <h1 className="font-bold text-3xl md:text-4xl cursor-pointer">
            Ahmed<span className="text-amber-700">Khan</span>
          </h1>

          <div className="hidden md:flex items-center gap-10 text-[1.2rem]">
            {["home", "about", "todo-app", "blog"].map((link) => (
              <button
                key={link}
                onClick={() => handleScrollTo(link)}
                className="hover:text-amber-600 transition"
              >
                {link.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-4 py-2 bg-amber-700 rounded-xl hover:bg-amber-800 transition"
            >
              Contact
            </button>
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <button
              className="flex flex-col gap-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`h-1 w-6 bg-white ${menuOpen && "rotate-45 translate-y-2"}`}></span>
              <span className={`h-1 w-6 bg-white ${menuOpen && "opacity-0"}`}></span>
              <span className={`h-1 w-6 bg-white ${menuOpen && "-rotate-45 -translate-y-2"}`}></span>
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section
          id="home"
          className="pt-[120px] md:pt-[160px] px-6 md:px-12 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-amber-700">
              TODO WEB APPLICATION
            </h1>
            <p className="text-lg md:text-xl max-w-xl">
               A modern and responsive Todo web application built with React, designed to help users manage daily tasks efficiently with a clean UI and smooth user experience.
            </p>

            <div className="mt-10 flex gap-6">
              <button className="flex items-center gap-2 px-6 py-2 bg-amber-700 text-black rounded-xl font-bold hover:bg-amber-800">
                <img src={userIcon} className="w-5 h-5" />
                GET IN TOUCH
              </button>
              <button className="px-6 py-2 bg-amber-700 text-black rounded-xl font-bold hover:bg-amber-800">
                LIVE DEMO
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={heroImg}
              alt="Hero"
              className="max-w-[350px] rounded-2xl p-[2px] bg-gradient-to-tr from-amber-600 via-white to-amber-600"
            />
          </div>
        </section>
      </div>

      {/* ABOUT */}
      <section id="about" className="bg-black text-white py-20 px-6 md:px-12">
        <h1 className="text-center text-4xl md:text-7xl font-bold text-amber-700 font-mono">
          About Todo Application
        </h1>
        <p className="text-center mt-10 max-w-4xl mx-auto text-lg">
          This Todo App is a simple and user-friendly task management application that helps users organize their daily tasks. Users can add tasks, mark them as completed, and remove tasks when they are no longer needed. The goal of this app is to improve productivity by keeping tasks in one place.
        </p>
      </section>


      {/* Todo App Section */}
      <section id="todo-app" className="todo-app bg-black pt-20 pb-20 md:pb-40">
        <h1 className="text-center text-3xl md:text-7xl text-amber-700 font-bold font-mono">TODO APP</h1>

        <TodoApp />
      </section>


      {/* BLOG */}
      <section id="blog" className="bg-black px-6 md:px-12 py-20">
        <h1 className="text-center text-4xl md:text-7xl font-bold text-amber-700 font-mono">
          BLOG
        </h1>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { img: captureEcommerce, title: "Ecommerce Website" },
            { img: musicImg, title: "Music Website" },
            { img: captureWeather, title: "Weather Finder" },
            { img: capture, title: "Expense Management" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/60 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <h3 className="text-center py-4 font-bold text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

       {/* Contact Section */}
      <section id="contact" className="contact bg-black text-white py-20 md:py-32 px-6 md:px-12">
        <h1 className="text-center text-3xl md:text-7xl font-bold text-amber-700">Get In Touch</h1>
        <p className="text-center text-white/60 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg">
          Have a project in mind or want to work together? Fill out the form below and I’ll get back to you.
        </p>

        <div className="max-w-3xl mx-auto mt-10 md:mt-20">
          <form className="grid grid-cols-1 gap-6 md:gap-10">
            <div>
              <label className="block mb-2 text-sm tracking-wide text-white/70">Your Name</label>
              <input type="text" placeholder="Ahmed Khan" className="w-full bg-transparent border-b border-white/30 py-2 md:py-3 text-lg outline-none focus:border-amber-600 transition" />
            </div>

            <div>
              <label className="block mb-2 text-sm tracking-wide text-white/70">Email Address</label>
              <input type="email" placeholder="example@email.com" className="w-full bg-transparent border-b border-white/30 py-2 md:py-3 text-lg outline-none focus:border-amber-600 transition" />
            </div>

            <div>
              <label className="block mb-2 text-sm tracking-wide text-white/70">Phone Number</label>
              <input type="tel" placeholder="+92 333 35 58317" className="w-full bg-transparent border-b border-white/30 py-2 md:py-3 text-lg outline-none focus:border-amber-600 transition" />
            </div>

            <div>
              <label className="block mb-2 text-sm tracking-wide text-white/70">Your Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." className="w-full bg-transparent border-b border-white/30 py-2 md:py-3 text-lg outline-none resize-none focus:border-amber-600 transition"></textarea>
            </div>

            <button type="submit" className="mt-4 md:mt-10 px-6 md:px-10 py-2 md:py-4 bg-amber-700 text-black text-lg font-bold rounded-xl transition hover:bg-amber-800">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Ahmed Khan — All Rights Reserved
      </footer>
    </>
  );
}

export default App;
