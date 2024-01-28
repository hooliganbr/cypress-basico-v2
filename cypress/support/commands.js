Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {



    cy.get('#firstName').type('leonardo')
    cy.get('#lastName').type('souza')
    cy.get('#email').type('leolango10@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()


})