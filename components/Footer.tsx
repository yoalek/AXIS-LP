
import React from 'react';
import { FlowButton } from './ui/flow-button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-800 transition-colors relative overflow-hidden">
      {/* Decorative Grid Background - Subtle 2026 touch */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-extrabold text-sky-500 tracking-tight mb-6 inline-block">AXIS<span className="text-white"> GESTÃO HUMANA</span></span>
            <p className="text-slate-400 max-w-sm mb-6 text-lg leading-relaxed">
              Especialistas em BPO de Folha e Compliance Trabalhista para empresas de alta complexidade. Operando com excelência em Belém, Pará e todo o Brasil.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Acesso Rápido</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#solucao" aria-label="Ir para seção Método Axis" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all"></span>Método Axis</a></li>
              <li><a href="#comparativo" aria-label="Ir para seção Custo vs Benefício" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all"></span>Custo vs Benefício</a></li>
              <li><a href="#servicos" aria-label="Ir para seção Nossos Serviços" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all"></span>Nossos Serviços</a></li>
              <li className="pt-4"><FlowButton text="Agendar Diagnóstico" onClick={() => window.open('https://wa.me/5591992026660', '_blank')} size="sm" className="w-full sm:w-auto shadow-none bg-slate-800 hover:bg-primary border border-slate-700 text-white" /></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Segurança</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LGPD Compliance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certificações Digitais</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">© 2026 AXIS Gestão Humana. Todos os direitos reservados. Foco total em Compliance e Risco Zero.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
