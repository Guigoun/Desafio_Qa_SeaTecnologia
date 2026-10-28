
# Cenários de Teste — Sea Tecnologia

## CT-01 — [Cadastro de funcionários com dados válidos]

**Funcionalidade:**  Cadastro
**Critério de aceite:**  CA08, CA09 
**Prioridade:**  Alta
**Tipo:**  Positivo
**Pré-condições:**  
-Aplicação disponível e acessível
-Formulário de cadastro disponível
-Não possuir um cpf cadastrado anteriormente

```gherkin
Funcionalidade: [Cadastro de funcionários]

  Cenário: [Cadastrar funcionários com dados válidos]
    Dado que [estou na página de cadastro de funcionários]
    E [possuo dados válidos para os campos obrigatórios]
    Quando [preencho todos os campos obrigatórios com dados válidos]
    E [clico no botão "Salvar"]
    Então [o sistema deve cadastrar o funcionário com sucesso]
    E [o funcionário deve ser exibido na listagem]
```
---

## CT-02 — [Cadastro com campos obrigatórios vazios]

**Funcionalidade:**  Cadastro
**Critério de aceite:**  CA08, CA15
**Prioridade:**  Alta
**Tipo:**  Negativo
**Pré-condições:** 
-Aplicação disponível e acessível
-Formulário de cadastro disponível

```gherkin
Funcionalidade: [Cadastro de funcionários]

  Esquema do Cenário: [Validar campos obrigatórios]
    Dado que [estou na página de cadastro de funcionários]
    Quando [deixo os campos obrigatórios em branco]
    E [clico no botão "Salvar"]
    Então [o sistema deve impedir o cadastro do funcionárop]
    E [deve exibir a mensagem "Preencha este campo."]
```
---

## CT-03 — [Cadastro com CPF duplicado]

**Funcionalidade:**  Cadastro
**Critério de aceite:**  CA10
**Prioridade:**  Alta
**Tipo:**  Negativo
**Pré-condições:** 
-Aplicação disponível e acessível
-Formulário de cadastro disponível
-Ter um CPF cadastrado anteriormente

```gherkin
Funcionalidade: [Cadastro de funcionários]

  Cenário: [Impedir cadastro com CPF já existente]
    Dado que [existe um funcionário cpf cadastrado com determinado cpf]
    E [estou na página de cadastro de funcionários]
    Quando [preencho os campos obrigatórios com dados válidos]
    E [preencho o campo "CPF" com dado já existente]
    E [clico no botão "Salvar"]
    Então [o sistema deve impedir o cadastro do funcionário]
    E [exibir a mensagem "Este CPF já está cadastrado no sistema!"]
```
---

## CT-04 — [Associação de múltiplos EPIs]

**Funcionalidade:**  Cadastro 
**Critério de aceite:**  CA11, CA12
**Prioridade:**  Média
**Tipo:**  Positivo
**Pré-condições:**  
-Aplicação disponível e acessível
-Formulário de aplicação disponível
-Campos obrigatórios preenchidos com dados válidos

```gherkin
Funcionalidade: [Associação de EPIs]

  Esquema do Cenário: [Associar múltiplos EPIs à um funcionário]
    Dado que [estou no formulário de cadastro]
    E selecionei uma atividade
    Quando [adiciona um EPI informando o número do CA]
    Então [o sistema deve apresentar as EPIs associados à atividade]
    E deve permitir salvar os dados conforme a regra de negócio

```
---

## CT-05 — [Anexar ASO opcional no cadastro]

**Funcionalidade:**  Cadastro
**Critério de aceite:**  CA14
**Prioridade:**  Baixa
**Tipo:**  Positivo
**Pré-condições:** 
-Aplicação disponível e acessível
-Formulário de aplicação disponível
-Campos obrigatórios preenchidos com dados válidos

```gherkin
Funcionalidade: [Anexar ASO opcional]

  Cenário: [Anexar ASO para realização do cadastro do funcionário]
    Dado que [estou no formulário de cadastro]
    Quando [clico no botão "Selecione o arquivo"]
    E [envio o arquivo selecionado]
    E [clico no botão "Salvar"]
    Então [o sistema deve cadastrar o funcionário apresentando o ASO]
    E [Permitir Salvar os dados conforme a regra de negócio]
```
---

## CT-06 — [Listagem de funcionários]

**Funcionalidade:**  Lista 
**Critério de aceite:**  CA01
**Prioridade:**  Alta
**Tipo:**  Positivo
**Pré-condições:** 
-Aplicação disponível e acessível
-Possuir funcionários cadastrados no sistema

```gherkin
Funcionalidade: [Lista de funcionários cadastrados]

  Esquema do Cenário: [Exibir funcionário cadastrados no sistema]
    Dado que [existem funcionário cadastrados no sistema]
    Quando [acesso a página de listagem]
    Então [o sistema deve apresentar os funcionários cadastrados]
    E [exibir os dados previstos para cada funcionário]

```
---

## CT-07 — [Filtragem de funcionários ativos]

**Funcionalidade:**  Lista
**Critério de aceite:**  CA02
**Prioridade:**  Média
**Tipo:**  Positivo
**Pré-condições:**  
-Aplicação disponível e acessível
-Possuir funcionários cadastrados no sistema

```gherkin
Funcionalidade: [Filtrar usuários ativos do sistema]

  Cenário: [Exibir funcionários ativos do sistemas]
    Dado que [existem funcionário cadastrados no sistema]
    Quando [clico no botão "Ver apenas ativos"]
    Então [o sistema deve exibir apenas os funcionários ativos cadastrados]
    E [exibir os dados previstos para cada funcionário]
```
---

## CT-08 — [Alterar situação do funcionário]

**Funcionalidade:**  Lista
**Critério de aceite:**  CA06
**Prioridade:**  Alta
**Tipo:**  Positivo
**Pré-condições:**  
-Aplicação disponível e acessível
-Possuir funcionários cadastrados no sistema

```gherkin
Funcionalidade: [Situação cadastral]

  Esquema do Cenário: [Inativar funcionário ativo]
    Dado que [existem um funcionário ativo no sistema]
    E [estou na página de listagem]
    Quando [acesso as opções do funcionário]
    E [seleciono a opção inativação]
    Então [o sistema deve mudar a situação do funcionário para inativo
    E [a nova situação deve ser apresentada nas consultas correspondentes]

```
---

# Testes de API

## CT-API-01 — [Consultar funcionários pela API]

**Funcionalidade:**  API REST
**Critério de aceite:**  CA16, CA17
**Prioridade:**  Alta
**Tipo:**  Positivo
**Pré-condições:**  
 -API REST disponível e acessível.
 -Endpoint de consulta de funcionários identificado.
 -Método GET suportado pelo endpoint.
 -Funcionários previamente cadastrados.
 -Credenciais válidas, caso a API exija autenticação

```gherkin
Funcionalidade: [Nome da funcionalidade]

  Cenário: [Descrição do cenário]
    Dado que [contexto inicial]
    E [pré-condição adicional]
    Quando [ação realizada]
    E [ação adicional]
    Então [resultado esperado]
    E [validação adicional]
```
---

## CT-API-02 — [Requisição com método não permitido]

**Funcionalidade:**  API REST
**Critério de aceite:**  CA16, CA18
**Prioridade:**  Média
**Tipo:**  Negativo
**Pré-condições:**  
- API REST disponível e acessível.
- Endpoint existente e identificado.
- Métodos HTTP permitidos conhecidos.
- Método HTTP não permitido definido para execução.
- Credenciais válidas, caso a API exija autenticação.

```gherkin
Funcionalidade: [Validação de métodos HTTP]

  Esquema do Cenário: [Utilizar método HTTP não permitido]
    Dado que [existe um endpoint com métodos HTTP definidos]
    Quando [envio uma requisição utilizando um método não permitido]
    Então [a API deve rejeitar a operação]
    E [deve retornar o código HTTP previsto no contrato]

```
