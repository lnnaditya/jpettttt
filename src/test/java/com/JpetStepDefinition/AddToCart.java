package com.JpetStepDefinition;

import java.io.IOException;

import buildpack.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jpetpage.DogsPage;
import jpetpage.HomePage;
import jpetpage.SigninPage;

public class AddToCart extends SetupClass {

	HomePage homepage;
	SigninPage signinpage;

	@Given("^the user launch the application$")
	public void the_user_lauch_application() {

		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");

	}

	@When("^the user login with valid details$")
	public void the_user_enter_valid_details() throws IOException, InterruptedException {
		signinpage = new SigninPage(driver);
		homepage = new HomePage(driver);
		homepage.click_Signin();

		signinpage.send_User2();
		signinpage.click_login();
		Thread.sleep(3000);
	}

	@Then("^the user should click dogs$")
	public void the_user_click_dogs() throws IOException {

		homepage = new HomePage(driver);
		homepage.click_Dogs();
	}

	@When("^the user should click Golden Retriever$")
	public void the_user_click_golden_retriever() throws IOException {
		DogsPage dogspage = new DogsPage(driver);
		dogspage.click_Golden_Retriever();

	}

	@Then("^the user should click addtocart$")
	public void the_user_click_addtocart() throws IOException, InterruptedException {
		DogsPage dogspage = new DogsPage(driver);
		dogspage.gr_Add_To_Cart();
		homepage.click_logout();
		driver.close();
	}
}
