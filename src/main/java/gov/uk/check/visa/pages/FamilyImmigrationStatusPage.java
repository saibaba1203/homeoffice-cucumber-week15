package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FamilyImmigrationStatusPage extends Utility {

    private static final Logger log = LogManager.getLogger(FamilyImmigrationStatusPage.class.getName());

    public FamilyImmigrationStatusPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    List<WebElement> immigrationStatus;

    @CacheLookup
    @FindBy(xpath = "//button[text()='Continue']")
    WebElement continueButton;


    public void selectImmigrationStatus(String status){
        log.info("Selecting immigration status  " + immigrationStatus.toString());
        for (WebElement menu : immigrationStatus) {
            if (menu.getText().equals(status)) {
                clickOnElement(menu);
                break;
            }
        }
    }
    public void clickNextStepButton() {
        log.info("Clicking on continue button  " + continueButton.toString());
        clickOnElement(continueButton);
    }
}
