import { SIGN_IN_BUTTON } from "../selectors.constant";

describe("sign up tests", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
    window.localStorage.setItem("i18nextLng", "ru");
  });

  it("check that sign up button disabled", () => {
    cy.get(`${SIGN_IN_BUTTON}`).should("exist").should("have.text", "Зарегистрироваться");

    cy.get(`${SIGN_IN_BUTTON}`).should("be.disabled");
  });
});
