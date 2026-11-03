# Desafio Técnico — Analista de Testes Júnior | SEA Tecnologia

## Sobre o projeto

Este repositório reúne os artefatos desenvolvidos durante o desafio técnico para a vaga de **Analista de Testes Júnior da SEA Tecnologia**.

O objetivo foi aplicar conhecimentos de Quality Assurance (QA) por meio do planejamento, elaboração e execução de testes funcionais, testes de API REST e automação de testes, além da identificação, documentação e análise de possíveis defeitos.

O desafio envolveu uma aplicação de gerenciamento de funcionários, contemplando funcionalidades de cadastro, listagem, filtragem e gerenciamento de registros.

Durante o desenvolvimento, também utilizei ferramentas de inteligência artificial como apoio à documentação, à resolução de dúvidas técnicas e à implementação dos testes automatizados. O processo de utilização dessas ferramentas está documentado no Diário de IA.

---

## Tecnologias e ferramentas utilizadas

| Ferramenta | Finalidade |
|---|---|
| Google Chrome | Execução dos testes de interface |
| Postman | Execução manual de requisições à API REST |
| Playwright | Automação dos testes de interface e API |
| TypeScript | Desenvolvimento dos testes automatizados |
| Node.js e npm | Ambiente de execução e gerenciamento de dependências |
| Git e GitHub | Versionamento e disponibilização do projeto |
| Markdown | Documentação dos artefatos de teste |
| Inteligência Artificial | Apoio técnico, aprendizado e revisão da documentação |

## Escopo dos testes

### Cadastro de funcionários

Foram avaliados comportamentos relacionados a:

- Cadastro com dados válidos e inválidos.
- Validação dos campos obrigatórios.
- Tentativas de cadastro com CPF duplicado.
- Seleção de cargo e atividades.
- Utilização e cadastro de Equipamentos de Proteção Individual (EPIs).
- Informações relacionadas ao Certificado de Aprovação (CA).
- Anexação de Atestado de Saúde Ocupacional (ASO).
- Mensagens de validação e comportamento dos componentes da interface.

### Listagem de funcionários

Os testes contemplaram:

- Exibição dos funcionários cadastrados.
- Filtragem de funcionários ativos e inativos.
- Navegação e apresentação dos registros.
- Ações de consulta, edição, alteração de situação e exclusão.
- Comportamento dos elementos de interação da interface.

### API REST

Foram realizados testes de requisições HTTP para verificar operações relacionadas ao gerenciamento de funcionários.

As operações avaliadas incluíram:

| Método | Objetivo |
|---|---|
| GET | Consultar funcionários cadastrados |
| POST | Cadastrar funcionários |
| PATCH | Atualizar parcialmente registros |
| PUT | Avaliar a atualização de registros |
| DELETE | Avaliar a exclusão de registros |

Durante os testes, foram observados códigos de status HTTP, estruturas JSON, tipos de dados, validações e comportamentos das operações.

---

## Planejamento e documentação

O projeto contém artefatos que documentam as diferentes etapas do processo de testes.

**Plano de Testes:** apresenta o escopo, os objetivos, a estratégia, os critérios de aceite, as prioridades e as condições consideradas para a execução dos testes. [plano.md](Plano_de_testes/plano.md)

**Cenários de Teste:** descrevem os comportamentos a serem validados, contemplando situações positivas e negativas, pré-condições e resultados esperados. [cenarios.md](Cenarios_de_testes/cenarios.md)

**Relatórios de Execução:** registram os testes realizados, seus resultados e as observações identificadas. [execucoes.md](Relatorios/execucoes.md)

**Relatórios de Bugs:** documentam os possíveis defeitos encontrados, incluindo passos para reprodução, comportamento esperado, comportamento observado, severidade, prioridade e evidências. [bugs.md](Relatorios/bugs.md)

**Evidências:** imagens e gravações utilizadas para demonstrar os resultados observados durante as execuções. [Evidencias](Evidencias/)

---

## Automação de testes com Playwright

Como complemento aos testes manuais, foi desenvolvida uma automação utilizando **Playwright com TypeScript**.

A automação contempla testes de interface (UI) e testes de API REST, utilizando asserções para verificar os resultados esperados.

Para os testes de interface, foi utilizado o padrão **Page Object Model (POM)**, com o objetivo de separar os elementos e as ações das páginas dos cenários de teste, facilitando a organização e a manutenção do código.

### Cenários automatizados

**Testes de interface (UI)**

| ID | Cenário |
|---|---|
| CT-IT-01 | Cadastro de funcionário com dados válidos |
| CT-IT-02 | Cadastro com campos obrigatórios vazios |
| CT-IT-03 | Cadastro com CPF duplicado |
| CT-IT-04 | Cadastro com CPF inválido |
| CT-IT-05 | Filtragem de funcionários ativos |

**Testes de API**

| ID | Cenário |
|---|---|
| CT-API-01 | Listar funcionários — GET |
| CT-API-02 | Buscar funcionário por ID — GET |
| CT-API-03 | Cadastrar funcionário com dados válidos — POST |
| CT-API-04 | Cadastrar funcionário com dados inválidos — POST |
| CT-API-05 | Atualizar parcialmente um funcionário — PATCH |

Os cenários automatizados foram desenvolvidos com base nos comportamentos e nas funcionalidades avaliadas durante o desafio.

### Estrutura da automação

```text
Playwright/
├── pages/
│   ├── CadastroPage.ts
│   └── ListagemPage.ts
├── services/
├── tests/
│   ├── ui/
│   │   ├── cadastro.spec.ts
│   │   └── listagem.spec.ts
│   └── api/
│       └── employees.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

### Como executar os testes automatizados

**Pré-requisitos:**

- Node.js e npm instalados.
- Acesso à aplicação utilizada no desafio.
- Conexão com a internet.

**1. Acesse o diretório da automação.**

Abra o terminal na pasta `Playwright`, dentro de `Artefatos_De_Teste/Automação/`.

**2. Instale as dependências.**

```bash
npm ci
```

**3. Instale o navegador Chromium utilizado pelo Playwright.**

```bash
npx playwright install chromium
```

**4. Execute todos os testes.**

```bash
npx playwright test --project=chromium
```

**5. Execute apenas os testes de interface.**

```bash
npx playwright test tests/ui --project=chromium
```

**6. Execute apenas os testes de API.**

```bash
npx playwright test tests/api --project=chromium
```

**7. Execute um cenário específico.**

```bash
npx playwright test -g "CT-API-03" --project=chromium
```

**8. Visualize o relatório HTML da última execução.**

```bash
npx playwright show-report
```

> **Atenção:** alguns testes realizam requisições POST e PATCH, podendo criar ou modificar registros no ambiente utilizado pelo desafio. Além disso, cenários negativos podem falhar quando a aplicação não apresenta o comportamento esperado. Essas falhas devem ser analisadas, e não tratadas automaticamente como erros da automação.

---

## Resultados e identificação de defeitos

A execução dos testes permitiu observar comportamentos divergentes dos resultados esperados, tanto na interface quanto na API.

Entre os comportamentos identificados durante o desafio, destacam-se:

- Aceitação de cadastros com CPF duplicado.
- Problemas de interação em funcionalidades relacionadas aos EPIs e às atividades.
- Comportamentos inesperados em ações disponíveis na listagem de funcionários.
- Aceitação de dados inválidos em requisições à API.
- Comportamentos de atualização que exigiram investigação adicional.

Um exemplo identificado na automação foi o **CT-API-04**, no qual uma requisição POST contendo CPF inválido recebeu o status `201 Created`, em vez de uma resposta de erro de validação.

Os resultados foram analisados considerando o comportamento esperado, os critérios definidos e as informações disponíveis sobre a aplicação.

Os detalhes das ocorrências, suas classificações e as respectivas evidências estão disponíveis nos relatórios do projeto.

---

## Utilização de inteligência artificial

A inteligência artificial foi utilizada como ferramenta de apoio ao longo do desenvolvimento do desafio.

Seu uso incluiu:

- Esclarecimento de dúvidas sobre conceitos e práticas de QA.
- Apoio à elaboração e à revisão do Plano de Testes.
- Auxílio na estruturação e na escrita técnica dos cenários de teste.
- Revisão da documentação de execuções e defeitos.
- Apoio na elaboração de massas de teste.
- Orientação na implementação da automação com Playwright e TypeScript.
- Explicação de conceitos e trechos de código para aprofundamento do aprendizado.
- Auxílio na organização e na revisão da documentação do repositório.

A automação contou com participação significativa da IA, utilizada tanto na construção do código quanto na explicação dos conceitos envolvidos.

As informações sobre a aplicação foram fornecidas durante o desenvolvimento, e os testes foram executados e avaliados a partir dos resultados observados.

Para garantir transparência, o repositório contém um **Diário de IA**, no qual estão documentadas as principais formas de utilização da ferramenta ao longo dos dias do desafio.

---

## Organização do repositório

```text
Desafio_Qa_SeaTecnologia/
├── Artefatos_De_Teste/
│   └── Automação/
│       └── Playwright/
├── Cenarios_de_testes/
├── Diario_de_IA/
├── Evidencias/
├── Massa_de_Testes/
├── Plano_de_testes/
├── Relatorios/
├── .gitignore
└── README.md
```

A estrutura busca facilitar a localização dos artefatos e a compreensão das etapas realizadas durante o desafio.

---

## Considerações finais

O desenvolvimento deste desafio proporcionou a oportunidade de aplicar conhecimentos de testes de software em uma situação prática, envolvendo planejamento, execução, documentação, análise de defeitos e automação.

A experiência também contribuiu para o aprofundamento dos conhecimentos em testes de API REST, códigos de status HTTP, validação de dados, Playwright, TypeScript e organização de projetos de QA.

Além da identificação de possíveis defeitos, procurei manter uma documentação clara, rastreável e organizada, permitindo compreender os procedimentos adotados e os resultados encontrados.

A utilização de inteligência artificial fez parte desse processo como recurso de apoio técnico e aprendizado, contribuindo para o desenvolvimento das atividades e para a ampliação dos conhecimentos adquiridos.

---

**Desenvolvido por Guilherme Licati**

Desafio Técnico — Analista de Testes Júnior | SEA Tecnologia
