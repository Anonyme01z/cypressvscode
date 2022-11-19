//  <refrence types ="cypress"/>  //to refrence   cypress auto complete


 it('Mtn Biosmart Login', function(){

     cy.visit('https://biowebstaging.mtnnigeria.net/')
     cy.get('#loginUsername').type('vadewumi@seamfix.com')
     cy.get('#loginPassword').type('Bankole123456!!!')

     cy.get('#loginSubmitBtn > .ng-star-inserted').click()
     cy.get('#menuSidenav > .mat-button-wrapper > .mat-icon').click()
     cy.get('#camera > .mat-list-item-content > .mat-list-text > .mat-line').click()
     cy.get('#ccGotoNewRegMsisdnDiv > .ng-star-inserted').click()

 } );
