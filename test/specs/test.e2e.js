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
    it('should login with problem_user credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    it('should login with performance_glitch_user credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(process.env.USERNAME_PERFORMANCE_GLITCH_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    it('should login with error_user credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(process.env.USERNAME_ERROR_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    it('should login with visual_user credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(process.env.USERNAME_VISUAL_USER, process.env.PASSWORD_SAUCEDEMO)
        await HomePage.validateHomePage()
    })
    //negative case with locked_out_user
    it('should get error massage with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedUser()
    })
    //negative case with not registered user
    it('should get error massage with locked_out_user credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_ANOTHER_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateNotRegisteredUser()
    })
    //negative case with blank field
    it('should get error massage with blank username', async () => {
        await LoginPage.open()
        await LoginPage.login('', process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateBlankUsername()
    })
    it('should get error massage with blank password', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER,'')
        await LoginPage.validateBlankPassword()
    })
})

