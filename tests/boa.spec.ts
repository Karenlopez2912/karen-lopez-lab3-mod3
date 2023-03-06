import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.boa.bo/');
  await page.locator('#select_desde').selectOption('CBB');
  await page.locator('#select_hasta').selectOption('VVI');
  await page.locator('#picker_salida').click();
  await page.getByRole('row', { name: '5 6 7 8 9 10 11' }).getByRole('link', { name: '8' }).click();
  await page.locator('#picker_regreso').click();
  await page.getByRole('row', { name: '9 10 11 12 13 14 15' }).getByRole('link', { name: '12' }).click();
  await page.getByText('Search').click();
});