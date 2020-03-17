package com.JpetStepDefinition;

import java.io.IOException;

import org.openqa.selenium.By;
import org.testng.Assert;

import buildpack.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jpetpage.Check_Out_Page;
import jpetpage.DogsPage;
import jpetpage.HomePage;
import jpetpage.SigninPage;

public class Check_Out_Test extends SetupClass {
	HomePage homepage;
	SigninPage signinpage;
	Check_Out_Page checkoutpage;

	@Given("^the user launch the application jpet$")
	public void the_user_launch_the_application_jpet() {

		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");

	}

	@When("^the user login with valid details in jpet$")
	public void the_user_login_with_valid_details_in_jpet() throws IOException, InterruptedException {
		signinpage = new SigninPage(driver);
		homepage = new HomePage(driver);
		homepage.click_Signin();

		signinpage.send_User2();
		signinpage.click_login();
		Thread.sleep(3000);

	}

	@Then("^the user should click dogs in jpet homepage$")
	public void the_user_should_click_dogs_in_jpet_homepage() {
		homepage = new HomePage(driver);
		homepage.click_Dogs();
	}

	@Then("^the user should click Golden Retriever in dogs page$")
	public void the_user_should_click_Golden_Retriever_in_dogs_page() {
		DogsPage dogspage = new DogsPage(driver);
		dogspage.click_Golden_Retriever();
	}

	@Then("^the user should click addtocart to check out$")
	public void the_user_should_click_addtocart_to_check_out() throws InterruptedException {
		DogsPage dogspage = new DogsPage(driver);
		dogspage.gr_Add_To_Cart();
	}

	@Then("^the user should click proceed to checkout$")
	public void the_user_should_click_proceed_to_checkout() {
		checkoutpage = new Check_Out_Page(driver);
		checkoutpage.click_proceed_to_checkout();

	}

	@Then("^the user should click continue$")
	public void the_user_should_click_continue() {
		checkoutpage.click_continuee();

	}

	@Then("^the user should click confirm$")
	public void the_user_should_click_confirm() {
		checkoutpage.click_conform();

		String orderconfirm = driver.findElement(By.xpath("//*[@id='Content']/ul/li")).getText();
		Assert.assertTrue(orderconfirm.equalsIgnoreCase("Thank you, your order has been submitted."),
				"Order not conformed");
		System.out.println("Orderd Successfully");

		driver.close();

	}

}
