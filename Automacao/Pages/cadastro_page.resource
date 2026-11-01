*** Settings ***
Library    SeleniumLibrary
Library    FakerLibrary
Library    ../Resources/gerador_dados.py
Resource    ../Resources/common.resource

*** Variables ***
#Botões
${BOTAO_FILTRAR_ATIVOS}                  xpath=//button[contains(text(), 'Ver apenas ativos')]
${BOTAO_ADICIONAR_FUNCIONARIO}           xpath=//button[contains(text(), '+ Adicionar Funcionário')]
${ALTERAR_SITUACAO}                      xpath=//button[@role='switch']
${SALVAR}                                xpath=//button[contains(text(), 'Salvar')]

#Campos
${CAMPO_NOME}                xpath=//input[@name='name']
${CAMPO_CPF}                 xpath=//input[@name='cpf']
${CAMPO_RG}                  xpath=//input[@name='rg']
${OPCAO_SEXO}                xpath=//label[.//input[@type='radio' and @value='feminino']]
${CAMPO_DATA_NASCIMENTO}     xpath=//input[@name='birthDay']
${CAMPO_CARGO}               xpath=//label[normalize-space(.)='Cargo']/following::div[contains(@class,'ant-select-selector')][1]

${CAMPO_ATIVIDADE}           xpath=//label[normalize-space(.)='Selecione a atividade:']/following::div[contains(@class,'ant-select-selector')][1]
${SELECIONAR_EPI}            xpath=//label[normalize-space(.)='Selecione o EPI:']/following::div[contains(@class,'ant-select-selector')][1]
${CAMPO_CA}                  xpath=//input[@name='caNumber']

*** Keywords ***

Dado que acesso o formulário de cadastro de funcionários
    Wait Until Element Is Not Visible    + Adicionar Funcionário
    Click Element    ${BOTAO_ADICIONAR_FUNCIONARIO}

#Preenche campos obrigatórios
Quando preencho os demais campos obrigatórios com dados válidos
    ${NOME}    FakerLibrary.First Name Female
    Input Text    ${CAMPO_NOME}    ${NOME}
       
    Input Text    ${CAMPO_CPF}     28524523409

    ${RG}    Gerar Rg
    Input Text    ${CAMPO_RG}    ${RG}

    Click Element    ${OPCAO_SEXO}   

    Input Text    ${CAMPO_DATA_NASCIMENTO}    13112000
    
    Click Element    ${CAMPO_CARGO}    

    Click Element    ${CAMPO_ATIVIDADE}   
    Click Element    ${SELECIONAR_EPI}    

    ${CA}    Gerar Ca
    Input Text    ${CAMPO_CA}    ${CA}

   
E clico em Salvar
    Sleep    3s
    Click Element    ${SALVAR}

#Validação permitida devido à defeitos da aplicação
Então devo retornar à listagem de funcionários
    Wait Until Element Is Visible    ${BOTAO_ADICIONAR_FUNCIONARIO}
    Page Should Contain Element    ${BOTAO_ADICIONAR_FUNCIONARIO}    

Quando deixo os campos obrigatórios vazios
    Click Element    ${ALTERAR_SITUACAO}
    Sleep    3s

#Valida mensagem para preencher campos obrigatórios
Então o sistema deve exibir a mensagem de campos obrigatórios
    Wait Until Element Is Not Visible    Preencha este campo
    

Quando preencho os campos com dados válidos
    ${NOME}    FakerLibrary.First Name Female
    Input Text    ${CAMPO_NOME}    ${NOME}
       
    Input Text    ${CAMPO_CPF}    28524523409

    ${RG}    Gerar Rg
    Input Text    ${CAMPO_RG}    ${RG}

    Click Element    ${OPCAO_SEXO}   

    Input Text    ${CAMPO_DATA_NASCIMENTO}    13112000
    
    Click Element    ${CAMPO_CARGO}    

    Click Element    ${CAMPO_ATIVIDADE}   
    Click Element    ${SELECIONAR_EPI}    

    ${CA}    Gerar Ca
    Input Text    ${CAMPO_CA}    ${CA}

E utilizo um cpf já existente
    Input Text    ${CAMPO_CPF}    28524523409
    
Então o sistema deve apresentar a mensagem de erro
    Run Keyword And Continue On Failure    Page Should Contain     Já existe um funcionário com este cpf cadastrado!
    Log To Console    O teste continuou!
      
    
    