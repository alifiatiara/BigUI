export function shouldBeVisible(selector, timeout = 10000) {
    cy.get(selector, {timeout}).should("be.visible");
}

export function textVisible(selector, value, timeout = 10000){
    cy.get(selector, {timeout}).should("be.visible").should('have.text', value);
}