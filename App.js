import React from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experiance from './components/experiance/Experiance';
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiance/>
      <Portfolio/>
      <Testimonials/>
       <Contact/>
      <Footer/>
    </>
  )




}

export default App;