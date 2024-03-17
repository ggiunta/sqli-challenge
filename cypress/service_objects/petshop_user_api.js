var PetshopUserAPI = function(cy) {
  this.cy = cy

  const baseAPIUrl = 'https://petstore.swagger.io/v2'

  this.createUser = function (body) {
    cy.request('POST', Cypress.env('api_base_url')+'/user', body)
  }

  this.getUser = function (username) {
    cy.request(Cypress.env('api_base_url')+'/user/'+username)
  }
};

module.exports = PetshopUserAPI