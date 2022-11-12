describe('Social Media App: Login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('#registerModal button[type=reset]').click();
    cy.get('header button[data-auth=login]').click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`ImBenni@noroff.no`, {
      force: true,
      delay: 100,
    });
    cy.wait(1000);
    cy.get('#loginPassword').type(`BenniBlanco`, { delay: 100 });
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.wait(3000);
  });

  it('CAN login', () => {
    cy.url().should('include', 'profile');
    cy.url().should('not.include', 'login');
    expect(localStorage.getItem('token')).to.not.be.null;
  });
});
