package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Then;

public class OrderTShirtFromSearchTab extends InitiateCucumberStepDefinition {

	@Then("^Search for \"([^\"]*)\" in search bar$")
	public void search_for_in_search_bar(String searchText) throws Throwable {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='search_query_top']")));
		driver.findElement(By.xpath("//*[@id='search_query_top']")).sendKeys(searchText);

		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='searchbox']/button")));
		driver.findElement(By.xpath("//*[@id='searchbox']/button")).click();
	}

	@Then("^Add T-Shirt to Cart$")
	public void add_T_Shirt_to_Cart() throws Throwable {
		// Click on Image
		wait.until(ExpectedConditions
				.presenceOfElementLocated(By.xpath("//*[@id='center_column']/ul/li/div/div[1]/div/a[1]/img")));
		driver.findElement(By.xpath("//*[@id='center_column']/ul/li/div/div[1]/div/a[1]/img")).click();

		// Add to cart
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='add_to_cart']/button")));
		driver.findElement(By.xpath("//*[@id='add_to_cart']/button")).click();

		// Proceed to checkout
		wait.until(
				ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")));
		driver.findElement(By.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")).click();
	}
}
