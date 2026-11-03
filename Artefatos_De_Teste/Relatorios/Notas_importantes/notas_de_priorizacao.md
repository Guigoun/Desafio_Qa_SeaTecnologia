# Nota de Priorização dos Testes

## 1. Objetivo

Este documento tem como objetivo registrar e justificar as decisões de priorização dos testes realizados durante o desafio técnico da SEA Tecnologia, para a vaga de Analista de Testes Júnior.

A priorização foi estabelecida considerando a relevância das funcionalidades, os riscos associados a possíveis falhas, os critérios de aceite, as limitações identificadas na aplicação e o tempo disponível para a execução dos testes.

Além dos testes manuais, o documento apresenta os critérios utilizados na seleção dos cenários automatizados com Playwright e TypeScript.

---

## 2. Critérios de priorização

Os cenários foram avaliados considerando os seguintes critérios:

- **Impacto no negócio:** consequências de uma possível falha para o funcionamento da aplicação e para a integridade dos registros.
- **Criticidade da funcionalidade:** importância da funcionalidade para os fluxos principais do sistema.
- **Probabilidade de falha:** possibilidade de ocorrência de defeitos, considerando a complexidade da funcionalidade e os comportamentos observados.
- **Critérios de aceite:** relação dos cenários com os requisitos e comportamentos esperados.
- **Tempo disponível:** viabilidade de preparação, execução e documentação dos testes dentro do prazo do desafio.
- **Dependências e limitações:** condições técnicas que poderiam impedir ou dificultar a execução completa dos cenários.

### 2.1. Classificação de prioridade

| Prioridade | Descrição |
|---|---|
| Alta | Cenários relacionados a funcionalidades essenciais, integridade dos dados ou riscos significativos. |
| Média | Cenários importantes para o funcionamento e a usabilidade, mas com impacto ou urgência menores. |
| Baixa | Cenários complementares, com menor risco ou impacto para os fluxos principais. |

A classificação foi utilizada para orientar a ordem de execução, sem significar que cenários de menor prioridade deveriam necessariamente deixar de ser testados.

---

## 3. Cenários priorizados

Os cenários abaixo receberam atenção prioritária por estarem relacionados aos fluxos essenciais de cadastro, consulta e atualização de funcionários, além de regras importantes de validação e integridade dos dados.

| ID do cenário | Funcionalidade | Prioridade | Justificativa |
|---|---|---|---|
| CT-IT-01 | Cadastro de funcionários | Alta | Valida o fluxo principal de cadastro, cuja falha comprometeria uma funcionalidade essencial da aplicação. |
| CT-IT-02 | Cadastro de funcionários | Alta | Verifica a obrigatoriedade dos campos e o comportamento das validações, evitando registros incompletos. |
| CT-IT-03 | Cadastro de funcionários | Alta | Verifica a regra de unicidade do CPF, reduzindo o risco de registros duplicados e inconsistências nos dados. |
| CT-IT-07 | Cadastro de funcionários | Alta | Avalia a validação de dados inválidos e a apresentação de mensagens adequadas ao usuário. |
| CT-IT-08 | Listagem de funcionários | Alta | Verifica se os funcionários cadastrados são apresentados corretamente na listagem, permitindo sua consulta. |
| CT-IT-09 | Listagem de funcionários | Média | Avalia a filtragem de funcionários ativos e inativos, contribuindo para a localização e organização dos registros. |
| CT-API-04 | API REST | Alta | Verifica se a API rejeita cadastros com campos obrigatórios vazios ou nulos. |
| CT-API-05 | API REST | Alta | Avalia a aplicação da regra de unicidade do CPF nas requisições de cadastro. |
| CT-API-06 | API REST | Alta | Verifica se dados inválidos ou incompatíveis com os tipos esperados são rejeitados adequadamente. |
| CT-API-08 | API REST | Alta | Avalia se as atualizações parciais modificam apenas os dados solicitados, preservando as demais informações do funcionário. |

A seleção priorizou funcionalidades com maior potencial de comprometer o cadastro, a consulta e a integridade dos dados, sem desconsiderar os demais cenários planejados.

---

## 4. Testes executados

A tabela apresenta os resultados registrados nas execuções manuais e nas evidências de automação inicialmente documentadas.

| ID do cenário | Tipo de teste | Status | Execução associada |
|---|---|---|---|
| CT-IT-01 | Interface | Aprovado | EV-IT-01 |
| CT-IT-02 | Interface | Aprovado | EV-IT-02 |
| CT-IT-03 | Interface | Reprovado | EV-IT-03 |
| CT-IT-04 | Interface | Reprovado | EV-IT-04 |
| CT-IT-05 | Interface | Reprovado | EV-IT-05 |
| CT-IT-07 | Interface | Aprovado | EV-IT-06 |
| CT-IT-08 | Interface | Reprovado | EV-IT-07 |
| CT-IT-09 | Interface | Aprovado | EV-IT-08 |
| CT-IT-10 | Interface | Aprovado | EV-IT-09 |
| Exploratório | Interface | Reprovado | EV-IT-10 |
| Exploratório | Interface | Reprovado | EV-IT-11 |
| CT-API-01 | API | Aprovado | EV-API-01 |
| CT-API-02 | API | Aprovado | EV-API-02 |
| CT-API-02 | API | Aprovado | EV-API-03 |
| CT-API-03 | API | Aprovado | EV-API-04 |
| CT-API-04 | API | Reprovado | EV-API-05 |
| CT-API-05 | API | Reprovado | EV-API-06 |
| CT-API-06 | API | Reprovado | EV-API-07 |
| CT-API-07 | API | Aprovado | EV-API-08 |
| CT-API-08 | API | Reprovado | EV-API-09 |
| CT-API-09 | API | Aprovado | EV-API-010 |
| Exploratório | API | Aprovado | EV-API-011 |
| CT-IT-01 | Automação | Aprovado | EV-AUT-01 |
| CT-IT-02 | Automação | Aprovado | EV-AUT-02 |
| CT-IT-01 | Automação | Reprovado | EV-AUT-03 |

**Observação sobre a rastreabilidade:** a repetição do CT-API-02 e a associação do EV-AUT-03 ao CT-IT-01 devem ser conferidas nos relatórios de execução. Os identificadores foram preservados conforme os registros fornecidos.

### 4.1. Considerações sobre os resultados

Foram elaborados 11 cenários de teste para a interface e 9 para a API REST, totalizando 20 cenários planejados, além da realização de testes exploratórios e automatizados.

As execuções buscaram avaliar os principais fluxos da aplicação, considerando o cadastro, a listagem, as regras de validação, a integridade dos dados e o comportamento das operações disponibilizadas pela API.

Os resultados demonstraram a ocorrência de aprovações e reprovações em diferentes funcionalidades. Entre os comportamentos identificados, destacaram-se problemas relacionados à validação de campos, à duplicidade de CPF, à atualização de registros e ao funcionamento de determinados elementos da interface.

Esses comportamentos podem comprometer a confiabilidade das operações, a integridade dos dados e a experiência do usuário.

As ocorrências foram registradas nos relatórios de bugs, com suas respectivas descrições, classificações e evidências, permitindo a rastreabilidade entre os testes executados e os problemas identificados.

### 4.2. Resultados da automação com Playwright

Como atividade complementar, foram implementados dez testes automatizados utilizando Playwright e TypeScript, sendo cinco voltados à interface e cinco à API REST.

Nos testes de API, os cenários de listagem, consulta por ID, cadastro válido e atualização parcial passaram nas execuções realizadas.

O cenário de cadastro com CPF inválido apresentou falha na asserção, pois a API retornou `201 Created` para uma requisição que deveria ser rejeitada conforme a regra de validação considerada.

Esse resultado demonstrou a importância dos testes negativos e das asserções para identificar divergências entre o comportamento esperado e o observado.

A implementação dos testes automatizados não substitui os resultados das execuções manuais, sendo considerada uma atividade complementar de validação e aprendizado.

---

## 5. Testes não executados ou parcialmente executados

| ID do cenário | Funcionalidade | Situação | Justificativa |
|---|---|---|---|
| CT-IT-06 | Cadastro de funcionários | Parcialmente executado | O botão "Adicionar EPI" não apresentou o comportamento esperado, impedindo a conclusão do fluxo. |
| CT-IT-11 | Listagem de funcionários | Não executado | Os elementos previstos para o cenário, relacionados à rolagem e à pesquisa, não estavam disponíveis nas condições observadas durante a execução. |

### 5.1. Limitações identificadas

Durante a execução dos testes, foram identificadas limitações técnicas e comportamentos inesperados que dificultaram a validação completa de determinadas funcionalidades.

Entre os principais pontos observados, destacaram-se:

- Problemas de interação com botões e ações disponíveis na interface.
- Ausência ou insuficiência de mensagens de validação e retorno ao usuário.
- Aceitação de dados inválidos em determinados fluxos.
- Problemas relacionados à persistência e à apresentação dos dados.
- Dificuldades na vinculação do ASO ao cadastro do funcionário.
- Tratamento inadequado de determinadas requisições inválidas pela API.
- Limitações de navegação e disponibilidade de elementos previstos nos cenários.

Embora parte dos testes manuais tenha sido possível mesmo com essas limitações, alguns comportamentos dificultaram a execução completa dos cenários.

Na automação, essas dificuldades tiveram impacto adicional, especialmente em situações nas quais não havia mensagens ou elementos visíveis suficientes para confirmar o resultado de uma operação.

A ausência de um retorno claro também dificultou a definição de asserções confiáveis em determinados testes de interface.

Essas limitações não foram consideradas justificativa para ignorar possíveis defeitos. Os comportamentos observados foram analisados e, quando aplicável, registrados nos relatórios correspondentes.

---

## 6. Priorização da automação

### 6.1. Critérios considerados

A seleção dos cenários automatizados considerou:

- **Relevância funcional:** prioridade para fluxos essenciais de cadastro, consulta e validação.
- **Repetibilidade:** possibilidade de executar o mesmo cenário diversas vezes.
- **Estabilidade:** disponibilidade de elementos e comportamentos que permitissem interações automatizadas.
- **Preparação dos dados:** facilidade de criar ou fornecer massas de teste adequadas.
- **Viabilidade técnica:** possibilidade de implementação com Playwright e TypeScript dentro do prazo.
- **Potencial de regressão:** utilidade dos testes para verificar funcionalidades após futuras alterações.
- **Aprendizado técnico:** oportunidade de aplicar conceitos de automação de interface, API e Page Object Model.

A automação foi tratada como complemento aos testes manuais, priorizando cenários que permitissem exercitar diferentes tipos de validação.

### 6.2. Cenários selecionados para automação

Os identificadores abaixo correspondem aos nomes utilizados na implementação dos testes automatizados. A equivalência com os IDs dos cenários manuais deve ser conferida antes da consolidação final da rastreabilidade.

| Cenário automatizado | Tipo | Prioridade | Justificativa |
|---|---|---|---|
| CT-IT-01 — Cadastro válido | Interface | Alta | Automatiza o fluxo principal de cadastro, permitindo verificar sua execução em futuras rodadas de testes. |
| CT-IT-02 — Campos obrigatórios vazios | Interface | Alta | Avalia o comportamento do formulário diante da ausência de informações obrigatórias. |
| CT-IT-03 — CPF duplicado | Interface | Alta | Verifica uma regra importante de integridade dos dados e permite reproduzir o comportamento observado manualmente. |
| CT-IT-04 — CPF inválido | Interface | Alta | Avalia a validação de dados incorretos e o comportamento da aplicação diante de entradas inválidas. |
| CT-IT-05 — Filtragem de ativos | Interface | Média | Verifica uma funcionalidade recorrente da listagem e permite praticar a automação de elementos interativos. |
| CT-API-01 — GET geral | API | Alta | Verifica a disponibilidade da operação de consulta de funcionários. |
| CT-API-02 — GET por ID | API | Alta | Avalia a consulta individual de registros por identificador. |
| CT-API-03 — POST válido | API | Alta | Verifica o cadastro de funcionários com dados válidos e o retorno HTTP esperado. |
| CT-API-04 — POST inválido | API | Alta | Avalia a rejeição de dados inválidos, contribuindo para a identificação de falhas de validação. |
| CT-API-05 — PATCH | API | Alta | Verifica a atualização parcial de funcionários e a preservação dos registros existentes. |

A seleção permitiu contemplar operações positivas e negativas, além de diferentes funcionalidades da aplicação.

Nos testes de interface, a utilização do padrão Page Object Model contribuiu para organizar as interações com os elementos das páginas.

Nos testes de API, a utilização do Playwright permitiu realizar requisições HTTP e verificar os resultados por meio de asserções.

### 6.3. Cenários não selecionados para automação

Nem todos os cenários executados manualmente foram selecionados para automação nesta etapa.

Entre os motivos considerados, destacaram-se:

- **Dependência de funcionalidades com comportamento inesperado:** determinadas ações da interface não respondiam conforme o esperado, dificultando a conclusão dos fluxos.
- **Necessidade de validação visual ou exploratória:** alguns comportamentos exigiam observação e investigação manual, especialmente em situações não previstas inicialmente.
- **Limitações na identificação de resultados:** a ausência de mensagens ou confirmações dificultava a construção de asserções confiáveis.
- **Tempo disponível:** foi necessário limitar o escopo da automação para priorizar cenários relevantes e viáveis.
- **Complexidade de preparação:** determinados testes exigiam configurações, anexos ou estados específicos dos registros.

A decisão de manter esses cenários na execução manual não significa que sejam inadequados para automação.

Em uma etapa posterior, com maior disponibilidade de tempo e após a correção ou esclarecimento dos comportamentos identificados, eles poderiam ser reavaliados.

---

## 7. Considerações finais

A priorização dos testes foi orientada principalmente pelos riscos associados às funcionalidades essenciais da aplicação, com atenção especial ao cadastro de funcionários, à integridade dos dados e às operações disponibilizadas pela API REST.

Os critérios utilizados permitiram direcionar os esforços para cenários com maior impacto potencial, sem deixar de considerar funcionalidades complementares e testes exploratórios.

Durante as execuções, foram identificadas limitações que influenciaram tanto a realização dos testes manuais quanto a implementação da automação.

A automação com Playwright e TypeScript foi desenvolvida como atividade complementar, buscando aplicar conhecimentos técnicos e ampliar a cobertura de cenários relevantes dentro do tempo disponível.

Para uma próxima etapa de testes, seriam considerados prioritários:

- Ampliar a validação dos resultados dos testes automatizados de interface.
- Automatizar outros cenários de atualização, exclusão e alteração de situação dos funcionários.
- Ampliar os testes negativos da API, incluindo tipos de dados incorretos e campos obrigatórios ausentes.
- Melhorar a preparação e o isolamento das massas de teste.
- Reavaliar os cenários bloqueados ou parcialmente executados após a correção dos problemas identificados.
- Fortalecer a rastreabilidade entre cenários, execuções, defeitos e evidências.

Dessa forma, a estratégia adotada buscou equilibrar criticidade, riscos, viabilidade técnica e tempo disponível, mantendo o foco na qualidade das verificações e na documentação dos resultados.