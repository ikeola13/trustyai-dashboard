import { appPage } from '../../pages/appPage';
import { checkAppLoaded, visitApp } from '../../support/commands/common';

describe('TrustyAI Dashboard - Smoke Tests', () => {
  beforeEach(() => {
    visitApp();
  });

  it('should load the application successfully', () => {
    checkAppLoaded();
    appPage.shouldBeVisible();
  });

  it('should display main content', () => {
    appPage.shouldHaveContent();
  });

  it('should render without crashing', () => {
    appPage.shouldBeVisible();
    cy.get('html').should('contain.html', 'body');
  });
});
