package cucumber;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {
	public static WebDriver driver;
@Before
public void before() {
	
System.setProperty("webdriver.chrome.driver","C:\\Users\\Srini Raju V\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		

	

}
@After
public void after() {
	
	driver.quit();
}
	

}


