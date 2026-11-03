import { test, expect } from '@playwright/test';

test('CT-API-01 - Listar funcionários', async ({ request }) => {
  const resposta = await request.get('/employees');

  expect(resposta.status()).toBe(200);

  const corpo = await resposta.json();

  console.log('Funcionários encontrados:', corpo);
});

test('CT-API-02 - Buscar funcionário por ID', async ({ request }) => {
  const id = 1;

  const resposta = await request.get(`/employees/${id}`);

  expect(resposta.status()).toBe(200);

  const corpo = await resposta.json();

  console.log('Funcionário encontrado:', corpo);
});


test('CT-API-03 - Cadastrar funcionário com dados válidos', async ({ request }) => {

  const dadosFuncionario = {
    id: `qa-${Date.now()}`,
    state: {
      employee: {
        isActive: true,
        name: 'Rafael Almeida Teste',
        gender: 'masculino',
        cpf: '704.183.625-80',
        birthDay: '10/11/1990',
        rg: '6149382',
        role: 'Cargo 1',
        usesEpi: true,
        activity: 'Ativid 01',
        epi: 'Protetor auditivo',
        caNumber: '00112233'
      }
    }
  };

  const resposta = await request.post('/employees', {
    data: dadosFuncionario
  });

  expect(resposta.status()).toBe(201);

  const corpo = await resposta.json();

  console.log('Funcionário cadastrado:', JSON.stringify(corpo, null, 2));
});


test('CT-API-06 - Cadastrar funcionário com dados inválidos', async ({ request }) => {

  const dadosFuncionario = {
    id: `qa-invalido-${Date.now()}`,
    state: {
      employee: {
        isActive: true,
        name: 'FDFFSFSFSD',
        gender: 'masculino',
        cpf: '111.111.111-11',
        birthDay: '10/11/1990',
        rg: '6149382',
        role: 'Cargo 1',
        usesEpi: true,
        activity: 'Ativid 01',
        epi: 'Protetor auditivo',
        caNumber: '00112233'
      }
    }
  };

  const resposta = await request.post('/employees', {
    data: dadosFuncionario
  });

  // Esperamos que a API rejeite o CPF inválido
  expect([400, 422]).toContain(resposta.status());

  console.log('Status recebido:', resposta.status());
  console.log('Resposta:', await resposta.text());
});


test('CT-API-08 - Atualizar funcionário com PATCH', async ({ request }) => {

  const id = '002';
  const novoNome = 'Sea Teste Atualizado';

  // Verificar se o funcionário existe antes do teste
  const consultaInicial = await request.get(`/employees/${id}`);

  expect(consultaInicial.status()).toBe(200);

  // Quantidade de funcionários antes da atualização
  const listaAntes = await request.get('/employees');
  expect(listaAntes.status()).toBe(200);

  const funcionariosAntes = await listaAntes.json();

  // Atualizar somente o nome
  const resposta = await request.patch(`/employees/${id}`, {
    data: {
      id: id,
      state: {
        employee: {
          name: novoNome
        }
      }
    }
  });

  console.log('Status PATCH:', resposta.status());
  console.log('Resposta PATCH:', await resposta.text());

  expect([200, 204]).toContain(resposta.status());

  // Consultar novamente o funcionário
  const consultaDepois = await request.get(`/employees/${id}`);

  expect(consultaDepois.status()).toBe(200);

  const funcionarioAtualizado = await consultaDepois.json();

  expect(funcionarioAtualizado.state.employee.name).toBe(novoNome);

  // Verificar se o PATCH não criou outro registro
  const listaDepois = await request.get('/employees');
  expect(listaDepois.status()).toBe(200);

  const funcionariosDepois = await listaDepois.json();

  expect(funcionariosDepois.length).toBe(funcionariosAntes.length);
});
