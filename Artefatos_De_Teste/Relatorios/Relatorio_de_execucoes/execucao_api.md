
# Execução de Testes de API

## Evidência de Execução — EV-API-01

**ID:** CT-API-01  
**Funcionalidade:** Consulta de funcionários  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** GET  
**Ferramenta:** Postman  
**Status:** Aprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de consulta identificado.
- Método GET suportado.
- Funcionários previamente cadastrados.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método GET.
3. Informar o endpoint `/employees`.
4. Enviar a requisição.
5. Verificar o status HTTP e a resposta retornada.

### 3. Dados utilizados

**Endpoint:** `/employees`  
**Método:** GET  
**Body:** Não utilizado.

### 4. Resultado esperado

- **Status HTTP:** 200 OK.
- **Resposta esperada:** A API deve retornar a lista de funcionários cadastrados, contendo os dados previstos para consulta.

### 5. Resultado obtido

- **Status HTTP:** 200 OK.
- **Resposta recebida:** A API retornou uma lista de funcionários em formato JSON, contendo informações cadastrais.
- **Comportamento observado:** A requisição foi processada com sucesso, apresentando registros com os campos `isActive`, `id`, `name`, `gender`, `cpf`, `rg`, `birthday`, `role`, `activity`, `epi`, `usesEpi` e `caNumber`.

**Evidência 01 — Retorno da lista de funcionários cadastrados em formato JSON**

[Evidência 01 — Vídeo](../../Evidencias/EV-12.mp4)

### 6. Observações

Na evidência, foi identificado um registro com `"id": "1"`. Ainda não há informações suficientes para determinar se esse comportamento representa um defeito, sendo necessária a análise do contrato da API.

---

## Evidência de Execução — EV-API-02

**ID:** CT-API-02  
**Funcionalidade:** Consulta de funcionário por ID  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** GET  
**Ferramenta:** Postman  
**Status:** Aprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de consulta identificado.
- Método GET suportado.
- Funcionário previamente cadastrado.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método GET.
3. Informar o endpoint do funcionário desejado.
4. Enviar a requisição.
5. Verificar o status HTTP e os dados retornados.

### 3. Dados utilizados

**Endpoint:** `/employees/{id}`  
**Método:** GET  
**Body:** Não utilizado.

### 4. Resultado esperado

- **Status HTTP:** 200 OK.
- **Resposta esperada:** A API deve retornar o JSON do funcionário correspondente ao ID informado, exibindo seus dados cadastrais.

### 5. Resultado obtido

- **Status HTTP:** 200 OK.
- **Resposta recebida:** A API retornou os dados cadastrais do funcionário consultado em formato JSON.
- **Comportamento observado:** A requisição foi processada com sucesso, apresentando os seguintes campos e seus dados `id`, `isActive`, `name`, `gender`, `cpf`, `birthday`, `rg`, `role`, `usesEpi` e `caNumber`.

**Evidência 02 — Consulta do funcionário por ID**

![Evidência 02](../../Evidencias/EV-13.mp4)

---

## Evidência de Execução — EV-API-03
**Teste Exploratório**
**ID:** CT-API-02  
**Funcionalidade:** Consulta de funcionário inexistente por ID  
**Data da execução:** 02/11/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** GET  
**Ferramenta:** Postman  
**Status:** Aprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de consulta identificado.
- Método GET suportado.
- Funcionário previamente cadastrado.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método GET.
3. Informar o endpoint do funcionário desejado.
4. Enviar a requisição.
5. Verificar o status HTTP e os dados retornados.

### 3. Dados utilizados

**Endpoint:** `/employees/{id}`  
**Método:** GET  
**Body:** Não utilizado.

### 4. Resultado esperado

- **Status HTTP:** 404 Not found.  
- **Resposta esperada:** A API deve retornar o status "404 Not found" e a mensagem de erro "Not found".  

### 5. Resultado obtido

- **Status HTTP:** 404 Not found.
- **Resposta recebida:** A API retornou status "404 Not found" e a mensagem de erro "Not found".
- **Comportamento observado:** A requisição foi processada com sucesso, não retornado status de sucesso possivel 200 OK e retornando JSON de funcionário fictício ou não solicitado.

**Evidência 03 — Consulta do funcionário por ID**

![Evidência 03](../../Evidencias/EV-14.mp4)

---

## Evidência de Execução — EV-API-04

**ID:** CT-API-03  
**Funcionalidade:** Cadastro de funcionários com dados válidos  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** POST/GET  
**Ferramenta:** Postman  
**Status:** Aprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.
- Dados de cadastro preparados.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método POST.
3. Informar o endpoint `/employees`.
4. Preencher o body com os dados do funcionário.
5. Enviar a requisição POST.
6. Verificar o status HTTP e a resposta retornada.
7. Enviar uma requisição GET para consultar o funcionário cadastrado.

### 3. Dados utilizados

**Endpoint:** `/employees`  
**Método:** POST/GET

**Body/JSON:**

```json
{
  "id": "001",
  "state": {
    "employee": {
      "isActive": true,
      "name": "Rafael Almeida Teste",
      "gender": "masculino",
      "cpf": "704.183.625-80",
      "birthDay": "10/11/1990",
      "rg": "6149382",
      "role": "Cargo 1",
      "usesEpi": true,
      "activity": "Ativid 01",
      "epi": "Protetor auditivo",
      "caNumber": "00112233"
    }
  }
}
```

### 4. Resultado esperado

- **Status HTTP:** 201 Created.
- **Resposta esperada:** A API deve cadastrar o funcionário, retornar uma resposta de sucesso e permitir a consulta posterior dos dados cadastrados.

### 5. Resultado obtido

- **Status HTTP:** 201 Created.
- **Resposta recebida:** A API retornou uma resposta de sucesso em formato JSON, contendo informações cadastrais.
- **Comportamento observado:** A requisição foi processada com sucesso, e o funcionário cadastrado foi localizado na consulta posterior.

**Evidência 04 — Cadastro de funcionário com dados válidos**

![Evidência 04](../../Evidencias/EV-15.mp4)


---

## Evidência de Execução — EV-API-05

**ID:** CT-API-04  
**Funcionalidade:** Cadastro de funcionários com campos vazios  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** POST/GET  
**Ferramenta:** Postman  
**Status:** Reprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método POST.
3. Informar o endpoint `/employees`.
4. Preencher o body com campos vazios e valores nulos.
5. Enviar a requisição.
6. Verificar o status HTTP e a resposta retornada.
7. Caso o cadastro seja realizado, consultar o registro criado utilizando GET.

### 3. Dados utilizados

**Endpoint:** `/employees`  
**Método:** POST/GET

**Body/JSON:**

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

### 4. Resultado esperado

- **Status HTTP:** 400 Bad Request.
- **Resposta esperada:** A API deve impedir o cadastro com campos obrigatórios vazios ou valores nulos inválidos, retornando uma mensagem de validação.

### 5. Resultado obtido

- **Status HTTP:** 201 Created.
- **Resposta recebida:** A API retornou uma resposta de sucesso e criou o funcionário com campos vazios.
- **Comportamento observado:** A requisição foi aceita, e o registro com campos vazios foi encontrado na consulta posterior.

**Evidência 05 — Cadastro com campos vazios**

![Evidência 05](../../Evidencias/EV-16.mp4)

---

## Evidência de Execução — EV-API-06

**ID:** CT-API-05  
**Funcionalidade:** Cadastro de funcionário com CPF duplicado  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** POST/GET  
**Ferramenta:** Postman  
**Status:** Reprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.
- Funcionário previamente cadastrado com CPF `12121241231` -> Referente ao funcionário "Sea Teste".

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método POST.
3. Informar o endpoint `/employees`.
4. Preencher o body utilizando um CPF já cadastrado.
5. Enviar a requisição POST.
6. Verificar o status HTTP e a resposta retornada.
7. Caso o cadastro seja realizado, consultar o novo registro utilizando GET.

### 3. Dados utilizados

**Endpoint:** `/employees`  
**Método:** POST/GET

**Body/JSON:**

```json
{
  "id": "002",
  "state": {
    "employee": {
      "isActive": false,
      "name": "Gojo satoru honrado",
      "gender": "masculino",
      "cpf": "12121241231",
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

### 4. Resultado esperado

- **Status HTTP:** 409 Conflict.
- **Resposta esperada:** A API deve rejeitar o cadastro de um funcionário com CPF já existente, retornando uma mensagem informando o conflito.

### 5. Resultado obtido

- **Status HTTP:** 201 Created.
- **Resposta recebida:** A API retornou uma resposta de sucesso e os dados do funcionário criado.
- **Comportamento observado:** A requisição foi aceita, permitindo cadastrar outro funcionário com CPF já existente.

**Evidência 06 — Cadastro com CPF duplicado**

![Evidência 06](../../Evidencias/EV-17.mp4)

---

## Evidência de Execução — EV-API-07

**ID:** CT-API-06  
**Funcionalidade:** Cadastro de funcionários com dados inválidos  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** POST/GET  
**Ferramenta:** Postman  
**Status:** Reprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método POST.
3. Informar o endpoint `/employees`.
4. Preencher o body com dados inválidos e tipos incompatíveis.
5. Enviar a requisição POST.
6. Verificar o status HTTP e a resposta retornada.
7. Caso o cadastro seja realizado, consultar o registro utilizando GET.

### 3. Dados utilizados

**Endpoint:** `/employees`  
**Método:** POST/GET

**Body/JSON:**

```json
{
  "id": "#$%¨&%",
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

### 4. Resultado esperado

- **Status HTTP:** 400 Bad Request ou 422 Unprocessable Content.
- **Resposta esperada:** A API deve rejeitar o cadastro com dados inválidos, retornando uma mensagem que identifique os erros de validação.

### 5. Resultado obtido

- **Status HTTP:** 201 Created.
- **Resposta recebida:** A API retornou uma resposta de sucesso com o corpo JSON do registro.
- **Comportamento observado:** A API aceitou os dados inválidos, realizou o cadastro e permitiu consultar o funcionário criado.

**Evidência 07 — Cadastro com dados inválidos**

![Evidência 07](../../Evidencias/EV-19.mp4)

---

## Evidência de Execução — EV-API-08

**ID:** CT-API-07  
**Funcionalidade:** Atualização de funcionário por PUT  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees/002  
**Método HTTP:** PUT/GET  
**Ferramenta:** Postman  
**Status:** Aprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de atualização identificado.
- Métodos PUT e GET suportados.
- Funcionário previamente cadastrado com ID `002`.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método PUT.
3. Informar o endpoint `/employees/002`.
4. Preencher o body com os dados de atualização.
5. Enviar a requisição PUT.
6. Verificar o status HTTP e a resposta retornada.
7. Consultar o funcionário atualizado utilizando GET.

### 3. Dados utilizados

**Endpoint:** `/employees/002`  
**Método:** PUT/GET

**Body/JSON:**

```json
{
  "id": "002",
  "state": {
    "employee": {
      "isActive": true,
      "name": "Vanica Zogratis",
      "gender": "feminino",
      "cpf": "245.124.442-32",
      "birthDay": "13/08/200",
      "rg": "582073",
      "role": "Cargo 2",
      "usesEpi": true,
      "activity": "Ativid 01",
      "epi": "Luvas descartaveis",
      "caNumber": "827444"
    }
  }
}
```

### 4. Resultado esperado

- **Status HTTP:** 200 OK.
- **Resposta esperada:** A API deve atualizar os dados do funcionário informado e retornar uma resposta de sucesso, permitindo a consulta posterior do registro atualizado.

### 5. Resultado obtido

- **Status HTTP:** 200 OK 
- **Resposta recebida:** A API retornou uma resposta de sucesso contendo os dados da requisição.
- **Comportamento observado:** A API atualizou o funcionário informado, e os dados atualizados foram identificados na consulta posterior.

**Evidência 08 — Resposta da atualização por PUT**

![Evidência 08](../../Evidencias/EV-20.mp4)

### 6. Observações

O documento original apresentava `200 Created` como status obtido. É necessário confirmar na evidência se o retorno efetivo foi `200 OK` ou outro código HTTP.

---

## Evidência de Execução — EV-API-09

**ID:** CT-API-08  
**Funcionalidade:** Atualização parcial de funcionário por PATCH  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees/002  
**Método HTTP:** PATCH/GET  
**Ferramenta:** Postman  
**Status:** Reprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de atualização identificado.
- Métodos PATCH e GET suportados.
- Funcionário previamente cadastrado com ID `002`.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método PATCH.
3. Informar o endpoint `/employees/002`.
4. Preencher o body com os dados para atualização parcial.
5. Enviar a requisição PATCH.
6. Verificar o status HTTP e a resposta retornada.
7. Enviar uma requisição GET para conferir os dados do funcionário após a atualização.

### 3. Dados utilizados

**Endpoint:** `/employees/002`  
**Método:** PATCH/GET

**Body/JSON:**

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

### 4. Resultado esperado

- **Status HTTP:** 200 OK.
- **Resposta esperada:** A API deve atualizar apenas o campo informado, preservando os demais dados do funcionário e retornando uma resposta de sucesso.

### 5. Resultado obtido

- **Status HTTP:** 200 OK.
- **Resposta recebida:** A API retornou uma resposta de sucesso com o corpo JSON da requisição.
- **Comportamento observado:** A API retornou o status esperado, porém apresentou comportamento de substituição dos dados do funcionário pelo conteúdo parcial enviado, em vez de atualizar somente o campo informado.

**Evidência 09 — Requisição PATCH de atualização parcial**

![Evidência 09](../../Evidencias/EV-21.mp4)

### 6. Observações

É necessário confirmar, por meio da consulta posterior, quais campos foram preservados, removidos ou alterados após a requisição PATCH.

---

## Evidência de Execução — EV-API-10

**ID:** CT-API-09  
**Funcionalidade:** Exclusão de funcionário  
**Data da execução:** 29/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees/{id}  
**Método HTTP:** DELETE/GET  
**Ferramenta:** Postman  
**Status:** Aprovado

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de exclusão identificado.
- Métodos DELETE e GET suportados.
- Funcionário previamente cadastrado.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método DELETE.
3. Informar o endpoint `/employees/{id}`, substituindo `{id}` pelo identificador do funcionário.
4. Enviar a requisição DELETE.
5. Verificar o status HTTP e a resposta retornada.
6. Realizar uma consulta GET pelo ID do funcionário excluído.

### 3. Dados utilizados

**Endpoint:** `/employees/{id}`  
**Método:** DELETE/GET  
**Body/JSON:** Não utilizado.

### 4. Resultado esperado

- **Status HTTP do DELETE:** 200 OK.
- **Status HTTP do GET posterior:** 404 Not Found.
- **Resposta esperada:** A API deve confirmar a exclusão e impedir a consulta do funcionário pelo ID anteriormente utilizado.

### 5. Resultado obtido

- **Status HTTP do DELETE:** 200 OK.
- **Status HTTP do GET posterior:** 404 Not Found.
- **Resposta recebida:** A API retornou sucesso na exclusão e, posteriormente, uma resposta de recurso não encontrado.
- **Comportamento observado:** O funcionário foi excluído, e a consulta posterior pelo ID retornou a resposta esperada.

**Evidência 10 — Exclusão do funcionário**

![Evidência 10](../../Evidencias/EV-22.mp4)

---

## Evidência de Execução — EV-API-11

**Tipo:** Teste exploratório  
**Cenário associado:** Não aplicável  
**Funcionalidade:** Cadastro de funcionários com campos adicionais  
**Data da execução:** 30/10/2026  
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees  
**Método HTTP:** POST/GET  
**Ferramenta:** Postman  
**Status:** Comportamento a esclarecer

---

### 1. Pré-condições

- API REST disponível e acessível.
- Endpoint de cadastro identificado.
- Métodos POST e GET suportados.
- Dados necessários para cadastro preparados.

### 2. Passos de execução

1. Acessar o Postman.
2. Selecionar o método POST.
3. Informar o endpoint `/employees`.
4. Preencher o body com os dados de cadastro e adicionar propriedades extras não previstas no contrato conhecido.
5. Enviar a requisição POST.
6. Verificar o status HTTP e o corpo da resposta.
7. Consultar o funcionário criado utilizando GET para verificar se as propriedades adicionais foram armazenadas.

### 3. Dados utilizados

**Endpoint:** `/employees`  
**Método:** POST/GET  
**Body/JSON:** 

```json
{
  "id": "002",
  "state": {
    "employee": {
      "isActive": true,
      "esporte": "futebol",
      "tênis": "nike",
      "dedos": 5,
      "verdadeiro": true,
      "name": "Vanica Zogratis",
      "gender": "feminino",
      "cpf": "245.124.442-32",
      "birthDay": "13/08/200",
      "rg": "582073",
      "role": "Cargo 2",
      "usesEpi": true,
      "activity": "Ativid 01",
      "epi": "Luvas descartaveis",
      "caNumber": "827444"
    }
  }
}
```

### 4. Resultado esperado

- **Status HTTP sugerido:** 400 Bad Request ou 422 Unprocessable Content, caso o contrato proíba propriedades adicionais.
- **Resposta esperada:** Se o contrato não permitir campos extras, a API deve rejeitar a requisição e informar o motivo. Caso o contrato permita propriedades adicionais, a aceitação poderá ser considerada válida.

### 5. Resultado obtido

- **Status HTTP:** 201 Created.
- **Resposta recebida:** A API retornou uma resposta de sucesso contendo os dados do registro criado.
- **Comportamento observado:** A API aceitou a requisição, cadastrou o funcionário e armazenou as propriedades adicionais enviadas: 
  - "esporte": "futebol"
  - "tênis": "nike"
  - "dedos": 5
  - "verdadeiro": true

**Evidência 11 — Cadastro de funcionário com campos adicionais**

![Evidência 11](../../Evidencias/EV-23.mp4)
