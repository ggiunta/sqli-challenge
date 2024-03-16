var PetshopUserAPI = function(cy) {
  this.cy = cy

  const baseAPIUrl = 'https://petstore.swagger.io/v2'

  this.createUser = function (body) {
    cy.request('POST', baseAPIUrl+'/user', body)
  }

  this.getUser = function (username) {
    cy.request(baseAPIUrl+'/user/'+username)
  }
};

module.exports = PetshopUserAPI