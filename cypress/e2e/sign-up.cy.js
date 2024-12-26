import {
  SIGN_UP_BUTTON,
  SIGN_UP_FIRST_NAME_INPUT,
  SIGN_UP_MAIL_FORM_MESSAGE,
  SIGN_UP_MAIL_INPUT,
  SIGN_UP_PASSWORD_INPUT,
  SIGN_UP_PHONE_FORM_MESSAGE,
  SIGN_UP_PHONE_INPUT,
  SIGN_UP_SECOND_NAME_INPUT,
  TEST_CONSTANTS
} from "../selectors.constant";

describe("sign up tests", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
    window.localStorage.setItem(TEST_CONSTANTS.I18NEXTKEY, "ru");
    cy.prepare();
  });

  it("check that sign up button disabled", () => {
    cy.get(`${SIGN_UP_BUTTON}`).should("exist").should("have.text", "Зарегистрироваться");

    cy.get(`${SIGN_UP_BUTTON}`).should("be.disabled");
  });

  it("should register user", async () => {
    cy.get(`${SIGN_UP_FIRST_NAME_INPUT}`).type("Никита");
    cy.get(`${SIGN_UP_SECOND_NAME_INPUT}`).type("Никитов");
    cy.get(`${SIGN_UP_PHONE_INPUT}`).type("+79999999999");
    cy.get(`${SIGN_UP_MAIL_INPUT}`).type("test@mail.ru");
    cy.get(`${SIGN_UP_PASSWORD_INPUT}`).type("themostSecretPassword123");

    cy.get(`${SIGN_UP_BUTTON}`).should("not.be.disabled").click();

    cy.url().should("include", TEST_CONSTANTS.PATHS.PROFILE);

    await cy.getAllLocalStorage().then((result) => {
      expect(result["http://localhost:5173"]).to.have.property(TEST_CONSTANTS.AUTH_KEY, "true");
    });
  });

  it("should return validation errors on phone and mail fields", async () => {
    cy.get(`${SIGN_UP_FIRST_NAME_INPUT}`).type("Никита");
    cy.get(`${SIGN_UP_SECOND_NAME_INPUT}`).type("Никитов");
    cy.get(`${SIGN_UP_PHONE_INPUT}`).type("+799999999");
    cy.get(`${SIGN_UP_MAIL_INPUT}`).type("test@mail");
    cy.get(`${SIGN_UP_PASSWORD_INPUT}`).type("themostSecretPassword123");

    cy.get(`${SIGN_UP_BUTTON}`).should("not.be.disabled").click();

    cy.get(`${SIGN_UP_PHONE_FORM_MESSAGE}`)
      .should("exist")
      .and("have.text", "Неверный номер телефона.");
    cy.get(`${SIGN_UP_MAIL_FORM_MESSAGE}`)
      .should("exist")
      .and("have.text", "Неверный адрес электронной почты");
  });

  it("should show that button disabled", async () => {
    cy.get(`${SIGN_UP_PHONE_INPUT}`).type("+79999999999");
    cy.get(`${SIGN_UP_MAIL_INPUT}`).type("test@mail.ru");
    cy.get(`${SIGN_UP_PASSWORD_INPUT}`).type("themostSecretPassword123");

    cy.get(`${SIGN_UP_PHONE_INPUT}`).should("have.valuet", "+79999999999");
    cy.get(`${SIGN_UP_MAIL_INPUT}`).should("have.value", "test@mail.ru");
    cy.get(`${SIGN_UP_PASSWORD_INPUT}`).should("have.value", "themostSecretPassword123");

    cy.get(`${SIGN_UP_BUTTON}`).should("be.disabled");
  });
});
