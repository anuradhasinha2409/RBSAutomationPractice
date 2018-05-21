package com.maven;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "CucumberFeatures",
		// tags= {"@OrderShirt", "@UpdateName"},
		// tags= "@OrderShirt",
		// tags= "@UpdateName",
		tags = "@OrderShirt, @UpdateName", glue = { "StepDefinition" }, plugin = { "html:target/cucumber-html-report" })
public class CucumberTestRunner {
}
