# Premissas e dúvidas a validar

### 1. Interface e Funcionalidades da Aplicação

- O CPF deve ser único para todos os funcionários, incluindo inativos?
- Quais campos são efetivamente obrigatórios?
- Quais regras de validação se aplicam ao RG e à data de nascimento?
- De acordo om os cargos sugeridos e regra de negócio deveria manter opção de não usar EPI?
- Existe quantidade máxima de EPIs ou atividades por funcionário?
- Como o número do CA é validado?
- Quais formatos e tamanhos de arquivo são aceitos para o ASO?
- A exclusão de funcionário é física ou lógica?
- Quais operações exigem autenticação ou autorização?

### 2. API Rest

- Existem diferenças entre as regras aplicadas na interface e na API?
- Qual a regra de contrato da API sobre os dados do JSON?
- Existe alguma regra para autenticação e autorização da API?
- Qual a regra de contrato d API sobre método PATCH?
- A API possui uma regra específica para campos JSON?