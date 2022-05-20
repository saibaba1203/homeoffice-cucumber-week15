package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WorkTypePage extends Utility {

    private static final Logger log = LogManager.getLogger(WorkTypePage.class.getName());

    public WorkTypePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    List<WebElement> jobType;

    @CacheLookup
    @FindBy(xpath = "//button[text()='Continue']")
    WebElement continueButton;

    public void selectJobType(String job) {
        log.info("Selecting Job Type  " + jobType.toString());
        for (WebElement menu : jobType) {
            if (menu.getText().equals(job)) {
                clickOnElement(menu);
                break;
            }
        }
    }

    public void clickNextStepButton() {
        log.info("Clicking on 'Continue' button  " + continueButton.toString());
        clickOnElement(continueButton);
    }

}
