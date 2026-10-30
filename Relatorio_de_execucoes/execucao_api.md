
# Execução de Testes de API

# Evidência de Execução — EV-13

**ID:** CT-API-01
**Funcionalidade:** Cadastro de funcionários
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees
**Método HTTP:** GET
**Ferramenta:** Postman
**Status:** Aprovado 

---

### 2. Pré-condições
- API REST disponível e acessível
- Endpoint de consulta identificado
- Método GET suportado
- Funcionários previamente cadastrados.

### 3. Passos de execução
1. Acessar o Postman
2. Selecionar o método HTTP
3. Informar o endpoint
4. Enviar a requisição
5. Verificar o status HTTP e a resposta retornada

### 3. Dados Utilizados

**Endpoint:** "/employees" 
**Método:** GET  
**Body:** Não utilizado

### 5. Resultado esperado
- **Status HTTP:** 200 OK
- **Resposta esperada:** A API retorna a lista de funcionários cadastrados, contendo os dados previstos para consulta  

### 6. Resultado obtido
- **Status HTTP:** 200 OK
- **Resposta recebida:** A API retornou uma lista de funcionários em formato JSON, contendo informações cadastrais  
- **Comportamento observado:** A requisição foi processada com sucesso, e os registros retornados apresentaram dados dos campos "id", "name", "gender", "cpf", "rg", "birthday", "role", "activity", "epi", usesEpi e "caNumber", retornou json de situação do usuário "isActive"


**Evidência 13 — [Retorno da lista de funcionários cadastrados em formato JSON]**

![Evidência 16](../Evidencias/EV-16.mp4)

### 7. Observações
Na evidência é visto que é retornado o "id": "1", ainda não se tem conhecimento se é ou não bug,
o resultado sairá após as execuções, também deve-se levar em consideração a regra de contrato da APIa cujo é desconhecido

---
# Evidência de Execução — EV-14

**ID:** CT-API-01
**Funcionalidade:** Cadastro de funcionários
**Endpoint:** https://analista-teste.seatecnologia.com.br/employees
**Método HTTP:** GET
**Ferramenta:** Postman
**Status:** Aprovado 

---

### 2. Pré-condições
- API REST disponível e acessível
- Endpoint de consulta identificado
- Método GET suportado
- Funcionários previamente cadastrados.

### 3. Passos de execução
1. Acessar o Postman
2. Selecionar o método HTTP
3. Informar o endpoint
4. Enviar a requisição
5. Verificar o status HTTP e a resposta retornada

### 3. Dados Utilizados

**Endpoint:** "/employees" 
**Método:** GET  
**Body:** Não utilizado

### 5. Resultado esperado
- **Status HTTP:** 200 OK
- **Resposta esperada:** A API retorna a lista de funcionários cadastrados, contendo os dados previstos para consulta  

### 6. Resultado obtido
- **Status HTTP:** 200 OK
- **Resposta recebida:** A API retornou uma lista de funcionários em formato JSON, contendo informações cadastrais  
- **Comportamento observado:** A requisição foi processada com sucesso, e os registros retornados apresentaram dados dos campos "id", "name", "gender", "cpf", "rg", "birthday", "role", "activity", "epi", usesEpi e "caNumber", retornou json de situação do usuário "isActive"


**Evidência 13 — [Retorno da lista de funcionários cadastrados em formato JSON]**

![Evidência 16](../Evidencias/EV-16.mp4)

---
# Evidência de Execução — EV-15

**ID:** CT-API-02

**Funcionalidade:** Cadastro de funcionários

**Endpoint:** https://analista-teste.seatecnologia.com.br/employees

**Método HTTP:** GET

**Ferramenta:** Postman

**Status:** Aprovado 

---

### 2. Pré-condições
- API REST disponível e acessível.
- Endpoint de consulta identificado.
- Método GET suportado.
- Funcionários previamente cadastrados.
- Credenciais válidas, quando exigidas.

### 3. Passos de execução
1. Acessar o Postman
2. Selecionar o método HTTP
3. Informar o endpoint
4. Preencher os parâmetros ou o body, se necessário
5. Enviar a requisição
6. Verificar o status HTTP e a resposta retornada

### 3. Dados Utilizados

**Endpoint:** "/employees" 
**Método:** GET  
**Body:** Não utilizado

### 5. Resultado esperado
- **Status HTTP:** 200 OK
- **Resposta esperada:** A API retorna a lista de funcionários cadastrados, contendo os dados previstos para consulta  

### 6. Resultado obtido
- **Status HTTP:** 200 OK
- **Resposta recebida:** A API retornou uma lista de funcionários em formato JSON, contendo informações cadastrais  
- **Comportamento observado:** A requisição foi processada com sucesso, e os registros retornados apresentaram dados dos campos "id", "name", "gender", "cpf", "rg", "birthday", "role", "activity", "epi", usesEpi e "caNumber", retornou json de situação do usuário "isActive"


**Evidência 14 — [Retorno da lista de funcionários cadastrados em formato JSON]**

![Evidência 17](../Evidencias/EV-17.mp4)