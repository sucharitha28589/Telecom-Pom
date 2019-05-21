package cucumber;

import org.junit.Assert;

import ObjectRepository.AccessPage;
import cucumber.api.java.en.Then;

public class AccessSteps {
	@Then("the user should see the customer ID generated")
	public void the_user_should_see_the_customer_ID_generated() {
		AccessPage access=new AccessPage();
		
		Assert.assertTrue(access.getCustomerid_generated().isDisplayed());
	}


}
