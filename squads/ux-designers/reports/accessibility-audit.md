# Relatório de Auditoria de Acessibilidade & Contraste
**Squads Envolvidos:** UI Designers (The Minimalist) & UX Designers (The Tester/Researcher)
**Data:** 18/02/2026

## Resumo Executivo
O site passou por uma modernização visual ("The Futurist"), mas isso introduziu desafios de acessibilidade, especificamente em contraste e estados de foco. A estrutura semântica (HTML) está sólida, mas melhorias são necessárias para leitores de tela e navegação por teclado.

## 🚨 Problemas Críticos (Prioridade Alta)

### 1. Contraste em "Glassmorphism"
-   **Problema:** Texto cinza claro (`text-muted-foreground`) sobre fundos translúcidos (`bg-white/5`) tem contraste insuficiente em monitores não calibrados ou ambientes muito claros.
-   **Local:** Cards de Serviços, Soluções e Authority.
-   **Correção:** Aumentar a opacidade do texto ou o "fundo" do vidro para garantir razão 4.5:1.

### 2. Navegação por Teclado (Focus States)
-   **Problema:** O anel de foco padrão do navegador é suprimido em alguns botões (`focus-visible:outline-none`) sem uma substituição clara e de alto contraste, especialmente no `FlowButton`.
-   **Correção:** Implementar um `ring` global de alto contraste (ex: `ring-2 ring-offset-2 ring-primary`) para todos os elementos interativos.

### 3. Botões apenas com Ícones (Aria-Labels)
-   **Problema:** Botões de redes sociais e setas de navegação (carrossel) não possuem descrições para leitores de tela.
-   **Correção:** Adicionar `aria-label="[Ação]"` em todos os botões que não possuem texto visível.

## ⚠️ Melhorias Recomendadas (Prioridade Média)

### 4. Hierarquia de Títulos (Heading Structure)
-   **Análise:** O site usa `h1` corretamente no Hero, mas algumas seções pulam de `h2` para `h4` visualmente.
-   **Correção:** Garantir ordem sequencial lógica (`h1` -> `h2` -> `h3`).

### 5. Redução de Movimento (Motion)
-   **Problema:** Animações de paralaxe e "orbs" podem causar enjoo em usuários sensíveis.
-   **Correção:** Respeitar a preferência `prefers-reduced-motion` no CSS/Tailwind para desativar orbes e movimentos bruscos.

## Plano de Ação
1.  **Refatorar Cores:** Ajustar tokens de cor para garantir contraste AA (4.5:1).
2.  **Global Focus Ring:** Adicionar estilo global de foco no `index.css`.
3.  **Audit Semântico:** Adicionar `aria-labels` faltantes.
4.  **Media Query:** Implementar `motion-reduce`.

*Aprovado por: The Minimalist & The Tester*
