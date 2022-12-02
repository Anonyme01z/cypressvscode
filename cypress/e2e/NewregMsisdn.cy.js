
// const { isExportDeclaration, isAssertClause } = require("typescript");


before(() => {

   cy.visit('https://simregpoc.mtnnigeria.net:3443/bow/home/login')

 
 })



 it('Mtn Biosmart Login', function(){

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
         // cy.on('window:confirm', (text) => {
         //    expect(text).to.contains('Successfully added Msisdn',);
         //    })
         //    cy.on('window:confirm', (text) => {
         //       expect(text).to.contains('Valid Msisdn',);
         //       })
         // cy.get('#bow-alert-container').should('contain', 'Successfully added Msisdn',)
         cy.get('#toast-2 > .vh > .bBe').should('be.visible', 'Valid Msisdn' ).click()
           
         

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

                              cy.get('#dcDLgaOfResidence > .ng-select-container > .ng-value-container > .ng-input > input').type('Aba North')
                              cy.get('.ng-option-label').click()

                               cy.get('#dcDAreaOfResidence > .ng-select-container > .ng-value-container > .ng-input > input').type('ARIARIA')
                               cy.get('.ng-option-label').click()

                               //nextBtn

                               cy.get('#dcPStepForwardBtn > .text-white').click()

                               //fingerPrnt

                               cy.get('#dcFOverrideLeftHandLabel').click()
                               cy.get('#mat-select-value-25 > .mat-select-placeholder').click()
                               cy.get('#mat-option-35 > .mat-option-text').click()
                               cy.get('#dcHandOverrideContinue > .mat-button-wrapper > .text-white').click()
                               cy.get('#dcCaptureHandSnap')
                                                   .should('be.visible', 'Hand Capture' ).click()
                               cy.get('#dcCaptureHandSave').click()
                               cy.get('#dcFOverrideRightHand').click()
                               cy.get('#mat-select-value-27 > .mat-select-placeholder')
                                                                        .should('be.visible', 'To override the RIGHT HAND, you must specify a reason').click()
                               cy.get('#mat-option-40 > .mat-option-text').click()      
                               cy.get('#dcHandOverrideContinue > .mat-button-wrapper > .text-white')
                                                                     .should('be.visible', 'Continue' ).click()  
                               cy.get('#dcCaptureHandSnap').click()
                               cy.get('#dcCaptureHandSave')
                                                      .should('be.visible', 'Save').click()
                               cy.get('#dcFingerStepForwardBtn').click()     
                               
                               //consent Capture
                               cy.get('#dcPOpenModeOfId')
                                                   .should('be.visible', 'Consent Capture').click()
                               cy.get('#dcCaptureIdSnap')
                                                   .should('be.visible', 'Id Capture').click()      
                               cy.get('#dcCaptureIdSnap').click()
                               cy.get('#dcCaptureIdSaveAndClose').click()

                               cy.get('.mat-checkbox-inner-container').click()
                               cy.get('.mat-select-placeholder').click()
                               cy.get('#mat-option-41 > .mat-option-text')
                                                            .should('be.visible', 'Amputee').click()

                               cy.get('#dcPOpenKycFormCapture').click()
                               cy.get('#dcCaptureKYCCapture')
                                                           .should('be.visible', 'KYC Form Capture').click()
                               cy.get('#dcCaptureKYCSaveAndClose').click()
                               cy.get('.mat-button-wrapper > .text-white').click()
                                                            cy.on('window:alert',(t)=>{
                                                               expect(t).to.contains('Please ensure the customer signs the KYC form before upload');
                                                            })
                              //save
                              cy.get('#dcRegSubmitRegBtn > .ng-star-inserted', {timeout: 50000} )
                                                         .click()
                                                         
                              //                            cy.getAppAlert('window:alert',(t)=>{
                              //    expect(t).to.contains('Successfully saved registration. Feedback: PROCESSED');
                              // })



})
