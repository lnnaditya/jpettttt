package com.JpetStepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import buildpack.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jpetpage.FishPage;
import jpetpage.HomePage;

public class No_Of_Reptils extends SetupClass {
	HomePage homepage;
	
	
	@Given("^the userrr should launch the appliationn$")
	public void the_userrr_launch_the_appliationn() {
	   
		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");
	}

	@When("^the userrr click on Reptails$")
	public void the_userrr_click_on_Repatails()  {	
		homepage=new HomePage(driver);
		homepage.click_reptiles();
	}

	@Then("^the userrr should get no of  types of Reptails$")
	public void the_userrr_should_get_no_of_types_of_reptails()  {
		
		List<WebElement> links=driver.findElements(By.xpath("//a"));
		int number=links.size();
		System.out.println((number-11)+":no of Reptails");
	}


}
