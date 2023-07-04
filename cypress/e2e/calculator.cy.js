describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working number buttons part2', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })

  it('should have working number buttons part3', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '236')
  })

  it('should add', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should subtract', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })

  it('should multiply', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  })

  it('should divide', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should have expected output for positive numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should have expected output for negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should have expected output for negative numbers part2', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should have expected output for decimal numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('should have expected output for decimal numbers part2', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.25')
  })

  it('should handle very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4938271610');
  })

  it('should handle very large numbers part2', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3999555110664');
  })

  it('should output not a number when a number is divided by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Not a number');

  })













})