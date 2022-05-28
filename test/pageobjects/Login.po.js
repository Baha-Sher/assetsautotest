class LoginPage{
    get userName(){return $('input[type="text"]')}
    get password() {return $('input[type="password"]')};
    get loginButton() {return $('mat-card-actions button')};

    open(){
        browser.url(browser.options.baseUrl + '/auth/login');
    }

    fillUserName (someUserName){
        this.userName.setValue(someUserName);
    }
    doLogin(someUserName, somePassword){
        this.userName.setValue(someUserName);
        browser.pause(3000);
        this.password.setValue(somePassword);
        browser.pause(3000);
        this.loginButton.click();
        browser.pause(3000);
    }
}

module.exports = new LoginPage();
