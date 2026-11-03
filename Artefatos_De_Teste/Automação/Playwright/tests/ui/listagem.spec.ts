import { test, expect } from '@playwright/test';
import { ListagemPage } from '../../pages/ListagemPage';

test('CT-IT-10 - Filtrar funcionários ativos', async ({ page }) => {
  const listagem = new ListagemPage(page);

  await listagem.acessarListagem();

  await listagem.filtrarAtivos();

  await expect(
    page.getByRole('button', { name: 'Limpar filtros' })
  ).toBeVisible();
});