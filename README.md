# Agentic Software Factory (GSD Architecture)

Um framework arquitetural de orquestração multi-agente focado em resolver o maior problema do desenvolvimento de software com LLMs em larga escala: o **Context Rot** (Degradação de Contexto).

---

## Sobre o Projeto

Este projeto foi desenvolvido como um *showcase* para a **Pós-Graduação em Engenharia de IA Aplicada**.

**Origem e Evolução:** Esta prova de conceito (PoC) é o refinamento final de pesquisas, validações e experimentações compartilhadas em workshops da comunidade. O repositório materializa a arquitetura dos aprendizados práticos alcançados no desenvolvimento guiado por agentes.

Diferente de repositórios focados na entrega de uma aplicação final (ex: um *To-Do List*), o objetivo aqui é a **engenharia de software e workflow**. O projeto demonstra a aplicação de engenharia de prompt avançada, orquestração de memória de IA e arquitetura de sistemas escaláveis, aplicando padrões da engenharia tradicional ao paradigma de *AI-Assisted Coding*.

## O Problema: Colapso Cognitivo e "Vibecoding"

Atualmente, desenvolvedores interagem com IAs geradoras de código através de sessões de chat contínuas. Conforme a complexidade do sistema cresce, a janela de contexto do modelo fica poluída com códigos antigos, refatorações descartadas e instruções obsoletas.

O resultado é previsível: o LLM começa a sofrer alucinações contextuais, sobrescreve arquivos funcionais, perde o escopo de regras de negócio e quebra a coesão arquitetural. Este fenômeno é conhecido como **Context Rot**.

## A Solução: Engenharia de Contexto e Execução Atômica

A **Agentic Software Factory** contorna essa limitação técnica adotando a metodologia **Get Shit Done (GSD)** aplicada à orquestração de IAs. O modelo central deixa de ser um "programador" e assume a postura de um **Orquestrador (Tech Lead)**, gerenciando a persistência do projeto no sistema de arquivos e delegando tarefas assíncronas para **Workers (Subagentes Efêmeros)**.

### Pilares da Arquitetura

1. **Memória de Longo Prazo Desacoplada (Warm Storage):**
   A memória de contexto não é mantida na sessão de chat. Ela reside em arquivos `.md` estruturados no diretório `Memory/`. O Orquestrador consome o estado atual do repositório a partir desta única fonte de verdade.

2. **Spec-Driven Development (SDD):**
   Nenhuma modificação de código ocorre sem uma especificação estruturada (`AI-SPEC.md`). O Orquestrador divide as funcionalidades complexas em checklists de tarefas atômicas e rastreáveis.

3. **Subagentes de Contexto Isolado:**
   Para cada tarefa, o Orquestrador invoca um Worker com a **memória totalmente limpa (Fresh Context)**. O Worker recebe estritamente a instrução da tarefa e o acesso ao arquivo-alvo. Ao concluir, o processo é encerrado.
   - **Benefícios:** Drástica redução no consumo de tokens, viabilidade de execução paralela e mitigação de alucinações derivadas de contexto sujo.

## Estrutura do Repositório

O repositório isola as diretrizes do orquestrador dos códigos em produção:

- `.cursorrules` / `.antigravityrules`: Instruções sistêmicas que forçam a IDE/LLM a atuar estritamente como Orquestrador.
- `AGENTS.md`: Contrato de responsabilidade e limites de atuação entre Orquestrador, Workers e instâncias de QA.
- `Memory/templates/`: Arquivos-base (SDD) consumidos pela IA para padronização técnica de novos épicos.
- `projects/`: Sandbox para os códigos-fonte gerados. Cada aplicação possui seu próprio ambiente `.git`, separando o código gerado do framework da fábrica.

## Como Executar

Este repositório funciona como um *blueprint* (molde) para ambientes de desenvolvimento Agentic (ex: Cursor, Google IDX com agentes, Antigravity).

### Setup

1. **Clone o repositório localmente:**
   ```bash
   git clone https://github.com/SEU_USUARIO/_DevFactory-Public.git
   cd _DevFactory-Public
   ```

2. **Configuração do Ambiente Agentic:**
   Abra a raiz do projeto na sua IDE com suporte nativo a IA (ex: Cursor). A IDE lerá automaticamente o arquivo `.cursorrules`. Este processo injeta os *metaprompts* arquiteturais e configura o assistente como Orquestrador.

3. **Inicialização de Projetos:**
   No prompt da IA, forneça a instrução de base. Exemplo de *prompt*:
   > *"Orquestrador, inicie o projeto 'SistemaRH' dentro da pasta projects, baseando-se no framework de Spec-Driven Development (SDD) detalhado nos templates."*
   O Orquestrador gerará a documentação fundacional dentro de `Memory/` e elaborará o checklist de tarefas.

4. **Delegação e Execução Isolada:**
   Após a aprovação das especificações (`Specs`), o Orquestrador disparará Subagentes Efêmeros (Workers) para realizar as edições no código-fonte, aplicando alterações atômicas e preservando o contexto principal da sua sessão ativa.
