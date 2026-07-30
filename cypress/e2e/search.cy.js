describe('Full-text search', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('pb-page[unresolved]', { timeout: 20000 }).should('not.exist')
    })

    it('the search form and its submit button are present', () => {
        cy.get('#search-form').should('exist')
        cy.get('#search-form > paper-button').should('exist')
    })

    it.skip('the search input exists inside the pb-search shadow root', () => {
        cy.get('#search-form', { includeShadowDom: true })
            .shadow()
            .find('input[type="search"], input[type="text"], input:not([type])')
            .should('exist')
    })

    it('typing a known term and submitting updates the URL', () => {
        cy.get('#search-form', { includeShadowDom: true })
            .shadow()
            .find('input[type="search"]')
            .type('haven')

        cy.get('#search-form > paper-button').click()

        cy.url().should('include', 'query=haven')
    })

    it('a known search term ("haven") returns exactly one result', () => {
        cy.get('#search-form', { includeShadowDom: true })
            .shadow()
            .find('input[type="search"]')
            .type('haven')

        cy.get('#search-form > paper-button').click()

        // Wait for results to load then check paginate found-label
        cy.get('#paginate', { includeShadowDom: true })
            .shadow()
            .find('span.found', { timeout: 15000 })
            .should('have.text', 'Found 1 item')
    })

    it('a search with a nonsense term shows 0 results', () => {
        cy.get('#search-form', { includeShadowDom: true })
            .shadow()
            .find('input[type="search"]')
            .type('xyzzy_nonexistent_term_majlis_99999')

        cy.get('#search-form > paper-button').click()

        cy.get('#paginate', { includeShadowDom: true })
            .shadow()
            .find('span.found', { timeout: 15000 })
            .invoke('text')
            .should('match', /Found 0 item/)
    })

    it('clearing the search removes the query param from the URL', () => {
        cy.get('#search-form', { includeShadowDom: true })
            .shadow()
            .find('input[type="search"]')
            .type('haven')

        cy.get('#search-form > paper-button').click()
        cy.url().should('include', 'query=haven')

        // Clear the input and resubmit
        cy.get('#search-form', { includeShadowDom: true })
            .shadow()
            .find('input[type="search"]')
            .clear()

        cy.get('#search-form > paper-button').click()
        cy.url().should('not.include', 'query=haven')
    })

    it('browsing by Title sort option updates the URL with sort=title', () => {
        cy.get('pb-select[name="sort"]').find('paper-item[value="title"]').click()
        cy.url().should('include', 'sort=title')
    })
})
