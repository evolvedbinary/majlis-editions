describe('Homepage  document list', () => {
    beforeEach(() => {
        cy.visit('/')
        // Wait for pb-page to finish resolving before making assertions
        cy.get('pb-page[unresolved]', { timeout: 20000 }).should('not.exist')
    })

    it('shows the logo link in the header', () => {
        cy.get('body > pb-page > app-drawer-layout > app-header-layout > app-header > app-toolbar > a')
            .should('exist')
    })

    it('should have a main h1 title', () => {
        cy.get('body > pb-page > app-drawer-layout > app-header-layout > main > section:nth-child(1) > h1')
            .should('exist')
    })

    it('should display the app title via .tp-title', () => {
        cy.get('.tp-title').should('be.visible').and('not.be.empty')
    })


    it('should show the version string in the footer', () => {
        cy.get('footer.version').should('exist').and('not.be.empty')
    })

    it('pb-paginate component should be present', () => {
        cy.get('pb-paginate#paginate').should('exist')
    })

    it('browse sort select (pb-select[name="sort"]) is present with at least two paper-item options', () => {
        cy.get('pb-select[name="sort"]')
            .should('exist')
            .find('paper-item')
            .should('have.length.greaterThan', 1)
    })

    it('search field scope select (pb-select[name="field"]) is present', () => {
        cy.get('pb-select[name="field"]').should('exist')
    })

    it('search form (#search-form) is present', () => {
        cy.get('#search-form').should('exist')
    })

    it('error dialog (#errorDialog) is present in the DOM', () => {
        cy.get('#errorDialog').should('exist')
    })

    it('error dialog Close button exists', () => {
        cy.get('#errorDialog paper-button[dialog-confirm]').should('exist')
    })

    it('upload panel is in the DOM (pb-upload)', () => {
        cy.get('pb-upload#upload').should('exist')
    })
})