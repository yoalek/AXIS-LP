
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import ComparisonTable from './components/ComparisonTable';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Authority from './components/Authority';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PainSection />
        <SolutionSection />
        <ComparisonTable />
        <Services />
        <SocialProof />
        <Authority />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
