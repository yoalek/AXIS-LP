# Relatório de Auditoria UX & Design System
**Data:** 18/02/2026
**Squad:** UX Designers
**Status:** Aguardando Aprovação

---

## 1. Avaliação Heurística (O Testador)
*Baseado nas 10 Heurísticas de Nielsen*

### 🚨 Crítico (Severidade 4)
- **Arquitetura Técnica do Design System:** O uso do Tailwind via CDN (`<script src="https://cdn.tailwindcss.com">`) em produção, misturado com `importmap` e CSS variables no `<style>` do `index.html`, cria uma "Dívida Técnica" massiva.
    - **Impacto:** Performance lenta (download de script pesado), falta de autocomplete no VSCode, inconsistência visual difícil de manter.
    - **Correção Recomendada:** Migrar para `tailwindcss` via PostCSS/Vite.

### ⚠️ Importante (Severidade 3)
- **Carga Cognitiva (Hero Section):** O componente `UrgencyBadge` possui animações concorrentes (pulsação, escala, blur) e texto complexo ("2 vagas", "Disponíveis este mês").
    - **Heurística:** Estética e Design Minimalista.
    - **Problema:** Compete atenção com o título principal. O usuário não sabe para onde olhar.
    - **Sugestão:** Simplificar a animação. Reduzir para "Últimas 2 vagas".

---

## 2. Análise de Autoridade & Vieses (O Estrategista)
*Baseado em Psicologia Comportamental e Conversão*

### ✅ Pontos Fortes (Manter)
- **Aversão à Perda:** O título "Sua Empresa Está Sangrando Dinheiro" é poderoso. Aciona o medo de perder, que é 2x mais motivador que o ganho.
- **Especificidade:** O CTA "Auditoria de Risco eSocial" é melhor que "Saiba Mais".

### ❌ Pontos de Melhoria (Ajustar)
- **Prova Social Fraca:** "2 Vagas" no badge pode parecer escassez artificial se não for justificado.
    - **Viés:** Escassez só funciona se percebida como real.
    - **Sugestão:** Adicionar contexto (ex: "Devido à alta demanda de fechamento mensal...").
- **Autoridade Visual:** O uso de cores hardcoded (ex: `bg-emerald-500`) quebra a paleta "Confiança" (Azul Navy/Slate) definida no CSS.
    - **Impacto:** Inconsistência subconsciente reduz a confiança.

---

## 3. Plano de Reestruturação do Design System (O Designer)

### Objetivo
Criar uma "Única Fonte de Verdade" para cores, tipografia e espaçamento.

### Ações Propostas
1.  **Instalação Real do Tailwind:** Remover CDN e configurar `tailwind.config.js` e `postcss.config.js`.
2.  **Centralização de Tokens:** Mover todas as variáveis de cor para `src/index.css` (ou `app/globals.css`).
3.  **Padronização de Componentes:** Refatorar `Hero.tsx` (e outros) para usar classes utilitárias semânticas (ex: `bg-primary` em vez de hexadecimais ou cores soltas).
4.  **Tipografia Profissional:** Garantir que "Poppins" (títulos) e "Open Sans" (corpo) estejam carregadas corretamente via CSS import, não HTML link para performance.

---

## Permissão para Implementar
Solicito permissão para iniciar a **Fase 1: Infraestrutura do Design System**.
Isso envolve:
1.  Configurar Tailwind nativo no Vite.
2.  Limpar `index.html`.
3.  Criar `tailwind.config.js` robusto com a paleta de cores "Trust & Authority".
