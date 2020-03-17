package com.JpetStepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import buildpack.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jpetpage.HomePage;

public class Invalid_Search extends SetupClass {
	HomePage homepage;
	@Given("^the user should launch browsser$")
	public void the_user_should_launch_browsser() {
		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");
	}

	@When("^the user should Search for the (.+)$")
	public void the_user_should_Search_for_the_set1(String arg1)  {
	    
		homepage=new HomePage(driver);
		homepage.send_Search_Keys(arg1);
		
		homepage.search_button();
		
		
	}

	@Then("^check the items sholud not display$")
	public void check_the_items_sholud_not_display() {
		
		List<WebElement> links=driver.findElements(By.xpath("//a"));
		int number=links.size();
		if((number-11)==0) {
			
			System.out.println("Invalid searach");
			
		}
		else {
			System.out.println("valid searach");
		}
			
		
	    
	}


	
}
