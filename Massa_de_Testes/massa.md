
# Massa de Testes — Sea Tecnologia

**Projeto:** Sistema de Gestão de Funcionários  
**Objetivo:** Definir dados para execução dos cenários de testes funcionais, negativos, de integração e de API REST.

---

## 1. Funcionários com dados válidos

**Cenários relacionados:** CT-01, CT-06, CT-07, CT-08, CT-10, CT-11, CT-13 e CT-API-03.

| ID | Nome | CPF | RG fictício | Nascimento | Sexo | Situação |
|---|---|---|---|---|---|---|
| MT-01 | Lucas Ferreira Teste | 381.742.906-13 | 4827163 | 15/03/1995 | Masculino | Ativo |
| MT-02 | Mariana Costa Teste | 529.614.803-70 | 5938274 | 22/07/1998 | Feminino | Ativo |
| MT-03 | Rafael Almeida Teste | 704.183.625-80 | 6149382 | 10/11/1990 | Masculino | Inativo |
| MT-04 | Juliana Martins Teste | 263.950.714-16 | 7251048 | 05/01/2001 | Feminino | Ativo |
| MT-05 | Pedro Henrique Teste | 846.271.395-19 | 8362159 | 18/09/1987 | Masculino | Inativo |
| MT-06 | Camila Oliveira Teste | 190.583.746-10 | 9473261 | 30/05/1997 | Feminino | Ativo |

**Observações:**
- Os nomes e RGs são fictícios.
- Os CPFs são dados sintéticos para testes e devem ser validados antes da execução. Não há garantia de que não correspondam a documentos reais.
- Os campos de cargo e atividade devem ser preenchidos com opções disponíveis na aplicação.
- A situação inicial deve ser configurada conforme a necessidade do cenário.
- Não utilizar informações pessoais reais.

---

## 2. Massa para validação de campos obrigatórios

**Cenário relacionado:** CT-02.

| ID | Campo | Valor informado | Resultado esperado |
|---|---|---|---|
| MT-07 | Nome | Vazio | Impedir cadastro e informar obrigatoriedade |
| MT-08 | CPF | Vazio | Impedir cadastro e informar obrigatoriedade |
| MT-09 | RG | Vazio | Impedir cadastro, se obrigatório |
| MT-10 | Data de nascimento | Vazio | Impedir cadastro e informar obrigatoriedade |

**Observações:**
- Preencher os demais campos obrigatórios com dados válidos.
- Executar cada validação individualmente.
- Confirmar quais campos são obrigatórios na aplicação.
- Registrar as mensagens de erro apresentadas.

---

## 3. Massa para dados inválidos

**Cenário relacionado:** CT-09.

| ID | Campo | Valor informado | Resultado esperado |
|---|---|---|---|
| MT-11 | CPF | 111.111.111-11 | Rejeitar CPF inválido |
| MT-12 | CPF | 123.456.789-00 | Rejeitar CPF inválido |
| MT-13 | CPF | 123456789 | Rejeitar CPF incompleto |
| MT-14 | CPF | ABC.DEF.GHI-JK | Rejeitar caracteres inválidos |
| MT-15 | Data de nascimento | 31/02/2000 | Rejeitar data inexistente |
| MT-16 | Data de nascimento | 15/03/2030 | Rejeitar data futura, conforme regra |
| MT-17 | Nome | A | Verificar tamanho mínimo, se definido |

**Observações:**
- Manter os demais campos preenchidos corretamente.
- Verificar se o sistema impede o cadastro.
- Registrar a mensagem apresentada.
- Confirmar as regras de validação antes de classificar um comportamento como defeito.

---

## 4. Massa para CPF duplicado

**Cenário relacionado:** CT-03.

| ID | Nome | CPF | Condição | Resultado esperado |
|---|---|---|---|---|
| MT-18 | Funcionário Duplicado Teste | CPF do MT-01 | CPF previamente cadastrado | Impedir cadastro duplicado |

**Pré-condições:**
- O funcionário MT-01 deve estar cadastrado.
- O CPF utilizado deve existir na base.
- A regra de unicidade do CPF deve estar confirmada.

**Resultado esperado:**
- O sistema não deve criar um segundo cadastro com o mesmo CPF.
- Deve apresentar uma mensagem informando o conflito, conforme a regra de negócio.

---

## 5. Massa para associação de EPIs

**Cenário relacionado:** CT-04.

| ID | Quantidade de EPIs | Número do CA | Objetivo |
|---|---|---|---|
| MT-EPI-01 | 1 | CA válido confirmado | Associação simples |
| MT-EPI-02 | 2 | Dois CAs válidos confirmados | Associação múltipla |
| MT-EPI-03 | 0 | Não aplicável | Verificar obrigatoriedade |
| MT-EPI-04 | 1 | Vazio | Verificar obrigatoriedade do CA |
| MT-EPI-05 | 1 | ABC123 | Verificar formato do CA |
| MT-EPI-06 | 2 | Mesmo CA repetido | Verificar tratamento de duplicidade |

**Observações:**
- Selecionar EPIs disponíveis na aplicação.
- Utilizar números de CA confirmados para os testes positivos.
- Verificar se todos os EPIs adicionados permanecem associados ao funcionário.
- Confirmar as regras de obrigatoriedade, quantidade e duplicidade.

---

## 6. Massa para anexo de ASO

**Cenário relacionado:** CT-05.

| ID | Arquivo | Objetivo |
|---|---|---|
| MT-ASO-01 | Sem anexo | Validar cadastro sem ASO |
| MT-ASO-02 | aso_teste.pdf | Validar envio de PDF |
| MT-ASO-03 | aso_teste.png | Verificar aceitação de imagem |
| MT-ASO-04 | arquivo_teste.txt | Verificar tratamento de formato não permitido |
| MT-ASO-05 | arquivo_vazio.pdf | Verificar tratamento de arquivo vazio |

**Observações:**
- Utilizar documentos fictícios.
- Confirmar os formatos aceitos.
- Verificar se o arquivo permanece associado ao cadastro.
- Não utilizar documentos médicos reais.

---

## 7. Massa para listagem e situação cadastral

**Cenários relacionados:** CT-06, CT-07, CT-08, CT-10, CT-11, CT-12 e CT-13.

| ID | Funcionário | Situação inicial | Operação | Resultado esperado |
|---|---|---|---|---|
| MT-LST-01 | MT-01 | Ativo | Filtrar ativos | Funcionário exibido |
| MT-LST-02 | MT-03 | Inativo | Filtrar ativos | Funcionário não exibido |
| MT-LST-03 | MT-02 | Ativo | Inativar | Situação alterada para inativo |
| MT-LST-04 | MT-05 | Inativo | Ativar | Situação alterada para ativo |
| MT-LST-05 | MT-04 | Ativo | Editar nome | Alteração persistida |
| MT-LST-06 | MT-06 | Ativo | Excluir | Aplicar regra de exclusão |
| MT-LST-07 | Registros adicionais | Variada | Navegar pela listagem | Acessar registros além dos inicialmente exibidos |

**Observações:**
- Confirmar a situação inicial antes da execução.
- Utilizar funcionários distintos para edição e exclusão.
- Registrar a ausência de recursos de navegação caso impeça o acesso aos registros.
- Não excluir registros necessários para outros testes.

---

## 8. Massa para testes de API REST

**Cenários relacionados:** CT-API-01, CT-API-02, CT-API-03 e CT-API-04.

| ID | Operação | Dados utilizados | Resultado esperado |
|---|---|---|---|
| MT-API-01 | GET | Endpoint de funcionários | Retornar resposta conforme contrato |
| MT-API-02 | GET | Funcionário MT-01 | Retornar dados correspondentes |
| MT-API-03 | Método não permitido | Endpoint existente | Rejeitar operação conforme contrato |
| MT-API-04 | GET após cadastro | CPF de funcionário recém-cadastrado | Confirmar persistência |
| MT-API-05 | GET após inativação | Funcionário MT-02 | Retornar situação atualizada |
| MT-API-06 | Requisição sem credenciais | Endpoint protegido, se existir | Impedir acesso não autorizado |

**Observações:**
- Identificar os endpoints e métodos HTTP disponíveis.
- Verificar os códigos de status HTTP.
- Validar a estrutura das respostas.
- Comparar os dados retornados com os dados cadastrados pela interface.
- Verificar se informações pessoais estão protegidas conforme as regras de acesso.
- Não presumir autenticação obrigatória sem confirmar os requisitos.

---

## 9. Relacionamento entre cenários e massas de teste

| Cenário | Massa utilizada |
|---|---|
| CT-01 | MT-01 |
| CT-02 | MT-07 a MT-10 |
| CT-03 | MT-18 |
| CT-04 | MT-EPI-02 |
| CT-05 | MT-ASO-02 |
| CT-06 | MT-01 a MT-06 |
| CT-07 | MT-LST-01 e MT-LST-02 |
| CT-08 | MT-LST-03 |
| CT-09 | MT-11 a MT-17 |
| CT-10 | MT-LST-05 |
| CT-11 | MT-LST-06 |
| CT-12 | MT-LST-07 |
| CT-13 | MT-01 |
| CT-API-01 | MT-API-01 |
| CT-API-02 | MT-API-03 |
| CT-API-03 | MT-API-04 |
| CT-API-04 | MT-API-06 |

---

## 10. Orientações para execução

- Preparar a massa antes da execução dos cenários.
- Verificar se os CPFs utilizados já existem na base.
- Utilizar dados exclusivamente para testes.
- Registrar os dados efetivamente utilizados nas evidências.
- Manter a rastreabilidade entre cenário, massa de teste e evidência.
- Evitar reutilizar registros alterados ou excluídos sem restaurar seu estado.
- Documentar eventuais limitações do ambiente.
- Não considerar como defeito um comportamento cuja regra de negócio ainda não tenha sido confirmada.
