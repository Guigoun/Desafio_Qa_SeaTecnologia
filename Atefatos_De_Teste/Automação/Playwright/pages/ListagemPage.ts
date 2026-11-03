import { Page, Locator } from '@playwright/test';

export class ListagemPage {
  readonly page: Page;
  readonly botaoFiltrarAtivos: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoFiltrarAtivos = page.getByRole('button', {
      name: 'Ver apenas ativos'
    });
  }

  async acessarListagem(): Promise<void> {
    await this.page.goto('/');
  }

  async filtrarAtivos(): Promise<void> {
    await this.botaoFiltrarAtivos.click();
  }
}