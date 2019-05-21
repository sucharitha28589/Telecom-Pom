package cucumber;

import org.junit.Assert;
import org.openqa.selenium.By;

import ObjectRepository.AddTariffPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTariffSteps {
	@When("the user fill in the valid plan details{string},{string},{string},{string},{string},{string},{string}")
	public void the_user_fill_in_the_valid_plan_details(String MonthRental, String FreelocMin, String FreeintMins, String Freesms, String Loccharges, String Intchargesv, String Smscharges) {
	AddTariffPage tariff=new AddTariffPage();
	tariff.getMonthly_Rental().sendKeys(MonthRental);
	tariff.getFree_Local_Minutes().sendKeys(FreelocMin);
	tariff.getInternational_Minutes().sendKeys(FreeintMins);
	tariff.getSMS_Pack().sendKeys(Freesms);
	tariff.getLocal_MinutesCharges().sendKeys(Loccharges);
	tariff.getInternational_Charges().sendKeys(Intchargesv);
	tariff.getSMS_Charges().sendKeys(Smscharges);
	}
	@Then("user should see the success message")
	public void user_should_see_the_success_message() {
		AddTariffPage tariff=new AddTariffPage();
		Assert.assertTrue(tariff.getTariff_plan_added().isDisplayed());
	}

	@Then("the add tariff form should be cleared")
	public void the_add_tariff_form_should_be_cleared() {
		AddTariffPage tariff=new AddTariffPage();
		Assert.assertTrue(tariff.getPage_clear().isDisplayed());
		
	  	}

	@When("the user fill in the invalid format")
	public void the_user_fill_in_the_invalid_format() {
		AddTariffPage tariff=new AddTariffPage();
		tariff.getMonthly_Rental().sendKeys("asdf");
		tariff.getFree_Local_Minutes().sendKeys("FreelocMin");
		tariff.getInternational_Minutes().sendKeys("FreeintMins");
		tariff.getSMS_Pack().sendKeys("Freesms");
		tariff.getLocal_MinutesCharges().sendKeys("Loccharges");
		tariff.getInternational_Charges().sendKeys("Intchargesv");
		tariff.getSMS_Charges().sendKeys("Smscharges");
		 }

	
	@Then("user should see the error message")
	public void user_should_see_the_error_message() {
		AddTariffPage tariff=new AddTariffPage();
		Assert.assertTrue(tariff.getError_msg_displayed().isDisplayed());
		
	
	
	

}}
