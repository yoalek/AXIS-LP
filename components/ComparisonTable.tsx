
import React, { useRef, ReactNode } from 'react';
import { motion, useInView, Variant, Transition, UseInViewOptions } from 'framer-motion';
import { Button } from './ui/button';
import { FlowButton } from './ui/flow-button';
import { MoveRight, Check, X } from 'lucide-react';

interface InViewProps {
  children: ReactNode;
  variants?: { hidden: Variant; visible: Variant; };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
}

const defaultInViewVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export function InView({
  children,
  variants = defaultInViewVariants,
  transition = { duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] },
  viewOptions = { once: true, margin: "0px 0px -150px 0px" },
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div ref={ref} initial='hidden' animate={isInView ? 'visible' : 'hidden'} variants={variants} transition={transition}>
      {children}
    </motion.div>
  );
}

const ComparisonTable: React.FC = () => {
  const comparisonItems = [
    {
      label: "Qualificação Técnica",
      solve: "Time de Consultores Sênior",
      traditional: "Generalistas com alta rotatividade"
    },
    {
      label: "Segurança de Processos",
      solve: "Blindagem Total eSocial/FGTS",
      traditional: "Risco constante de multas e erros"
    },
    {
      label: "Continuidade Operacional",
      solve: "Operação Ininterrupta e Segura",
      traditional: "Vulnerabilidade a férias e faltas"
    },
    {
      label: "Agilidade Operacional",
      solve: "Processamento em Tempo Recorde",
      traditional: "Prazos lentos e burocracia interna"
    },
    {
      label: "Custo-Benefício",
      solve: "Redução de até 40% nos Custos Fixos",
      traditional: "Alto custo fixo e encargos CLT"
    }
  ];

  return (
    <section id="comparativo" className="py-32 bg-secondary/10 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <InView transition={{ delay: 0.1, duration: 0.6 }}>
            {/* Pill atualizada: Removido shadow-sm para visual plano e moderno conforme solicitado */}
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-[13px] font-bold mb-8 uppercase tracking-widest bg-primary/5">
              Análise de Eficiência
            </div>
          </InView>
          <InView transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-[56px] font-bold text-foreground tracking-tight leading-tight mb-6">
              Sua Empresa Merece <br />
              <span className="text-primary italic">Expertise de Nível Sênior</span>
            </h2>
          </InView>
          <InView transition={{ delay: 0.2, duration: 0.8 }}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Compare a Axis com o modelo tradicional e veja como entregamos segurança técnica e estabilidade operacional para o seu negócio.
            </p>
          </InView>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-0 md:gap-4">
          {/* Coluna SolverH / Axis */}
          <InView transition={{ delay: 0.3, duration: 0.8 }}>
            <div className="bg-card rounded-[2.5rem] p-10 md:p-14 shadow-xl border-2 border-primary relative z-10 transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recomendado</div>
              <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12 uppercase tracking-tight">AXIS GESTÃO HUMANA</h3>
              <div className="space-y-8">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{item.label}</span>
                    </div>
                    <p className="pl-8 text-[17px] font-bold text-primary">
                      {item.solve}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </InView>

          {/* Coluna Modelo Tradicional */}
          <InView transition={{ delay: 0.5, duration: 0.8 }}>
            <div className="bg-card/40 md:bg-transparent rounded-[2.5rem] p-10 md:p-14 md:pl-20 mt-8 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-medium text-center text-muted-foreground mb-12">Time Interno / Contabilidade</h3>
              <div className="space-y-8">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-border/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="text-sm font-bold text-muted-foreground/60 uppercase tracking-wider">{item.label}</span>
                    </div>
                    <p className="pl-8 text-[17px] font-medium text-muted-foreground">
                      {item.traditional}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </InView>
        </div>

        <div className="mt-20 text-center">
          <InView transition={{ delay: 0.7, duration: 0.6 }}>
            <FlowButton
              text="Garantir Minha Blindagem Sênior"
              className="font-bold"
              onClick={() => window.open('https://wa.me/5591992026660', '_blank')}
            />
          </InView>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
