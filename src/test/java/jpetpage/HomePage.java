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
	@FindBy(name = "keyword")
	WebElement search_keys;
	@FindBy(name = "searchProducts")
	WebElement search_button;
	@FindBy(xpath = "//div[@id='QuickLinks']/a[2]/img")
	WebElement dogs;
	@FindBy(xpath = "//*[@id='QuickLinks']/a[4]/img")
	WebElement cats;
	@FindBy(xpath = "//a[text()='Sign Out']")
	WebElement logout;
	@FindBy(xpath = "//*[@id='LogoContent']/a/img")
	WebElement logo;
	@FindBy(xpath = "//*[@id='MainImageContent']/map/area[1]")
	WebElement birdspic;
	@FindBy(xpath="//*[@id='SidebarContent']/a[1]/img")
	WebElement fishlink;
	@FindBy(xpath="//*[@id='QuickLinks']/a[3]/img")
	WebElement reptails;
	@FindBy(xpath="//*[@id='MenuContent']/a[3]")
	WebElement helplink;
	@FindBy (xpath="//*[@id='MenuContent']/a[3]")
	WebElement myaccount;
	@FindBy (xpath="//*[@id='Catalog']/a")
	WebElement myorders;

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

	public void click_Logo() {

		logo.click();
	}
	public void click_bird_pic(){
		birdspic.click();
	}
	public void click_fish_link() {
		fishlink.click();
	}
	public void click_reptiles() {
		
		reptails.click();
	}
	public void click_help() {
		helplink.click();
	}
	
	public void click_myaccount() {
		myaccount.click();
	}
	
	public void click_myorders() {
		myorders.click();
	}
}
