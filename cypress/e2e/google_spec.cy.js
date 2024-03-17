describe('Google Tests', () => {
  it('1', () => {
      let homePage = new (require('../page_objects/google_home_page.js'))(cy)
      let resultsPage = new (require('../page_objects/google_results_page.js'))(cy)

      homePage.visit()
      cy.wait(2000)
      homePage.searchFor('automation')
      resultsPage.selectResultByHref('[href="https://en.wikipedia.org/wiki/Automation"]')

      cy.origin('https://en.wikipedia.org', () => {
        cy.contains('This was the earliest feedback-controlled mechanism.')
        cy.wait(2000)
        cy.screenshot({ capture: 'viewport' })
      })
  })
})