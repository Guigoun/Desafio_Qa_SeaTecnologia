*** Settings ***
Library    SeleniumLibrary
Resource    ../Resources/common.resource
Resource    ../Pages/cadastro_page.resource

Test Setup    Abrir Sistema
Test Teardown    Fechar Sistema

*** Test Cases ***
#Deve Passar
CT-IT-01 - Cadastrar funcionário com dados válidos
    Dado que acesso o formulário de cadastro de funcionários
    Quando preencho os demais campos obrigatórios com dados válidos
    E clico em Salvar
    Então devo retornar à listagem de funcionários   
    
#Deve Passar
CT-IT-02 - Validação dos campos obrigatórios
    Dado que acesso o formulário de cadastro de funcionários
    Quando deixo os campos obrigatórios vazios
    E clico em Salvar
    Então o sistema deve exibir a mensagem de campos obrigatórios

#Deve Falhar
CT-IT-03 - Validação de unicidade do CPF
    Dado que acesso o formulário de cadastro de funcionários
    Quando preencho os campos com dados válidos
    E utilizo um cpf já existente
    E clico em Salvar
    Então o sistema deve apresentar a mensagem de erro


