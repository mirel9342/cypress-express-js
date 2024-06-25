describe('home', () => {
  it('Deve estar oniline ', () => {
    cy.visit('http://192.168.2.7:3000/')

    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})

