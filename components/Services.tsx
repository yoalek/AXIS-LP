
import React, { useState, useRef } from 'react';
import { motion, useInView, Variants, AnimatePresence } from 'framer-motion';

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

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

interface ServiceCardProps { id: string; title: string; desc: string; image: string; isHovered: boolean; onMouseEnter: () => void; onMouseLeave: () => void; }
const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, desc, image, isHovered, onMouseEnter, onMouseLeave }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  return (
    <motion.div ref={cardRef} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, ease: "easeOut" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`group relative flex flex-col py-8 md:py-12 px-8 transition-all duration-500 cursor-pointer border-b border-border overflow-hidden ${isHovered ? 'bg-foreground rounded-[2.5rem] border-transparent shadow-2xl scale-[1.01]' : 'bg-transparent'}`}>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
        <div className="flex items-center gap-6 md:w-1/2">
          <span className={`text-sm md:text-base font-bold transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`}>{id}</span>
          <WordPullUp words={title} className={`text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-500 ${isHovered ? 'text-background' : 'text-foreground'}`} />
        </div>
        <div className="flex-1 hidden md:block"></div>
        <div className="md:w-32 flex justify-end">
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-primary border-primary rotate-45 scale-110' : 'bg-transparent border-border group-hover:border-primary'}`}>
            <ArrowIcon className={`w-5 h-5 md:w-7 md:h-7 transition-colors duration-500 ${isHovered ? 'text-primary-foreground' : 'text-foreground'}`} />
          </div>
        </div>
      </div>
      <motion.div initial={false} animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0, marginTop: isHovered ? 24 : 0 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} className="overflow-hidden md:w-2/3 md:ml-16">
        <p className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 font-medium ${isHovered ? 'text-background' : 'text-transparent'}`}>{desc}</p>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div initial={{ opacity: 0, scale: 0.8, x: 20, rotate: 0 }} animate={{ opacity: 1, scale: 1, x: 0, rotate: -6 }} exit={{ opacity: 0, scale: 0.8, x: 20 }} className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="relative w-72 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/5"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const serviceList = [
    { id: "01", title: "BPO DE FOLHA COMPLETO", desc: "Gestão pontual de salários, encargos, DCTF-Web e FGTS Digital. Garantimos zero erros e zero multas para sua operação focar no que importa.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600" },
    { id: "02", title: "CICLO DO COLABORADOR", desc: "Admissões em massa, gestão de férias, PIS e processos de rescisão complexos com total segurança jurídica e compliance.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600" },
    { id: "03", title: "BLINDAGEM ESOCIAL", desc: "Monitoramento ativo e auditoria preventiva para evitar passivos ocultos. Sua empresa sempre em dia com a Receita e o Ministério do Trabalho.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" },
    { id: "04", title: "RECRUTAMENTO & MÃO DE OBRA", desc: "Fornecemos talentos qualificados e mão de obra terceirizada para Facilities, Construção e Varejo com foco em produtividade.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
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
