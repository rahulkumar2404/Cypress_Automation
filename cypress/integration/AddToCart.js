it('Test2', function () {

    cy.visit("https://demo.nopcommerce.com/");
    //cy.xpath("//input[@aria-label='Search store']").type('shoes');
    cy.get('.search-box-text.ui-autocomplete-input').type('shoes')
    cy.xpath("//button[contains(text(),'Search')]").click()

    cy.get('.search-results').find('.product-item').each(($el, index, $list) => {
       const shoename = $el.find('h2.product-title').text()
       if(shoename.includes('Campus'))
        {
            cy.wrap($el).find('.button-2.product-box-add-to-cart-button').click()
        }
    })

   cy.get('.header-logo').then(function(logo){
    cy.log(logo.text())
   })


})