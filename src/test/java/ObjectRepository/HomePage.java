package ObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.Hooks;

public class HomePage {
	public HomePage() {
		PageFactory.initElements(Hooks.driver, this);
	}
	@FindBy(xpath = "(//a[text()='Add Customer'])[1]")
    private WebElement add_customer;
	public WebElement getAdd_customer() {
		return add_customer;
		}

	@FindBy(xpath = "//a[text()='Add Tariff Plan']")
	private WebElement add_tarrif;
	public WebElement getAdd_tarrif() {
		return add_tarrif;
	}
	
	@FindBy(xpath = "(//section[@id='one']//a)[2]")
	private WebElement add_tariff_to_customer ;
	public WebElement getAdd_tariff_to_customer() {
		return add_tariff_to_customer;
	}
	
	@FindBy(xpath = "//a[text()='Pay Billing']")
	private WebElement pay_billing ;
	public WebElement getPay_billing() {
		return pay_billing;
	}
	
	


	

}
