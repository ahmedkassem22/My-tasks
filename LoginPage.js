class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  enterUsername(username) {
    cy.get('[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('[type="submit"]').click();
    cy.wait(5000)
  }

  verifyLogin() {
    cy.get('.oxd-topbar-header-title').should('be.visible'); 
  
  }

  ClickOnAdminButton() {

    //cy.get('a[href*="Admin"]').as('admin');
    //cy.get('@admin').rightclick()

    
     //cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('a[href*="Admin"]>span').rightclick()
  }

  CheckNumberofRow() {
    cy.get('class="oxd-table-card"').should('have.length', "7")
    
  }

  addnewuser() {
    

    cy.get('button').contains('Add').click();

  }
}

export default new LoginPage();
