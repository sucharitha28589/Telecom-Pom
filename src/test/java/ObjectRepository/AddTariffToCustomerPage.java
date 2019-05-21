package ObjectRepository;

import javax.swing.text.Element;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.Hooks;

public class AddTariffToCustomerPage {
	public AddTariffToCustomerPage() {
		PageFactory.initElements(Hooks.driver, this);
	}

	@FindBy (xpath = "//input[@onkeyup='validateno14();']")
	private WebElement enter_customerid;
	
	
	
	public WebElement getEnter_customerid() {
		return enter_customerid;
	}

	@FindBy (xpath= "//h2[contains(text(),'Approved')]")
	private WebElement tariff_added;


	public WebElement getTariff_added() {
		return tariff_added;
	}
   
	
	@FindBy (tagName= "h4")
	private WebElement id_invalid_msg;



	public WebElement getId_invalid_msg() {
		return id_invalid_msg;
	}


	

}

