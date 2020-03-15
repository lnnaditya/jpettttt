package jpetpage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CatsPage {
WebDriver driver;
	@FindBy(xpath="//a[text()='FL-DSH-01']") WebElement manx;
	@FindBy(xpath="//*[@id='Catalog']/table/tbody/tr[3]/td[5]/a") WebElement mx_add_to_cart;
	public CatsPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
		
	}
	
	
	public void click_Manx() {
		
		manx.click();
		
	}
	
	public void click_Mx_Add_To_Cart() throws InterruptedException {
		Thread.sleep(4000);
		mx_add_to_cart.click();
		
	}
	
}
