class AppPage {
  visit() {
    cy.visit('/');
  }

  shouldBeVisible() {
    return cy.get('body').should('be.visible');
  }

  shouldHaveContent() {
    return cy.get('body').should('exist');
  }

  getMainContainer() {
    return cy.get('[data-testid="app-container"]');
  }

  getNavigation() {
    return cy.get('nav');
  }
}

export const appPage = new AppPage(); 