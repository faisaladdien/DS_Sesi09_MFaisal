const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Login Sauce Demo', () => {
    //positive case with valid user credential
    it('should login with standard_user credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
})

