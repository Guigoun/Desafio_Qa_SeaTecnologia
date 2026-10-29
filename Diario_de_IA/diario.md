# Diário de Utilização de IA — Dia 1

**IA utilizada:** Chat GPT
**Objetivo:** Apoiar o planejamento dos testes, esclarecer dúvidas sobre regras de negócio e auxiliar na análise inicial da aplicação.

---

## 1. Planejamento dos testes

Inicialmente, orientei a IA a atuar com a perspectiva de um QA Sênior, buscando respostas mais técnicas e direcionadas às boas práticas de qualidade de software.

Solicitei orientações sobre como estruturar um plano de testes e quais informações deveriam ser incluídas no documento.

Durante essa etapa, também questionei se seria adequado incluir os critérios de aceite no escopo do plano de testes, buscando melhorar a organização e a rastreabilidade dos requisitos.

## 2. Análise das regras de negócio

Utilizei a IA para esclarecer dúvidas relacionadas às regras de negócio da aplicação.

Uma das dúvidas foi sobre a validação do campo **RG**, incluindo:

- Quantidade mínima e máxima de dígitos.
- Possibilidade de utilização de letras e outros caracteres.
- Existência de regras específicas para validação do documento.

O objetivo foi compreender quais validações poderiam ser consideradas durante a elaboração dos cenários de teste.

## 3. Identificação dos elementos da interface

Compartilhei capturas de tela da aplicação com a IA para auxiliar na identificação dos ícones e de suas respectivas funcionalidades.

Essa análise teve como objetivo compreender melhor os elementos da interface e as ações disponíveis para o usuário.

## 4. Cadastro de funcionários inativos

Questionei a IA sobre a necessidade de permitir o cadastro de funcionários diretamente com a situação **inativa**.

A resposta apresentada destacou a importância de manter registros de funcionários desligados da empresa, considerando questões trabalhistas e a necessidade de preservar o histórico cadastral.

Entretanto, questionei essa interpretação, pois entendi que o cadastro de um novo funcionário deveria, inicialmente, definir sua situação como **ativa**, deixando a inativação para um momento posterior, como no desligamento da empresa.

Esse questionamento ajudou a identificar uma possível regra de negócio que precisa ser esclarecida antes de definir o comportamento esperado nos testes.

## 5. Análise do JSON da API

Após analisar uma resposta JSON da API, solicitei à IA uma avaliação inicial para identificar possíveis problemas em sua estrutura.

A IA apontou dois possíveis erros:

- Ausência de colchetes para representar uma lista de registros.
- Presença de uma vírgula considerada incorreta após o fechamento de um objeto.

Contestei a análise apresentada, pois não concordei com a identificação desses elementos como erros.

Essa situação demonstrou a importância de **não aceitar automaticamente as respostas da IA**, realizando uma análise crítica das sugestões antes de utilizá-las na avaliação da aplicação.

---

## 6. Considerações do dia

No primeiro dia, utilizei a IA principalmente como ferramenta de apoio ao planejamento e à compreensão da aplicação.

As interações contribuíram para estruturar o plano de testes, levantar dúvidas sobre regras de negócio e analisar aspectos da interface e da API.

Também foi possível identificar limitações nas respostas geradas, reforçando a necessidade de validar as informações e manter o julgamento técnico durante o processo de testes.


# Diário de Utilização de IA — Dia 2

**IA utilizada:** ChatGPT  
**Objetivo:** Apoiar a elaboração do plano de testes, a definição de prioridades e a estruturação dos cenários de teste.

---

## 1. Elaboração do plano de testes

Inicialmente, utilizei a IA para compreender como elaborar e estruturar um plano de testes, buscando entender quais informações deveriam compor o documento.

Durante o desenvolvimento, fui construindo o plano com o auxílio da ferramenta, realizando perguntas, revisando os conteúdos e fazendo ajustes para manter a documentação alinhada aos objetivos do desafio.

Também debati com a IA sobre **quais funcionalidades deveriam receber maior prioridade nos testes**, considerando sua importância para o funcionamento da aplicação e os possíveis impactos de falhas.

Após finalizar o conteúdo, solicitei que a IA organizasse o documento em formato **Markdown**, para facilitar sua inclusão no repositório GitHub.

**Documento produzido:** [plano.md](https://github.com/Guigoun/Desafio_Qa_SeaTecnologia/blob/main/Plano_de_testes/plano.md)

## 2. Elaboração dos cenários de teste

Em seguida, solicitei à IA um modelo básico para estruturar os cenários de teste, utilizando-o como referência para desenvolver meus próprios cenários.

Após elaborar os cenários, pedi que a ferramenta avaliasse o conteúdo, identificando possíveis melhorias na escrita, na organização e na utilização de uma linguagem um pouco mais técnica.

Com base nas sugestões recebidas, revisei e ajustei os cenários, procurando manter uma descrição clara dos comportamentos esperados da aplicação.

Por fim, solicitei que a IA organizasse o conteúdo em formato **Markdown**, permitindo sua inclusão no repositório.

**Documento produzido:** [cenarios.md](https://github.com/Guigoun/Desafio_Qa_SeaTecnologia/blob/main/Cenarios_de_testes/cenarios.md)

---

## 3. Apoio na execução dos testes e registro de bugs

Também utilizei a IA para me auxiliar na estruturação dos documentos de execução de testes e relatórios de bugs. Assim como fiz anteriormente com os cenários de teste, solicitei um esqueleto em Markdown para compreender quais informações deveriam ser registradas e como organizá-las de maneira clara e objetiva.

Durante esse processo, utilizei a IA para:

- Esclarecer dúvidas sobre regras de negócio relacionadas aos EPIs e ao ASO, buscando compreender quais validações poderiam ser realizadas e quais dependiam de requisitos não especificados.
- Avaliar minha escrita técnica nos registros de execução e relatórios de bugs, identificando pontos que poderiam ser melhorados.
- Sugerir nomes mais claros e objetivos para os cenários de teste.
- Refinar a descrição dos objetivos, resultados esperados e resultados obtidos, evitando informações desnecessárias ou ambíguas.
- **Gerar massas de testes** para utilizar durante as execuções, incluindo dados válidos e inválidos, com o objetivo de verificar diferentes comportamentos e validações do sistema.
- Padronizar a formatação dos arquivos Markdown, corrigindo espaçamentos, organização de seções e outros detalhes de apresentação.

Além disso, debati com a IA a necessidade de executar e documentar alguns testes exploratórios que identifiquei durante a análise do sistema.

Após avaliar a relevância desses testes e sua relação com o escopo do desafio, decidi executar e registrar a maioria deles. Os demais serão documentados como notas e observações, por não considerar necessária sua execução formal neste momento.

**Documentos produzidos:**

- [relatorio_de_execucoes.md](https://github.com/Guigoun/Desafio_Qa_SeaTecnologia/blob/main/Execucao_testes/relatorio_de_execucoes.md)
- [relatorio_de_bugs.md](https://github.com/Guigoun/Desafio_Qa_SeaTecnologia/blob/main/Bugs/relatorio_de_bugs.md)
- [massa.md](https://github.com/Guigoun/Desafio_Qa_SeaTecnologia/blob/main/Massa_de_Testes/massa.md)

---

## 4. Considerações do dia

Durante o segundo dia, utilizei a IA como ferramenta de apoio ao aprendizado, à elaboração e à revisão da documentação de testes.

Inicialmente, a IA me auxiliou a compreender a estrutura de um plano de testes, organizar os cenários e discutir a priorização das funcionalidades. Posteriormente, também foi utilizada para esclarecer dúvidas sobre regras de negócio, gerar massas de testes com dados válidos e inválidos, melhorar minha escrita técnica e padronizar os registros de execução e os relatórios de bugs.

Um dos principais pontos de aprendizado foi compreender melhor a importância de documentar os testes de forma objetiva, mantendo a rastreabilidade entre cenários, execuções, evidências e defeitos encontrados. A geração das massas de testes também contribuiu para a preparação das execuções, permitindo trabalhar com diferentes entradas e situações de validação.

Também pude refletir sobre a necessidade de executar determinados testes exploratórios, considerando sua relevância, o escopo do desafio e o tempo disponível.

A IA contribuiu principalmente com explicações, sugestões de estrutura, geração de dados de teste e revisões. Entretanto, participei diretamente da elaboração dos documentos, analisei as sugestões recebidas e tomei as decisões sobre quais testes executar, como registrar os resultados e quais ajustes aplicar.

Considero que o uso da IA neste dia contribuiu para meu desenvolvimento técnico, ajudando a compreender melhor as atividades de um Analista de Testes e a produzir uma documentação mais organizada e consistente.
