// import { search } from "../../src/components/api/api"

// describe('empty spec', () => {
//   it('passes', () => {
//     cy.intercept(
//       {
//         method: 'GET', // Route all GET requests
//         headers: {
//           'X-Api-Key': 'ASrtLnSEj650gd6ahCWWHctepxjHg3JAsye2vdib'
//         },
//         url: 'https://api.api-ninjas.com/v1/geocoding?*', // that have a URL that matches '/users/*'
//       },
//       // [] // and force the response to be: []
//       {
//         fixture: "test.json"
//       }
//     ).as('apicheck')
//     cy.visit('http://localhost:3000')
//     .get('button').click()

//     cy.wait('@apicheck').then((interception) => {
//       assert.isNotNull(interception.response.body, '1st API call has data')
//     })
    
//   })
// })

