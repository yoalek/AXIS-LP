
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useInView, Variant, Transition, UseInViewOptions } from 'framer-motion';

// --- InView Animation Component ---
interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
}

const fadeRightVariants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
};

function InView({
  children,
  variants = fadeRightVariants,
  transition = { duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] },
  viewOptions = { once: true, margin: "0px 0px -100px 0px" },
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

const SolutionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico de Risco',
      desc: 'Auditamos os últimos 5 anos da sua base de dados para identificar créditos não tomados e riscos iminentes de multa.',
      details: 'Mergulhamos nos dados atuais da sua empresa para identificar gargalos invisíveis no eSocial e na folha de pagamento.'
    },
    {
      number: '02',
      title: 'Saneamento & Processos',
      desc: 'Padronização total dos eventos de folha e correção de cadastros para garantir consistência absoluta no eSocial.',
      details: 'Criamos um roadmap de implementação sem atritos, garantindo que a transição não interrompa suas operações críticas.'
    },
    {
      number: '03',
      title: 'Gestão Ativa (BPO)',
      desc: 'Assumimos a operação total. Você recebe indicadores de performance (SLA) e a certeza de conformidade mensal.',
      details: 'Nossa equipe assume o operacional, permitindo que seu time foque em estratégias de crescimento e retenção de talentos.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight / 2;
      const totalHeight = rect.height;
      const currentPos = startTrigger - rect.top;

      const progress = Math.min(Math.max(currentPos / totalHeight, 0), 1);
      setProgressHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="solucao" className="py-32 bg-background overflow-hidden relative" ref={containerRef}>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left Column - Heading (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 pt-4">
            <InView transition={{ delay: 0.1, duration: 0.6 }}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-bold mb-8 uppercase tracking-widest">
                Fluxo de Blindagem
              </div>
            </InView>

            <h2 className="text-[48px] lg:text-[72px] font-bold text-foreground leading-[1] tracking-tighter mb-10">
              A jornada para a <br />
              <span className="text-primary italic font-normal">excelência operacional.</span>
            </h2>

            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-sm">
              Implementamos uma metodologia de timeline dinâmica que garante visibilidade total de cada etapa da sua migração e gestão.
            </p>
          </div>

          {/* Right Column - Animated Timeline Content */}
          <div className="lg:col-span-7 relative pt-10">
            {/* The Background Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-border md:translate-x-[-1px]">
              <div
                className="absolute top-0 w-full bg-gradient-to-b from-primary via-primary to-transparent transition-all duration-300 ease-out"
                style={{ height: `${progressHeight}%` }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full blur-sm opacity-60"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary"></div>
              </div>
            </div>

            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-8 md:gap-16 group relative mb-24 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0 relative z-20">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 transition-all duration-500 flex items-center justify-center text-[15px] font-bold bg-card shadow-sm group-hover:scale-110 ${progressHeight > (index / steps.length) * 100 + 10
                      ? 'border-primary text-primary shadow-primary/20'
                      : 'border-border text-muted-foreground'
                      }`}>
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 pt-2 md:pt-4">
                    <InView transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 50 }}>
                      <h3 className="text-3xl lg:text-[40px] font-bold text-foreground mb-6 tracking-tight leading-tight group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>

                      <div className="bg-secondary/30 rounded-[2.5rem] p-8 border border-border group-hover:border-primary/30 group-hover:bg-secondary/50 transition-all duration-500">
                        <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-6 font-medium">
                          {step.desc}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.details}
                        </p>

                        <div className="mt-8 flex gap-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className={`h-1 rounded-full transition-all duration-1000 delay-${i * 100} ${progressHeight > (index / steps.length) * 100 + 20
                              ? 'bg-primary w-12'
                              : 'bg-muted w-4'
                              }`}></div>
                          ))}
                        </div>
                      </div>
                    </InView>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
