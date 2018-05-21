package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class InitiateCucumberStepDefinition {

	public static WebDriver driver = null;
	public static WebDriverWait wait = null;
	public static Actions act = null;

	public static String referenceNumber = "";
	public static String currentUserFirstName = "";
	public static String newUserFirstName = "";

	public static WebDriver getDriver() {
		if (driver == null) {
			System.setProperty("webdriver.gecko.driver", "C:\\GekoDriver\\GekoDriver\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		return driver;
	}

	public static WebDriverWait getWebDriverWait() {
		if (driver != null) {
			wait = new WebDriverWait(driver, 20);
		}
		return wait;
	}

	public static Actions getActions() {
		if (driver != null) {
			act = new Actions(driver);
		}
		return act;
	}
}
