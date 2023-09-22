import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";

export default function Page() {
  return (
    <main className="bg-white relative">
      <Header />
      <section className="min-h-screen w-full flex justify-center px-10">
        <div className="w-3/5">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </section>
    </main>
  );
}
