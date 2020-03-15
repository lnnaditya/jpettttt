@JpetStore
Feature:JpetStore
@TS_01
Scenario:Login in the JpetStore
Given the user should launch the application
When the user open the 	Home Page
Then enter username and password
Then click signout
When the user gets Home Page
Then user enter invalid username and password
Then check if the error messge is displayed
When the user enter valid username and password
Then check the first name  
@TS_02
Scenario:Search box testing
Given the user should launch browser
When the user Search for the "Golden" 
Then check if the golden retriever is displayed

