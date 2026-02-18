
import React, { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface WordPullUpProps { words: string; className?: string; delay?: number; }
const WordPullUp: React.FC<WordPullUpProps> = ({ words, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: delay, }, },
  };
  const itemVariants: Variants = { hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 }, };
  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "show" : "hidden"} className={className}>
      {words.split(" ").map((word, i) => (
        <motion.span key={i} variants={itemVariants} style={{ display: "inline-block", paddingRight: "6px" }}>
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface ServiceCardProps { id: string; title: string; desc: string; isHovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void; }
const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, desc, isHovered, onMouseEnter, onMouseLeave }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.21, 1.02, 0.47, 0.98] }} // Alchemist Physics
      whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex flex-col py-8 md:py-12 px-8 transition-colors duration-500 cursor-pointer border-b border-white/10 overflow-hidden backdrop-blur-sm ${isHovered ? 'bg-white/5 rounded-[2.5rem] border-white/20 shadow-2xl' : 'bg-transparent'}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
        <div className="flex items-center gap-6 md:w-1/2">
          <span className={`text-sm md:text-base font-bold transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`}>{id}</span>
          <WordPullUp words={title} className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-500 ${isHovered ? 'text-background' : 'text-foreground'}`} />
        </div>
        <div className="flex-1 hidden md:block"></div>
        <div className="md:w-32 flex justify-end">
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-primary border-primary rotate-45 scale-110' : 'bg-transparent border-border group-hover:border-primary'}`}>
            <ArrowUpRight className={`w-5 h-5 md:w-7 md:h-7 transition-colors duration-500 ${isHovered ? 'text-primary-foreground' : 'text-foreground'}`} />
          </div>
        </div>
      </div>
      <motion.div initial={false} animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0, marginTop: isHovered ? 24 : 0 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="overflow-hidden md:w-2/3 md:ml-16">
        <p className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 font-medium ${isHovered ? 'text-background' : 'text-transparent'}`}>{desc}</p>
      </motion.div>

    </motion.div>
  );
};

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const serviceList = [
    { id: "01", title: "BPO DE FOLHA COMPLETO", desc: "Terceirização total da folha com responsabilidade técnica. Cálculo, conferência e transmissão de eSocial, FGTS e DCTF." },
    { id: "02", title: "RECUPERAÇÃO TRIBUTÁRIA", desc: "Análise profunda de verbas indenizatórias e previdenciárias para recuperar valores pagos indevidamente ao fisco nos últimos 5 anos." },
    { id: "03", title: "GESTÃO DE BENEFÍCIOS", desc: "Controle operacional de VT, VR, Plano de Saúde e Odontológico, desonerando seu RH interno de tarefas manuais." },
    { id: "04", title: "ADMISSÃO DIGITAL", desc: "Processo de onboarding 100% digital e fluido, garantindo uma experiência premium para seus novos colaboradores desde o dia 1." },
  ];
  return (
    <section id="servicos" className="py-32 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[13px] font-bold mb-8 uppercase tracking-widest">
            Nossas Soluções
          </motion.div>
          <WordPullUp words="Ecossistema de Gestão Ativa Axis" className="text-4xl md:text-[64px] font-bold text-foreground tracking-tight leading-tight uppercase flex flex-wrap justify-center mb-6" />
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">Tudo o que seu Departamento Pessoal precisa para rodar sem falhas, desde a admissão até a DCTF-Web de encerramento.</p>
        </div>
        <div className="flex flex-col border-t border-border">
          {serviceList.map((service, index) => (
            <ServiceCard key={service.id} {...service} isHovered={hoveredIndex === index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
