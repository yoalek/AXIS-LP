
import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView, Variant, Transition, UseInViewOptions } from 'framer-motion';
import { AlertCircle, ShieldAlert, Clock, FileWarning, Search, TrendingDown } from 'lucide-react';

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

interface WordProps { children: string; progress: any; range: number[]; }
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative inline-block mr-[0.25em]">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

const MagicHeading: React.FC<{ text: string }> = ({ text }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start 0.9", "start 0.4"], });
  const words = text.split(" ");
  return (
    <h2 ref={container} className="text-4xl md:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tighter mb-8 flex flex-wrap justify-center text-center">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
      })}
    </h2>
  );
};

const PainCard: React.FC<{ title: string; desc: string; children: React.ReactNode }> = ({ title, desc, children }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 border-t border-border group transition-all duration-500">
    <div className="w-full md:w-[480px] h-[320px] bg-secondary/20 rounded-[2.5rem] flex items-center justify-center p-8 overflow-hidden relative border border-border group-hover:bg-secondary/40 transition-all duration-500 shadow-inner">
      {children}
    </div>
    <div className="flex-1 text-center md:text-left">
      <h4 className="text-3xl md:text-[42px] font-bold text-foreground mb-4 tracking-tight leading-tight transition-colors group-hover:text-destructive">{title}</h4>
      <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-lg font-medium">{desc}</p>
    </div>
  </div>
);

const PainSection: React.FC = () => {
  return (
    <section className="bg-background py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <InView transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-[13px] font-bold mb-8 uppercase tracking-widest">
              O Risco Silencioso
            </div>
          </InView>

          <MagicHeading text="Sua Folha de Pagamento é uma Bomba-Relógio?" />

          <InView transition={{ delay: 0.3, duration: 0.8 }}>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Você sabia? <span className="text-destructive font-bold">Erros de cadastro</span> e inconsistências em verbas indenizatórias são os maiores geradores de autuações automáticas da Receita Federal.
            </p>
          </InView>
        </div>

        <div className="flex flex-col border-b border-border">
          {/* Card 1: Caos eSocial - Dashboard de Alertas */}
          <InView transition={{ delay: 0.1 }}>
            <PainCard
              title="Malha Fina do eSocial"
              desc="Informações desencontradas entre RH e Contabilidade que geram autuações automáticas da Receita Federal antes mesmo da fiscalização bater."
            >
              <div className="relative w-full h-full flex flex-col gap-3">
                <div className="flex justify-between items-center mb-2 px-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Eventos de Transmissão</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  </div>
                </div>
                {[
                  { label: 'S-1200 - Remuneração', status: 'OK', color: 'text-success' },
                  { label: 'S-2299 - Rescisão', status: 'ERRO', color: 'text-destructive', alert: true },
                  { label: 'DCTF-Web - Fechamento', status: 'CONFLITO', color: 'text-destructive', alert: true },
                  { label: 'S-1210 - Pagamentos', status: 'PENDENTE', color: 'text-warning' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card/80 border border-border p-3 rounded-xl flex justify-between items-center shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      {item.alert ? (
                        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <AlertCircle className="w-4 h-4 text-destructive" />
                        </motion.div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-border flex items-center justify-center">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'OK' ? 'bg-success' : 'bg-warning'}`}></div>
                        </div>
                      )}
                      <span className="text-xs font-bold text-foreground/80">{item.label}</span>
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-tighter ${item.color}`}>{item.status}</span>
                  </motion.div>
                ))}
              </div>
            </PainCard>
          </InView>

          {/* Card 2: Passivo Trabalhista - Radar de Risco */}
          <InView transition={{ delay: 0.1 }}>
            <PainCard
              title="Passivo Trabalhista Oculto"
              desc="Férias vencidas, rescisões mal calculadas e horas extras incorretas — uma dívida silenciosa que explode em processos trabalhistas."
            >
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Radar Background */}
                <div className="absolute w-48 h-48 rounded-full border border-destructive/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-destructive/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-destructive/10"></div>
                  </div>
                </div>

                {/* Scanning Beam */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-destructive/20 to-transparent opacity-30 origin-center"
                  style={{ maskImage: 'conic-gradient(from 0deg, black, transparent 90deg)' }}
                ></motion.div>

                {/* Risk Points */}
                {[
                  { top: '20%', left: '30%', label: 'PIS' },
                  { top: '65%', left: '70%', label: 'FGTS' },
                  { top: '40%', left: '60%', label: 'FÉRIAS' }
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                    className="absolute flex flex-col items-center"
                    style={{ top: point.top, left: point.left }}
                  >
                    <div className="w-3 h-3 bg-destructive rounded-full shadow-[0_0_15px_rgba(217,54,61,0.8)]"></div>
                    <span className="text-[8px] font-black text-destructive mt-1 bg-background/50 px-1 rounded">{point.label}</span>
                  </motion.div>
                ))}

                <div className="absolute bottom-4 flex flex-col items-center">
                  <span className="text-[10px] font-black text-destructive uppercase tracking-widest animate-pulse">Ameaça Detectada</span>
                  <div className="w-24 h-1 bg-destructive/20 rounded-full mt-1 overflow-hidden">
                    <motion.div
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full bg-destructive"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </PainCard>
          </InView>

          {/* Card 3: Falta de Tempo - Ampulheta Operacional */}
          <InView transition={{ delay: 0.1 }}>
            <PainCard
              title="Burocracia vs. Estratégia"
              desc="Sua liderança perdendo horas conferindo planilhas e guias manuais, em vez de focar no crescimento do negócio."
            >
              <div className="flex flex-col items-center justify-center w-full h-full relative">
                {/* Digital Hourglass */}
                <div className="flex flex-col items-center gap-2">
                  {/* Top Part (Strategic Time emptying) */}
                  <div className="w-24 h-16 border-2 border-border border-b-0 rounded-t-3xl bg-secondary/50 relative overflow-hidden">
                    <motion.div
                      animate={{ height: ['80%', '10%'] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 right-0 bg-primary/20 flex flex-col items-center justify-center"
                    >
                      <span className="text-[8px] font-bold text-primary uppercase">Estratégia</span>
                    </motion.div>
                  </div>

                  {/* Neck */}
                  <div className="w-4 h-2 border-x-2 border-border"></div>

                  {/* Bottom Part (Operational Time filling) */}
                  <div className="w-24 h-20 border-2 border-border border-t-0 rounded-b-3xl bg-secondary/50 relative overflow-hidden">
                    <motion.div
                      animate={{ height: ['20%', '95%'] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 right-0 bg-destructive/20 flex flex-col items-center pt-2"
                    >
                      <span className="text-[8px] font-bold text-destructive uppercase">Operacional</span>
                      <div className="flex flex-wrap justify-center gap-1 mt-2 px-2">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="w-3 h-1 bg-destructive/30 rounded-full"></div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating "Tasks" icons */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute right-12 top-12"
                >
                  <FileWarning className="w-6 h-6 text-destructive/40" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute left-16 top-16"
                >
                  <Clock className="w-5 h-5 text-destructive/30" />
                </motion.div>
              </div>
            </PainCard>
          </InView>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
