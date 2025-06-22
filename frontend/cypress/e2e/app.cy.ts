describe('TrustyAI Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the application', () => {
    // Check that the app loads
    cy.get('body').should('be.visible');
  });

  it('should display the main content', () => {
    // Basic smoke test - just check the page loads
    cy.get('body').should('exist');
  });

  it('should render without crashing', () => {
    // Basic smoke test
    cy.get('body').should('be.visible');
    cy.get('html').should('contain.html', 'body');
  });
});
