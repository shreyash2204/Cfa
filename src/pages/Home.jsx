import React from 'react'
import Stats from '../components/Stats'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatWeDo from '../components/WhatWeDo'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhatWeDo />
      <Stats />
    </div>
  )
}

export default Home