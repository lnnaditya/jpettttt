package jpetpage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage {

	WebDriver driver;
	
	
	@FindBy (id="username")
	WebElement userid;
	
	@FindBy (id="password")
	WebElement newpassword;
	
	@FindBy (id="repeatedPassword")
	WebElement conformpassword;
	
	@FindBy (id="firstName")
	WebElement fristname;
	
	@FindBy (id="lastName")
	WebElement lastname;
	
	@FindBy (id="email")
	WebElement email;
	
	@FindBy (id="phone")
	WebElement phone;
	
	@FindBy (id="address1")
	WebElement address1;
	
	@FindBy (id="address2")
	WebElement address2;
	
	@FindBy (id="city")
	WebElement city;
	
	@FindBy (id="state")
	WebElement state;
	
	@FindBy (id="zip")
	WebElement zip;
	
	@FindBy (id="country")
	WebElement country;
	
	@FindBy (id="languagePreference")
	WebElement languagePreference;
	
	@FindBy (xpath="//option[@value='English']")
	WebElement english;
	
	@FindBy (id="favouriteCategoryId")
	WebElement favouriteCategoryId;
	
	@FindBy (xpath="//option[@value='DOGS']")
	WebElement selectCategory;
	
	@FindBy (id="listOption1")
	WebElement enableMyList;
	
	@FindBy (id="bannerOption1")
	WebElement enableMybanner;
	
	@FindBy (id="save")
	WebElement Save_Account_Information;
	
	public RegisterPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	
	public void send_Userid() {
		userid.sendKeys("adityaadii");
	}
	
	
	public void send_Newpassword() {
		newpassword.sendKeys("adityajithuu");
	}
	
	public void send_Conformpassword() {
		conformpassword.sendKeys("adityajithu");
	}
	
	public void send_Fristname() {
		fristname.sendKeys("Aditya");
	}
	
	public void send_Lastname() {
		lastname.sendKeys("Kalapatapu");
	}
	
	public void send_Email() {
		email.sendKeys("lnnaditya@gmail.com");
	}
	
	public void send_Phone() {
		phone.sendKeys("07416801468");
	}
	
	public void send_Address1() {
		address1.sendKeys("16/21-2,S.N.Puram.");
	}
	
	public void send_Address2() {
		address2.sendKeys("Gudivada1");
	}
	
	public void send_City() {
		city.sendKeys("Gudivada");
	}
	
	public void send_State() {
		state.sendKeys("AndhraPradesh");
	}
	
	public void send_Zip() {
		zip.sendKeys("521301");
	}
	
	public void send_country() {
		country.sendKeys("India");
	}
	
	public void Click_LanguagePreference() {
		languagePreference.click();
	}
	
	public void Click_English() {
		english.click();
	}
	
	public void Click_FavouriteCategoryId() {
		favouriteCategoryId.click();
	}
	
	public void Click_SelectCategory() {
		selectCategory.click();
	}
	
	public void Click_EnableMyList() {
		enableMyList.click();
	}
	
	public void Click_EnableMybanner() {
		enableMybanner.click();
	}
	
	public void Click_Save_Account_Information() {
		Save_Account_Information.click();
	}
	
	
	

	
	
	
}
