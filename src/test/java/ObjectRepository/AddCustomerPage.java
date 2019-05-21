package ObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import org.openqa.selenium.support.PageFactory;

import cucumber.Hooks;

public class AddCustomerPage {
	public AddCustomerPage() {
		PageFactory.initElements(Hooks.driver, this);
	}
	@FindBy(xpath = "//label[text()='Done']")
	private WebElement done_btn;
	
	@FindBy(id="fname")
	private WebElement FirstName;
	
	
	@FindBy(id="lname")
	private WebElement lastName;
	
	
	@FindBy(id="email")
	private WebElement email_id;
	
	
	@FindBy(name="addr")
	private WebElement Address_;
	
	
	
	
	@FindBy(xpath="//input[@type='reset']")
	private WebElement  reset_btn;
	
	
	@FindBy(xpath="//h1[text()='Add Customer']")
	private WebElement Bank_page;
	

	

	@FindBy(name="submit")
	private WebElement submit_btn;
   
	

	@FindBy(id="message")
	private WebElement error_msg;


	public WebElement getError_msg() {
		return error_msg;
	}


	public WebElement getReset_btn() {
		return reset_btn;
	}


	public WebElement getBank_page() {
		return Bank_page;
	}


	
   public WebElement getSubmit_btn() {
		return submit_btn;
		
		
	}


	public WebElement getDone_btn() {
		return done_btn;
	}


	public WebElement getFirstName() {
		return FirstName;
	}


	public WebElement getLastName() {
		return lastName;
	}


	public WebElement getEmail_id() {
		return email_id;
	}


	public WebElement getAddress_() {
		return Address_;
	}


	public WebElement getPhone_num() {
		return phone_num;
	}
	@FindBy(id="telephoneno")
	private WebElement phone_num;
	
	

}
