package com.JpetStepDefinition;

import java.io.IOException;

import buildpack.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jpetpage.DogsPage;
import jpetpage.FishPage;
import jpetpage.HomePage;
import jpetpage.SigninPage;

public class Add_To_Cart_Fish extends SetupClass {
	
	HomePage homepage;
	SigninPage signinpage;
	FishPage fishpage;

	@Given("^the user llaunch the application$")
	public void the_user_lauch_application() {

		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");

	}

	@When("^the user llogin with valid details$")
	public void the_user_enter_valid_details() throws IOException, InterruptedException {
		signinpage = new SigninPage(driver);
		homepage = new HomePage(driver);
		homepage.click_Signin();

		signinpage.send_User2();
		signinpage.click_login();
		Thread.sleep(3000);
	}

	@Then("^the user should click Fish$")
	public void the_user_click_Fish() throws IOException {

		homepage = new HomePage(driver);
		homepage.click_Dogs();
	}

	@When("^the user should click angelfish$")
	public void the_user_click_AngelFish() throws IOException {
		fishpage=new FishPage(driver);
		fishpage.click_Angel_Fish();
	}

	@Then("^the user should click adddtocart$")
	public void the_user_click_agaddtocart() throws IOException, InterruptedException {
		fishpage.angelfish_Add_To_Cart();
		homepage.click_logout();
		driver.close();
	}
	
	
	
	
	

}
