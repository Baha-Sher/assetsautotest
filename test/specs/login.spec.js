const LoginPage = require('./../pageobjects/Login.po');
const params = require('./../../test_params.json');

describe('Login Page', () => {
    it('should login', () => {
        LoginPage.open();
        LoginPage.doLogin(params.userCreds.login, params.userCreds.Password);

/*----
        const title = browser.getTitle();
        const currentUrl = browser.getUrl();

        assert.strictEqual(title, "AsseTS");
        assert.strictEqual(currentUrl, browser.options.baseUrl + '/employees');
        browser.pause(2000);
        */
    })


})

