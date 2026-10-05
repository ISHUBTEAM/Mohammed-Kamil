import { profile } from "./data/profile.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/** Page layout: each section reads its content from src/data/profile.js */
export default function App() {
  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects username={profile.githubUsername} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} location={profile.location} />
    </>
  );
}
