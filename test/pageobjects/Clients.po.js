class ClientPage{
    get createModalPageButton() { return $('div.page app-employees button span mat-icon')};
        clickOnAddClientButton () {
            this.createModalPageButton.click();
        }

    get firstnameField (){ return $('input[placeholder="Enter firstname ..."]')};
    enterFirstname (someUserFirstname){
        this.firstnameField.setValue(someUserFirstname);
        browser.pause(1000);
    }

    get lastnameField (){ return $('input[placeholder="Enter lastname ..."]')};
    enterLastname (someUserLastname){
        this.lastnameField.setValue(someUserLastname);
        browser.pause(1000);
    }

    get middleNameField (){ return $('input[placeholder="Enter middlename ..."]')};

    enterMiddleName (someUserMiddleName){
        this.middleNameField.setValue(someUserMiddleName);
        browser.pause(1000);
    }
    get chooseJobTitle (){ return $('//*[@placeholder="Select job title"]//mat-select');}
    get chooseInJobTitle (){ return $("//*[contains(text(),' QA ')]");}
    jobTitleClick () {
        this.chooseJobTitle.click();
        this.chooseInJobTitle.click();
    }
    
    get chooseSeniority (){ return $('//*[@placeholder="Select seniority"]//mat-select');}
    get chooseInSeniority (){ return $("//*[contains(text(),' C2 ')]");}
    seniorityClick () {
        this.chooseSeniority.click();
        this.chooseInSeniority.click();
    }
     
    get chooseEngLevel  (){ return $('//*[@placeholder="Select english level"]//mat-select');}
    get chooseInEngLevel (){ return $("//*[contains(text(),' B2 ')]");}
    engLevelClick () {
        this.chooseEngLevel.click();
        this.chooseInEngLevel.click();
    }

    get chooseGuild  (){ return $('//*[@placeholder="Select guild"]//mat-select');}
    get chooseInGuild (){ return $("//*[contains(text(),' DataBase Developers ')]");}
    guildClick () {
        this.chooseGuild.click();
        this.chooseInGuild.click();
    }
    
    get chooseContrType  (){ return $('//*[@placeholder="Select contractor type"]//mat-select');}
    get chooseInContrType (){ return $("//*[contains(text(),' Staff ')]");}
    contrTypeClick () {
        this.chooseContrType.click();
        this.chooseInContrType.click();
    }
    
    get aboutEmployeeField (){ return $('textarea[data-placeholder="Write something about the employee ..."]')};
    writeAboutEmployee (someTextAboutEmp){
        this.aboutEmployeeField.setValue(someTextAboutEmp);
    }

    get chooseSkill  (){ return $('//*[@placeholder="Select skill"]//mat-select');}
    get chooseInSkill (){ return $("//*[contains(text(),' JS ')]");}
    skillClick () {
        this.chooseSkill.click();
        this.chooseInSkill.click();
    }

    get chooseSkillLevel  (){ return $('//*[@placeholder="Select SkillLevel"]//mat-select');}
    get chooseInSkillLevel (){ return $("//*[contains(text(),' JS ')]");}
    skillLevelClick () {
        this.chooseSkillLevel.click();
        this.chooseInSkillLevel.click();
    }

    get nonActive (){ return $('//span[@class="mat-checkbox-inner-container"]');}
    nonActiveClick () {
        this.nonActive.click();
    }

    get saveButton (){ return $("//button/span[contains(text(),'Save ')]");}
    saveClick () {
        this.saveButton.click();
    }
    
    get useFilter (){ return $("//button/span/mat-icon[contains(text(),'filter_list')]")};
    filterClick () {
        this.useFilter.click();
    }
    get skillInFilter () { return $("//div/mat-icon[contains(text(),'expand_more')]")};
    get qaSkillInFilter () { return $("//*[contains(text(),' QA ')]/../mat-pseudo-checkbox")};
    clickQaSkillInFilter () {
        this.skillInFilter.click();
        this.qaSkillInFilter.click();

    }

    
    
    // get testField (){ return $('input[placeholder="Enter address ..."]')};

    // enterTestTxt (someTestTxt){
    //     this.testField.setValue(someTestTxt);
    //     browser.pause(1000);
    // }


//     get sexChoice (){ return $('//div[@class="mat-radio-inner-circle"][1]');}

//     clickSexChoice() {
//         this.sexChoice.click();
//         browser.pause(1000);
//     }
//    get emailField (){ return $('input[type="email"]');}

//    enterEmail (someUserEmail){
//     this.emailField.setValue(someUserEmail);
//     browser.pause(1000);
// }

}

module.exports = new ClientPage