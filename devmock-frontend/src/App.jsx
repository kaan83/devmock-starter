import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WaitlistForm />
      <Footer />
    </div>
  )
}

export default App