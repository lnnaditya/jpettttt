$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/functionalTests/JpetTest1.feature");
formatter.feature({
  "line": 2,
  "name": "JpetStore",
  "description": "",
  "id": "jpetstore",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JpetStore"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Valid Login",
  "description": "",
  "id": "jpetstore;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user should launch the application as first task",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check the first name",
  "keyword": "Then "
});
formatter.match({
  "location": "Valid_Login.the_user_lauch_application_3nd_time()"
});
formatter.result({
  "duration": 13311892500,
  "status": "passed"
});
formatter.match({
  "location": "Valid_Login.the_user_enter_valid_details()"
});
formatter.result({
  "duration": 8762714300,
  "status": "passed"
});
formatter.match({
  "location": "Valid_Login.check_the_first_name()"
});
formatter.result({
  "duration": 731135400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "logo link check",
  "description": "",
  "id": "jpetstore;logo-link-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "the user2 launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user2 click login icon",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user2 should click logo",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "LogoLinkTest.the_user_launch_the_application(int)"
});
formatter.result({
  "duration": 10613091200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "LogoLinkTest.the_user_click_login_icon(int)"
});
formatter.result({
  "duration": 437653000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "LogoLinkTest.the_user_should_click_logo(int)"
});
formatter.result({
  "duration": 470267300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "No of types in Fish link",
  "description": "",
  "id": "jpetstore;no-of-types-in-fish-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@TS_03"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the userrr launch the appliationn",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the userrr click on Fish",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the userrr should get no of  types of Fish",
  "keyword": "Then "
});
formatter.match({
  "location": "No_Of_Fishs.the_userrr_launch_the_appliationn()"
});
formatter.result({
  "duration": 10412881000,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Fishs.the_userrr_click_on_Fish()"
});
formatter.result({
  "duration": 368833100,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Fishs.the_userrr_should_get_no_of_types_of_Fish()"
});
formatter.result({
  "duration": 166124600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Add to cart fish",
  "description": "",
  "id": "jpetstore;add-to-cart-fish",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TS_04"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "the user llaunch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the user llogin with valid details",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the user should click Fish",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the user should click angelfish",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user should click adddtocart",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_lauch_application()"
});
formatter.result({
  "duration": 10588787000,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_enter_valid_details()"
});
formatter.result({
  "duration": 7692044100,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_click_Fish()"
});
formatter.result({
  "duration": 363352100,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_click_AngelFish()"
});
formatter.result({
  "duration": 283839500,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_click_agaddtocart()"
});
formatter.result({
  "duration": 957150000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "checkout",
  "description": "",
  "id": "jpetstore;checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@TS_05"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the user launch the application jpet",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user login with valid details in jpet",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the user should click dogs in jpet homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the user should click Golden Retriever in dogs page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user should click addtocart to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the user should click proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the user should click continue",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the user should click confirm",
  "keyword": "Then "
});
formatter.match({
  "location": "Check_Out_Test.the_user_launch_the_application_jpet()"
});
formatter.result({
  "duration": 11367842700,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_login_with_valid_details_in_jpet()"
});
formatter.result({
  "duration": 7734486300,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_dogs_in_jpet_homepage()"
});
formatter.result({
  "duration": 348225000,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_Golden_Retriever_in_dogs_page()"
});
formatter.result({
  "duration": 395955500,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_addtocart_to_check_out()"
});
formatter.result({
  "duration": 4436941300,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_proceed_to_checkout()"
});
formatter.result({
  "duration": 318773300,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_continue()"
});
formatter.result({
  "duration": 354603500,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_confirm()"
});
formatter.result({
  "duration": 515828200,
  "status": "passed"
});
});