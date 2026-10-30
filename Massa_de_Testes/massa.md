# Massa de Testes — SEA Tecnologia

**Projeto:** Sistema de Gestão de Funcionários  
**Objetivo:** Disponibilizar dados para execução dos testes funcionais e de API REST.

---

## 1. Funcionários com dados válidos

| ID | Nome | CPF | RG | Nascimento | Sexo | Situação |
|---|---|---|---|---|---|---|
| MT-01 | Lucas Ferreira Teste | 381.742.906-13 | 4827163 | 15/03/1995 | Masculino | Ativo |
| MT-02 | Mariana Costa Teste | 529.614.803-70 | 5938274 | 22/07/1998 | Feminino | Ativo |
| MT-03 | Rafael Almeida Teste | 704.183.625-80 | 6149382 | 10/11/1990 | Masculino | Inativo |

**Observações:**
- Dados fictícios destinados exclusivamente aos testes.
- Os CPFs devem ser validados antes da execução.
- A situação inicial deve ser confirmada no sistema.

---

## 2. Campos obrigatórios

**Cenário relacionado:** CT-02.

| ID | Campo | Valor |
|---|---|---|
| MT-04 | Nome | Vazio |
| MT-05 | CPF | Vazio |
| MT-06 | RG | Vazio |
| MT-07 | Data de nascimento | Vazio |

**Resultado esperado:** impedir o cadastro e apresentar validação para os campos obrigatórios definidos nos requisitos.

---

## 3. Dados inválidos

| ID | Campo | Valor |
|---|---|---|
| MT-08 | CPF | 111.111.111-11 |
| MT-09 | CPF | 123456789 |
| MT-10 | CPF | ABC.DEF.GHI-JK |
| MT-11 | Data de nascimento | 31/02/2000 |
| MT-12 | Data de nascimento | 15/03/2030 |

**Resultado esperado:** rejeitar dados inválidos conforme as regras de validação da aplicação.

---

## 4. CPF duplicado

**Cenário relacionado:** CT-03.

| ID | Nome | CPF | Condição |
|---|---|---|---|
| MT-13 | Funcionário Duplicado Teste | CPF do MT-01 | CPF previamente cadastrado |

**Resultado esperado:** impedir o cadastro duplicado, conforme a regra de unicidade do CPF.

---

## 5. Associação de EPI

**Cenário relacionado:** CT-04.

| ID | Cargo | Atividade | EPI | Número do CA |
|---|---|---|---|---|
| MT-14 | Cargo 01 | Ativid 01 | Capacete de segurança | 12345 |

**Resultado esperado:** permitir a associação do EPI à atividade e preservar os dados informados no cadastro.

**Observação:** número de CA fictício, sem validade certificada.

---

## 6. Anexo de ASO

**Cenário relacionado:** CT-05.

| ID | Arquivo | Objetivo |
|---|---|---|
| MT-15 | aso_teste.pdf | Verificar anexação do documento |

**Resultado esperado:** anexar o arquivo e manter sua associação ao funcionário após salvar, conforme o comportamento previsto.

---

## 7. Listagem e situação cadastral

| ID | Funcionário | Operação | Resultado esperado |
|---|---|---|---|
| MT-16 | MT-01 | Filtrar ativos | Funcionário exibido |
| MT-17 | MT-03 | Filtrar inativos | Funcionário exibido |
| MT-18 | MT-02 | Inativar | Situação atualizada |
| MT-19 | MT-03 | Ativar | Situação atualizada |
| MT-20 | MT-01 | Editar | Alterações persistidas |
| MT-21 | MT-02 | Excluir | Comportamento conforme regra de exclusão |

**Observação:** verificar a situação inicial antes de executar cada operação.

---

## 8. Testes de API REST

| ID | Método | Dados utilizados | Validação |
|---|---|---|---|
| MT-API-01 | GET | Endpoint `/employees` | Consultar funcionários |
| MT-API-02 | GET | `/employees/{id}` | Consultar funcionário específico |
| MT-API-03 | POST | JSON válido | Criar funcionário |
| MT-API-04 | POST | CPF já cadastrado | Verificar tratamento de duplicidade |
| MT-API-05 | PATCH | ID existente e campo alterado | Atualizar parcialmente sem duplicar |
| MT-API-06 | PUT | ID existente e JSON completo | Atualizar conforme contrato |
| MT-API-07 | DELETE | ID existente | Excluir conforme contrato |
| MT-API-08 | GET | ID inexistente | Verificar retorno `404 Not Found` |

**Observações:**
- Utilizar os campos e tipos definidos no contrato da API.
- Verificar códigos HTTP, respostas e persistência dos dados.
- Confirmar os endpoints disponíveis antes da execução.
- Utilizar registros de teste para operações de alteração e exclusão.

---

## 9. Orientações de execução

- Utilizar somente dados fictícios.
- Preencher os demais campos obrigatórios com dados válidos.
- Registrar a massa utilizada em cada execução.
- Preservar a rastreabilidade entre cenários, execuções, bugs e evidências.
- Confirmar regras de negócio não documentadas antes de classificar comportamentos como defeitos.
