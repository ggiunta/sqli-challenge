var PetshopPetAPI = function(cy) {
  this.cy = cy

  const baseAPIUrl = 'https://petstore.swagger.io/v2'

  this.getPetsByStatus = function (status) {
    cy.request(Cypress.env('api_base_url')+'/pet/findByStatus?status='+status).as('petStatusRs')
  }
};

module.exports = PetshopPetAPI