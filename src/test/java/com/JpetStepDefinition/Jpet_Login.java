package com.JpetStepDefinition;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import buildpack.SetupClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jpetpage.HomePage;
import jpetpage.SigninPage;

public class Jpet_Login extends SetupClass {
//WebDriver driver;
	HomePage homepage;
	SigninPage signinpage;
	String argument;

	@Given("^the user should launch the application$")
	public void the_User_Launch_Browser() {

		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");

	}

	@When("^the user open the 	Home Page$")
	public void the_User_click_signin() {
		homepage = new HomePage(driver);
		homepage.click_Signin();

	}

	@Then("^enter username and password$")
	public void the_User_enter_login_dtails() throws IOException {
		signinpage = new SigninPage(driver);
		signinpage.send_User1();
		signinpage.click_login();

		// homepage.click_logout();

	}

	@Then("^click signout$")
	public void click_signout() {

		homepage.click_logout();

	}

	@When("^the user gets Home Page$")
	public void the_user_gets_Home_Page() {
		// Write code here that turns the phrase above into concrete actions

		homepage.click_Signin();

	}

	@Then("^user enter invalid username and password$")
	public void user_enter_invalid_username_and_password() throws IOException {
		// Write code here that turns the phrase above into concrete actions
		signinpage.send_User3();

	}

	@Then("^check if the error messge is displayed$")
	public void check_if_the_error_messge_is_displayed() {
		signinpage.click_login();
		// Write code here that turns the phrase above into concrete actions
		String text = driver.findElement(By.xpath("//*[@id='Content']/ul/li")).getText();
		// Assert.assertEquals(text, "Invalid username or password. Signon failed.");
		Assert.assertTrue(text.equalsIgnoreCase("Invalid username or password. Signon failed."),
				"login details are incorret");
	}

	@When("^the user enter valid username and password$")
	public void the_user_enter_valid_details() throws IOException {

		signinpage.send_User2();
		signinpage.click_login();
	}

	@Then("^check the first name$")
	public void check_the_first_name() {

		String firstname = driver.findElement(By.id("WelcomeContent")).getText();
		Assert.assertTrue(firstname.equalsIgnoreCase("Welcome Kalapatapu Lakshmi Narasimha!"), "Invalid login");

	}
	

}
