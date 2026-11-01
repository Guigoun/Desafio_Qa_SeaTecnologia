*** Settings ***
Library    SeleniumLibrary
Resource    ../Resources/common.resource

*** Variables ***
${VER_APENAS_ATIVOS}     xpath=//button[contains(text(), 'Ver apenas ativos')]


*** Keywords ***

E clico no botão para filtrar funcionários ativos   
    Wait Until Element Is Not Visible    Ver Apenas Ativos
    Click Element    ${VER_APENAS_ATIVOS}