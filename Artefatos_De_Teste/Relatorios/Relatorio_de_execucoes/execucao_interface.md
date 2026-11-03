
# Relatório de Execuções de Testes — Interface

## Evidência de Execução — EV-IT-01

### Informações do Teste

**ID do cenário:** CT-IT-01  
**Cenário:** Cadastro de funcionário com dados válidos  
**Data da execução:** 28/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Aprovado  

### 1. Dados Utilizados

- Situação: Aativo
- Nome: Teste
- CPF: 00123456789
- RG: 01234567
- Sexo: Masculino
- Data de nascimento: 12/05/1990
- Cargo: Cargo 02
- EPI: Trabalhador não utiliza EPI
- ASO: Não anexado

### 2. Passos Executados

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com os dados válidos definidos para o teste.
3. Marcar a opção "O trabalhador não usa EPI".
4. Clicar no botão "Salvar".
5. Verificar a apresentação do funcionário na listagem.
6. Consultar os dados do funcionário cadastrado pela API.

### 3. Resultado Esperado

O sistema deve concluir o cadastro do funcionário com sucesso, apresentando o registro na listagem e disponibilizando seus dados corretamente na API.

As informações retornadas devem corresponder aos valores informados durante o cadastro.

### 4. Resultado Obtido

O sistema concluiu o cadastro do funcionário com sucesso e apresentou o registro na listagem.

Entretanto, durante a consulta à API, foram identificados os seguintes valores:

- `usesEpi`: `true`
- `caNumber`: `""`

O valor retornado no campo `usesEpi` não corresponde à opção "O trabalhador não usa EPI", selecionada durante o cadastro.

### 5. Evidências

**Evidência 01 — Cadastro de funcionário com dados válidos e verificação das informações registradas**

[Evidência 01](../../Evidencias/EV-01.mp4)

---

## Evidência de Execução — EV-IT-02

### Informações do Teste

**ID do cenário:** CT-IT-02  
**Cenário:** Cadastro com campos obrigatórios vazios  
**Data da execução:** 28/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Aprovado  

### 1. Dados Utilizados

- Campos obrigatórios: Não preenchidos.

### 2. Passos Executados

1. Acessar o formulário de cadastro de funcionários.
2. Manter os campos obrigatórios sem preenchimento.
3. Clicar no botão "Salvar".
4. Verificar o comportamento do sistema e as mensagens de validação apresentadas.

### 3. Resultado Esperado

O sistema deve impedir a conclusão do cadastro e apresentar a mensagem de validação "Preencha este campo." para indicar a necessidade de preenchimento dos campos obrigatórios.

### 4. Resultado Obtido

O sistema impediu a conclusão do cadastro e apresentou uma mensagem de validação solicitando o preenchimento do campo obrigatório.

### 5. Evidências

**Evidência 02 — Validação de campos obrigatórios não preenchidos**

[Evidência 02](../../Evidencias/EV-02.mp4)

---

## Evidência de Execução — EV-IT-03

### Informações do Teste

**ID do cenário:** CT-IT-03  
**Cenário:** Cadastro de funcionário com CPF duplicado  
**Data da execução:** 28/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Reprovado  

### 1. Dados Utilizados

- Situação: Ativo
- Nome: Lucas Ferreira Teste
- CPF: 00123456789
- RG: 123456
- Sexo: Masculino
- Data de nascimento: 12/05/1990
- Cargo: Cargo 01
- Atividade: Atividade 01
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Não anexado

### 2. Passos Executados

1. Acessar o formulário de cadastro de funcionários.
2. Informar no campo CPF um documento previamente cadastrado no sistema.
3. Preencher os demais campos obrigatórios com os dados definidos para o teste.
4. Clicar no botão "Salvar".
5. Verificar se o sistema impede a duplicidade do cadastro.
6. Consultar a listagem e os registros retornados pela API.

### 3. Resultado Esperado

O sistema deve impedir o cadastro de um funcionário com CPF já existente e apresentar uma mensagem informativa indicando que o documento está associado a outro registro.

### 4. Resultado Obtido

O sistema permitiu a criação de um novo funcionário utilizando um CPF previamente cadastrado.

O registro foi apresentado na listagem e também pôde ser consultado pela API, que retornou o CPF duplicado.

### 5. Evidências

**Evidência 03 — Cadastro de funcionário com CPF já existente**

[Evidência 03](../../Evidencias/EV-03.mp4)

---

## Evidência de Execução — EV-IT-04

### Informações do Teste

**ID do cenário:** CT-IT-04  
**Cenário:** Adicionar outra atividade ao funcionário  
**Data da execução:** 28/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Reprovado  

### 1. Dados Utilizados

- Situação: Ativo
- Nome: Mariana Costa Teste
- CPF: 529.614.803-70
- RG: 5938274
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Atividade 02
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Não anexado

### 2. Passos Executados

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados válidos.
3. Selecionar a atividade definida para o teste.
4. Clicar no botão "Adicionar outra atividade".
5. Verificar o comportamento da aplicação.

### 3. Resultado Esperado

O sistema deve permitir a inclusão de outra atividade no formulário de cadastro, mantendo a atividade anteriormente selecionada.

Após a inclusão, a interface deve disponibilizar os campos necessários para associar uma nova atividade ao funcionário.

### 4. Resultado Obtido

Ao acionar a opção "Adicionar outra atividade", o sistema concluiu o cadastro do funcionário, mantendo apenas a primeira atividade atribuída.

Não foi disponibilizada a inclusão de uma nova atividade conforme o comportamento esperado.

### 5. Evidências

**Evidência 04 — Cadastro concluído sem permitir a inclusão de outra atividade**

[Evidência 04](../../Evidencias/EV-04.mp4)

---

## Evidência de Execução — EV-IT-05

### Informações do Teste

**ID do cenário:** CT-IT-05  
**Cenário:** Adicionar EPI ao funcionário  
**Data da execução:** 28/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Reprovado  

### 1. Dados Utilizados

- Situação: Ativo
- Nome: Mariana Costa Teste
- CPF: 52961480370
- RG: 5938274
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Atividade 03
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Não anexado

### 2. Passos Executados

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados válidos.
3. Preencher os campos da seção de EPI com os dados definidos para o teste.
4. Clicar no botão "Adicionar EPI".
5. Verificar se o equipamento foi incluído no formulário.

### 3. Resultado Esperado

O sistema deve permitir a inclusão do EPI informado e apresentá-lo corretamente na interface, possibilitando sua associação ao funcionário.

### 4. Resultado Obtido

O botão "Adicionar EPI" não executou a ação esperada, impedindo a inclusão do equipamento no formulário de cadastro.

### 5. Evidências

**Evidência 05 — Botão "Adicionar EPI" sem resposta funcional**

[Evidência 05](../../Evidencias/EV-05.mp4)

---

## Evidência de Execução — EV-IT-06

### Informações do Teste

**ID do cenário:** CT-IT-07  
**Cenário:** Anexar ASO ao cadastro do funcionário  
**Data da execução:** 28/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Aprovado  

### 1. Dados Utilizados

- Situação: Ativo
- Nome: Mariana Costa Teste 2
- CPF: 529.614.803-70
- RG: 5938274
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- EPI: Trabalhador não utiliza EPI
- ASO: Arquivo PDF

### 2. Passos Executados

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos obrigatórios com dados válidos.
3. Clicar no botão "Selecionar o arquivo".
4. Selecionar o arquivo utilizado como ASO.
5. Verificar se o arquivo selecionado é apresentado no formulário.
6. Clicar no botão "Salvar".
7. Verificar a conclusão do cadastro.

### 3. Resultado Esperado

O sistema deve permitir a seleção e apresentação do arquivo ASO no formulário.

Após o preenchimento dos demais campos necessários, o cadastro do funcionário deve ser concluído com sucesso.

### 4. Resultado Obtido

O sistema apresentou o arquivo ASO selecionado no formulário e concluiu o cadastro do funcionário com sucesso.

### 5. Evidências

**Evidência 06 — Seleção de ASO e conclusão do cadastro do funcionário**

[Evidência 06](../../Evidencias/EV-06.mp4)

---

## Evidência de Execução — EV-IT-07

### Informações do Teste

**ID do cenário:** CT-IT-08  
**Cenário:** Cadastro de funcionário com dados inválidos  
**Data da execução:** 28/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Reprovado  

### 1. Dados Utilizados

- Situação: Inativo
- Nome: `123456!@#$%`
- CPF: `529@AC2#247`
- RG: `781OHUFI@#$`
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Atividade 01
- EPI: Capacete de Segurança
- CA: `mdaih!@#@!$`
- ASO: Não anexado

### 2. Passos Executados

1. Acessar o formulário de cadastro de funcionários.
2. Preencher os campos com os dados inválidos definidos para o teste.
3. Clicar no botão "Salvar".
4. Verificar se o sistema impede a conclusão do cadastro.
5. Verificar a apresentação de mensagens de validação nos campos preenchidos incorretamente.

### 3. Resultado Esperado

O sistema deve validar os dados informados, impedir o cadastro quando os valores não atenderem às regras estabelecidas e apresentar mensagens de validação nos campos correspondentes.

### 4. Resultado Obtido

O sistema não apresentou mensagens de validação para os dados inválidos informados e permitiu a conclusão do cadastro do funcionário.

### 5. Evidências

**Evidência 07 — Cadastro de funcionário permitido com dados inválidos**

[Evidência 07](../../Evidencias/EV-07.mp4)

---

## Evidência de Execução — EV-IT-08

### Informações do Teste

**ID do cenário:** CT-IT-09  
**Cenário:** Visualização de funcionários na listagem  
**Data da execução:** 29/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Aprovado  

### 1. Dados Utilizados

- Funcionários previamente cadastrados no sistema.

### 2. Passos Executados

1. Acessar a aplicação.
2. Navegar até a página de listagem de funcionários.
3. Verificar a apresentação dos funcionários cadastrados e de seus respectivos dados.

### 3. Resultado Esperado

O sistema deve apresentar os registros dos funcionários cadastrados na listagem, exibindo os dados disponibilizados pela funcionalidade.

### 4. Resultado Obtido

O sistema apresentou os funcionários cadastrados na listagem, exibindo os respectivos dados.

### 5. Evidências

**Evidência 08 — Visualização da listagem de funcionários cadastrados**

[Evidência 08](../../Evidencias/EV-08.mp4)

---

## Evidência de Execução — EV-IT-09

### Informações do Teste

**ID do cenário:** CT-IT-10  
**Cenário:** Filtragem e exibição de funcionários ativos  
**Data da execução:** 29/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Aprovado  

### 1. Dados Utilizados

- Funcionários previamente cadastrados no sistema, incluindo registros com situação ativa.

### 2. Passos Executados

1. Acessar a aplicação.
2. Navegar até a listagem de funcionários.
3. Clicar no botão "Ver apenas ativos".
4. Verificar os funcionários apresentados após a aplicação do filtro.

### 3. Resultado Esperado

O sistema deve filtrar a listagem e apresentar apenas os funcionários com situação ativa, mantendo a exibição dos respectivos dados.

### 4. Resultado Obtido

O sistema aplicou o filtro e apresentou os funcionários com situação ativa, mantendo a exibição dos dados correspondentes.

### 5. Evidências

**Evidência 09 — Filtragem e visualização de funcionários ativos**

[Evidência 09](../../Evidencias/EV-09.mp4)

---

## Evidência de Execução — EV-IT-10

### Informações do Teste
***Teste Exploratório**    
**Cenário:** Suposto botão de ações do funcionário   
**Data da execução:** 29/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:** Reprovado  

### 1. Dados Utilizados

- Funcionários previamente cadastrados no sistema, incluindo registros com situação ativa.

### 2. Passos Executados

1. Acessar a aplicação.
2. Escolher um funcionário cadastrado visível na listagem.
3. Clicar nos 3 pontinhos no canto direito do cadastro.

### 3. Resultado Esperado

O sistema deve abrir uma lista de ações do funcionário como: Editar, vizualizar, alterar situação, excluir

### 4. Resultado Obtido

Não houve nenhuma interação da interface após clicar no "botão".

### 5. Evidências

**Evidência 10 — Botão de Ações do funcionário**

[Evidência 10](../../Evidencias/EV-24.mp4)

---

## Evidência de Execução — EV-IT-11

### Informações do Teste
***Teste Exploratório**    
**Cenário:** Conclusão de etapa   
**Data da execução:** 29/10/2026  
**Ambiente:** Homologação  
**Navegador:** Google Chrome  
**Status:**   Reprovado

### 1. Dados Utilizados

- Aplicação disponível e acessível
- Funcionários previamente cadastrados no sistema, incluindo registros com situação ativa.

### 2. Passos Executados

1. Acessar a aplicação.
2. Clicar no botão "A etapa está concluida?".
3. Clicar no botão "próximo passo".

### 3. Resultado Esperado

O sistema deve determinar a etapa como concluída, exibindo mensagem de conclusão e redirecionar o usuário para a próxima página da etapa

### 4. Resultado Obtido

O botão de situação alterou o texto para "Sim", o sistema exibiu a mensagem "CONCLUIDO" abaixo do ícone de etapas na parte superior da página,
no entando não houve nenhuma ação após clicar no boão "próximo passo"

### 5. Evidências

**Evidência 11 — Filtragem e visualização de funcionários ativos**

[Evidência 11](../../Evidencias/EV-25.mp4)

