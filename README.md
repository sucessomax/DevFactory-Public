# Agentic Software Factory (GSD Architecture)

Um framework arquitetural de orquestração multi-agente focado em resolver o maior problema do desenvolvimento de software com LLMs em larga escala: o **Context Rot** (Degradação de Contexto).

**Origem e Evolução:** Esta prova de conceito (PoC) é o refinamento final de toda a pesquisa, validação e experimentação que compartilhei durante **duas lives ministradas na comunidade** sobre este tema. É a consolidação arquitetural dos aprendizados práticos que alcançamos.

Projeto estruturado como *showcase* para a Pós-Graduação em Engenharia de IA Aplicada.

## O Problema: "Vibecoding" e Colapso Cognitivo
Atualmente, a vasta maioria dos desenvolvedores interage com IAs geradoras de código em sessões de chat longas e contínuas. Conforme a complexidade do projeto cresce, a janela de contexto do modelo fica poluída com códigos antigos, refatorações descartadas e instruções obsoletas. 

O resultado é previsível: a IA começa a "alucinar", sobrescreve arquivos que estavam corretos, esquece regras de negócio previamente definidas e perde a coesão arquitetural do sistema.

## A Solução: Engenharia de Contexto e Execução Atômica
A **Agentic Software Factory** resolve essa limitação implementando o conceito de **Get Shit Done (GSD)** aplicado à orquestração de IAs. O modelo deixa de atuar como um "programador júnior" e assume a postura de um **Tech Lead (Orquestrador)**, gerenciando a memória do projeto através do File System e delegando tarefas minúsculas para **Workers (Subagentes Epêmeros)**.

### Pilares da Arquitetura

1. **Memória de Longo Prazo Desacoplada (Warm Storage):**
   A memória de contexto não vive no histórico temporário da sessão do chat. Ela é mantida em arquivos estruturados na pasta `Memory/`. O orquestrador faz o *parsing* do estado real do projeto e toma decisões baseadas nessa fonte da verdade persistente.

2. **Spec-Driven Development (SDD):**
   Nenhuma linha de código é alterada sem a criação de um documento `AI-SPEC.md` pré-validado pela engenharia. O Orquestrador quebra a funcionalidade em um checklist de tarefas atômicas e testáveis.

3. **Subagentes com Contexto Isolado:**
   Para cada tarefa do checklist, o Orquestrador invoca um Worker com a **memória 100% limpa (Fresh Context)**. O Worker recebe estritamente a diretriz do projeto, o arquivo alvo e o objetivo imediato. Após executar a tarefa, o Worker é destruído. 
   **Vantagens:** Drástica redução no custo de tokens, paralelização de tarefas e risco nulo de alucinação baseada em lixo cognitivo anterior.

## Estrutura do Repositório
- `.cursorrules` / `.antigravityrules`: As "leis de comportamento" que forçam o LLM a atuar como Orquestrador.
- `AGENTS.md`: O contrato de transição de memória entre o Agente Principal e as instâncias de Workers.
- `Memory/templates/`: Modelos de Especificação de Software (SDD) ingeridos pela IA.
- `projects/`: Diretório de isolamento para os códigos-fonte (cada sistema corporativo possui seu próprio `.git` embarcado, mantendo o código protegido da fábrica em si).

## Aplicação
Este repositório atua como um *blueprint*. Ao cloná-lo e inseri-lo em ambientes de desenvolvimento nativos para agentes autônomos (IDE Agentic workflows), o modelo automaticamente absorve as metaprompts e passa a operar em um fluxo de escala industrial seguro e auditável.
