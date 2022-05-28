const LoginPage = require('./../pageobjects/Login.po');
const params = require('./../../test_params.json');
const ClientsPage = require('./../pageobjects/Clients.po');

describe('Clients page', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.doLogin(params.userCreds.login, params.userCreds.Password);

    })
    afterEach(() =>{
        browser.reloadSession();
    })

    it('should add client', () => {   
        ClientsPage.clickOnAddClientButton();
        browser.pause(2000);
        ClientsPage.enterFirstname("Bahatest1");
        ClientsPage.enterLastname("Shertest1");
        ClientsPage.enterMiddleName("Nurlanovichtest1");
        ClientsPage.jobTitleClick();
        ClientsPage.seniorityClick();
        ClientsPage.engLevelClick();
        ClientsPage.guildClick();
        ClientsPage.contrTypeClick();
        ClientsPage.writeAboutEmployee ("Расскажу что нибудь о себе")
        ClientsPage.skillClick();
        ClientsPage.skillLevelClick();
        ClientsPage.nonActiveClick();
        //ClientsPage.saveClick();
        
    })
    it('should filter client', () => {
        ClientsPage.filterClick();
        ClientsPage.clickQaSkillInFilter();
        browser.key
        browser.saveScreenshot('./test/result/screenAssests.png')
        browser.pause(3000);



        
    })
})
