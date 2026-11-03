
import { test, expect } from '@playwright/test';
import { CadastroPage } from '../../pages/CadastroPage';

test('CT-IT-01 - Preenchimento inicial do cadastro', async ({ page }) => {
  const cadastro = new CadastroPage(page);

  await cadastro.acessarCadastro();

  await cadastro.preencherDadosPessoais(
    'Teste',
    '00123456789',
    '01234567',
    '1990-05-12'
  );

  await cadastro.selecionarSexo('Masculino');
  await cadastro.selecionarCargo('Cargo 02');
  await cadastro.selecionarAtividade('Ativid 02');
  await cadastro.marcarSemEpi();

  await expect(cadastro.campoNome).toHaveValue('Teste');
  await expect(cadastro.campoCpf).toHaveValue('00123456789');
  await expect(cadastro.campoRg).toHaveValue('01234567');
  await expect(cadastro.campoDataNascimento).toHaveValue('1990-05-12');
  await expect(cadastro.checkboxSemEpi).toBeChecked();

  await cadastro.salvar();

  await page.pause();
});

test('CT-IT-02 - Cadastro com campos obrigatórios vazios', async ({ page }) => {
  const cadastro = new CadastroPage(page);

  await cadastro.acessarCadastro();

  // Tenta salvar sem preencher os campos obrigatórios
  await cadastro.salvar();

  // Verifica se o formulário continua aberto
  await expect(cadastro.campoNome).toBeVisible();

  // Verifica se o nome permanece vazio
  await expect(cadastro.campoNome).toHaveValue('');
});

test('CT-IT-03 - Cadastro com CPF duplicado', async ({ page }) => {
  const cadastro = new CadastroPage(page);

  await cadastro.acessarCadastro();

  await cadastro.preencherDadosPessoais(
    'Funcionário Teste Duplicado',
    '00123456789',
    '1234567',
    '2003-06-18'
  );

  await cadastro.selecionarSexo('Masculino');
  await cadastro.selecionarCargo('Cargo 02');
  await cadastro.selecionarAtividade('Ativid 05');
  await cadastro.marcarSemEpi();

  await cadastro.salvar();

  // Verificação de rejeição será adicionada
  // conforme o comportamento real da aplicação.
});

test('CT-IT-08 - Cadastro com dados inválidos', async ({ page }) => {
  const cadastro = new CadastroPage(page);

  await cadastro.acessarCadastro();

  await cadastro.preencherDadosPessoais(
    '231343424234',
    '!@#@$@!kdsaj',
    'fliakse',
    '2003-06-18'
  );

  await cadastro.selecionarSexo('Masculino');
  await cadastro.selecionarCargo('Cargo 02');
  await cadastro.selecionarAtividade('Ativid 05');
  await cadastro.marcarSemEpi();

  await cadastro.salvar();

  // O cadastro deve ser rejeitado.
  // Verificaremos a mensagem de validação na próxima etapa.
});