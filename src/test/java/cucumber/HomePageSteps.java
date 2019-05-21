package cucumber;





import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import ObjectRepository.HomePage;
import cucumber.api.java.en.Given;

public class HomePageSteps {
	@Given("the user is in home page")
	public void the_user_is_in_home_page() throws InterruptedException {
		Hooks.driver.get("http://demo.guru99.com/telecom/");
		Hooks.driver.manage().window().maximize();
		Thread.sleep(2000);
	  }

	
	@Given("the user is in add customer page")
	public void the_user_is_in_add_customer_page() {
		
	    HomePage home=new HomePage();
	    home.getAdd_customer().click();
	   
	}
	@Given("the user is in add tarrif plan page")
	public void the_user_is_in_add_tarrif_plan_page() throws InterruptedException {
		HomePage home=new HomePage();
		home.getAdd_tarrif().click();
	 
	}
	@Given("the user is in add tarrif plan to customer page")
	public void the_user_is_in_add_tarrif_plan_to_customer_page() throws InterruptedException {
		HomePage home=new HomePage();
		home.getAdd_tariff_to_customer().click();
		
	   }

	@Given("the user is in the pay billing page")
	public void the_user_is_in_the_pay_billing_page() throws InterruptedException {
		HomePage home=new HomePage();
		home.getPay_billing().click();
	
	   	}

		

		
		
		
		
		}




