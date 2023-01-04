describe('TestCases', function(){

    let r = (Math.random() + 1).toString(36).substring(7);
    let userName = r

    it('Register', function () {
    
        cy.visit("https://demo.nopcommerce.com/");
        cy.get('.ico-register').click()
        cy.xpath("//input[@id='gender-male']").check().should('be.checked').and('have.value','M')
        cy.xpath("//div[@class='inputs']//input[@name='FirstName']").type(r)
        cy.log(r);
        cy.xpath("//div[@class='inputs']//input[@name='LastName']").type('Gandhi')
        cy.xpath("//select[@name='DateOfBirthDay']").select('13').should('have.value','13')
        cy.xpath("//select[@name='DateOfBirthMonth']").select('December').should('have.value','12')
        cy.xpath("//select[@name='DateOfBirthYear']").select('1998').should('have.value','1998')
        cy.xpath("//div[@class='inputs']//input[@name='Email']").type(r + '@gmail.com')
        cy.xpath("//div[@class='inputs']//input[@name='Company']").type('Infostride')
        cy.xpath("//div[@class='inputs']//input[@name='Password']").type('Gandhi123')
        cy.xpath("//div[@class='inputs']//input[@name='ConfirmPassword']").type('Gandhi123')
        cy.get('.button-1.register-next-step-button').click()
        cy.get('.result').should('have.text','Your registration completed')
        cy.get('.button-1.register-continue-button').click()
    
    })
        
    
    it('Login', function(){
        const pass = 'Gandhi123'
        cy.get('.ico-login').click()
        cy.xpath("//div[@class='inputs']//input[@name='Email']").type(userName + '@gmail.com')
        cy.log(userName)
        cy.xpath("//div[@class='inputs']//input[@name='Password']").type(pass)
        cy.get('.button-1.login-button').click()
        cy.get('.ico-account').click()
        cy.xpath("//div[@class='inputs']//input[@name='Email']").should('have.value',userName + '@gmail.com')

    })
    
    })