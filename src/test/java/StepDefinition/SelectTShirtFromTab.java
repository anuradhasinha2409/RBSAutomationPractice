package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Then;

public class SelectTShirtFromTab extends InitiateCucumberStepDefinition {

	@Then("^Select T-Shirt$")
	public void select_T_Shirt() throws Throwable {
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='block_top_menu']/ul/li[3]/a")));
		driver.findElement(By.xpath("//*[@id='block_top_menu']/ul/li[3]/a")).click();
	}

}
