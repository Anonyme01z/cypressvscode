//  <refrence types ="cypress"/>  //to refrence   cypress auto complete

const { isExportDeclaration, isAssertClause } = require("typescript");


 it('Mtn Biosmart Login', function(){

    //  cy.visit('https://biowebstaging.mtnnigeria.net/')
     cy.visit('https://simregpoc.mtnnigeria.net:3443/bow/home/login')

     cy.get('#loginUsername').type('vadewumi@seamfix.com')
     cy.get('#loginPassword').type('Bankole123456!!!')
     cy.get('#loginSubmitBtn > .ng-star-inserted')
                                        .should('contain', 'Login').click()

     cy.get('#menuSidenav > .mat-button-wrapper > .mat-icon', {timeout: 10000} ).click()
     cy.get('#camera > .mat-list-item-content > .mat-list-text > .mat-line').click()
     cy.get('#ccGotoNewRegMsisdnDiv > .ng-star-inserted')
                                        .should('be.visible', 'Sim Reg New (MSISDN)' ).click()

     cy.get('#newRegMsisdn').type('09062058882')
                                       //  .should('contain', 'Validate')
     cy.get('#nrmAdd', {timeout: 4000}).click()
     cy.on('window:confirm', (text) => {
      expect(text).to.contains('Valid Msisdn');
      })

      cy.get('#arCaptureImageButton > .mat-button-wrapper').click()
      cy.get('#pcCapturePortraitButton').click()
                                    // .should('contain', 'Save')
      cy.get('#pcSavePortraitButton').click()
      cy.get('#nrmProccedToCapture > .mat-button-wrapper > .text-white').click()

      cy.get('#mat-select-value-17 > .mat-select-placeholder').click()
      cy.get('#mat-option-27 > .mat-option-text').click()
      cy.get('#searchParameterField').type('90108320911')
      cy.get('#ninSeachAndCaptureButton').click()

      //Demo Page

      cy.get('#dcDMotherMaiden').type('Josephine')
      cy.get('#dcDHouseAddress').type('980')
      cy.get('#dcDStreetAddress').type('Unity')
      cy.get('#dcDCityAddress').type('Ikeja')
      cy.get('.mat-form-field.ng-tns-c68-52 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('08104578293')

      cy.get('#dcDStateofReg > .ng-select-container > .ng-value-container > .ng-input > input').click
      cy.get('#a51d3c6b0df6-3').click()

} );
