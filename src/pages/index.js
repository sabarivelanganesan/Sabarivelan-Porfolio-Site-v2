import Navbar from "../Components/Navbar"
import Home from "../Components/Home"
import Skills  from "../Components/Skills";
import Works from "../Components/Works";
import Experience from "../Components/Experience";
import Contacts from "../Components/Contacts";
import React from 'react';
const IndexPage = () => {
  return (
  <main className="relative px-16">
    <header className="lg (1024px) w-full mt-8">
      <Navbar />
    </header>
    <section className="py-20">
      <Home />
    </section>
    <section>
      <Skills />
    </section>
    <section>
      <Works />
    </section>
    <section>
      <Experience />
    </section>
    <section>
      <Contacts />
    </section>
  </main>
  )
}



export default IndexPage

export const Head = () => <title>Sabarivelan Ganesan - Software Developer</title>
