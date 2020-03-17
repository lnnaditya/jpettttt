package jpetpage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Check_Out_Page {
	WebDriver driver;
	@FindBy(xpath = "//*[@id='Cart']/a")
	WebElement proceed_to_checkout;
	@FindBy(xpath = "//*[@id='Catalog']/form/input")
	WebElement continuee;
	@FindBy(xpath = "//*[@id='Catalog']/a")
	WebElement conform;
	@FindBy(xpath="//*[@id=\"Cart\"]/form/table/tbody/tr[2]/td[8]/a")
	WebElement remove;

	public Check_Out_Page(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
		
	}
	
	
	
	public void click_proceed_to_checkout() {
		proceed_to_checkout.click();
	}
	public void click_continuee() {
		continuee.click();
	}
	public void click_conform() {
		conform.click();
	}
	public void click_remove() {
		remove.click();
	}
}
