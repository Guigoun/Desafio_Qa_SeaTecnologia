*** Settings ***
Library    SeleniumLibrary
Resource    variables.resource

*** Keywords ***

Abrir Sistema
    Open Browser    ${BASE_URL}    ${BROWSER}
    Maximize Browser Window

Fechar Sistema
    Close All Browsers    

