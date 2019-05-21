package cucumber;

import org.junit.Assert;
import ObjectRepository.AddCustomerPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddCustomerSteps {
	@When("the user fill in the valid customer details")
	public void the_user_fill_in_the_valid_customer_details() throws InterruptedException {
		AddCustomerPage addcust=new AddCustomerPage();
		addcust.getDone_btn().click();
		addcust.getFirstName().sendKeys("suchi");
		addcust.getLastName().sendKeys("varma");
		addcust.getEmail_id().sendKeys("suchi@gmail.com");
		addcust.getAddress_().sendKeys("chennai");
		addcust.getPhone_num().sendKeys("1234567891");
	}
	AddCustomerPage addcust=new AddCustomerPage();
	@When("the user clicks the submit button")
	public void the_user_clicks_the_submit_button() {
		addcust.getSubmit_btn().click();
		
		
	}

	
	@When("the user clicks the reset button")
	public void the_user_clicks_the_reset_button() {
		AddCustomerPage addcust=new AddCustomerPage();
		addcust.getReset_btn();
		
	}

	@Then("the form should be cleared")
	public void the_form_should_be_cleared() {
		Assert.assertTrue(addcust.getBank_page().isDisplayed());
	}
	
	@When("the user enters incorrect data format")
	public void the_user_enters_incorrect_data_format() {
		addcust.getDone_btn();
		addcust.getFirstName().sendKeys("12345");
		addcust.getLastName().sendKeys("123456");
		addcust.getEmail_id().sendKeys("suchi@gmail.com");
		addcust.getAddress_().sendKeys("1234");
		addcust.getPhone_num().sendKeys("qwerty");
	}
	@Then("the error message is displayed")
	public void the_error_message_is_displayed() {
		Assert.assertTrue(addcust.getError_msg().isDisplayed());

	}
	@When("The user keeps the field empty")
	public void the_user_keeps_the_field_empty() {
		addcust.getDone_btn();
		addcust.getFirstName().sendKeys("");
		addcust.getLastName().sendKeys("");
		addcust.getEmail_id().sendKeys("");
		addcust.getAddress_().sendKeys("");
		addcust.getPhone_num().sendKeys("");
	}
		
	@Then("the error message in alert is displayed")
	public void the_error_message_in_alert_is_displayed() {
		 Hooks.driver.switchTo().alert().accept();
	}	



   
	


}
