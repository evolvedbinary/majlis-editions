
const DOC_PATH = 'Kitab%20Al-Anwar-Sample.xml'

describe('API tests', () => {

    it('GET /api/edition-toc returns 200 for a valid document', () => {
        cy.request(
            `api/edition-toc?doc=${encodeURIComponent(DOC_PATH)}&target=transcription&icons=true`
        ).its('status').should('equal', 200)
    })

    it('GET /api/edition-toc response body contains HTML content', () => {
        cy.request(
            `api/edition-toc?doc=${encodeURIComponent(DOC_PATH)}&target=transcription&icons=true`
        ).then(res => {
            expect(res.status).to.equal(200)
            expect(res.body).to.be.a('string')
        })
    })

    it('GET /api/edition-sections returns 200 for a valid document', () => {
        cy.request(`api/edition-sections?doc=${encodeURIComponent(DOC_PATH)}`)
            .its('status').should('equal', 200)
    })

    it('GET /api/edition-sections returns a non-empty array for Kitab Al-Anwar', () => {
        cy.request(`api/edition-sections?doc=${encodeURIComponent(DOC_PATH)}`)
            .then(res => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.an('array').with.length.greaterThan(0)
            })
    })

    it('GET /api/edition-sections for Kitab Al-Anwar returns 10 page-break IDs (surf-pb-1 … surf-pb-10)', () => {
        cy.request(`api/edition-sections?doc=${encodeURIComponent(DOC_PATH)}`)
            .then(res => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.an('array').with.length(10)
                // IDs should look like surf-pb-N
                res.body.forEach(id => {
                    expect(id).to.match(/^surf-pb-\d+$/)
                })
            })
    })

    it('GET /api/edition-sections for Istibsar.xml returns 7 page-break IDs', () => {
        cy.request('api/edition-sections?doc=Istibsar.xml')
            .then(res => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.an('array').with.length(7)
            })
    })
})
