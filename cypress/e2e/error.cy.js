describe('Error handling', () => {


    it('the error dialog element (#errorDialog) is present on the home page', () => {
        cy.visit('/')
        cy.get('#errorDialog').should('exist')
    })

    it('the error dialog Close button exists on the home page', () => {
        cy.visit('/')
        cy.get('#errorDialog paper-button[dialog-confirm]').should('exist')
    })

    it('the download dialog (#downloadDialog) is present on the home page', () => {
        cy.visit('/')
        cy.get('#downloadDialog').should('exist')
    })


    it('visiting /?doc=does-not-exist.xml does not crash the browser', () => {
        cy.visit('/?doc=does-not-exist.xml', { failOnStatusCode: false })
        cy.get('pb-page').should('exist')
    })

    it('requesting a nonexistent static resource returns 404', () => {
        cy.request({
            url: 'resources/images/this-does-not-exist.png',
            failOnStatusCode: false
        }).its('status').should('equal', 404)
    })
})
