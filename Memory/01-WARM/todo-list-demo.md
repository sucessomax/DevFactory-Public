# 📄 AI-SPEC: Todo List Demo (Live Showcase)

*Projeto gerado 100% via subagentes (Workers) isolados para demonstrar a eficácia do Framework GSD apresentado nas lives da comunidade.*

---

## 1. Visão Geral (Overview)
- **Objetivo do Sistema:** Um gerenciador de tarefas simples que demonstra operações CRUD. Serve como benchmark para mostrar como a arquitetura previne "Context Rot".
- **Target Audience:** Avaliadores técnicos e comunidade de IA Aplicada.
- **Status do Épico:** [Finalizado]

## 2. Constraints Arquiteturais (Stack Rules)
- **Core / Runtime:** Vanilla JS + HTML5.
- **Frontend / UI:** TailwindCSS (CDN) para prototipagem rápida. Estilo "Modern Glassmorphism" para dar aspecto premium.
- **Backend / Database:** LocalStorage (Persistência client-side).

## 3. Pipeline de Tarefas Atômicas (Orquestração GSD)
*Abaixo o histórico de como o Orquestrador delegou as tarefas cirúrgicas aos Workers:*

- [x] **Task 1: Setup do Layout e UI Base**
  - **Instrução Limpa para o Worker:** Criar `index.html` importando Tailwind e desenhando o container principal com estética Glassmorphism.
  - **Superfície de Contato:** `projects/todo-list-demo/index.html`
  - **Check de Qualidade (QA):** Layout responsivo, acessível e visualmente limpo.

- [x] **Task 2: Lógica de Persistência e Interação**
  - **Instrução Limpa para o Worker:** Criar `app.js` para gerenciar a adição, conclusão e exclusão de tarefas no LocalStorage.
  - **Superfície de Contato:** `projects/todo-list-demo/app.js`
  - **Check de Qualidade (QA):** Tarefas devem sobreviver ao reload da página. Zero memory leaks.
