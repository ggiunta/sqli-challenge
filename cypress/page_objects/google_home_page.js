var GoogleHomePage = function(cy) {
  this.cy = cy

  const searchInputBox = '[name="q"]'

  this.visit = function () {
      cy.visit('/')
  }

  this.searchFor = function (string) {
      cy.get(searchInputBox)
      .type(string)
      .type('{enter}')
  }
};

module.exports = GoogleHomePage