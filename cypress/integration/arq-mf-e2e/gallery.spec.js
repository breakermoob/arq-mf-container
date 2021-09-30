describe("Test de componente de busqueda en el Home ", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it('Hola', () => {
        cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    })

    // afterEach(() => {
    //     cy.get('[data-cy=navOpen]').click();
    //     cy.get('[data-cy=navButtonLogout]').last().click();
    // })
});