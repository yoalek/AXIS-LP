
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FlowButton } from './ui/flow-button';
import { MoveRight } from 'lucide-react';
import { BGPattern } from './ui/bg-pattern';

const UrgencyBadge: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="inline-flex items-center gap-3 bg-card border border-border p-1 pr-4 rounded-full mb-10 transition-all cursor-pointer group hover:border-primary/50 shadow-sm"
      onClick={() => window.open('https://wa.me/5591992026660', '_blank')}
    >
      {/* Parte da esquerda: Indicador de status simplificado */}
      <div className="flex items-center gap-2 border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-[11px] font-bold text-primary uppercase tracking-tight">Últimas 2 vagas</span>
      </div>

      {/* Texto central e CTA */}
      <div className="flex items-center gap-3">
        <span className="text-[12px] font-medium text-muted-foreground">Disponíveis este mês</span>
        <div className="w-[1px] h-3.5 bg-border"></div>
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] font-bold text-foreground group-hover:text-primary transition-colors">Solicitar Auditoria</span>
          <div className="w-5 h-5 rounded-full bg-muted border border-border flex items-center justify-center group-hover:border-primary/30 transition-all">
            <svg className="w-2.5 h-2.5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProfileBadge: React.FC<{ name: string; role: string; color: string; initial: string; className?: string }> = ({ name, role, color, initial, className }) => (
  <div className={`flex items-center gap-3 bg-card/80 backdrop-blur-xl p-2 pr-5 rounded-full shadow-lg border border-border whitespace-nowrap group hover:bg-card transition-all duration-300 cursor-pointer ${className}`}>
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-primary-foreground font-bold text-[13px] shadow-sm border border-border`}>
      {initial}
    </div>
    <div className="flex flex-col">
      <span className="text-[14px] font-bold text-foreground leading-tight">{name}</span>
      <span className="text-[11px] text-muted-foreground font-semibold tracking-wide uppercase">{role}</span>
    </div>
  </div>
);

const BlurFade: React.FC<{ children: React.ReactNode; delay?: number; duration?: number; yOffset?: number }> = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 8
}) => {
  return (
    <motion.div
      initial={{ y: yOffset, opacity: 0, filter: "blur(8px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        delay: 0.1 + delay,
        duration,
        ease: [0.21, 1.02, 0.47, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 bg-background overflow-hidden">
      {/* Background Pattern Implementation */}
      <BGPattern
        variant="dots"
        mask="fade-center"
        size={40}
        fill="currentColor"
        className="text-primary/10 opacity-100"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-6 text-left">
            <BlurFade delay={0}>
              <div className="flex justify-start">
                <UrgencyBadge />
              </div>
              <h1 className="text-5xl lg:text-[64px] font-extrabold text-foreground leading-[1.05] tracking-tighter mb-6 text-left">
                Sua Empresa Está
                <br />
                <span className="text-primary italic font-normal">Sangrando Dinheiro no eSocial?</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium max-w-xl leading-relaxed text-left">
                Descubra as inconsistências ocultas na DCTF-Web que estão gerando multas silenciosas. Pare de rasgar dinheiro com passivo trabalhista e foque no seu negócio.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-row gap-4 mt-2">
                <FlowButton
                  text="Auditoria de Risco eSocial (Gratuita)"
                  onClick={() => window.open('https://wa.me/5591992026660', '_blank')}
                  className="w-full sm:w-auto justify-center"
                />

              </div>
            </BlurFade>
          </div>

          {/* Right Column: Image/Visual */}
          <div className="relative">
            <BlurFade delay={0.6} yOffset={40}>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-card aspect-[4/3] lg:aspect-square border border-border">
                <div className="absolute inset-0 grayscale-[0.2] brightness-[0.95]">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=90&w=2000"
                    alt="Modern Office Axis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>


              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
