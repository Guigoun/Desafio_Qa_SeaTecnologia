
# Cenários de Teste — Sea Tecnologia

**Projeto:** Sistema de Gestão de Funcionários  
**Metodologia:** BDD — Behavior-Driven Development  
**Linguagem:** Gherkin  

---

# Cadastro de Funcionários

## CT-01 — Cadastro de funcionário com dados válidos

**Funcionalidade:** Cadastro  
**Critérios de aceite:** CA08, CA09  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Formulário de cadastro disponível.
- Massa de dados válidos preparada.
- CPF ainda não cadastrado no sistema.

```gherkin
Funcionalidade: Cadastro de funcionários

  Cenário: Cadastrar funcionário com dados válidos
    Dado que estou na página de cadastro de funcionários
    E possuo dados válidos para os campos obrigatórios
    E o CPF informado não está cadastrado no sistema
    Quando preencho os campos obrigatórios com dados válidos
    E clico no botão "Salvar"
    Então o sistema deve cadastrar o funcionário com sucesso
    E o registro deve estar disponível para consulta pela API
```

---

## CT-02 — Cadastro com campos obrigatórios vazios

**Funcionalidade:** Cadastro  
**Critérios de aceite:** CA08, CA15  
**Prioridade:** Alta  
**Tipo:** Negativo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Formulário de cadastro disponível.

```gherkin
Funcionalidade: Cadastro de funcionários

  Cenário: Impedir cadastro com campos obrigatórios vazios
    Dado que estou na página de cadastro de funcionários
    Quando deixo os campos obrigatórios em branco
    E clico no botão "Salvar"
    Então o sistema deve impedir o cadastro
    E deve apresentar mensagens informando os campos obrigatórios
```

---

## CT-03 — Cadastro com CPF duplicado

**Funcionalidade:** Cadastro  
**Critério de aceite:** CA10  
**Prioridade:** Alta  
**Tipo:** Negativo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Formulário de cadastro disponível.
- Funcionário previamente cadastrado com CPF conhecido.
- Regra de unicidade do CPF confirmada.

```gherkin
Funcionalidade: Cadastro de funcionários

  Cenário: Impedir cadastro com CPF já existente
    Dado que existe um funcionário cadastrado com determinado CPF
    E estou na página de cadastro de funcionários
    Quando preencho os campos obrigatórios com dados válidos
    E informo o CPF já cadastrado
    E clico no botão "Salvar"
    Então o sistema deve impedir o cadastro duplicado
    E deve apresentar uma mensagem informando o conflito
```

---

## CT-04 — Associação de múltiplos EPIs

**Funcionalidade:** Cadastro  
**Critérios de aceite:** CA11, CA12  
**Prioridade:** Média  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Formulário de cadastro disponível.
- Dados obrigatórios preparados.
- Atividade e EPIs disponíveis para seleção.

```gherkin
Funcionalidade: Associação de EPIs

  Cenário: Associar múltiplos EPIs a um funcionário
    Dado que estou no formulário de cadastro
    E selecionei uma atividade
    Quando adiciono um EPI informando o número do CA
    E adiciono um segundo EPI informando o número do CA
    Então o sistema deve apresentar os dois EPIs associados
    E deve permitir salvar os dados conforme as regras de negócio
```

---

## CT-05 — Anexar ASO opcional no cadastro

**Funcionalidade:** Cadastro  
**Critério de aceite:** CA14  
**Prioridade:** Baixa  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Formulário de cadastro disponível.
- Campos obrigatórios preenchidos com dados válidos.
- Arquivo de teste disponível para anexação.

```gherkin
Funcionalidade: Anexo de ASO

  Cenário: Cadastrar funcionário com ASO anexado
    Dado que estou no formulário de cadastro
    E preenchi os campos obrigatórios com dados válidos
    Quando seleciono um arquivo para o campo ASO
    E clico no botão "Salvar"
    Então o sistema deve cadastrar o funcionário com sucesso
    E o arquivo deve permanecer associado ao cadastro
```

---

## CT-06 — Cadastro com dados inválidos

**Funcionalidade:** Cadastro  
**Critérios de aceite:** CA09, CA15  
**Prioridade:** Alta  
**Tipo:** Negativo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Formulário de cadastro disponível.
- Massa de dados inválidos preparada.

```gherkin
Funcionalidade: Validação de dados cadastrais

  Cenário: Impedir cadastro com CPF inválido
    Dado que estou no formulário de cadastro
    E preencho os demais campos obrigatórios com dados válidos
    Quando informo um CPF inválido
    E clico no botão "Salvar"
    Então o sistema deve impedir o cadastro
    E deve apresentar uma mensagem de validação do CPF
```

---

# Listagem de Funcionários

## CT-07 — Listagem de funcionários cadastrados

**Funcionalidade:** Listagem  
**Critério de aceite:** CA01  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Existência de funcionários cadastrados.

```gherkin
Funcionalidade: Listagem de funcionários

  Cenário: Exibir funcionários cadastrados
    Dado que existem funcionários cadastrados no sistema
    Quando acesso a página de listagem
    Então o sistema deve apresentar os registros disponíveis
    E deve exibir os dados previstos para cada funcionário
```

---

## CT-08 — Filtragem de funcionários ativos

**Funcionalidade:** Listagem  
**Critério de aceite:** CA02  
**Prioridade:** Média  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Existência de funcionários ativos e inativos.
- Página de listagem disponível.

```gherkin
Funcionalidade: Filtragem de funcionários

  Cenário: Exibir somente funcionários ativos
    Dado que existem funcionários ativos e inativos cadastrados
    E estou na página de listagem
    Quando clico no botão "Ver apenas ativos"
    Então o sistema deve apresentar somente funcionários ativos
    E não deve apresentar funcionários inativos
```

---

## CT-09 — Alterar situação do funcionário

**Funcionalidade:** Listagem  
**Critério de aceite:** CA06  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Funcionário ativo previamente cadastrado.
- Funcionário acessível pela listagem.

```gherkin
Funcionalidade: Situação cadastral

  Cenário: Inativar funcionário ativo
    Dado que existe um funcionário ativo cadastrado
    E estou na página de listagem
    Quando acesso as ações do funcionário
    E seleciono a opção de inativação
    Então o sistema deve alterar a situação do funcionário para inativo
    E a nova situação deve ser apresentada nas consultas correspondentes
```

---

## CT-10 — Editar funcionário

**Funcionalidade:** Listagem  
**Critério de aceite:** CA05  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Funcionário previamente cadastrado.
- Funcionário acessível para edição.

```gherkin
Funcionalidade: Edição de funcionários

  Cenário: Editar dados de um funcionário
    Dado que existe um funcionário cadastrado
    E estou na página de listagem
    Quando acesso a opção de editar funcionário
    E altero um campo permitido com um valor válido
    E salvo as alterações
    Então o sistema deve atualizar os dados do funcionário
    E os novos dados devem estar disponíveis para consulta
```

---

## CT-11 — Excluir funcionário

**Funcionalidade:** Listagem  
**Critério de aceite:** CA07  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Funcionário de teste previamente cadastrado.
- Funcionário acessível na listagem.
- Regra de exclusão identificada.

```gherkin
Funcionalidade: Exclusão de funcionários

  Cenário: Excluir cadastro de funcionário
    Dado que existe um funcionário de teste cadastrado
    E estou na página de listagem
    Quando acesso as ações do funcionário
    E seleciono a opção de exclusão
    E confirmo a operação, quando solicitado
    Então o sistema deve concluir a operação conforme a regra de exclusão
    E deve refletir o resultado nas consultas correspondentes
```

---

## CT-12 — Navegar pela listagem

**Funcionalidade:** Listagem  
**Critério de aceite:** CA03  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Existência de funcionários suficientes para exigir navegação.
- Página de listagem disponível.

```gherkin
Funcionalidade: Navegação da listagem

  Cenário: Acessar registros da listagem
    Dado que existem funcionários cadastrados além dos inicialmente exibidos
    E estou na página de listagem
    Quando utilizo o recurso de navegação disponível
    Então o sistema deve permitir acessar os demais registros
    E deve apresentar os dados dos funcionários consultados
```

---

## CT-13 — Consultar dados de funcionário

**Funcionalidade:** Listagem  
**Critério de aceite:** CA04  
**Prioridade:** Média  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação disponível e acessível.
- Funcionário previamente cadastrado.
- Funcionário acessível na listagem.

```gherkin
Funcionalidade: Consulta de funcionários

  Cenário: Consultar dados de funcionário cadastrado
    Dado que existe um funcionário cadastrado
    E estou na página de listagem
    Quando acesso a opção de consultar seus dados
    Então o sistema deve apresentar as informações do funcionário
    E os dados apresentados devem corresponder ao cadastro selecionado
```

---

# Testes de API

## CT-API-01 — Consultar funcionários pela API

**Funcionalidade:** API REST  
**Critérios de aceite:** CA16, CA17  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- API REST disponível e acessível.
- Endpoint de consulta identificado.
- Método GET suportado.
- Funcionários previamente cadastrados.
- Credenciais válidas, quando exigidas.

```gherkin
Funcionalidade: Consulta de funcionários via API

  Cenário: Consultar funcionários utilizando GET
    Dado que a API de funcionários está acessível
    E possuo as credenciais necessárias, quando exigidas
    Quando envio uma requisição GET ao endpoint de consulta
    Então a API deve retornar o código HTTP esperado
    E a resposta deve respeitar o contrato definido
```

---

## CT-API-02 — Requisição com método não permitido

**Funcionalidade:** API REST  
**Critérios de aceite:** CA16, CA18  
**Prioridade:** Média  
**Tipo:** Negativo  

**Pré-condições:**
- API REST disponível e acessível.
- Endpoint existente identificado.
- Métodos HTTP permitidos conhecidos.
- Método não permitido definido.
- Credenciais válidas, quando exigidas.

```gherkin
Funcionalidade: Validação de métodos HTTP

  Cenário: Utilizar método HTTP não permitido
    Dado que existe um endpoint com métodos HTTP definidos
    Quando envio uma requisição utilizando um método não permitido
    Então a API deve rejeitar a operação
    E deve retornar o código HTTP previsto no contrato
```

---

## CT-API-03 — Comparar cadastro entre interface e API

**Funcionalidade:** API REST / Cadastro  
**Critério de aceite:** CA19  
**Prioridade:** Alta  
**Tipo:** Positivo  

**Pré-condições:**
- Aplicação web e API disponíveis.
- Endpoint de consulta identificado.
- Massa de dados válidos preparada.
- CPF não cadastrado anteriormente.

```gherkin
Funcionalidade: Consistência entre interface e API

  Cenário: Consultar pela API funcionário cadastrado na interface
    Dado que estou na página de cadastro de funcionários
    E possuo dados válidos com CPF ainda não cadastrado
    Quando realizo o cadastro pela interface
    E consulto o funcionário pela API
    Então a API deve retornar o registro cadastrado
    E os dados retornados devem corresponder aos informados na interface
```

---

## CT-API-04 — Verificar acesso não autorizado

**Funcionalidade:** API REST / Segurança  
**Critério de aceite:** CA20  
**Prioridade:** Alta  
**Tipo:** Negativo  

**Pré-condições:**
- API REST disponível.
- Endpoint de acesso protegido identificado, se existir.
- Regras de autenticação ou autorização conhecidas.
- Ambiente de teste autorizado para execução.

```gherkin
Funcionalidade: Segurança de acesso à API

  Cenário: Impedir acesso não autorizado a recurso protegido
    Dado que existe um endpoint protegido por autenticação ou autorização
    Quando envio uma requisição sem as credenciais ou permissões necessárias
    Então a API deve impedir o acesso ao recurso
    E deve retornar uma resposta compatível com a regra de segurança
    E não deve expor dados pessoais protegidos
```

---

# Observações

- Os cenários deverão ser revisados conforme as regras de negócio identificadas.
- As mensagens de erro exatas somente serão exigidas quando previstas nos requisitos.
- Os cenários de CPF duplicado, exclusão, validação de CA e autorização dependem da confirmação das respectivas regras.
- A indisponibilidade de navegação na listagem deverá ser documentada caso impeça a execução de cenários.
- Os resultados e as evidências serão registrados no relatório de execução.
- Os defeitos encontrados serão documentados separadamente.
- A automação será priorizada conforme criticidade e viabilidade técnica.
