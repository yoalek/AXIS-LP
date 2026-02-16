
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
      className="inline-flex items-center gap-3 bg-transparent border border-slate-200/50 dark:border-neutral-800/50 p-1 pr-4 rounded-full mb-10 transition-all cursor-pointer group hover:border-primary/20"
      onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
    >
      {/* Parte da esquerda: Indicador de status com brilho difuso e efeito de respiração */}
      <div className="flex items-center gap-2 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
        <span className="relative flex h-1.5 w-1.5">
          {/* Halo de respiração difuso - Escala maior e blur para efeito de névoa */}
          <motion.span
            animate={{
              scale: [1, 3.5],
              opacity: [0.1, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/40 blur-[4px]"
          ></motion.span>

          {/* Segundo halo para suavizar a transição do centro para as bordas */}
          <motion.span
            animate={{
              scale: [1, 2],
              opacity: [0.3, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/30 blur-[2px]"
          ></motion.span>

          {/* Ponto central com brilho (shadow) altamente difuso (20px de raio) */}
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_20px_6px_rgba(16,185,129,0.5)]"></span>
        </span>
        <span className="text-[11px] font-bold text-emerald-600/70 dark:text-emerald-500/70 uppercase tracking-tight">2 vagas</span>
      </div>

      {/* Texto central e CTA de baixa hierarquia */}
      <div className="flex items-center gap-3">
        <span className="text-[12px] font-medium text-slate-400 dark:text-neutral-500">Disponíveis este mês</span>
        <div className="w-[1px] h-3.5 bg-slate-200/60 dark:bg-neutral-800/60"></div>
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] font-bold text-slate-500 dark:text-neutral-400 group-hover:text-primary transition-colors">Agendar Reunião</span>
          <div className="w-5 h-5 rounded-full bg-slate-50 dark:bg-neutral-900 border border-slate-200/50 dark:border-neutral-800/50 flex items-center justify-center group-hover:border-primary/30 transition-all">
            <svg className="w-2.5 h-2.5 text-slate-400 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
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
  <div className={`flex items-center gap-3 bg-white/10 backdrop-blur-xl p-2 pr-5 rounded-full shadow-2xl border border-white/20 whitespace-nowrap group hover:bg-white/20 transition-all duration-300 cursor-pointer ${className}`}>
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold text-[13px] shadow-lg border border-white/20`}>
      {initial}
    </div>
    <div className="flex flex-col">
      <span className="text-[14px] font-bold text-white leading-tight">{name}</span>
      <span className="text-[11px] text-white/60 font-semibold tracking-wide uppercase">{role}</span>
    </div>
    <div className="ml-2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-all">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
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
        fill="rgba(4, 119, 209, 0.12)"
        className="opacity-70 dark:opacity-40"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-6 text-left">
            <BlurFade delay={0}>
              <div className="flex justify-start">
                <UrgencyBadge />
              </div>
              <h1 className="text-5xl lg:text-[72px] font-extrabold text-foreground leading-[1.05] tracking-tighter mb-6 text-left">
                Blindagem de Folha,
                <br />
                <span className="text-primary italic font-normal">Risco Zero e eSocial 100%.</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium max-w-xl leading-relaxed text-left">
                Terceirize o DP da sua empresa com quem domina DCTF-Web, FGTS Digital e admissões em massa. Reduza custos operacionais e elimine passivos trabalhistas ocultos hoje mesmo.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-row gap-4 mt-2">
                <FlowButton
                  text="Agendar Diagnóstico"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto justify-center"
                />

              </div>
            </BlurFade>
          </div>

          {/* Right Column: Image/Visual */}
          <div className="relative">
            <BlurFade delay={0.6} yOffset={40}>
              <div className="relative rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-900 aspect-[4/3] lg:aspect-square border border-border">
                <div className="absolute inset-0 grayscale-[0.2] brightness-[0.85] contrast-[1.1]">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=90&w=2000"
                    alt="Modern Office Axis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>


              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
