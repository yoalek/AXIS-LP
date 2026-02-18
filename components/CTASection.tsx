
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Counter } from './ui/counter';
import { Button } from './ui/button';
import { FlowButton } from './ui/flow-button';
import { MoveRight } from 'lucide-react';

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all border border-white/5">
    {icon}
  </div>
);

const StatItem = ({ rawValue, suffix, label, trigger }: { rawValue: number; suffix: string; label: string; trigger: boolean }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-0.5 h-12">
      <Counter
        end={rawValue}
        trigger={trigger}
        duration={2.5}
        fontSize={36}
        className="text-white tracking-tighter px-0 inline-flex items-center leading-none"
      />
      {suffix && (
        <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter leading-none flex items-center">
          {suffix}
        </span>
      )}
    </div>
    <span className="text-[13px] text-white/60 font-medium uppercase tracking-wider mt-3">{label}</span>
  </div>
);

const CTASection: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Captura dos dados do formulário
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const employees = formData.get('employees') as string;

    // Construção da mensagem
    const message = `Olá, gostaria de agendar uma auditoria gratuita.\n\n*Nome:* ${name}\n*Empresa (Porte):* ${employees}\n*WhatsApp:* ${phone}\n*E-mail:* ${email}`;

    // Codificação para URL e redirecionamento
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5591992026660?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-foreground rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[700px] border border-border"
        >
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="flex-1 p-10 md:p-20 flex flex-col justify-between relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-white text-[13px] font-bold mb-8 uppercase tracking-widest">
                Fale Conosco
              </div>
              <h2 className="text-5xl md:text-[72px] font-bold text-background leading-[1] tracking-tight mb-12">
                Pare de Sangrar <br />
                <span className="italic font-normal text-background/70">Dinheiro Hoje Mesmo.</span>
              </h2>
              <p className="text-background/80 text-lg md:text-xl max-w-md mb-8">Agende uma auditoria de risco gratuita e descubra onde sua empresa está exposta a multas do eSocial.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              className="grid grid-cols-2 gap-y-10 gap-x-4"
            >
              <StatItem rawValue={100} suffix="%" label="Compliance eSocial" trigger={isInView} />
              <StatItem rawValue={24} suffix="/7" label="Monitoramento de Risco" trigger={isInView} />
              <StatItem rawValue={0} suffix=" Risco" label="De Multa Silenciosa" trigger={isInView} />
              <StatItem rawValue={40} suffix="%" label="Redução de Custos (Média)" trigger={isInView} />
            </motion.div>
          </div>

          <div className="lg:w-[48%] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="bg-card rounded-[2rem] w-full max-w-md p-8 md:p-12 shadow-2xl transform lg:translate-x-4 border border-border"
            >
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-card-foreground leading-tight mb-2">Falar com Consultor</h3>
                <p className="text-muted-foreground font-medium italic">Vagas limitadas para diagnóstico gratuito este mês.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <input type="text" name="name" className="w-full py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none text-card-foreground font-medium transition-all" placeholder="Nome do Decisor" required />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group">
                  <select name="employees" className="w-full py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none text-card-foreground font-medium transition-all appearance-none cursor-pointer" required defaultValue="">
                    <option value="" disabled className="bg-card text-muted-foreground">Quantos funcionários?</option>
                    <option value="1-10" className="bg-card text-card-foreground">1 a 10 (Pequeno Porte)</option>
                    <option value="11-50" className="bg-card text-card-foreground">11 a 50 (Em Crescimento)</option>
                    <option value="51-200" className="bg-card text-card-foreground">51 a 200 (Médio Porte)</option>
                    <option value="200+" className="bg-card text-card-foreground">Acima de 200 (Grande Porte)</option>
                  </select>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-300"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                <div className="relative group">
                  <input type="tel" name="phone" className="w-full py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none text-card-foreground font-medium transition-all" placeholder="WhatsApp (DDD)" required />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-300"></div>
                </div>
                <div className="relative group">
                  <input type="email" name="email" className="w-full py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none text-card-foreground font-medium transition-all" placeholder="E-mail Corporativo" required />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-focus-within:w-full transition-all duration-300"></div>
                </div>

                <FlowButton
                  type="submit"
                  text="QUERO MINHA AUDITORIA GRATUITA"
                  className="w-full justify-center font-black uppercase tracking-widest"
                />
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
