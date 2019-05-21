package cucumber;



import org.junit.Assert;
import org.openqa.selenium.By;

import ObjectRepository.AddTariffToCustomerPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTariffToCustomerSteps {
	
	AddTariffToCustomerPage tarcus=new AddTariffToCustomerPage();
	
	@When("the user enters valid customer ID")
	public void the_user_enters_valid_customer_ID() {
		
		tarcus.getEnter_customerid().sendKeys("418309");
		
	}
	@Then("the tariff plan is added")
	public void the_tariff_plan_is_added() {
	    Assert.assertTrue(tarcus.getTariff_added().isDisplayed());
	}
	@When("the user enters invalid customer ID")
	public void the_user_enters_invalid_customer_ID() {
		 tarcus.getEnter_customerid().sendKeys("12345");
	   }
	@Then("the invalid customer id error message should display")
	public void the_invalid_customer_id_error_message_should_display() {
		Assert.assertTrue(tarcus.getId_invalid_msg().isDisplayed());
	   }

		
		}



