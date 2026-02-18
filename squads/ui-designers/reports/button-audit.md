# Relatório de Auditoria: Anatomia & Copy dos Botões

**Data:** 18/02/2026
**Squad:** UI Design Dream Team & Copywriters
**Agentes:** O Minimalista (UI) & The Writer (Copy)

## 1. Análise de Anatomia (O Minimalista)

### 🚨 Inconsistências Críticas
1.  **Geometria Conflitante:**
    -   `FlowButton.tsx`: Usa `rounded-full` (Pill Shape).
    -   `Button.tsx`: Usa `rounded-lg` (8px) ou `rounded-2xl` (16px) dependendo do uso.
    -   *Veredito:* O Design System definido anteriormente para cards (`rounded-[2.5rem]`) favorece formas orgânicas e arredondadas. Botões quadrados (`rounded-lg`) quebram a harmonia visual.

2.  **Cores Hardcoded:**
    -   O arquivo `button.tsx` contém cores hexadecimais *hardcoded* (`#0369A1`), ignorando as variáveis globais do Tailwind (`bg-primary`).
    -   *Impacto:* Se mudarmos o tema, os botões não atualizarão. Isso é um débito técnico de design.

3.  **Hierarquia de Tamanho:**
    -   `FlowButton` (Primary) tem `px-8 py-3`.
    -   `Button` (Secondary/Outline) tem `px-4 py-2` (padrão).
    -   *Recomendação:* Botões primários e secundários na mesma seção (ex: Hero) devem ter a mesma altura ótica (`h-12` ou `h-14`) para equilíbrio.

### 📐 Recomendações de UI
-   **Padronização:** Todos os botões devem adotar **Pill Shape (`rounded-full`)** para consistência com o resto da interface "soft" e moderna.
-   **Refatoração:** Substituir hexadecimais (`#0369A1`) por tokens semânticos (`bg-primary`).
-   **Tamanho:** Definir altura mínima de `48px` ou `56px` para todos os botões de toque (Mobile Friendly).

---

## 2. Análise de Copy (The Writer)

### 🧐 Auditoria de Texto

| Botão / Local | Copy Atual | Análise (Writer) | Sugestão de Melhoria |
| :--- | :--- | :--- | :--- |
| **Hero (Primary)** | "Auditoria de Risco eSocial (Gratuita)" | Funcional, mas um pouco "técnico demais". A palavra "Gratuita" entre parênteses enfraquece a oferta. | **"Agendar Diagnóstico Gratuito"** (Mais ação, menos passivo) |
| **Hero (Secondary)** | "Comparar Modelos" | Bom. É uma ação de baixo risco ("Soft CTA"). | **"Ver Comparativo de Modelos"** (Mais claro) ou manter. |
| **CTA Section** | "QUERO MINHA AUDITORIA GRATUITA" | Genérico de "Internet Marketing". Soa desesperado. B2B precisa de autoridade. | **"Blindar Minha Empresa Agora"** (Usa o conceito de "Blindagem") ou **"Solicitar Auditoria de Risco"** |
| **Navbar** | "Login" / "Fale Conosco" | Padrão. | Manter. Simples é melhor aqui. |

### ✍️ Insights de Conversão
1.  **Use "Diagnóstico" vs "Auditoria":** Auditoria soa como fiscalização (medo). Diagnóstico soa como médico/consultor (solução).
2.  **Conceito de Blindagem:** Já estamos usando "Blindagem Trabalhista" no H1. O CTA final deve fechar esse loop: "Quero Blindar Minha Empresa".

---

## 3. Plano de Ação

Se aprovado, executaremos as seguintes correções:

1.  **[UI] Refatorar `button.tsx`:** Remover hardcoded colors, forçar `rounded-full` como padrão.
2.  **[UI] Ajustar `Hero.tsx`:** Garantir que o botão secundário tenha a mesma altura do primário.
3.  **[Copy] Atualizar Textos:**
    -   Hero: "Auditoria..." -> "Agendar Diagnóstico"
    -   CTA Final: "QUERO..." -> "Blindar Minha Empresa"

**Aprovação:** [ ] Sim  [ ] Não
