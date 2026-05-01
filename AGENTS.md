# Topologia de Agentes e Comportamento

Para contornar o limite de decaimento cognitivo de LLMs padrão de mercado, a arquitetura da fábrica divide as responsabilidades em instâncias com gerência estrita de memória.

## 1. Orquestrador (Agente Master)
- **Responsabilidade:** Parsing de requisitos, gestão do File System de Memória, divisão de épicos em tarefas atômicas e invocação da malha de subagentes.
- **Contexto:** Mantém o histórico longo da sessão com o operador humano para continuidade da linha de pensamento arquitetural.
- **Restrição:** Escrita massiva de código diretamente pelo Orquestrador é considerada antipattern.

## 2. Worker / Executor (Subagente Efêmero)
- **Responsabilidade:** Implementar a lógica de negócios em arquivos delimitados.
- **Contexto:** **ESTRITAMENTE ISOLADO.** Não compartilha a thread de memória do Orquestrador. É instanciado exclusivamente com os artefatos necessários para resolver o problema pontual.
- **Benefício:** Neutraliza o Context Rot, assegura conformidade total com as constraints tecnológicas e minimiza o token-consumption por iteração.

## 3. Checker / QA (Subagente Auditor)
- **Responsabilidade:** Execução de testes automatizados (E2E/Unitários), análise estática (Lint/Type checking) e auditoria de cobertura das modificações realizadas pelo Worker.
- **Contexto:** Efêmero e focado puramente na validação estrita do Output vs Spec original.
