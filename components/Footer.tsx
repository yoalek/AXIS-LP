
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-extrabold text-primary tracking-tight mb-6 inline-block">AXIS<span className="text-foreground"> GESTÃO HUMANA</span></span>
            <p className="text-muted-foreground max-w-sm mb-6">
              Especialistas em BPO de Folha e Compliance Trabalhista para empresas de alta complexidade. Operando com excelência em Belém, Pará e todo o Brasil.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-sm tracking-widest">Acesso Rápido</h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-medium">
              <li><a href="#solucao" className="hover:text-primary transition-colors">Método Axis</a></li>
              <li><a href="#comparativo" className="hover:text-primary transition-colors">Custo vs Benefício</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Nossos Serviços</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Agendar Diagnóstico</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase text-sm tracking-widest">Segurança</h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LGPD Compliance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certificações Digitais</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© 2024 AXIS Gestão Humana. Todos os direitos reservados. Foco total em Compliance e Risco Zero.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
