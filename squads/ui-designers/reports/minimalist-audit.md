# Relatório da Auditoria Minimalista: "A Busca pela Invisibilidade"

**Agente:** O Minimalista (Arquiteto de Interface)
**Data:** 18 de Fevereiro de 2026
**Escopo:** Landing Page Completa

---

## 📐 O Veredito: "Visualmente Poluído por Inconsistências"
O design não é ruim, mas sofre de "micro-caos". Pequenas variações de espaçamento, bordas arredondadas e tons de cinza estão criando ruído cognitivo. O usuário sente que algo está "off" sem saber explicar o porquê.

---

## 🔍 Inconsistências Detectadas (O Ruído)

### 1. Crise de Identidade nas Bordas (Border-Radius)
Temos uma mistura aleatória de arredondamentos:
*   `rounded-[40px]` (2.5rem) no Hero.
*   `rounded-[2rem]` (32px) na SolutionSection.
*   `rounded-[3rem]` (48px) no SocialProof e Authority.
*   **Solução:** Padronizar TUDO para `rounded-[2.5rem]` (40px) para containers grandes e `rounded-xl` (12px) para elementos internos.

### 2. Quebra de Ritmo Vertical (Spacing)
A maioria das seções usa `py-32` (128px), que é excelente e generoso.
*   **Problema:** A `CTASection` usa `py-24` (96px).
*   **Impacto:** Quebra o ritmo de leitura. O "respiro" deve ser consistente.
*   **Solução:** Ajustar `CTASection` para `py-32`.

### 3. Paleta de Cores "Sujo"
*   **Problema:** `SocialProof` usa `bg-slate-50/50`. `ComparisonTable` usa `bg-secondary/30`. `Hero` usa `bg-background`.
*   **Solução:** Definir um padrão de alternância claro.
    *   Fundo 1: `bg-background` (Branco/Puro)
    *   Fundo 2: `bg-slate-50` (Sutil) ou `bg-secondary/10`
    *   Eliminar opacidades aleatórias (ex: `/30`, `/40`, `/50`) que causam rendering inconsistente dependendo do que está atrás.

### 4. Tipografia e "Magic Headings"
*   **Problema:** `PainSection` usa um componente `MagicHeading` complexo que quebra palavras.
*   **Crítica:** Animação de texto deve servir à leitura, não distrair dela. O "efeito karaokê" pode ser irritante para leitura rápida.
*   **Solução:** Simplificar para um `WordPullUp` padrão ou estático. Clareza > Efeito.

### 5. Ícones Inconsistentes
*   **Problema:** Mistura de `Lucide React` (Hero, Pain) com SVGs inline (ComparisonTable, Services).
*   **Solução:** Substituir todos os SVGs inline por componentes `Lucide` para garantir stroke-width (espessura) idêntica em toda a página.

---

## 🛠️ Plano de Refinamento (Next Steps)

Recomendo uma "Operação Limpeza" imediata:

1.  **Refatoração Global de Layout:**
    *   Aplicar variável `container-radius: 2.5rem` no Design System.
    *   Aplicar variável `section-spacing: py-32` no Design System.
2.  **Limpeza de Cores:**
    *   Normalizar os backgrounds alternados.
3.  **Padronização de Ícones:**
    *   Migrar tudo para Lucide React.

**Pergunta:** Devo executar essa limpeza automaticamente? Isso não mudará o conteúdo, apenas deixará tudo... *perfeito*.
