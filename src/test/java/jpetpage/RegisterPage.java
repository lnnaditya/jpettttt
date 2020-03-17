package jpetpage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage {

	WebDriver driver;
	
	
	@FindBy (name="username")
	WebElement userid;
	
	@FindBy (name="password")
	WebElement newpassword;
	
	@FindBy (name="repeatedPassword")
	WebElement conformpassword;
	
	@FindBy (name="account.firstName")
	WebElement fristname;
	
	@FindBy (name="account.lastName")
	WebElement lastname;
	
	@FindBy (name="account.email")
	WebElement email;
	
	@FindBy (name="account.phone")
	WebElement phone;
	
	@FindBy (name="account.address1")
	WebElement address1;
	
	@FindBy (name="account.address2")
	WebElement address2;
	
	@FindBy (name="account.city")
	WebElement city;
	
	@FindBy (name="account.state")
	WebElement state;
	
	@FindBy (name="account.zip")
	WebElement zip;
	
	@FindBy (name="account.country")
	WebElement country;
	
	@FindBy (name="account.languagePreference")
	WebElement languagePreference;
	
	@FindBy (xpath="//option[@value='english']")
	WebElement english;
	
	@FindBy (name="account.favouriteCategoryId")
	WebElement favouriteCategoryId;
	
	@FindBy (xpath="//option[@value='DOGS']")
	WebElement selectCategory;
	
	@FindBy (name="account.listOption")
	WebElement enableMyList;
	
	@FindBy (name="account.bannerOption")
	WebElement enableMybanner;
	
	@FindBy (name="newAccount")
	WebElement Save_Account_Information;
	
	public RegisterPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	
	public void registration_Data() throws InterruptedException {
		Thread.sleep(4000);
		userid.sendKeys("adityaadii");
		newpassword.sendKeys("adityajithuu");
		conformpassword.sendKeys("adityajithu");
		fristname.sendKeys("Aditya");
		lastname.sendKeys("Kalapatapu");
		email.sendKeys("lnnaditya@gmail.com");
		phone.sendKeys("07416801468");
		address1.sendKeys("16/21-2,S.N.Puram.");
		address2.sendKeys("Gudivada1");
		city.sendKeys("Gudivada");
		state.sendKeys("AndhraPradesh");
		zip.sendKeys("521301");
		country.sendKeys("India");
		languagePreference.click();
		Thread.sleep(4000);
		english.click();
		Thread.sleep(4000);
		favouriteCategoryId.click();
		Thread.sleep(4000);
		selectCategory.click();
		enableMyList.click();
		enableMybanner.click();
		
		
	}
	public void submitInfo() {
		
		Save_Account_Information.click();
		
	}


	
	
	
}
