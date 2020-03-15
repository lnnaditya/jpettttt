package jpettest;

import java.io.IOException;

import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import buildpack.SetupClass;
import jpetpage.CatsPage;
import jpetpage.DogsPage;
import jpetpage.HomePage;
import jpetpage.RegisterPage;
import jpetpage.SigninPage;

public class JPetTest extends SetupClass {
	HomePage homepage;
	SigninPage signin;
	RegisterPage registerpage;
	DogsPage dogspage;
	CatsPage catpage;

	@BeforeSuite

	public void startup() {

		launchApplication("chrome", "https://jpetstore.cfapps.io/catalog");
	}

	@Test(priority=1)

	public void register_Testing() throws IOException, InterruptedException {
		homepage = new HomePage(driver);
		signin = new SigninPage(driver);
		registerpage=new RegisterPage(driver);
		Thread.sleep(3000);
		homepage.click_Signin();
		Thread.sleep(3000);
		signin.click_register();
		Thread.sleep(3000);
		registerpage.send_Userid();
		registerpage.send_Newpassword();
		registerpage.send_Conformpassword();
		registerpage.send_Fristname();
		registerpage.send_Lastname();
		registerpage.send_Email();
		registerpage.send_Phone();
		registerpage.send_Address1();
		registerpage.send_Address2();
		registerpage.send_City();
		registerpage.send_State();
		registerpage.send_Zip();
		registerpage.send_country();
		registerpage.Click_LanguagePreference();
		Thread.sleep(3000);
		registerpage.Click_English();
		registerpage.Click_FavouriteCategoryId();
		Thread.sleep(3000);
		registerpage.Click_SelectCategory();
		registerpage.Click_EnableMyList();
		registerpage.Click_EnableMybanner();
		registerpage.Click_Save_Account_Information();
		

	}

	@Test(priority=2)

	public void signin_testing1() throws IOException, InterruptedException {
		
		homepage.click_Signin();
		signin.send_User1();
		signin.click_login();
		Thread.sleep(3000);
		homepage.click_logout();
		
	}

	@Test(priority=3)
	public void signin_testing2() throws IOException {
		homepage.click_Signin();
		signin.send_User2();
		signin.click_login();
	}
	
	@Test(priority=4)
	public void add_To_Cart() throws InterruptedException {
		dogspage=new DogsPage(driver);
		catpage=new CatsPage(driver);
		homepage.click_Dogs();
		dogspage.click_Golden_Retriever();
		dogspage.gr_Add_To_Cart();	
		homepage.click_Cats();
		catpage.click_Manx();
		Thread.sleep(3000);
		catpage.click_Mx_Add_To_Cart();
		Thread.sleep(3000);
		homepage.click_Cart_Icon();
	}
	
	@AfterSuite
	public void close() {
	driver.close();
	}
	
	
	
	
	
	
}
