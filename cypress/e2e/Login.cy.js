//  <refrence types ="cypress"/>  //to refrence   cypress auto complete

const { isExportDeclaration, isAssertClause } = require("typescript");


 it('Mtn Biosmart Login', function(){

    //  cy.visit('https://biowebstaging.mtnnigeria.net/')
     cy.visit('https://simregpoc.mtnnigeria.net:3443/bow/home/login')
     cy.get('#loginUsername').type('vadewumi@seamfix.com')
     cy.get('#loginPassword').type('Bankole123456!!!')

     cy.get('#loginSubmitBtn > .ng-star-inserted').should('contain', 'Login').click()
     cy.get('#menuSidenav > .mat-button-wrapper > .mat-icon', {timeout: 8000} ).click()
     cy.get('#camera > .mat-list-item-content > .mat-list-text > .mat-line').click()
     cy.get('#ccGotoNewRegMsisdnDiv > .ng-star-inserted').should('be.visible', 'Sim Reg New (MSISDN)' ).click()

} );
