Feature: Order T-Shirt From Women Tab 

@OrderShirt 
Scenario Outline: Order T-Shirt from Women Tab (and Verify in Order History) 
	Given Open firefox and navigate to "http://automationpractice.com" 
	When I click on SignIn button and enter "<Username>" and "<Password>" 
	Then User should be able to login and navigate to "http://automationpractice.com/index.php?controller=my-account" 
	Then Click on Women Tab and select T-Shirt from filter 
	Then Select filters and add T-Shirt to Cart 
	Then Navigate to details and billing page and confirm order 
	Then Verify order in Order History page 
	Then Firefox should be closed 
	
	Examples: 
		|Username|Password|
		|someone@example.com|Password123|