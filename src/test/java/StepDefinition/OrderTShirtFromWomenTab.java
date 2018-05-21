package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Then;

public class OrderTShirtFromWomenTab extends InitiateCucumberStepDefinition {

	@Then("^Click on Women Tab and select T-Shirt from filter$")
	public void click_on_Women_Tab_and_select_T_Shirt_from_filter() throws Throwable {
		// Hover mouse to image and click on Add to Cart
		act = new Actions(driver);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='block_top_menu']/ul/li[1]/a")));
		driver.findElement(By.xpath("//*[@id='block_top_menu']/ul/li[1]/a")).click();

		if (driver.findElement(By.xpath("//*[@id='categories_block_left']/div/ul/li[1]/ul/li[1]/a")).isDisplayed()) {
			driver.findElement(By.xpath("//*[@id='categories_block_left']/div/ul/li[1]/ul/li[1]/a")).click();
		} else {
			wait.until(ExpectedConditions
					.elementToBeClickable(By.xpath("//*[@id='categories_block_left']/div/ul/li[1]/span")));
			driver.findElement(By.xpath("//*[@id='categories_block_left']/div/ul/li[1]/span")).click();
			wait.until(ExpectedConditions
					.elementToBeClickable(By.xpath("//*[@id='categories_block_left']/div/ul/li[1]/ul/li[1]/a")));
			driver.findElement(By.xpath("//*[@id='categories_block_left']/div/ul/li[1]/ul/li[1]/a")).click();
		}
	}
}
