import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import IsThisYou from './components/IsThisYou'
import WhatsInside from './components/WhatsInside'
import WhoMadeThis from './components/WhoMadeThis'
import WhatYouGet from './components/WhatYouGet'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'

function HomePage() {
  return (
    <>
      <Hero />
      <IsThisYou />
      <WhatsInside />
      <WhoMadeThis />
      <WhatYouGet />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dl/r7k2x9m4" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
