
# Nota de Priorização dos Testes

## 1. Objetivo

Este documento tem como objetivo registrar e justificar as decisões de priorização dos testes realizados durante o desafio técnico da SEA Tecnologia.

A priorização considera a importância das funcionalidades, os riscos associados, os critérios de aceite e o tempo disponível para execução.

---

## 2. Critérios de priorização

Os cenários de teste foram avaliados considerando os seguintes critérios:

- **Impacto no negócio:** consequências de uma possível falha para o funcionamento da aplicação.
- **Criticidade da funcionalidade:** importância da funcionalidade para os fluxos principais do sistema.
- **Probabilidade de falha:** possibilidade de ocorrência de defeitos.
- **Critérios de aceite:** relação do cenário com os requisitos estabelecidos.
- **Tempo disponível:** viabilidade de execução dentro do prazo do desafio.
- **Dependências e limitações:** condições técnicas que podem impedir ou dificultar os testes.

### 2.1. Classificação de prioridade

| Prioridade | Descrição |
|------------|-----------|
| Alta | Cenários relacionados a funcionalidades essenciais, integridade dos dados ou riscos significativos. |
| Média | Cenários importantes, mas com impacto ou urgência menores. |
| Baixa | Cenários complementares, com menor risco ou impacto. |

---

## 3. Cenários priorizados

Registrar os cenários selecionados para execução e justificar sua importância.

| ID do cenário | Funcionalidade | Prioridade | Justificativa |
|---------------|----------------|------------|---------------|
| CT-XX | Cadastro de funcionários | Alta | [Justificativa] |
| CT-XX | Listagem de funcionários | Alta | [Justificativa] |
| CT-API-XX | API REST | Alta | [Justificativa] |
| CT-XX | [Funcionalidade] | Média | [Justificativa] |

---

## 4. Testes executados

Registrar os cenários efetivamente executados, independentemente do resultado.

| ID do cenário | Tipo de teste | Status | Execução associada |
|---------------|---------------|--------|--------------------|
| CT-XX | Interface | Aprovado/Reprovado | EV-XX |
| CT-XX | Interface | Aprovado/Reprovado | EV-XX |
| CT-API-XX | API | Aprovado/Reprovado | EV-XX |
| CT-XX | Automação | Aprovado/Reprovado | [Referência] |

### 4.1. Considerações sobre os resultados

[Descrever os principais resultados obtidos, os defeitos identificados e o impacto das falhas na execução dos testes.]

---

## 5. Testes não executados ou parcialmente executados

Registrar os cenários que não puderam ser executados integralmente, indicando os motivos.

| ID do cenário | Funcionalidade | Situação | Justificativa |
|---------------|----------------|----------|---------------|
| CT-XX | [Funcionalidade] | Não executado | [Motivo] |
| CT-XX | [Funcionalidade] | Bloqueado | [Motivo] |
| CT-XX | [Funcionalidade] | Parcialmente executado | [Motivo] |

### 5.1. Limitações identificadas

[Descrever as limitações da aplicação, problemas técnicos, dependências ou restrições de prazo que impactaram a execução.]

---

## 6. Priorização da automação

Registrar os critérios utilizados para selecionar os cenários automatizados.

### 6.1. Critérios considerados

- Relevância para os fluxos principais da aplicação.
- Possibilidade de execução repetida.
- Estabilidade dos elementos e funcionalidades.
- Facilidade de preparação dos dados de teste.
- Viabilidade técnica dentro do prazo disponível.
- Benefício da automação para futuras execuções de regressão.

### 6.2. Cenários selecionados

| Cenário | Tipo | Prioridade | Justificativa |
|---------|------|------------|---------------|
| CT-IT-01 | Interface | Alta | [Justificativa] |
| CT-IT-02 | Interface | Alta | [Justificativa] |
| CT-IT-03 | Interface | Alta | [Justificativa] |
| CT-API-XX | API | Alta | [Justificativa] |

### 6.3. Cenários não selecionados para automação

[Descrever quais cenários permaneceram manuais e justificar a decisão.]

---

## 7. Considerações finais

[Apresentar uma síntese das decisões de priorização, explicando como o tempo disponível, os riscos identificados e as limitações da aplicação influenciaram a estratégia adotada.]

[Destacar possíveis cenários que seriam priorizados em uma próxima etapa de testes.]
