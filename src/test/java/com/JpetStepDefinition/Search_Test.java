package com.JpetStepDefinition;

import org.openqa.selenium.By;
import org.testng.Assert;

import buildpack.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jpetpage.CatsPage;
import jpetpage.DogsPage;
import jpetpage.HomePage;
import jpetpage.RegisterPage;
import jpetpage.SigninPage;

public class Search_Test extends SetupClass {
	HomePage homepage;
	SigninPage signin;
	RegisterPage registerpage;
	DogsPage dogspage;
	CatsPage catpage;
	String argument;
	@Given("^the user should launch browser$")
	public void the_user_should_launch_browser()  {
	    // Write code here that turns the phrase above into concrete actions
		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");
	}
	@When("^the user Search for the \"([^\"]*)\"$")
	public void the_user_Search_for_the(String arg1)  {
	    // Write code here that turns the phrase above into concrete actions
	 homepage=new HomePage(driver);
		argument=arg1;
	  homepage.send_Search_Keys(argument);
	  homepage.search_button();
		
	}

	@Then("^check if the golden retriever is displayed$")
	public void check_if_the_golden_retriever_is_displayed()  {
	    // Write code here that turns the phrase above into concrete actions
	  String argument_match=driver.findElement(By.xpath("//*[@id='Catalog']/table/tbody/tr[2]/td[3]")).getText();
	
	Assert.assertTrue(argument_match.contains(argument), "No such item");
	}
	
	

}
