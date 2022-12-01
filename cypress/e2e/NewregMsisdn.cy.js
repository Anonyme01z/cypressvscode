//   <refrence types ="cypress"/>  //to refrence   cypress auto complete

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

      cy.get('#mat-select-value-15 > .mat-select-placeholder').click()
      cy.get('#mat-option-22 > .mat-option-text').click()
      
       cy.get('#searchParameterField').type('90108320911')
       cy.get('#ninSeachAndCaptureButton').click()

       //Demo Page
       cy.get('#dcDMotherMaiden').type('Josephine')
       cy.get('#dcDHouseAddress').type('980')
       cy.get('#dcDStreetAddress').type('Unity')
       cy.get('#dcDCityAddress').type('Ikeja')
       cy.get('#dcDAlternatePhone').type('08107144826')

   
                              

                               //Mode of ID
                               cy.get('#mat-select-value-21 > .mat-select-placeholder').click()
                               cy.get('#mat-option-29 > .mat-option-text').click()

                               //State&Lga ofOrigin
                                cy.get('#dcDStateOfOrigin > .ng-select-container > .ng-value-container > .ng-input > input').type('Zamfara')
                                cy.get('.ng-option-label').click()

                                cy.get('#dcDLgaOfOrigin > .ng-select-container > .ng-value-container > .ng-input > input').type('Zurmi')
                                cy.get('.ng-option-label').click()

                               //State&LgaOfReg

                               cy.get('#dcDStateofReg > .ng-select-container > .ng-value-container > .ng-input > input').type('Abia')
                           

                               cy.get('.ng-option-label').click()

                               cy.get('#dcDLgaOfReg > .ng-select-container > .ng-value-container > .ng-input > input').type('Bende')
                            
                              cy.get('.ng-option-label').click()

                               //State,Lga&AreaofResi
                               cy.get('#dcDStateOfResidence > .ng-select-container > .ng-value-container > .ng-input > input').type('Abia')
                              
                              cy.get('.ng-option-label').click()

                               cy.get('#adaeeaef5c19-2 > .ng-option-label').type('Aba North')
                              cy.get('.ng-option-label').click()

                               cy.get('#dcDAreaOfResidence > .ng-select-container > .ng-value-container > .ng-input > input').click()
                               cy.get('#ab9a23bcc059-1 > .ng-option-label').click()

})
