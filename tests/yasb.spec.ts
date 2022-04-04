import { test, expect, Page } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://yasb.app/')
})

test.describe('Adding single pilot in squad', () => {
  test('adding Luke Skywalker in Rebels', async ({ page }) => {
    // Add Luke Skywalker in T-65 X-Wing
    await page.locator('span[id="select2-chosen-6"]').click()
    await page.locator('input[id="s2id_autogen6_search"]').type('T-65 X-Wing')
    await page.locator('div[role="option"]:has-text("T-65 X-Wing")').click()
    await page.locator('text=Blue Squadron Escort (4/4)').click()
    await page.locator('#s2id_autogen8_search').click()
    await page.locator('#s2id_autogen8_search').type('Luke Skywalker')
    await Promise.all([page.locator('text=Luke Skywalker (7/28)').click()])

    await page.locator('text=No Astromech Upgrade').click()
    await page.locator('#s2id_autogen169_search').fill('R2-D2')
    await Promise.all([page.locator('text=R2-D2 (8)').click()])

    await page.locator('text=No Modification Upgrade').click()
    await page.locator('#s2id_autogen171_search').fill('Afterburners')
    await Promise.all([page.locator('text=Afterburners (6)').click()])

    // Reset squad after testing one pilot if working
    await page.locator('#rebel-builder button:has-text("New Squad")').click()
    await page.locator('.btn-danger:has-text("Discard Changes")').click()
  })
  test('adding Darth Vader in Galactic Empire', async ({ page }) => {
    await Promise.all([page.locator('#empireTab').click()])
    await page.locator('#select2-chosen-14').click()
    await page.locator('#s2id_autogen14_search').fill('TIE Advanced x1')
    await page.locator('div[role="option"]:has-text("TIE Advanced x1")').click()
    await page.locator('text=Storm Squadron Ace (3/2)').click()
    await Promise.all([page.locator('text=Darth Vader (8/22)').click()])
    await page.locator('#select2-chosen-108').click()
    await Promise.all([
      page.locator('div[role="option"]:has-text("Hate (4)")').click(),
    ])

    await page.locator('#empire-builder button:has-text("New Squad")').click()
    await page.locator('.btn-danger:has-text("Discard Changes")').click()
  })
  test('adding Boba Fett in Scum and Villany', async ({ page }) => {
    await Promise.all([page.locator('#scumTab').click()])
    await page.locator('#select2-chosen-22').click()
    await page
      .locator('#s2id_autogen22_search')
      .fill('Firespray-class Patrol Craft')
    await page
      .locator('div[role="option"]:has-text("Firespray-class Patrol Craft")')
      .click()
    await page.locator('text=Bounty Hunter (7/6)').click()
    await Promise.all([page.locator('text=Boba Fett (10/22)').click()])
    await page.locator('text=No Talent Upgrade').click()
    await Promise.all([
      page.locator('div[role="option"]:has-text("Fearless (3)")').click(),
    ])

    await page.locator('#scum-builder button:has-text("New Squad")').click()
    await page.locator('.btn-danger:has-text("Discard Changes")').click()
  })
})
