<div class="form-container">
  <h2>Welcome</h2>
  <form>
    <label>Username</label>
    <input type="text" placeholder="Enter username">
    <label>Password</label>
    <input type="password" placeholder="Enter password">
    <button class="btn primary">Login</button>
  </form>
</div>

//Find Login Button Locators

describe('Login Button Locators', () => {
  it('Select the Login button in multiple ways', () => {
    cy.contains('button', 'Login')
    cy.get('.btn.primary')
    cy.get('button.btn.primary')
    cy.get('form > button')
    cy.get('form').find('button')
    cy.get('button').filter(':contains("Login")')
    cy.get('form').children('button')
    cy.get('form').find('button').filter('.primary')
    cy.get('form').find('button').first().should('contain.text', 'Login')
    cy.get('form > *').eq(2)
    cy.get('form button').filter(':first')
    cy.get('form button').filter(':last')
    cy.get('div.form-container').find('button')
    cy.get('button').parent('form')
    cy.get('button').parents('div')
    cy.get('button').closest('form')
    cy.get('button').invoke('text').then(t => { expect(t).to.eq('Login') })
    cy.contains('form button', 'Login')
    cy.get('button').should('have.class', 'btn')
    cy.get('button').should('have.class', 'primary')
})
})
