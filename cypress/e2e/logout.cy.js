import { LOGOUT_BUTTON, SIGN_IN_MAIL_FORM, TEST_CONSTANTS } from "../selectors.constant";

it("test logout", async () => {
  cy.prepare();
  window.localStorage.setItem(TEST_CONSTANTS.AUTH_KEY, "true");
  window.localStorage.setItem(TEST_CONSTANTS.I18NEXTKEY, "ru");
  cy.visit(TEST_CONSTANTS.PATHS.PROFILE);

  cy.get(`${LOGOUT_BUTTON}`).should("exist").click();

  cy.url().should("include", TEST_CONSTANTS.PATHS.SIGNIN);

  await cy.getAllLocalStorage().then((result) => {
    expect(result["http://localhost:5173"]).not.to.have.property(TEST_CONSTANTS.AUTH_KEY);
  });

  cy.get(`${SIGN_IN_MAIL_FORM}`).should("exist");
});
