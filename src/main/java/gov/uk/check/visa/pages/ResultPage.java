package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class ResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    public ResultPage() {PageFactory.initElements(driver, this);}

    @CacheLookup
    @FindBy(xpath = "//*[@id='result-info']/div[2]/h2")
    WebElement getMessage;


    public String getResultMessage() {
        log.info("Getting result message " + getMessage.toString());
        String result = getTextFromElement(getMessage);
        return result;
    }

    public void verifyIfResultMessage(String expMsg) {
        if (getResultMessage().equalsIgnoreCase(expMsg)) {
            Assert.assertTrue(true);
        } else {
            Assert.fail();
        }
    }
}
