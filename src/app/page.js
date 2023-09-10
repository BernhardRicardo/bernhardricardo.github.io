import Header from "./components/header"
import Home from "./components/home"
import Projects from "./components/projects"

export default function Page() {
  return (
    <main className='bg-white'>
        <Header />
        <section className='min-h-screen px-10'>
          <Home />
          <Projects />
        </section>
    </main>
  )
}
