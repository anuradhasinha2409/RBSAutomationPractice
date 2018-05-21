Feature: Order T-Shirt From Search Tab 

@OrderShirt 
Scenario Outline: Order T-Shirt from Search Tab (and Verify in Order History) 
	Given Open firefox and navigate to "http://automationpractice.com" 
	When I click on SignIn button and enter "<Username>" and "<Password>" 
	Then User should be able to login and navigate to "http://automationpractice.com/index.php?controller=my-account" 
	Then Search for "T-Shirts" in search bar 
	Then Add T-Shirt to Cart 
	Then Navigate to details and billing page and confirm order 
	Then Verify order in Order History page 
	Then Firefox should be closed 
	
	Examples: 
		|Username|Password|
		|someone@example.com|Password123|