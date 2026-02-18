
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Proteção Total",
      role: "Compliance Trabalhista",
      content: "“A complexidade do eSocial e DCTF-Web exige monitoramento constante. Nossa metodologia blinda sua empresa contra cruzamento de dados da Receita.”"
    },
    {
      name: "Foco no Core",
      role: "Eficiência Operacional",
      content: "“Enquanto cuidamos da burocracia e do risco, sua liderança foca em crescer o negócio e atender seus clientes com excelência.”"
    },
    {
      name: "Redução de Passivo",
      role: "Segurança Jurídica",
      content: "“Elimine o risco oculto de processos trabalhistas e multas previdenciárias com nossa auditoria preventiva de folha e encargos.”"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="prova-social" className="py-32 bg-slate-50 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          id="social-proof-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/5 rounded-[2.5rem] p-10 md:p-24 shadow-2xl border border-white/10 flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-32 items-start relative overflow-hidden"
        >
          {/* Decorative Gradient Blob for Social Proof */}
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Side: Header */}
          <div className="w-full">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-bold mb-8 uppercase tracking-widest">
              Impacto Real
            </div>
            <h2 className="text-4xl md:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Por que nos escolher?
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
