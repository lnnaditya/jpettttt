package jpetpage;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import datapack.Excel_Class;

public class SigninPage {
	WebDriver driver;
	Excel_Class data;
	@FindBy(name = "username")
	WebElement username;
	@FindBy(name = "password")
	WebElement password;
	@FindBy(name = "signon")
	WebElement login;
	@FindBy(linkText ="Register Now!")
	WebElement register;

	public SigninPage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void send_User1() throws IOException {
		username.clear();
		password.clear();

		data = new Excel_Class();

		username.sendKeys(data.excel_username(1));
		password.sendKeys(data.excel_password(1));
	}

	public void send_User2() throws IOException {
		username.clear();
		password.clear();
		data = new Excel_Class();
		username.sendKeys(data.excel_username(2));
		password.sendKeys(data.excel_password(2));
	}

	public void send_User3() throws IOException {
		username.clear();
		password.clear();
		data = new Excel_Class();
		username.sendKeys(data.excel_username(3));
		password.sendKeys(data.excel_password(3));
	}

	public void click_register() {
		register.click();
	}

	public void click_login() {
		// TODO Auto-generated method stub
		login.click();

	}

}
