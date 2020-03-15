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
  "line": 15,
  "name": "Search box testing",
  "description": "",
  "id": "jpetstore;search-box-testing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "the user should launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user Search for the \"Golden\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "check if the golden retriever is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Test.the_user_should_launch_browser()"
});
formatter.result({
  "duration": 13329432200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golden",
      "offset": 25
    }
  ],
  "location": "Search_Test.the_user_Search_for_the(String)"
});
formatter.result({
  "duration": 919020200,
  "status": "passed"
});
formatter.match({
  "location": "Search_Test.check_if_the_golden_retriever_is_displayed()"
});
formatter.result({
  "duration": 62690400,
  "status": "passed"
});
});