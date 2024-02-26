const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }
    //*[@id="login_button_container"]/div/form/div[3]/h3
    //*[@id="login_button_container"]/div/form/div[3]/h3/text()

    get errorLockedUser() { return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')}
    get errorNotRegisterdUser() { return $('//h3[text()="Epic sadface: Username and password do not match any user in this service"]')}
    get errorBlankUsername() { return $('//h3[text()="Epic sadface: Username is required"]')}
    get errorBlankPassword() { return $('//h3[text()="Epic sadface: Password is required"]')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.fieldUsername.waitForDisplayed({ timeout : 3000})
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.btnLogin.click();
    }

    async validateLockedUser(){
        await this.errorLockedUser.waitForDisplayed({ timeout : 3000})
        await expect(this.errorLockedUser).toBeDisplayed()
    }

    async validateNotRegisteredUser(){
        await this.errorNotRegisterdUser.waitForDisplayed({ timeout : 3000})
        await expect(this.errorNotRegisterdUser).toBeDisplayed()
    }

    async validateBlankUsername(){
        await this.errorBlankUsername.waitForDisplayed({ timeout : 3000})
        await expect(this.errorBlankUsername).toBeDisplayed()
    }

    async validateBlankPassword(){
        await this.errorBlankPassword.waitForDisplayed({ timeout : 3000})
        await expect(this.errorBlankPassword).toBeDisplayed()
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
