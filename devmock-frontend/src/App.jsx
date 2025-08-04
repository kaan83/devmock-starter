import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Hero from './components/Hero'
import Features from './components/Features'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <WaitlistForm />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App