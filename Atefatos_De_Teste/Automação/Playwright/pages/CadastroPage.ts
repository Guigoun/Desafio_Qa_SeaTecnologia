
import { Page, Locator } from '@playwright/test';

export class CadastroPage {
  readonly page: Page;

  readonly botaoAdicionarFuncionario: Locator;
  readonly campoNome: Locator;
  readonly campoCpf: Locator;
  readonly campoRg: Locator;
  readonly campoDataNascimento: Locator;
  readonly checkboxSemEpi: Locator;
  readonly botaoSalvar: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoAdicionarFuncionario = page.getByRole('button', {
      name: '+ Adicionar Funcionário'
    });

    this.campoNome = page.locator('input[name="name"]');
    this.campoCpf = page.locator('input[name="cpf"]');
    this.campoRg = page.locator('input[name="rg"]');

    this.campoDataNascimento = page.locator('input[name="birthDay"]');

    this.checkboxSemEpi = page.getByRole('checkbox', {
      name: 'O trabalhador não usa EPI.'
    });

    this.botaoSalvar = page.getByRole('button', {
      name: 'Salvar'
    });
  }

  async acessarCadastro() {
    await this.page.goto('/');
    await this.botaoAdicionarFuncionario.click();
  }

  async preencherDadosPessoais(
    nome: string,
    cpf: string,
    rg: string,
    dataNascimento: string
  ): Promise<void> {
    await this.campoNome.fill(nome);
    await this.campoCpf.fill(cpf);
    await this.campoRg.fill(rg);
    await this.campoDataNascimento.fill(dataNascimento);
  }

  async selecionarSexo(
    sexo: 'Masculino' | 'Feminino'
 ): Promise<void> {
  await this.page.getByRole('radio', { name: sexo }).check();
 }

 async selecionarCargo(
   cargo: string
 ): Promise<void> {
  await this.page.getByText('Cargo 01').click();
  await this.page.getByText(cargo).nth(1).click();
 }

async selecionarAtividade(atividade: string): Promise<void> {
  await this.page.getByText('Ativid 01').click();

  await this.page.getByText(atividade, {
    exact: true
  }).last().click();
}
 
  async marcarSemEpi() {
    await this.checkboxSemEpi.check();
  }

  async salvar() {
    await this.botaoSalvar.click();
  }

}
