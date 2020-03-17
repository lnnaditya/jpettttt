package com.JpetStepDefinition;

import buildpack.SetupClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import jpetpage.HomePage;

public class CheckTheBirds extends SetupClass {

	HomePage homepage;

	@Given("^the user have to launch browser$")
	public void the_user_have_to_launch_browser() {
		homepage=new HomePage(driver);
		launchApplication("chrome", "https://petstore.octoperf.com/actions/Catalog.action");
		
	}

	@Then("^the user should click the birdspic$")
	public void the_user_should_click_the_birdspic() {

		homepage.click_bird_pic();
		
	}

}
