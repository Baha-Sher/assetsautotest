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

        let createEmployee = $('div.page app-employees button');
        createEmployee.click();
        browser.pause(3000);

        const title1 = browser.getTitle();
        const currentUrl1 = browser.getUrl();

        assert.strictEqual(title1, "AsseTS");
        assert.strictEqual(currentUrl1, browser.options.baseUrl + '/employees/employee-form');
        browser.pause(2000);

        let nameFill = $('div input[id="mat-input-14"]');
        nameFill.click();
        nameFill.setValue("Baha");
        browser.pause(2000);

        // let middleNameFill = $('input[type="text"][id="mat-input-15"]');
        // middleNameFill.click();
        // middleNameFill.setValue("Urban");
        // browser.pause(2000);

        // let surnameFill = $('input[type="text"][id="mat-input-16"]');
        // surnameFill.click();
        // surnameFill.setValue("Sher");
        // browser.pause(2000);
    })
    xit('filling in employee data',function() {
        let nameFill = $('//input[@id="mat-input-14"]');
        nameFill.setValue("Baha");
        browser.pause(2000);

        let middleNameFill = $('//input[@id="mat-input-15"]');
        middleNameFill.setValue("Urban");
        browser.pause(2000);

        let surnameFill = $('//input[@id="mat-input-16"]');
        surnameFill.setValue("Sher");
        browser.pause(2000);

    */
    })

})

