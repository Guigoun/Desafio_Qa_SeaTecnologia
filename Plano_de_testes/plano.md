# Plano de Testes — Sea Tecnologia

**Projeto:** Sistema de Gestão de Funcionários  
**Tipo de documento:** Plano de Testes  
**Versão:** 1.0  
**Responsável:** Analista de Testes (QA) - Guilherme Licati  
**Status:** Planejamento inicial

---

## 1. Objetivo

Este plano de testes tem como objetivo definir o escopo, a estratégia, os recursos e os critérios para a validação das funcionalidades de cadastro e listagem de funcionários da aplicação Sea Tecnologia.

Os testes buscarão verificar o atendimento aos requisitos e às regras de negócio, identificar defeitos, avaliar os riscos associados às funcionalidades e documentar os resultados obtidos, fornecendo informações que apoiem a avaliação da qualidade do sistema.

## 2. Escopo de Testes

### 2.1. Dentro do escopo

**Listagem de funcionários**
- Exibição dos funcionários cadastrados e seus respectivos dados.
- Filtragem de funcionários por situação (ativo/inativo).
- Navegação pelos registros disponíveis.
- Consulta dos dados de funcionários.
- Edição de informações cadastrais.
- Alteração da situação entre ativo e inativo.
- Exclusão de cadastros.

**Cadastro de funcionários**
- Cadastro com dados válidos e inválidos.
- Validação dos campos obrigatórios.
- Validação dos campos Nome, CPF, RG e Data de Nascimento.
- Verificação de duplicidade de CPF.
- Seleção de cargo e atividades.
- Associação de EPIs aos funcionários.
- Inclusão de múltiplos EPIs e verificação de possíveis limites.
- Validação do número do Certificado de Aprovação (CA).
- Anexo opcional de Atestado de Saúde Ocupacional (ASO).
- Exibição de mensagens de erro e validação.

**API REST**
- Verificação dos endpoints e métodos HTTP disponíveis.
- Validação dos códigos de status HTTP.
- Verificação das respostas retornadas.
- Testes com requisições válidas e inválidas.
- Comparação dos comportamentos observados na interface e na API.
- Identificação de inconsistências entre operações realizadas pela interface e diretamente pela API.

**Segurança e privacidade**
- Verificações direcionadas de exposição de dados pessoais.
- Verificação de controles de autorização, quando aplicáveis.
- Identificação de possíveis inconsistências no acesso às informações.
- Avaliação básica do tratamento de dados pessoais, considerando riscos relacionados à LGPD.

**Usabilidade**
- Clareza das mensagens de erro e confirmação.
- Facilidade de navegação.
- Feedback visual das operações.
- Compreensão dos campos e ações disponíveis.

### 2.2. Fora do escopo

- Testes extensivos de carga, desempenho e estresse.
- Testes de segurança aprofundados, como pentest completo e auditoria de infraestrutura.
- Validação direta da estrutura e integridade do banco de dados.
- Testes de infraestrutura e disponibilidade em produção.
- Testes extensivos de compatibilidade com dispositivos móveis.

**Justificativa:** as exclusões consideram o prazo do desafio, o acesso disponível ao ambiente e a priorização dos fluxos de negócio e riscos mais relevantes.

## 3. Critérios de Aceite

Os critérios abaixo representam os comportamentos esperados identificados durante a análise inicial. As regras não confirmadas deverão ser investigadas e registradas durante os testes.

### 3.1. Listagem de funcionários

- **CA01:** A listagem deve apresentar os funcionários cadastrados e os dados definidos para exibição.
- **CA02:** O filtro de situação deve permitir consultar funcionários ativos e inativos conforme a seleção realizada.
- **CA03:** A navegação deve permitir acessar os registros disponíveis na listagem.
- **CA04:** O sistema deve permitir consultar os dados de um funcionário selecionado.
- **CA05:** O sistema deve permitir editar os campos autorizados e refletir as alterações após o salvamento.
- **CA06:** O sistema deve permitir alterar a situação de um funcionário entre ativo e inativo.
- **CA07:** O sistema deve executar a exclusão conforme a regra de negócio definida, respeitando eventuais requisitos de preservação de dados.

### 3.2. Cadastro de funcionários

- **CA08:** O cadastro deve exigir o preenchimento dos campos obrigatórios definidos.
- **CA09:** O sistema deve aplicar as validações previstas para Nome, CPF, RG e Data de Nascimento.
- **CA10:** O sistema deve impedir o cadastro de CPF duplicado, caso a unicidade seja uma regra de negócio confirmada.
- **CA11:** O sistema deve permitir associar atividades e EPIs conforme as regras de negócio.
- **CA12:** O sistema deve permitir adicionar múltiplos EPIs quando essa operação for autorizada.
- **CA13:** O sistema deve validar o número do CA conforme os requisitos definidos.
- **CA14:** O sistema deve permitir anexar um ASO de forma opcional no formulário apresentado.
- **CA15:** O sistema deve apresentar mensagens visíveis e compreensíveis quando houver falhas de validação.

### 3.3. API REST

- **CA16:** Os endpoints devem responder aos métodos HTTP suportados conforme o contrato da API.
- **CA17:** As requisições devem retornar códigos HTTP e dados coerentes com o resultado da operação.
- **CA18:** Requisições inválidas devem ser tratadas conforme as regras e respostas previstas na API.
- **CA19:** Operações equivalentes realizadas pela interface e pela API devem apresentar comportamentos de negócio consistentes.
- **CA20:** Operações protegidas devem respeitar os controles de autenticação e autorização definidos, quando aplicáveis.

## 4. Abordagem de Testes

Os testes serão conduzidos com base nos requisitos identificados e nos riscos associados às funcionalidades da aplicação.

### 4.1. Estratégia de seleção

- **Baseada em requisitos:** validação dos comportamentos e regras identificados.
- **Baseada em riscos:** priorização das funcionalidades com maior impacto em caso de falha.

### 4.2. Tipos e modalidades de teste

- **Testes funcionais manuais:** validação dos fluxos de cadastro, listagem, consulta, edição, alteração de situação e exclusão.
- **Testes positivos e negativos:** verificação do comportamento com entradas válidas, inválidas e operações não permitidas.
- **Testes exploratórios:** investigação de comportamentos inesperados e identificação de defeitos não previstos inicialmente.
- **Testes de API:** validação dos endpoints, métodos HTTP, códigos de resposta e conteúdo retornado.
- **Testes de integração:** comparação dos comportamentos entre interface e API, quando os recursos disponíveis permitirem.
- **Testes de usabilidade:** avaliação da navegação, mensagens e feedback das operações.
- **Testes de aceitação:** verificação dos cenários de negócio em relação aos critérios de aceite.
- **Testes de regressão:** reexecução dos cenários relevantes após alterações ou correções, quando possível.
- **Testes automatizados:** execução automatizada dos cenários selecionados conforme prioridade e viabilidade técnica.

### 4.3. Técnicas de teste

Serão utilizadas, quando aplicáveis:

- Particionamento de equivalência.
- Análise de valor-limite.
- Testes de transição de estados, especialmente para funcionários ativos e inativos.
- Testes baseados em cenários de uso.
- Testes exploratórios orientados por riscos.

## 5. Priorização Baseada em Riscos

A priorização considerará o impacto potencial de falhas, a importância das regras de negócio e a frequência de utilização das funcionalidades.

| Funcionalidade ou cenário | Prioridade | Justificativa |
|---|---|---|
| Cadastro com dados válidos | Alta | Fluxo principal da aplicação |
| Validação de campos obrigatórios | Alta | Prevenção de cadastros incompletos |
| Duplicidade de CPF | Alta | Risco de inconsistência cadastral |
| Edição e exclusão | Alta | Possibilidade de alteração ou perda de informações |
| Alteração de situação ativo/inativo | Alta | Impacto no estado cadastral |
| Segurança e privacidade | Alta | Possível exposição de dados pessoais |
| Validação dos endpoints da API | Alta | Verificação dos contratos e comportamentos |
| Filtros e navegação da listagem | Média | Confiabilidade das consultas |
| Associação de EPIs e atividades | Média/Alta | Dependente das regras e do impacto operacional |
| Anexo de ASO | Média | Validação de funcionalidade complementar |
| Usabilidade | Média | Clareza e facilidade de utilização |
| Compatibilidade entre navegadores | Média | Verificação de comportamentos inconsistentes |

As prioridades poderão ser ajustadas conforme os resultados da exploração inicial.

## 6. Ambiente, Ferramentas e Dados

### 6.1. Ambiente

- **Ambiente:** aplicação disponibilizada para o desafio.
- **Interface:** aplicação web.
- **API:** API REST disponibilizada pela Sea Tecnologia.
- **Sistema operacional:** ambiente utilizado na execução, a registrar.
- **Navegadores previstos:** Google Chrome, Microsoft Edge e Mozilla Firefox.

As versões efetivamente utilizadas serão registradas durante a execução.

### 6.2. Ferramentas

| Finalidade | Ferramenta |
|---|---|
| Automação de interface web | Robot Framework |
| Interação automatizada com navegador | Selenium |
| Linguagem de apoio | Python |
| Testes de API | Postman |
| Controle de versão | Git |
| Repositório de artefatos | GitHub |
| Apoio à geração de massa de testes | ChatGPT |

### 6.3. Massa de testes

Serão preparados dados sintéticos para a execução de cenários positivos e negativos, incluindo:

- Nomes fictícios.
- CPFs válidos e inválidos para fins de teste.
- CPFs duplicados.
- RGs com diferentes formatos.
- Datas de nascimento válidas, inválidas e limites relevantes.
- Diferentes cargos e atividades.
- Combinações de EPIs.
- Números de CA para investigação das validações existentes.
- Arquivos de teste para o anexo de ASO.

Os dados gerados com auxílio de IA serão revisados antes da utilização. Não serão utilizados dados pessoais reais desnecessariamente.

## 7. Estratégia e Arquitetura de Automação

A automação será desenvolvida utilizando Robot Framework, Selenium e Python.

Será adotado o padrão **Page Object Model (POM)**, adaptado à estrutura do Robot Framework, para organizar os elementos e as ações das páginas, favorecendo a reutilização de código e a manutenção dos testes.

### 7.1. Critérios para seleção dos testes automatizados

Serão priorizados cenários que apresentem:

- Alta criticidade para o negócio.
- Execução recorrente.
- Resultados esperados claros.
- Fluxos suficientemente estáveis.
- Viabilidade de implementação no prazo disponível.

### 7.2. Cenários candidatos à automação

- Cadastro de funcionário com dados válidos.
- Tentativa de cadastro com campos obrigatórios vazios.
- Tentativa de cadastro com CPF duplicado.
- Filtragem de funcionários por situação.
- Alteração da situação de um funcionário.
- Edição de dados cadastrais.

A lista definitiva será definida após a exploração inicial e a avaliação de viabilidade.

Os scripts e as instruções de execução serão disponibilizados no GitHub.

## 8. Critérios de Entrada e Saída

### 8.1. Critérios de entrada

- Aplicação web acessível.
- API REST acessível, quando disponível.
- Ambiente de testes preparado.
- Massa de testes definida.
- Funcionalidades e cenários prioritários identificados.
- Ferramentas necessárias configuradas.

### 8.2. Critérios de saída

- Casos de teste prioritários executados ou impedimentos documentados.
- Defeitos identificados registrados com evidências.
- Resultados das execuções documentados.
- Riscos e limitações identificados.
- Scripts automatizados selecionados implementados ou limitações justificadas.
- Relatório final de testes elaborado.

A existência de defeitos em aberto não impedirá o encerramento do desafio, desde que sejam registrados e comunicados adequadamente.

## 9. Documentação e Evidências

A documentação será organizada em repositório GitHub, permitindo a consulta e a rastreabilidade dos artefatos produzidos.

### 9.1. Artefatos

- Plano de testes.
- Cenários e casos de teste.
- Relatório de execução.
- Relatório de defeitos.
- Evidências de testes.
- Scripts de automação.
- Nota de priorização.
- Diário de uso de IA.

### 9.2. Registro de defeitos

Cada defeito deverá conter, quando aplicável:

- Identificador.
- Título e descrição.
- Funcionalidade afetada.
- Ambiente de execução.
- Pré-condições.
- Passos para reprodução.
- Resultado esperado.
- Resultado obtido.
- Severidade e prioridade.
- Evidências.

### 9.3. Evidências

Poderão ser utilizadas:

- Capturas de tela.
- Gravações de vídeo.
- Mensagens de erro.
- Logs de execução.
- Requisições e respostas HTTP.

### 9.4. Rastreabilidade

Será mantido o vínculo entre critérios de aceite, casos de teste, execuções, defeitos e evidências, sempre que aplicável.

### 9.5. Nota de priorização

Será elaborado um registro justificando os cenários priorizados, os testes executados e aqueles que não puderam ser realizados.

### 9.6. Diário de uso de IA

Será mantido um diário de uma página descrevendo:

- Onde a IA generativa foi utilizada.
- Qual foi sua contribuição.
- Quais sugestões foram aceitas, modificadas ou rejeitadas.
- Como os resultados foram verificados pelo candidato.

## 10. Riscos, Limitações e Premissas

### 10.1. Riscos e limitações

| Risco ou limitação | Possível impacto | Tratamento |
|---|---|---|
| Regras de negócio não documentadas | Incerteza nos resultados esperados | Registrar dúvidas e premissas |
| Prazo limitado | Cobertura parcial dos cenários | Priorizar por riscos |
| Indisponibilidade do ambiente | Bloqueio da execução | Registrar impedimentos |
| Restrições de acesso à API | Cobertura limitada de endpoints | Documentar os recursos acessíveis |
| Instabilidade da interface | Falhas na automação | Priorizar fluxos estáveis e registrar limitações |
| Dados preexistentes inconsistentes | Dificuldade na interpretação dos resultados | Utilizar dados controlados e registrar observações |

### 10.2. Premissas e dúvidas a validar

Durante a exploração, deverão ser investigadas as seguintes questões:

- O CPF deve ser único para todos os funcionários, incluindo inativos?
- Quais campos são efetivamente obrigatórios?
- Quais regras de validação se aplicam ao RG e à data de nascimento?
- De acordo om os cargos sugeridos e regra de negócio deveria manter opção de não usar EPI?
- Existe quantidade máxima de EPIs ou atividades por funcionário?
- Como o número do CA é validado?
- Quais formatos e tamanhos de arquivo são aceitos para o ASO?
- A exclusão de funcionário é física ou lógica?
- Quais operações exigem autenticação ou autorização?
- Existem diferenças entre as regras aplicadas na interface e na API?

As respostas serão registradas conforme forem identificadas. Comportamentos não documentados não serão automaticamente classificados como defeitos sem análise do contexto e das regras aplicáveis.

## 11. Entregáveis

Ao final da execução, serão disponibilizados:

1. Plano de testes.
2. Casos de teste e respectivos resultados.
3. Relatório de defeitos priorizado, com evidências.
4. Código de automação e instruções de execução no GitHub.
5. Diário de uso de IA.
6. Nota de estratégia e priorização, incluindo as limitações da cobertura.

---

**Observação:** este plano poderá ser atualizado conforme novas regras de negócio, limitações técnicas ou comportamentos relevantes forem identificados durante a exploração da aplicação.
