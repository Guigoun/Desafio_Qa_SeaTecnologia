
# Evidência de Execução - EV-01

## Informações do Teste

**ID:** CT-01  
**Cenário:**  Cadastrar funcionário com dados válidos
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Chrome
**Status:** Aprovado  

---

## 1. Dados Utilizados
- Situação: Inativo
- Nome: Teste
- CPF: 00123456789
- RG: 01234567
- Sexo: Masculino
- Data de Nascimento: 12/05/1990
- Cargo: Cargo 01
- Atividade: Ativid 1
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Não anexado

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Preencha os campos obrigatórios com os dados válidos fornecidos
3. Clique no botão "Salvar"

---

## 3. Resultado Esperado

O sistema deve cadastrar o funcionário com sucesso e deve ser exibido na lista 

---

## 4. Resultado Obtido

O sistema cadastra o funcionário com sucesso e é exibido na lista

---

## 5. Evidências

**Evidência 01 — [Preenchimento dos campos obrigatórios com dados válidos fornecidos]**

![Evidência 01](../evidencias/CT-XXX/evidencia-01.png)

**Evidência 02 — [Descrição]**

![Evidência 02](../evidencias/CT-XXX/evidencia-02.png)

---

## 6. Observações

A página de listagem não possui um scroll ou um campo para buscar funcionários cadastrados,
por isso a única evidência viável utilizada foi o payload da API

---

# Evidência de Execução — EV-02

## Informações do Teste

**ID:** CT-02  
**Cenário:**  Cadastro com campos obrigatórios vazios
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Chrome
**Status:** Aprovado   

---

## 1. Dados Utilizados

- Nenhum -> Campos em branco

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Deixe os campos obrigatórios em branco
3. Clique no botão "Salvar"

---

## 3. Resultado Esperado

O sistema deve impedir o cadastro do funcionário e apresentar a mensagem "Preencha este campo."


---

## 4. Resultado Obtido

O sistema impede o cadastro e exibe a mensagem para preenchimento do campo obrigatório

---

## 5. Evidências

**Evidência 03 — [Campos obrigatórios em branco]**

![Evidência 03](../evidencias/CT-XXX/evidencia-01.png)

---


# Evidência de Execução — EV-03

## Informações do Teste

**ID:** CT-03 
**Cenário:**  Cadastro com CPF duplicado
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Chrome
**Status:** Reprovado

---

## 1. Dados Utilizados
- Situação: Inativo
- nome: Lucas Ferreira Teste
- CPF: 121.212.412-31
- RG: 123456
- Sexo: Masculino
- Data de Nascimento: 12/05/1990
- Cargo: Cargo 01
- Atividade: Ativid 1
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Não anexado

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Preencha o campo CPF com um algum já cadastrado
3. Preencha os demais campos obrigatórios
4. Clique em "Salvar"

---

## 3. Resultado Esperado

O sistema deve impedir o cadastro do funcionário e apresentar uma mensagem informando que o sistema já possui um funcionário com o CPF inserido cadastrado

---

## 4. Resultado Obtido

O sistema não valida o campo CPF e realiza o cadastro do funcionário

---

## 5. Evidências

**Evidência 04 — [CPF de funcionário cadastrado]**

![Evidência 04](../evidencias/CT-XXX/evidencia-01.png)

**Evidência 05 — [Preenchimento do campo com cpf já cadastrado e dos demais campos obrigatórios]**

![Evidência 05](../evidencias/CT-XXX/evidencia-02.png)

**Evidência 06 — [Cadastro realizado com duplicidade do CPF]**

![Evidência 06](../evidencias/CT-XXX/evidencia-02.png)
---

## 6. Observações

A página de listagem não possui um scroll ou um campo para buscar funcionários cadastrados,
por isso a única evidência viável utilizada foi o payload da API

---


# Evidência de Execução — EV-04

## Informações do Teste

**ID:** CT-04 
**Cenário:**  Associação de múltplos EPIs à um funcionário
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Google Chrome
**Status:** Reprovado  

---

## 1. Dados Utilizados

- Situação: Inativo  
- nome: Mariana Costa Teste
- CPF: 529.614.803-70
- RG: 5938274
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Ativid 01
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Não anexado

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Preencha os campos com dádos válidos
3. Preecha os campoo da sessão de EPI com dados válidos
4. Clique em "Adicionar EPI"

---

## 3. Resultado Esperado
O sistema deve associar o EPI ao funcionário e exibi-lo na interface

---

## 4. Resultado Obtido
O sistema não associa o EPI ao funcionário não o exibindo-o na interface

---

## 5. Evidências

**Evidência 01 — [Botão para "Adicionar EPI Inativo"]**

![Evidência 01](../evidencias/CT-XXX/evidencia-01.png)

---

# Evidência de Execução — EV-05

## Informações do Teste

**Teste Exploratório** 
**Cenário:**  Adicionar outra atividade à um funcionário
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Google Chrome
**Status:** Reprovado  

---

## 1. Dados Utilizados

- Situação: Inativo  
- nome: Mariana Costa Teste
- CPF: 529.614.803-70
- RG: 5938274
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Ativid 01
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Não anexado

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Preencha os campos com dádos válidos
4. Clique em "Adicionar outra atividade"

---

## 3. Resultado Esperado

O sistema exibir a nova atividade adicionada ao funcionário

---

## 4. Resultado Obtido

O sistema não adiciona atividade ao funcionário e redireciona para Listagem de produtos

---

## 5. Evidências

**Evidência 07 — [Botão para "Adicionar EPI Inativo"]**

![Evidência 07](../evidencias/CT-XXX/evidencia-01.png)

---

# Evidência de Execução — EV-06

## Informações do Teste
**ID:** CT-05
**Cenário:** Anexar ASO no cadastro do funcionário
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Google Chrome
**Status:** Reprovado

---

## 1. Dados Utilizados

- Situação: Inativo  
- nome: Mariana Costa Teste
- CPF: 529.614.803-70
- RG: 5938274
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Ativid 01
- EPI: Capacete de Segurança
- CA: 123456
- ASO: Arquivo pdf

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Preencha os campos com dádos válidos
3. Clique no botão "Selecionar o arquivo"
4. Anexe o arquivo desejado (ex: pdf, jpeg)
5. Clique em salvar
---

## 3. Resultado Esperado

O sistema deve cadastrar o funcionário com sucesso e o ASO deve estar associado ao cadastro

---

## 4. Resultado Obtido

O sistema não adiciona atividade ao funcionário e redireciona para Listagem de produtos

---

## 5. Evidências

**Evidência 08 — [Botão para "Adicionar EPI Inativo"]**

![Evidência 08](../evidencias/CT-XXX/evidencia-01.png)

## 6. Observações

A página de listagem não possui um scroll ou um campo para buscar funcionários cadastrados,
por isso a única evidência viável utilizada foi o payload da API

---

# Evidência de Execução — EV-07

## Informações do Teste
**ID:** CT-06
**Cenário:** Cadastro com dados inválidos
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Google Chrome
**Status:** Aprovado

---

## 1. Dados Utilizados

- Situação: Inativo  
- nome: 123456!@#$%
- CPF: 529@AC2#247
- RG: 781OHUFI@#$
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Ativid 01
- EPI: Capacete de Segurança
- CA: mdaih!@#@!$
- ASO: Não anexado

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Preencha os campos com dádos válidos
3. Clique no botão "Selecionar o arquivo"
4. Anexe o arquivo desejado (ex: pdf, jpeg)
5. Clique em salvar
---

## 3. Resultado Esperado

O sistema deve impedir o cadastro do funcionário e exibir mensagens dados inválidos nos campos

---

## 4. Resultado Obtido

O sistema não valida os campos obrigatórios e cadastra o funcionário

---

## 5. Evidências

**Evidência 09 — [Sistema permite cadastro do funcionário com dados inválidos]**

![Evidência 09](../evidencias/CT-XXX/evidencia-01.png)

## 6. Observações

A página de listagem não possui um scroll ou um campo para buscar funcionários cadastrados,
por isso a única evidência viável utilizada foi o payload da API

---

# Evidência de Execução — EV-08

## Informações do Teste

**Cenário:** Cadastro com dados inválidos
**Data da execução:**  28/10/2026
**Ambiente:**  Homologação
**Navegador:**  Google Chrome
**Status:** Aprovado

---

## 1. Dados Utilizados

- Situação: Inativo  
- nome: 123456!@#$%
- CPF: 529@AC2#247
- RG: 781OHUFI@#$
- Sexo: Feminino
- Data de nascimento: 22/07/1998
- Cargo: Cargo 02
- Atividade: Ativid 01
- EPI: Capacete de Segurança
- CA: mdaih!@#@!$
- ASO: Não anexado

---

## 2. Passos Executados

1. Acesse o formulário de cadastro
2. Preencha os campos com dádos válidos
3. Clique no botão "Selecionar o arquivo"
4. Anexe o arquivo desejado (ex: pdf, jpeg)
5. Clique em salvar
---

## 3. Resultado Esperado

O sistema deve impedir o cadastro do funcionário e exibir mensagens dados inválidos nos campos

---

## 4. Resultado Obtido

O sistema não valida os campos obrigatórios e cadastra o funcionário

---

## 5. Evidências

**Evidência 09 — [Sistema permite cadastro do funcionário com dados inválidos]**

![Evidência 09](../evidencias/CT-XXX/evidencia-01.png)

## 6. Observações

A página de listagem não possui um scroll ou um campo para buscar funcionários cadastrados,
por isso a única evidência viável utilizada foi o payload da API
