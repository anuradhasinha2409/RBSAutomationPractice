package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Then;

public class UpdateFirstName extends InitiateCucumberStepDefinition {

	@Then("^Navigate to My Account-> My Personal Information page$")
	public void navigate_to_My_Account_My_Personal_Information_page() throws Throwable {
		// Navigate to My Account
		wait.until(ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")));
		driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")).click();

		// Navigate to My Personal Information page
		wait.until(ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id='center_column']/div/div[1]/ul/li[4]/a/span")));
		driver.findElement(By.xpath("//*[@id='center_column']/div/div[1]/ul/li[4]/a/span")).click();
	}
}
