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
  "line": 123,
  "name": "Remove from cart",
  "description": "",
  "id": "jpetstore;remove-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 122,
      "name": "@TS_19"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "user should launch the jpetstore",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "user login with valid details in jpet",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "user should click dogs in jpet homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "user should click Golden Retriever in dogs page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "user should click addtocart to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "the user clicks remove from cart in jpet",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "the application should display the empty cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Remove_The_Cart.use_should_launch_the_jpetstore()"
});
formatter.result({
  "duration": 13971592131,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_login_with_valid_details_in_jpet()"
});
formatter.result({
  "duration": 6964348983,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_should_click_dogs_in_jpet_homepage()"
});
formatter.result({
  "duration": 1130962616,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_should_click_Golden_Retriever_in_dogs_page()"
});
formatter.result({
  "duration": 549583399,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_should_click_addtocart_to_check_out()"
});
formatter.result({
  "duration": 4412245387,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.the_user_clicks_remove_from_cart_in_jpet()"
});
formatter.result({
  "duration": 542742649,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.the_application_should_display_the_empty_cart()"
});
formatter.result({
  "duration": 79937831,
  "status": "passed"
});
});