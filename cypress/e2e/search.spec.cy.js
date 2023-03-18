/// <reference types="cypress" />

describe('GeoCode Search', () => {
  // runs every time before each test
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('get geocode results', () => {
    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        headers: {
          'X-Api-Key': '2TNwbSyjYDag5xWp3mwfILneLF5s4BoG6rHwjdTn'
        },
        url: 'https://api.api-ninjas.com/v1/geocoding?*', // that have a URL that matches '/users/*'
      },
      // [] // and force the response to be: []
      {
        fixture: "test.json"
      }
    ).as('apicheck')
    

    // no need for headers
    cy.intercept('https://api.openweathermap.org/data/2.5/weather?*',
    {
      fixture: "results.json"
    }
    ).as('apicheck2')
    cy.get('button').click()

    cy.wait('@apicheck2').then((interception2) => {
      console.log(interception2)
      assert.isNotNull(interception2.response.body, '1st API call has data')

    })
    
  })

})

