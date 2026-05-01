# 📄 AI-SPEC: [Nome do Projeto]

*Este documento é a fonte da verdade arquitetural. Deve ser preenchido e validado pelo Orquestrador ANTES da invocação da camada de Workers.*

---

## 1. Visão Geral (Overview)
- **Objetivo do Sistema:** [Descreva o problema de negócio que está sendo resolvido de forma concisa]
- **Target Audience:** [Usuários finais / Atores do sistema]
- **Status do Épico:** [Draft | Especificado | Em Desenvolvimento | QA | Finalizado]

## 2. Constraints Arquiteturais (Stack Rules)
*(Os subagentes/Workers receberão estas regras rigidamente em suas memórias isoladas)*
- **Core / Runtime:** [Ex: Node.js 20, Python 3.11, etc.]
- **Frontend / UI:** [Ex: React 18 (SSR), Tailwind, Shadcn/ui]
- **Backend / Database:** [Ex: PostgreSQL, Prisma ORM]
- **Design System Patterns:** [Descreva o padrão visual e de componentes para evitar alucinações estéticas]

## 3. Funcionalidades Matrizes (Core MVP)
1. **[Feature X]:** [Critérios de aceite estritos e fluxos de dados]
2. **[Feature Y]:** [Critérios de aceite estritos e fluxos de dados]

## 4. Pipeline de Tarefas Atômicas (Orquestração GSD)
*O Orquestrador fraciona a arquitetura acima neste checklist executável.*

- [ ] **Task 1: [Init / Configuração Base]**
  - **Instrução Limpa para o Worker:** [Escopo cirúrgico do que codificar]
  - **Superfície de Contato:** [Lista EXATA de arquivos a serem alterados]
  - **Check de Qualidade (QA):** [Condição para a task ser dada como concluída]

- [ ] **Task 2: [Implementação de Rota/Componente]**
  - **Instrução Limpa para o Worker:** [...]
  - **Superfície de Contato:** [...]
  - **Check de Qualidade (QA):** [...]

---
*(Nota Operacional: Apenas marque as tasks com `[x]` após a validação bem-sucedida do Subagente Checker/QA)*
