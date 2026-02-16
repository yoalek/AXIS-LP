
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const Authority: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-150px" });

  return (
    <section className="py-32 bg-background overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }}
          className="bg-secondary/40 rounded-[3rem] p-4 md:p-6 flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 border border-border shadow-lg"
        >
          <div className="w-full lg:w-[48%] relative">
            <div className="aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border bg-muted group/img relative">
              <img
                src="/joseane.jpg"
                alt="Joseane Medeiros - Founder Axis"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center py-8 lg:pr-12 relative">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-bold mb-6 uppercase tracking-widest">A Estrategista por trás da Blindagem</div>
              <p className="text-2xl md:text-[34px] font-medium text-foreground leading-[1.3] tracking-tight mb-8">
                Transformando a complexidade trabalhista do Pará em <span className="text-primary italic">estratégia de lucro.</span>
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                Com mais de 10 anos de experiência em Belém, guio empresas de alta rotatividade através das armadilhas do eSocial e DCTF-Web. Meu foco é dar ao dono do negócio a liberdade para crescer, enquanto a Axis garante que nenhum centavo seja perdido em multas ou processos evitáveis.
              </p>

              <div className="mt-12 pt-8 border-t border-border inline-flex flex-col">
                <span className="text-xl font-bold text-foreground">Joseane Medeiros</span>
                <span className="text-sm font-bold text-primary uppercase tracking-widest mt-1">Fundadora e Especialista em Compliance</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Authority;
