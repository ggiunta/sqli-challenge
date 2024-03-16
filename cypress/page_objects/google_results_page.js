var GoogleResultsPage = function(cy) {
  this.cy = cy

  this.selectResultByHref = function (hrefValue) {
    cy.get(hrefValue)
    .click()
}
};

module.exports = GoogleResultsPage