from faker import Faker
import random

fake = Faker("pt_BR")

#Gerar CPF padrão Brasil
def gerar_cpf():
    return fake.cpf()

#Gerar rg
def gerar_rg():
    return fake.rg()

#Gerar CA
def gerar_ca():
    return str(random.randint(10000, 99999))

#Gerar data de Nascimento
def gerar_data_nascimento():
    return fake.date_of_birth(
        minimum_age=18,
        maximum_age=60
    ).isoformat()