package ObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.Hooks;

public class AddTariffPage {
	public AddTariffPage() {
		PageFactory.initElements(Hooks.driver, this);
	}
	@FindBy(id = "rental1")
	private WebElement monthly_Rental;
	
	
	@FindBy(id = "local_minutes")
	private WebElement Free_Local_Minutes;
	
	@FindBy(id = "inter_minutes")
	private WebElement International_Minutes;
	
	
	@FindBy(id = "sms_pack")
	private WebElement SMS_Pack;
	
	
	@FindBy(id = "minutes_charges")
	private WebElement Local_MinutesCharges;
	
	@FindBy(id = "inter_charges")
	private WebElement International_Charges;
 
	
	@FindBy(id = "sms_charges")
	private WebElement SMS_Charges;
	
	@FindBy(tagName="h1")
	private WebElement tariff_plan_added;

	@FindBy(tagName="h1")
	private WebElement page_clear;

	@FindBy(id="message2")
	private WebElement error_msg_displayed;

	

	

	public WebElement getError_msg_displayed() {
		return error_msg_displayed;
	}


	public WebElement getPage_clear() {
		return page_clear;
	}


	public WebElement getTariff_plan_added() {
		return tariff_plan_added;
	}


	public WebElement getMonthly_Rental() {
		return monthly_Rental;
	}


	public WebElement getFree_Local_Minutes() {
		return Free_Local_Minutes;
	}


	public WebElement getInternational_Minutes() {
		return International_Minutes;
	}


	public WebElement getSMS_Pack() {
		return SMS_Pack;
	}


	public WebElement getLocal_MinutesCharges() {
		return Local_MinutesCharges;
	}


	public WebElement getInternational_Charges() {
		return International_Charges;
	}


	public WebElement getSMS_Charges() {
		return SMS_Charges;
	}


	
}
