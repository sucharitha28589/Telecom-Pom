package cucumber;

import org.junit.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import ObjectRepository.AddTariffPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsAddCustomer {
	static WebDriver driver;
	
	
	
		
	   
	
	
	
	
	@Then("the invalid customer id shoul generate")
	public void the_invalid_customer_id_shoul_generate() {
		Assert.assertTrue(driver.findElement(By.tagName("h4")).isDisplayed());
	    
	   }
	
	

	@Then("Then the invalid customer id error message should display")
	public void then_the_invalid_customer_id_error_message_should_display() {
		Assert.assertTrue(driver.findElement(By.tagName("h4")).isDisplayed());
	  }








}
