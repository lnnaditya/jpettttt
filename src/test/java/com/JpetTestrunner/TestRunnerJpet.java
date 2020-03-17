package com.JpetTestrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/functionalTests/JpetTest1.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@TS_01,@TS_02,@TS_03,@TS_04,@TS_05,@TS_06,@TS_07,@TS_08,@TS_09"},
		glue = {"com.JpetStepDefinition"},
		monochrome = true
		)
		






public class TestRunnerJpet {

}
