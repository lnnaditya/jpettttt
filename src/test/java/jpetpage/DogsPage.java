package jpetpage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DogsPage {
WebDriver driver;
	@FindBy(xpath = "//a[text()='K9-RT-01']")
	WebElement golden_retriever;
	@FindBy(xpath = "//a[@class='Button']")
	WebElement add_to_cart;

	public DogsPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
		
	}
	
	
	
	public void click_Golden_Retriever() {
		golden_retriever.click();
	}

	public void gr_Add_To_Cart() throws InterruptedException {
		Thread.sleep(4000);
		add_to_cart.click();
	}
}
