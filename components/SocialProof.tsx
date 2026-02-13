
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "William Ashford",
      role: "Co-Fundador, Asterisk Inc",
      content: "“Não posso recomendar o AXIS o suficiente! Suas soluções de DP facilitaram muito a gestão das nossas aprovações e fluxos, resultando em tempos de resposta mais rápidos e clientes mais felizes.”"
    },
    {
      name: "Ricardo Mendes",
      role: "CEO na TechLogistics",
      content: "“Reduzimos nossos custos de RH em 45% logo no primeiro trimestre. A segurança que temos com a folha de pagamento hoje é outro nível e a tecnologia é impecável.”"
    },
    {
      name: "Ana Claudia",
      role: "Diretora de Operações na BioCare",
      content: "“O atendimento deles é diferenciado. Parece que temos um time de 10 pessoas dentro da nossa empresa, mas sem os custos de CLT e com muito mais agilidade.”"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="prova-social" className="py-32 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[3rem] p-10 md:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-32 items-start"
        >
          
          {/* Left Side: Header */}
          <div className="w-full">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-bold mb-8 uppercase tracking-widest">
              Impacto Real
            </div>
            <h2 className="text-4xl md:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              O que nossos clientes dizem
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-4 max-w-md">
              Temos orgulho em entregar soluções excepcionais que geram grandes resultados. Mas não acredite apenas na nossa palavra.
            </p>
          </div>

          {/* Right Side: Testimonial Display */}
          <div className="w-full flex flex-col justify-between min-h-[340px]">
            <div className="relative mb-16">
              <div key={currentIndex} className="animate-fade-in">
                <blockquote className="text-2xl md:text-[32px] font-medium text-slate-900 leading-[1.3]">
                  {testimonials[currentIndex].content}
                </blockquote>
              </div>
            </div>
            
            <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <div key={`author-${currentIndex}`} className="animate-fade-in flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-1 text-left">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-500 font-medium text-left text-base">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center bg-white text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all group"
                  aria-label="Anterior"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center bg-white text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all group"
                  aria-label="Próximo"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </motion.div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
