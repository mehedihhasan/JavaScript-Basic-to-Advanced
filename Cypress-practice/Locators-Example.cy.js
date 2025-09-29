<table class="orders-table">
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Status</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1001</td>
      <td>Alice</td>
      <td>Pending</td>
      <td>$120</td>
    </tr>
    <tr>
      <td>1002</td>
      <td>Bob</td>
      <td>Completed</td>
      <td>$200</td>
    </tr>
    <tr>
      <td>1003</td>
      <td>Charlie</td>
      <td>Cancelled</td>
      <td>$150</td>
    </tr>
  </tbody>
</table>

//dentify Completed Cell



describe('Table Data Locators Example', () => {

  it('Find "Completed" cell in 15+ ways', () => {

    cy.contains('td', 'Completed')
    cy.get('table.orders-table tbody tr').eq(1).find('td').eq(2)
    cy.get('table.orders-table tbody tr:nth-child(2) td:nth-child(3)')
    cy.contains('td', 'Bob').next()
    cy.get('tbody tr').eq(1).find('td:nth-child(3)')
    cy.contains('tr', 'Bob').find('td').eq(2)
    cy.xpath('//table[@class="orders-table"]//tr[2]/td[3]')
    cy.get('tbody tr td:nth-child(3)').eq(1)
    cy.get('tbody').children('tr').eq(1).children('td').eq(2)
    cy.contains('tr', '1002').find('td').eq(2)
    cy.get('tbody tr').eq(1).find('td').first().next().next()
    cy.contains('td', 'Bob').next('td')
    cy.contains('td', 'Bob').nextAll('td').eq(0)
    cy.contains('td', '1002').parent().find('td').eq(2)
    cy.contains('td', /^Completed$/)
    cy.get('tbody tr').eq(1).within(() => {
      cy.get('td').eq(2).should('have.text', 'Completed')
    })

  })
})
