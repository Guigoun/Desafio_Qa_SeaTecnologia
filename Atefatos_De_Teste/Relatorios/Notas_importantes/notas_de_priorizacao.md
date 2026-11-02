
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
| CT-IT-01 | Cadastro de funcionários | Alta | Acompanha o fluxo principal da funcionalidade de cadastro, cujo falha comprometeria funcionalidades principais |
| CT-IT-02 | Cadastro de funcionários | Alta | Valida campos obrigatórios e mensagens para preenchimento, envitando cadastro de funcionários com campos vazios |
| CT-IT-03 | Cadastro de funcionários | Alta | Valida regra de unicidade do CPF, evitando registros duplicados e preservando integridade dos dados |
| CT-IT-07 | Cadastro de funcionários | Alta | Valida dados dos campos obrigatórios e mensagens de erro ao usuário |
| CT-IT-08 | Listagem de funcionários | Alta | Verifica se o funcionário cadastrado é apresentado corretamente na listagem, garantindo consulta dos registros | 
| CT-IT-09 | Listagem de funcionários | Média | Valida o funcionamento dos filtros de funcionários ativos e inativos, facilitando busca | 
| CT-API-04 | API REST | Alta | Verifica se a API rejeita cadastros com campos vazios ou nulos |
| CT-API-05 | API REST | Alta | Valida regra de unicidade do CPF na chamada da API |
| CT-API-06 | API REST | Alta | Verifica rejeição de dados inválios ou incompatíveis  |
| CT-API-08 | API REST | Alta | Garantir que as atualizações parciais preservem os demais dados dos funcionários |

---

## 4. Testes executados

Registrar os cenários efetivamente executados.

| ID do cenário | Tipo de teste | Status | Execução associada |
|---------------|---------------|--------|--------------------|
| CT-IT-01 | Interface | Aprovado | EV-IT-01 |
| CT-IT-02 | Interface | Aprovado | EV-IT-02 |
| CT-IT-03 | Interface | Reprovado | EV-IT-03 |
| CT-IT-04 | Interface | Reprovado | EV-IT-04 |
| CT-IT-05 | Interface | Reprovado | EV-IT-05|
| CT-IT-06 | Interface | Reprovado | EV-IT-06 |
| CT-IT-07 | Interface | Aprovado | EV-IT-07 |
| CT-IT-08 | Interface | Aprovado | EV-IT-09 |
| CT-IT-09 | Interface | Aprovado | EV-IT-10 |
| CT-API-01 | API | Aprovado | EV-API-01 |
| CT-API-02 | API | Aprovado | EV-API-02 |
| CT-API-03 | API | Aprovado | EV-API-03 |
| CT-API-04 | API | Reprovado | EV-API-04 |
| CT-API-05 | API | Reprovado | EV-API-05 |
| CT-API-06 | API | Reprovado | EV-API-06 |
| CT-API-07 | API | Aprovado | EV-API-07 |
| CT-API-08 | API | Reprovado | EV-API-08 |
| CT-API-09 | API | Aprovado | EV-API-09 |
| CT-IT-01 | Automação | Aprovado | EV-AUT-01 |
| CT-IT-02 | Automação | Aprovado | EV-AUT-02  |
| CT-IT-01 | Automação | Reprovado | EV-AUT-03  |

### 4.1. Considerações sobre os resultados

Foram elaborados 14 cenários de teste para a interface e 9 para a API REST, totalizando 23 cenários planejados, além da realização de testes exploratórios e automatizados.

Os testes tiveram como objetivo verificar o comportamento das principais funcionalidades do sistema, considerando as regras de negócio, os fluxos de cadastro e listagem de funcionários e a integridade dos dados.

Os resultados apresentaram uma distribuição próxima entre testes aprovados e reprovados. Foram identificadas falhas relevantes, principalmente relacionadas à validação de campos, à duplicidade de CPF, à atualização de registros pela API e a determinados comportamentos da interface.

Essas falhas podem comprometer a integridade dos dados, a confiabilidade das operações e a experiência do usuário. Os defeitos identificados foram documentados nos relatórios de bugs, acompanhados das respectivas execuções e evidências.
---

## 5. Testes não executados ou parcialmente executados

<!-- Registrar os cenários que não puderam ser executados integralmente, indicando os motivos. -->

| ID do cenário | Funcionalidade | Situação | Justificativa |
|---------------|----------------|----------|---------------|
| CT-IT-10 | Listagem de funcionários | Não executado | Aplicação não possui barra de rolagem e campo de pesquisa |

| CT-IT-13 | [Funcionalidade] | Não executado | [Motivo] |
| CT-XX | [Funcionalidade] | Parcialmente executado | [Motivo] |

### 5.1. Limitações identificadas

[Descrever as limitações da aplicação, problemas técnicos, dependências ou restrições de prazo que impactaram a execução.]

---

## 6. Priorização da automação

### 6.1. Critérios considerados

- Relevância para os fluxos principais da aplicação.
- Possibilidade de execução repetida.
- Estabilidade dos elementos e funcionalidades.
- Facilidade de preparação dos dados de teste.
- Viabilidade técnica dentro do prazo disponível.
- Benefício da automação para futuras execuções de regressão.

### 6.2. Cenários selecionados para Automação

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
