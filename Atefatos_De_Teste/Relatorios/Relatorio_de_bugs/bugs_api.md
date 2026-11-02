
# Relatório de Bugs — API REST

## BUG-01 — API permite cadastro de funcionários com campos vazios e nulos

**Execução de teste relacionada:** EV-API-04  
**Cenário de teste relacionado:** CT-API-04  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Postman — API REST

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.

### 2. Descrição

A API permite o cadastro de funcionários com campos vazios e valores nulos, retornando uma resposta de sucesso e criando registros sem os dados necessários para o cadastro.

### 3. Passos para reproduzir

1. Acessar o Postman.
2. Selecionar o método HTTP POST.
3. Informar o endpoint `https://analista-teste.seatecnologia.com.br/employees`.
4. Configurar o Body como `raw`, no formato JSON.
5. Inserir o seguinte JSON:

```json
{
  "id": "",
  "state": {
    "employee": {
      "isActive": null,
      "name": "",
      "gender": "",
      "cpf": "",
      "birthDay": "",
      "rg": "",
      "role": "",
      "usesEpi": null,
      "activity": "",
      "epi": "",
      "caNumber": ""
    }
  }
}
```

6. Enviar a requisição POST.
7. Verificar o status HTTP e a resposta retornada.
8. Consultar o funcionário criado utilizando GET.

### 4. Resultado esperado

A API deve rejeitar o cadastro com campos obrigatórios vazios ou valores nulos inválidos, retornando o status HTTP `400 Bad Request` ou outro código de validação definido pelo contrato, acompanhado de uma mensagem que identifique os erros.

### 5. Resultado obtido

A API aceitou a requisição, retornando o status HTTP `201 Created` e criando o funcionário com campos vazios e nulos.

O registro criado também foi encontrado na consulta posterior.

### 6. Evidências

**Evidência 22 — Cadastro de funcionário com campos vazios**

![Evidência 22](../Evidencias/EV-22.png)

**Evidência 23 — Funcionário cadastrado**

![Evidência 23](../Evidencias/EV-23.png)

**Evidência 24 — Consulta do funcionário com campos vazios**

![Evidência 24](../Evidencias/EV-24.png)

---

## BUG-02 — API permite cadastro de funcionários com CPF duplicado

**Execução de teste relacionada:** EV-API-05  
**Cenário de teste relacionado:** CT-API-05  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Postman — API REST

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.
- Funcionário previamente cadastrado com CPF `704.183.625-80`.

### 2. Descrição

A API permite cadastrar um novo funcionário utilizando um CPF já existente no sistema, sem impedir a duplicidade do documento.

### 3. Passos para reproduzir

1. Acessar o Postman.
2. Selecionar o método HTTP POST.
3. Informar o endpoint `https://analista-teste.seatecnologia.com.br/employees`.
4. Configurar o Body como `raw`, no formato JSON.
5. Inserir o seguinte JSON, utilizando um CPF já cadastrado:

```json
{
  "id": "002",
  "state": {
    "employee": {
      "isActive": false,
      "name": "Gojo satoru honrado",
      "gender": "masculino",
      "cpf": "704.183.625-80",
      "birthDay": "1999-12-04",
      "rg": "6293612",
      "role": "Cargo 4",
      "usesEpi": true,
      "activity": "Ativid 04",
      "epi": "Protetor auditivo",
      "caNumber": "996283"
    }
  }
}
```

6. Enviar a requisição POST.
7. Verificar o status HTTP e a resposta retornada.
8. Consultar o funcionário criado utilizando GET.

### 4. Resultado esperado

A API deve impedir o cadastro de funcionários com CPF já existente, retornando o status HTTP `409 Conflict` ou outro código apropriado definido pelo contrato, acompanhado de uma mensagem informando a duplicidade.

### 5. Resultado obtido

A API aceitou a requisição e retornou o status HTTP `201 Created`, criando um novo funcionário com CPF já cadastrado.

O registro duplicado foi encontrado na consulta posterior.

### 6. Evidências

**Evidência 25 — Cadastro com CPF duplicado**

![Evidência 25](../Evidencias/EV-25.png)

**Evidência 26 — Resposta da API após o cadastro**

![Evidência 26](../Evidencias/EV-26.png)

**Evidência 27 — Consulta do funcionário com CPF duplicado**

![Evidência 27](../Evidencias/EV-27.png)

---

## BUG-03 — API permite cadastro de funcionários com dados inválidos

**Execução de teste relacionada:** EV-API-06  
**Cenário de teste relacionado:** CT-API-06  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Postman — API REST

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.

### 2. Descrição

A API permite o cadastro de funcionários com dados inválidos e tipos incompatíveis com os campos esperados, sem aplicar as validações necessárias.

Foram utilizados valores numéricos em campos textuais, strings em campos booleanos e valores incompatíveis com formatos de dados cadastrais.

### 3. Passos para reproduzir

1. Acessar o Postman.
2. Selecionar o método HTTP POST.
3. Informar o endpoint `https://analista-teste.seatecnologia.com.br/employees`.
4. Configurar o Body como `raw`, no formato JSON.
5. Inserir o seguinte JSON:

```json
{
  "id": "123",
  "state": {
    "employee": {
      "isActive": "FDFFSFSFSD",
      "name": 123432,
      "gender": 432432,
      "cpf": 13324,
      "birthDay": "iaflafalkf",
      "rg": "312312321adasdasdad",
      "role": 80802,
      "usesEpi": 21444,
      "activity": 4679,
      "epi": 273394,
      "caNumber": "SOLAVANCO"
    }
  }
}
```

6. Enviar a requisição POST.
7. Verificar o status HTTP e a resposta retornada.
8. Consultar o funcionário criado utilizando GET.

### 4. Resultado esperado

A API deve rejeitar o cadastro com dados inválidos, retornando o status HTTP `400 Bad Request` ou `422 Unprocessable Content`, acompanhado de uma mensagem que identifique os erros de validação.

### 5. Resultado obtido

A API aceitou a requisição e retornou o status HTTP `201 Created`, realizando o cadastro do funcionário com dados inválidos.

O registro também foi encontrado na consulta posterior.

### 6. Evidências

**Evidência 28 — Cadastro com dados inválidos**

![Evidência 28](../Evidencias/EV-28.png)

**Evidência 29 — Funcionário criado com sucesso**

![Evidência 29](../Evidencias/EV-29.png)

**Evidência 30 — Consulta do funcionário com dados inválidos**

![Evidência 30](../Evidencias/EV-30.png)

---

## BUG-04 — API substitui dados do funcionário durante atualização parcial por PATCH

**Execução de teste relacionada:** EV-API-08  
**Cenário de teste relacionado:** CT-API-08  
**Funcionalidade:** Atualização de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Postman — API REST

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de atualização identificado.
- Métodos PATCH e GET suportados.
- Funcionário previamente cadastrado com ID `002`.

### 2. Descrição

Ao realizar uma requisição PATCH para atualizar apenas o nome de um funcionário, a API apresenta comportamento de substituição dos dados do cadastro pelo conteúdo parcial enviado, em vez de preservar os demais campos existentes.

Esse comportamento pode comprometer a integridade das informações cadastradas.

### 3. Passos para reproduzir

1. Acessar o Postman.
2. Selecionar o método HTTP PATCH.
3. Informar o endpoint `https://analista-teste.seatecnologia.com.br/employees/002`.
4. Configurar o Body como `raw`, no formato JSON.
5. Inserir o seguinte JSON:

```json
{
  "id": "002",
  "state": {
    "employee": {
      "name": "Sea Teste Atualizado"
    }
  }
}
```

6. Enviar a requisição PATCH.
7. Verificar o status HTTP e a resposta retornada.
8. Realizar uma requisição GET para consultar o funcionário atualizado.
9. Comparar os dados anteriores com os dados retornados após a atualização.

### 4. Resultado esperado

A API deve atualizar apenas o campo `name` do funcionário informado, preservando os demais dados existentes.

A requisição deve retornar um status HTTP de sucesso apropriado, como `200 OK`, conforme o contrato da API.

### 5. Resultado obtido

A API retornou o status HTTP `200 OK`, porém apresentou comportamento de substituição dos dados do funcionário pelo JSON parcial enviado na requisição.

Dessa forma, a operação não apresentou o comportamento esperado de atualização parcial.

### 6. Evidências

**Evidência 33 — Requisição PATCH de atualização parcial**

![Evidência 33](../Evidencias/EV-33.png)

**Evidência 34 — Resultado da atualização parcial**

![Evidência 34](../Evidencias/EV-34.png)

### 7. Observações

É necessário conferir na consulta posterior quais campos foram preservados, removidos ou alterados, para determinar a extensão do impacto sobre os dados do funcionário.

---

## BUG-05 — API permite persistência de campos adicionais no cadastro de funcionários

**Origem:** Teste exploratório de API  
**Execução de teste relacionada:** EV-API-10  
**Cenário de teste relacionado:** Não aplicável  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Média (provisória)  
**Prioridade:** Média (provisória)  
**Ambiente:** Postman — API REST  
**Situação:** Comportamento a esclarecer

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.

### 2. Descrição

Durante um teste exploratório, foi identificado que a API aceita propriedades adicionais no JSON enviado por meio de uma requisição POST.

Além de realizar o cadastro, a API armazena as propriedades adicionais enviadas, mesmo quando não fazem parte dos campos conhecidos do cadastro de funcionários.

Ainda é necessário confirmar se o contrato da API permite ou proíbe essas propriedades.

### 3. Passos para reproduzir

1. Acessar o Postman.
2. Selecionar o método HTTP POST.
3. Informar o endpoint `https://analista-teste.seatecnologia.com.br/employees`.
4. Configurar o Body como `raw`, no formato JSON.
5. Inserir o seguinte JSON com propriedades adicionais:

```json
{
  "id": "fd54",
  "state": {
    "employee": {
      "tchola": "seila",
      "Sea": "QA JUNIOR",
      "funcionarios": 123,
      "empregado": true,
      "isActive": false,
      "name": "Gilberto",
      "gender": "feminino",
      "cpf": "00123456789",
      "birthDay": "2000-05-10",
      "rg": "1234567",
      "role": "",
      "usesEpi": false,
      "caNumber": "00112233"
    }
  }
}
```

6. Enviar a requisição POST.
7. Verificar o status HTTP e a resposta retornada.
8. Realizar uma requisição GET para consultar o funcionário criado.
9. Verificar se as propriedades adicionais foram armazenadas.

### 4. Resultado esperado

Caso o contrato da API proíba propriedades adicionais, a requisição deve ser rejeitada com um código HTTP apropriado, como `400 Bad Request` ou `422 Unprocessable Content`, acompanhado de uma mensagem de validação.

Caso o contrato permita propriedades adicionais, o cadastro poderá ser considerado válido.

### 5. Resultado obtido

A API aceitou a requisição, retornando o status HTTP `201 Created`.

O funcionário foi cadastrado e as propriedades adicionais enviadas foram armazenadas.

### 6. Evidências

**Evidência 38 — Cadastro de funcionário com campos adicionais**

![Evidência 38](../Evidencias/EV-38.png)

**Evidência 39 — Consulta do funcionário criado**

![Evidência 39](../Evidencias/EV-39.png)

