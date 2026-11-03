
# Relatório de Bugs — Interface

## BUG-IT-01 — Inconsistência na informação de utilização de EPI após o cadastro

**Execução de teste relacionada:** EV-IT-01  
**Cenário de teste relacionado:** CT-IT-01  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Google Chrome  

### 1. Descrição

Ao cadastrar um funcionário pela interface, selecionando a opção "O trabalhador não usa EPI", o sistema conclui o cadastro com sucesso.

Entretanto, ao consultar os dados do funcionário pela API, o campo `usesEpi` apresenta o valor `true`, enquanto o campo `caNumber` permanece vazio, evidenciando uma inconsistência entre a informação selecionada no formulário e os dados retornados pela API.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.
- Disponibilidade de um CPF para realização do cadastro.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos com os seguintes dados:
   - Situação do trabalhador: Ativo
   - Nome: Teste
   - CPF: 00123456789
   - RG: 01234567
   - Sexo: Masculino
   - O trabalhador não usa EPI: Marcado
   - ASO: Não anexar
3. Clicar no botão "Salvar".
4. Consultar o funcionário cadastrado pela API.
5. Verificar os valores retornados nos campos `usesEpi` e `caNumber`.

### 4. Resultado esperado

O sistema deve cadastrar o funcionário com sucesso e manter a informação de utilização de EPI consistente com a opção selecionada na interface.

Ao selecionar "O trabalhador não usa EPI", o campo `usesEpi` deve apresentar o valor booleano `false` na consulta à API.

### 5. Resultado obtido

O funcionário foi cadastrado com sucesso e apresentado na listagem. Entretanto, a consulta à API retornou os seguintes valores:

- `usesEpi`: `true`
- `caNumber`: `""`

O valor retornado no campo `usesEpi` não corresponde à opção selecionada durante o cadastro.

### 6. Evidências

**Evidência 01 — Inconsistência de dados entre interface e API**

[Evidência 01](../../Evidencias/EV-01.mp4)

---

## BUG-IT-02 — Ausência de validação de unicidade do CPF no cadastro de funcionários

**Execução de teste relacionada:** EV-IT-03  
**Cenário de teste relacionado:** CT-IT-03  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Google Chrome  

### 1. Descrição

Ao cadastrar um funcionário utilizando um CPF já existente no sistema, a aplicação conclui o cadastro sem impedir a duplicidade.

O novo funcionário é apresentado na listagem e seu registro também pode ser consultado pela API, contendo o CPF duplicado.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.
- Existência de um funcionário previamente cadastrado com o CPF utilizado no teste.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher o campo Nome com "Lucas Ferreira Teste".
3. Preencher o campo CPF com "121.212.412-31".
4. Preencher os demais campos obrigatórios com dados válidos.
5. Clicar no botão "Salvar".
6. Verificar o resultado do cadastro na listagem e na API.

### 4. Resultado esperado

O sistema deve impedir o cadastro de um funcionário com CPF já existente e apresentar uma mensagem de validação informando que o documento está associado a outro registro.

### 5. Resultado obtido

O sistema permite a conclusão do cadastro sem apresentar uma mensagem de validação referente à duplicidade do CPF.

O funcionário é apresentado na listagem com o CPF `00123456789`, e a consulta à API também retorna um registro contendo esse documento:

- `cpf`: `"00123456789"`

### 6. Evidências

**Evidência 02 — Cadastro de funcionário com CPF duplicado**

[Evidência 02](../../Evidencias/EV-03.mp4)

---

## BUG-IT-03 — Inconsistência na exibição da atividade associada ao funcionário

**Execução de teste relacionada:** EV-IT-03  
**Cenário de teste relacionado:** CT-IT-03  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Média  
**Prioridade:** Média  
**Ambiente:** Google Chrome  

### 1. Descrição

Ao cadastrar um funcionário e selecionar a atividade "Atividade 01", o sistema conclui o cadastro, porém a atividade associada não é apresentada nos dados do funcionário na listagem.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados válidos.
3. Manter a opção "Atividade 01" selecionada no campo de atividade.
4. Clicar no botão "Salvar".
5. Localizar o funcionário cadastrado na listagem.
6. Verificar a apresentação da atividade associada.

### 4. Resultado esperado

Após a conclusão do cadastro, a atividade "Atividade 01" deve permanecer associada ao funcionário e ser apresentada corretamente nos dados cadastrais, conforme o comportamento esperado da funcionalidade.

### 5. Resultado obtido

O sistema conclui o cadastro do funcionário, entretanto a atividade "Atividade 01" não é apresentada nos dados do registro consultado.

### 6. Evidências

**Evidência 04 — Inconsistência na exibição da atividade associada ao funcionário**

[Evidência 04](../../Evidencias/EV-03.mp4)

---

## BUG-IT-04 — Botão "Adicionar outra atividade" não executa a ação esperada

**Execução de teste relacionada:** EV-IT-04  
**Cenário de teste relacionado:** CT-IT-04  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Google Chrome  

### 1. Descrição

Ao acionar o botão "Adicionar outra atividade" durante o preenchimento do formulário, o sistema não disponibiliza uma nova atividade para associação ao funcionário.

Em vez disso, ocorre um redirecionamento para a listagem de funcionários, interrompendo o fluxo esperado de cadastro.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados válidos.
3. Preencher os campos necessários da seção de EPI.
4. Clicar no botão "Adicionar outra atividade".
5. Observar o comportamento da aplicação.

### 4. Resultado esperado

O sistema deve permitir a inclusão de outra atividade no cadastro do funcionário, sem redirecionar o usuário para outra página.

### 5. Resultado obtido

O sistema não adiciona uma nova atividade e redireciona o usuário para a página de listagem de funcionários.

### 6. Evidências

**Evidência 05 — Redirecionamento indevido ao adicionar outra atividade**

[Evidência 05](../../Evidencias/EV-04.mp4)

---

## BUG-IT-05 — Botão "Adicionar EPI" não executa a ação esperada

**Execução de teste relacionada:** EV-IT-05  
**Cenário de teste relacionado:** CT-IT-05  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Google Chrome  

### 1. Descrição

Ao preencher os dados necessários para inclusão de um EPI e acionar o botão "Adicionar EPI", o sistema não executa a ação esperada.

O EPI informado não é adicionado à interface de cadastro do funcionário.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados válidos.
3. Preencher os campos necessários da seção de EPI.
4. Clicar no botão "Adicionar EPI".
5. Verificar se o EPI foi incluído no formulário.

### 4. Resultado esperado

O sistema deve permitir a inclusão do EPI informado, apresentando-o corretamente na interface para associação ao funcionário.

### 5. Resultado obtido

Ao acionar o botão "Adicionar EPI", o sistema não inclui o equipamento informado nem o apresenta na interface de cadastro.

### 6. Evidências

**Evidência 06 — Botão "Adicionar EPI" sem resposta funcional**

[Evidência 06](../../Evidencias/EV-05.mp4)

---

## BUG-IT-06 — Cadastro de funcionário permitido com dados inválidos

**Execução de teste relacionada:** EV-IT-07  
**Cenário de teste relacionado:** CT-IT-08  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Google Chrome  

### 1. Descrição

O sistema permite a conclusão do cadastro de funcionários com dados inválidos em campos do formulário, sem apresentar mensagens de validação adequadas.

Esse comportamento indica uma possível falha nas validações de entrada da funcionalidade de cadastro.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados inválidos.
3. Clicar no botão "Salvar".
4. Verificar se o sistema impede o cadastro e apresenta mensagens de validação.

### 4. Resultado esperado

O sistema deve impedir o cadastro de funcionários com dados que não atendam às regras de validação estabelecidas, apresentando mensagens informativas nos campos correspondentes.

### 5. Resultado obtido

O sistema permite a conclusão do cadastro mesmo com dados inválidos, sem apresentar mensagens de validação para os campos preenchidos incorretamente.

### 6. Evidências

**Evidência 07 — Cadastro de funcionário com dados inválidos**

[Evidência 07](../../Evidencias/EV-07.mp4)

---

## BUG-IT-07 — Inconsistência na listagem de funcionários após alteração do filtro de situação

**Execução de teste relacionada:** EV-IT-09  
**Cenário de teste relacionado:**  CT-IT-10     
**Funcionalidade:** Listagem de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Google Chrome  

### 1. Descrição

Ao utilizar o filtro "Ver apenas ativos" e alternar sua seleção, a listagem apresenta registros adicionais inesperados, incluindo informações repetidas de um funcionário previamente cadastrado e registros com dados vazios.

Esse comportamento compromete a consistência dos dados apresentados na listagem.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso à página de listagem de funcionários.
- Existência de registros suficientes para permitir a rolagem vertical da listagem.

### 3. Passos para reproduzir

1. Acessar a listagem de funcionários.
2. Clicar no botão "Ver apenas ativos".
3. Clicar novamente no mesmo botão para alterar o estado do filtro.
4. Verificar os registros apresentados na listagem.

### 4. Resultado esperado

Ao ativar o filtro, o sistema deve apresentar apenas os funcionários com situação ativa.

Ao desativá-lo, a listagem deve retornar ao conjunto de registros correspondente ao estado original, sem apresentar duplicações ou registros inesperados.

### 5. Resultado obtido

Após a alteração do filtro, o sistema apresenta registros adicionais na listagem, incluindo informações repetidas do funcionário "Sea Teste" e registros com campos vazios.

### 6. Evidências

**Evidência 08 — Inconsistência na listagem após alteração do filtro**

[Evidência 08](../../Evidencias/EV-010.mp4)

---

## BUG-IT-08 — Inconsistência na exibição do cargo associado ao funcionário

**Execução de teste relacionada:** EV-IT-03  
**Cenário de teste relacionado:** CT-IT-03  
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Média  
**Prioridade:** Média  
**Ambiente:** Google Chrome  

### 1. Descrição

Ao cadastrar um funcionário com o cargo "Cargo 01" selecionado, o sistema conclui o cadastro, porém o cargo associado não é apresentado nos dados do funcionário na listagem.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados válidos.
3. Manter a opção "Cargo 01" selecionada no campo Cargo.
4. Clicar no botão "Salvar".
5. Localizar o funcionário cadastrado na listagem.
6. Verificar a apresentação do cargo associado.

### 4. Resultado esperado

Após a conclusão do cadastro, o cargo "Cargo 01" deve permanecer associado ao funcionário e ser apresentado corretamente nos dados cadastrais, conforme o comportamento esperado da funcionalidade.

### 5. Resultado obtido

O sistema conclui o cadastro do funcionário, entretanto o cargo "Cargo 01" não é apresentado nos dados do registro consultado.

### 6. Evidências

**Evidência 09 — Inconsistência na exibição do cargo associado ao funcionário**

[Evidência 09](../../Evidencias/EV-03.mp4)

---

## BUG-IT-09 — Inconsistência nos tipos de dados retornados pela API para funcionários cadastrados

**Execução de teste relacionada:** EV-IT-03    
**Cenário de teste relacionado:** CT-IT-03    
**Funcionalidade:** Cadastro de Funcionários  
**Severidade:** Alta  
**Prioridade:** Alta  
**Ambiente:** Google Chrome  

### 1. Descrição

Durante a consulta de funcionários cadastrados, foram identificadas diferenças nos tipos de dados retornados pela API para registros de funcionários distintos.

As inconsistências observadas envolvem os campos `id` e `usesEpi`, cujos valores apresentam diferenças entre os registros analisados.

### 2. Pré-condições

- Aplicação disponível e acessível.
- Acesso ao formulário de cadastro de funcionários.
- API disponível para consulta.
- Existência de funcionários previamente cadastrados para comparação.

### 3. Passos para reproduzir

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos com os seguintes dados:
   - Situação do trabalhador: Ativo
   - Nome: Mariana Costa Teste
   - CPF: 52961480370
   - RG: 5938274
   - Sexo: Feminino
   - Atividade: Ativid 02
   - EPI: Capacete de segurança
   - CA: 123456
   - ASO: Não anexar
3. Clicar no botão "Salvar".
4. Consultar o funcionário cadastrado pela API.
5. Consultar o registro do funcionário "QA-AUTO-E2-i-487f72".
6. Comparar os tipos e valores retornados nos campos `id` e `usesEpi`.

### 4. Resultado esperado

A API deve retornar os dados dos funcionários de maneira consistente com o contrato estabelecido, preservando os tipos de dados definidos para cada campo.

As informações retornadas também devem corresponder aos valores efetivamente registrados durante o cadastro.

### 5. Resultado obtido

O funcionário foi cadastrado com sucesso e apresentado na listagem. Entretanto, a comparação entre os registros consultados pela API revelou diferenças nos tipos e valores de determinados campos.

**Funcionário: QA-AUTO-E2-i-487f72**

- `id`: `701604` — número
- `usesEpi`: `true` — booleano

**Funcionário: Mariana Costa Teste**

- `id`: `"ef4b"` — string
- `usesEpi`: `false` — booleano

Foi identificada uma diferença no tipo de dado retornado pelo campo `id`, que apresenta um valor numérico em um registro e uma string em outro.

Também foi observada uma diferença no valor de `usesEpi` entre os funcionários consultados, sendo necessária a verificação das opções selecionadas durante os respectivos cadastros para determinar se existe uma inconsistência nesse campo.

### 6. Evidências

**Evidência 10 — Comparação dos dados retornados pela interface e API**

[Evidência 10](../../Evidencias/EV-10.mp4)

**Evidência 11 — Comparação dos tipos e valores dos campos retornados pela API**

[Evidência 11](../../Evidencias/EV-11.mp4)

---
