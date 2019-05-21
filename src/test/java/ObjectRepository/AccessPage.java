package ObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.Hooks;

public class AccessPage {
	public AccessPage() {
		PageFactory.initElements(Hooks.driver, this);
	}
	
	@FindBy(tagName="h1")
	private WebElement Customerid_generated;

	public WebElement getCustomerid_generated() {
		return Customerid_generated;
	}

	
	}

	
	


