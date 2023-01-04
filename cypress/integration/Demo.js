



it('Test1', function () {

    cy.visit("https://demo.nopcommerce.com/");
    //cy.xpath("//input[@aria-label='Search store']").type('apple');
    cy.get('.search-box-text.ui-autocomplete-input').type('apple')
    cy.xpath("//button[contains(text(),'Search')]").click()
    cy.get('.picture').should('have.length',2)


})
