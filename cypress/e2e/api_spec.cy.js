describe('API Tests', () => {
  it('1', () => {
    let userAPI = new (require('../service_objects/petshop_user_api.js'))(cy)
    let petAPI = new (require('../service_objects/petshop_pet_api.js'))(cy)

    let soldPets = new Map();
    var soldPetsArray = [];
    var soldPetsNameOccrArray = [];

    cy.fixture('user_data.json').then((data) => {
      userAPI.createUser(data)
    })

    userAPI.getUser('testee')

    petAPI.getPetsByStatus('sold')
    cy.get('@petStatusRs').then((response) => {
      for (let index = 0; index < response.body.length; index++) {
        soldPets.set(response.body[index].id, response.body[index].name);
        soldPetsArray.push({"id":response.body[index].id, "name":response.body[index].name})
      }

      const uniqueNames = [...new Set(soldPetsArray.map(item => item.name))];

      for (let index = 0; index < uniqueNames.length; index++) {
        const name = uniqueNames[index];
        
        const count = soldPetsArray.filter((obj) => obj.name === name).length;

        soldPetsNameOccrArray.push({"name":name, "count":count})
      }
    })

    cy.log('Pet names by occurence:')
    cy.log(soldPetsNameOccrArray)
  })
})