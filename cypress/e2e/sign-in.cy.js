import {
  SIGN_IN_LINK_TO_SIGN_UP,
  SIGN_IN_MAIL_FORM,
  SIGN_IN_MAIL_FORM_MESSAGE,
  SIGN_IN_MAIL_INPUT,
  SIGN_IN_PASSWORD_INPUT,
  SIGN_IN_PHONE_FORM,
  SIGN_IN_PHONE_FORM_MESSAGE,
  SIGN_IN_PHONE_INPUT,
  SIGN_IN_SUBMIT_FORM_BUTTON,
  TEST_CONSTANTS
} from "../selectors.constant";

describe("sign in tests", () => {
  beforeEach(() => {
    cy.visit(TEST_CONSTANTS.PATHS.SIGNIN);
    window.localStorage.setItem(TEST_CONSTANTS.I18NEXTKEY, "ru");
    cy.prepare();
  });

  it("redirect to sign up page", () => {
    cy.get(`${SIGN_IN_LINK_TO_SIGN_UP}`)
      .should("exist")
      .should("have.text", "Зарегистрироваться")
      .click();

    cy.url().should("include", TEST_CONSTANTS.PATHS.SIGNUP);
  });

  it("switch mail form to phone form", () => {
    cy.get(`${SIGN_IN_MAIL_FORM}`).should("exist");
    cy.get(`${SIGN_IN_PHONE_FORM}`).should("not.exist");
    cy.get(`${SIGN_IN_MAIL_FORM} button`).eq(1).should("exist").click();

    cy.get(`${SIGN_IN_PHONE_FORM}`).should("exist");
    cy.get(`${SIGN_IN_MAIL_FORM}`).should("not.exist");
  });

  it("test validation for mail form", () => {
    cy.get(`${SIGN_IN_MAIL_FORM}`).should("exist");
    cy.get(`${SIGN_IN_MAIL_INPUT}`).type("test@mail");
    cy.get(`${SIGN_IN_PASSWORD_INPUT}`).type("themostSecretPassword123");
    cy.get(`${SIGN_IN_SUBMIT_FORM_BUTTON}`).should("exist").and("not.be.disabled").click();

    cy.get(`${SIGN_IN_MAIL_FORM_MESSAGE}`)
      .should("exist")
      .and("contain.text", "Неверный адрес электронной почты");
  });

  it("test validation for phone form", () => {
    cy.get(`${SIGN_IN_MAIL_FORM} button`).eq(1).should("exist").click();

    cy.get(`${SIGN_IN_PHONE_FORM}`).should("exist");
    cy.get(`${SIGN_IN_PHONE_INPUT}`).type("+79999");
    cy.get(`${SIGN_IN_PASSWORD_INPUT}`).type("themostSecretPassword123");
    cy.get(`${SIGN_IN_SUBMIT_FORM_BUTTON}`).should("exist").and("not.be.disabled").click();

    cy.get(`${SIGN_IN_PHONE_FORM_MESSAGE}`)
      .should("exist")
      .and("contain.text", "Неверный номер телефона");
  });

  it("should auth user by phone", async () => {
    cy.get(`${SIGN_IN_MAIL_FORM} button`).eq(1).should("exist").click();

    cy.get(`${SIGN_IN_PHONE_FORM}`).should("exist");
    cy.get(`${SIGN_IN_PHONE_INPUT}`).type("+79999999999");
    cy.get(`${SIGN_IN_PASSWORD_INPUT}`).type("themostSecretPassword123");
    cy.get(`${SIGN_IN_SUBMIT_FORM_BUTTON}`).should("exist").and("not.be.disabled").click();

    cy.url().should("include", TEST_CONSTANTS.PATHS.PROFILE);

    await cy.getAllLocalStorage().then((result) => {
      expect(result["http://localhost:5173"]).to.have.property(TEST_CONSTANTS.AUTH_KEY, "true");
    });
  });

  it("should auth user by mail", async () => {
    cy.get(`${SIGN_IN_MAIL_FORM}`).should("exist");
    cy.get(`${SIGN_IN_MAIL_INPUT}`).type("test@mail.ru");
    cy.get(`${SIGN_IN_PASSWORD_INPUT}`).type("themostSecretPassword123");
    cy.get(`${SIGN_IN_SUBMIT_FORM_BUTTON}`).should("exist").and("not.be.disabled").click();

    cy.url().should("include", TEST_CONSTANTS.PATHS.PROFILE);

    await cy.getAllLocalStorage().then((result) => {
      expect(result["http://localhost:5173"]).to.have.property(TEST_CONSTANTS.AUTH_KEY, "true");
    });
  });
});
