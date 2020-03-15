package jpetpage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

	WebDriver driver;

	@FindBy(xpath = "//div[@id='MenuContent']/a[2]")
	WebElement signin;
	@FindBy(xpath = "//img[@name='img_cart']")
	WebElement cart_icon;
	@FindBy(name="keyword")
	WebElement search_keys;
	@FindBy(name= "searchProducts")
	WebElement search_button;
	@FindBy(xpath = "//img[@src='/images/sm_dogs.gif']")
	WebElement dogs;
	@FindBy(xpath = "//img[@src='/images/sm_cats.gif']")
	WebElement cats;
	@FindBy(xpath = "//a[text()='Sign Out']")
	WebElement logout;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	public void click_Signin() {

		signin.click();

	}

	public void click_logout() {

		logout.click();

	}

	public void click_Cart_Icon() {

		cart_icon.click();
	}

	public void send_Search_Keys(String values) {
		search_keys.sendKeys(values);

	}
	
	public void search_button() {
		search_button.click();
	}

	public void click_Dogs() {

		dogs.click();
	}

	public void click_Cats() {
		cats.click();
	}

}
