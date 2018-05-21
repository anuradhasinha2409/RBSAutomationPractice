package StepDefinition;

import static org.junit.Assert.assertEquals;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CommonCucumberStepDefinition extends InitiateCucumberStepDefinition {

	public CommonCucumberStepDefinition() {
		InitiateCucumberStepDefinition.driver = null;
		driver = InitiateCucumberStepDefinition.getDriver();
		wait = InitiateCucumberStepDefinition.getWebDriverWait();
		act = InitiateCucumberStepDefinition.getActions();
	}

	@Given("^Open firefox and navigate to \"([^\"]*)\"$")
	public void open_firefox_and_navigate_to(String Url) throws Throwable {
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.get(Url);
		wait.until(
				ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a")));
	}

	@When("^I click on SignIn button and enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_click_on_SignIn_button_and_enter_and(String User, String Pass) throws Throwable {
		driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a")).click();
		driver.findElement(By.xpath("//*[@id='email']")).sendKeys(User);
		driver.findElement(By.xpath("//*[@id='passwd']")).sendKeys(Pass);
		driver.findElement(By.xpath("//*[@id='SubmitLogin']")).click();
		wait.until(
				ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[2]/a")));
	}

	@Then("^User should be able to login and navigate to \"([^\"]*)\"$")
	public void user_should_be_able_to_login_and_navigate_to(String ExpectedUrl) throws Throwable {
		assertEquals(ExpectedUrl, driver.getCurrentUrl());
	}

	@Then("^Select filters and add T-Shirt to Cart$")
	public void select_filters_and_add_T_Shirt_to_Cart() throws Throwable {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='layered_block_left']/p")));
		driver.findElement(By.xpath("//*[@id='layered_id_attribute_group_2']")).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='enabled_filters']/ul/li[1]")));
		driver.findElement(By.xpath("//*[@id='layered_id_attribute_group_13']")).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='enabled_filters']/ul/li[2]")));

		// Hover mouse to image and click on Add to Cart
		act.moveToElement(driver.findElement(By.xpath("//*[@id='center_column']/ul/li/div/div[1]/div/a[1]/img")))
				.perform();
		wait.until(ExpectedConditions
				.presenceOfElementLocated(By.xpath("//*[@id='center_column']/ul/li/div/div[2]/div[2]/a[1]/span")));
		driver.findElement(By.xpath("//*[@id='center_column']/ul/li/div/div[2]/div[2]/a[1]/span")).click();

		// Check and click on Proceed to checkout
		wait.until(
				ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")));
		driver.findElement(By.xpath("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")).click();
	}

	@Then("^Navigate to details and billing page and confirm order$")
	public void navigate_to_details_and_billing_page_and_confirm_order() throws Throwable {
		// Proceed to checkout on summary page
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='center_column']/p[2]/a[1]/span")));
		driver.findElement(By.xpath("//*[@id='center_column']/p[2]/a[1]/span")).click();

		// Proceed to checkout on address page
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='center_column']/form/p/button")));
		driver.findElement(By.xpath("//*[@id='center_column']/form/p/button")).click();

		// Proceed to checkout on shipping page
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='order_step']/li[4]/span")));
		driver.findElement(By.xpath("//*[@id='cgv']")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='form']/p/button")));
		driver.findElement(By.xpath("//*[@id='form']/p/button")).click();

		// Make payment on payment page
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='HOOK_PAYMENT']/div[1]/div/p/a")));
		driver.findElement(By.xpath("//*[@id='HOOK_PAYMENT']/div[1]/div/p/a")).click();

		// Confirm the order
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='cart_navigation']/button")));
		driver.findElement(By.xpath("//*[@id='cart_navigation']/button")).click();

		// Get reference number from Oder Confirmation page
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='center_column']/h1")));
		String text = driver.findElement(By.xpath("//*[@id='center_column']/div")).getText();
		// System.out.println(text);

		// Get reference number
		int intIndex = text.indexOf("reference");
		char value;
		referenceNumber = "";

		if (intIndex == -1) {
			System.out.println("reference not found");
		} else {
			while (text.charAt(intIndex) != ' ') {
				value = text.charAt(intIndex + 10);
				referenceNumber = referenceNumber + value;
				intIndex++;
			}
		}
	}

	@Then("^Verify order in Order History page$")
	public void verify_order_in_Order_History_page() throws Throwable {
		// Navigate to Order History page
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='center_column']/p/a")));
		driver.findElement(By.xpath("//*[@id='center_column']/p/a")).click();

		// Verify order in Order History page
		String beforeXpath = "//*[@id='order-list']/tbody/tr[";
		String afterXpath = "]/td[1]/a";

		int i = 1;
		int flag = 0;

		List<WebElement> totalElements = driver.findElements(By.xpath("//*[@id='order-list']/tbody/tr"));
		while (i <= totalElements.size()) {
			if (driver.findElement(By.xpath(beforeXpath + i + afterXpath)).getText().equals(referenceNumber)) {
				flag++;
				break;
			} else
				i++;
		}
		assertEquals(1, flag);
	}

	@Then("^Get current user first name$")
	public void get_current_user_first_name() throws Throwable {
		// Get Current User name
		wait.until(ExpectedConditions
				.presenceOfElementLocated(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")));
		String currentUserFullName = driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span"))
				.getText();
		String arr[] = currentUserFullName.split(" ", 2);
		currentUserFirstName = arr[0];
	}

	@Then("^Update First Name- \"([^\"]*)\" and keep the same password- \"([^\"]*)\" as before$")
	public void update_First_Name_and_keep_the_same_password_as_before(String newUser, String samePassword)
			throws Throwable {
		// Update first name every time
		Random random = new Random();
		char randomValue = (char) (random.nextInt(26) + 'A');
		newUserFirstName = newUser + "-" + randomValue;
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='firstname']")));
		driver.findElement(By.xpath("//*[@id='firstname']")).clear();
		driver.findElement(By.xpath("//*[@id='firstname']")).sendKeys(newUserFirstName);

		// Keep same password and confirm
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='old_passwd']")));
		driver.findElement(By.xpath("//*[@id='old_passwd']")).sendKeys(samePassword);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='passwd']")));
		driver.findElement(By.xpath("//*[@id='passwd']")).sendKeys(samePassword);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='confirmation']")));
		driver.findElement(By.xpath("//*[@id='confirmation']")).sendKeys(samePassword);

		wait.until(ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id='center_column']/div/form/fieldset/div[11]/button")));
		driver.findElement(By.xpath("//*[@id='center_column']/div/form/fieldset/div[11]/button")).click();
	}

	@Then("^Verify that User Name is updated$")
	public void verify_that_User_Name_is_updated() throws Throwable {
		// Get New User name
		wait.until(ExpectedConditions
				.presenceOfElementLocated(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")));
		String currentUserFullName = driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span"))
				.getText();
		String arr[] = currentUserFullName.split(" ", 2);
		String newUserActualFirstName = arr[0];

		assertEquals(newUserFirstName, newUserActualFirstName);
	}

	@Then("^Reset the First Name- \"([^\"]*)\" and keep the same password- \"([^\"]*)\" as before$")
	public void reset_the_First_Name_and_keep_the_same_password_as_before(String oldUserName, String oldPassword)
			throws Throwable {
		// Navigate to My Account
		wait.until(ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")));
		driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")).click();

		// Navigate to My Personal Information page
		wait.until(ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id='center_column']/div/div[1]/ul/li[4]/a/span")));
		driver.findElement(By.xpath("//*[@id='center_column']/div/div[1]/ul/li[4]/a/span")).click();

		// Reset first name and password
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='firstname']")));
		driver.findElement(By.xpath("//*[@id='firstname']")).clear();
		driver.findElement(By.xpath("//*[@id='firstname']")).sendKeys(oldUserName);

		// Keep same password and confirm
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='old_passwd']")));
		driver.findElement(By.xpath("//*[@id='old_passwd']")).sendKeys(oldPassword);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='passwd']")));
		driver.findElement(By.xpath("//*[@id='passwd']")).sendKeys(oldPassword);

		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='confirmation']")));
		driver.findElement(By.xpath("//*[@id='confirmation']")).sendKeys(oldPassword);

		wait.until(ExpectedConditions
				.elementToBeClickable(By.xpath("//*[@id='center_column']/div/form/fieldset/div[11]/button")));
		driver.findElement(By.xpath("//*[@id='center_column']/div/form/fieldset/div[11]/button")).click();
	}

	@Then("^Verify that User Name is reset to \"([^\"]*)\"$")
	public void verify_that_User_Name_is_reset_to(String oldUserName) throws Throwable {
		// Verify that First User Name is restored
		wait.until(ExpectedConditions
				.presenceOfElementLocated(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")));
		String currentUserFullName = driver.findElement(By.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a/span"))
				.getText();
		String arr[] = currentUserFullName.split(" ", 2);
		String newUserActualFirstName = arr[0];

		assertEquals(oldUserName, newUserActualFirstName);
	}

	@Then("^Firefox should be closed$")
	public void firefox_should_be_closed() throws Throwable {
		driver.quit();
	}
}
