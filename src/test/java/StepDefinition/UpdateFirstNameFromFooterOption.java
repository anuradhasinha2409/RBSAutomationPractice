package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Then;

public class UpdateFirstNameFromFooterOption extends InitiateCucumberStepDefinition {

	@Then("^Navigate to My Personal Information page from footer option$")
	public void navigate_to_My_Personal_Information_page_from_footer_option() throws Throwable {
		// Navigate to My Personal Information page
		wait.until(
				ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='footer']/div/section[5]/div/ul/li[4]/a")));
		driver.findElement(By.xpath("//*[@id='footer']/div/section[5]/div/ul/li[4]/a")).click();
	}
}
