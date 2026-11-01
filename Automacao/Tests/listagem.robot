*** Settings ***
Library    SeleniumLibrary
Resource    ../Resources/common.resource
Resource    ../Pages/listagem_page.resource

Test Setup    Abrir Sistema
Test Teardown    Fechar Sistema

*** Test Cases ***

CT-IT-09 - Filtrar funcionário ativos no sistema
    E clico no botão para filtrar funcionários ativos