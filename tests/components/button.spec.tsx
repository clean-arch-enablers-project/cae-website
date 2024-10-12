import { ButtonComponent } from '@/components/button'

describe('ButtonComponent', () => {
  it('should render correctly', () => {
    cy.mount(<ButtonComponent href="/hi">hi</ButtonComponent>)

    cy.get('button').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('button').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    cy.get('button').should(
      'have.css',
      'border',
      '2px solid rgb(255, 255, 255)'
    )
    cy.get('button').should('have.css', 'border-radius', '10px')
    cy.get('button').should('have.css', 'cursor', 'pointer')
    cy.get('button').should('have.css', 'padding', '15px 20px')

    cy.get('button').should('have.text', 'hi')
  })

  it('should render with className', () => {
    cy.mount(
      <ButtonComponent href="/hi" className="test">
        hi
      </ButtonComponent>
    )

    cy.get('button').should('have.class', 'test')
  })
})
