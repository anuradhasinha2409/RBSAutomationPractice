Feature: Update First Name From Footer Option 

@UpdateName 
Scenario Outline:
Update Personal Information (First Name) in My Account from footer Option 
	Given Open firefox and navigate to "http://automationpractice.com" 
	When I click on SignIn button and enter "<Username>" and "<Password>" 
	Then User should be able to login and navigate to "http://automationpractice.com/index.php?controller=my-account" 
	Then Get current user first name 
	Then Navigate to My Personal Information page from footer option 
	Then Update First Name- "Test" and keep the same password- "Password123" as before 
	Then Verify that User Name is updated 
	Then Reset the First Name- "Test" and keep the same password- "Password123" as before 
	Then Verify that User Name is reset to "Test" 
	Then Firefox should be closed 
	
	Examples: 
		|Username|Password|
		|someone@example.com|Password123|