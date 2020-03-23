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
  "name": "Login in the JpetStore",
  "description": "",
  "id": "jpetstore;login-in-the-jpetstore",
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
  "name": "the user should launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open the \tHome Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click signout",
  "keyword": "Then "
});
formatter.match({
  "location": "Jpet_Login.the_User_Launch_Browser()"
});
formatter.result({
  "duration": 11998152100,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_Login.the_User_click_signin()"
});
formatter.result({
  "duration": 373230400,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_Login.the_User_enter_login_dtails()"
});
formatter.result({
  "duration": 9277361100,
  "status": "passed"
});
formatter.match({
  "location": "Jpet_Login.click_signout()"
});
formatter.result({
  "duration": 624820500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Invalid Login",
  "description": "",
  "id": "jpetstore;invalid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user sholud launch the application 2nd time",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user gets Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter invalid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "check if the error messge is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Invalid_Login.the_user_lauch_application_2nd_time()"
});
formatter.result({
  "duration": 10513535600,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_Login.the_user_gets_Home_Page()"
});
formatter.result({
  "duration": 346904900,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_Login.user_enter_invalid_username_and_password()"
});
formatter.result({
  "duration": 548478300,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_Login.check_if_the_error_messge_is_displayed()"
});
formatter.result({
  "duration": 531222200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Valid Login",
  "description": "",
  "id": "jpetstore;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@TS_03"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "the user should launch the applicatiob 3rd time",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "check the first name",
  "keyword": "Then "
});
formatter.match({
  "location": "Valid_Login.the_user_lauch_application_3nd_time()"
});
formatter.result({
  "duration": 10418759300,
  "status": "passed"
});
formatter.match({
  "location": "Valid_Login.the_user_enter_valid_details()"
});
formatter.result({
  "duration": 7415892900,
  "status": "passed"
});
formatter.match({
  "location": "Valid_Login.check_the_first_name()"
});
formatter.result({
  "duration": 692676400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Search box testing",
  "description": "",
  "id": "jpetstore;search-box-testing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TS_04"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user should launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user Search for the \u003cRequirement\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check if the golden retriever is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "jpetstore;search-box-testing;",
  "rows": [
    {
      "cells": [
        "Requirement"
      ],
      "line": 28,
      "id": "jpetstore;search-box-testing;;1"
    },
    {
      "cells": [
        "Golden"
      ],
      "line": 29,
      "id": "jpetstore;search-box-testing;;2"
    },
    {
      "cells": [
        "Goldfish"
      ],
      "line": 30,
      "id": "jpetstore;search-box-testing;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Search box testing",
  "description": "",
  "id": "jpetstore;search-box-testing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TS_04"
    },
    {
      "line": 1,
      "name": "@JpetStore"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user should launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user Search for the Golden",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check if the golden retriever is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Test.the_user_should_launch_browser()"
});
formatter.result({
  "duration": 10272547900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Golden",
      "offset": 24
    }
  ],
  "location": "Search_Test.the_user_Search_for_the(String)"
});
formatter.result({
  "duration": 586481100,
  "status": "passed"
});
formatter.match({
  "location": "Search_Test.check_if_the_golden_retriever_is_displayed()"
});
formatter.result({
  "duration": 195216700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Search box testing",
  "description": "",
  "id": "jpetstore;search-box-testing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TS_04"
    },
    {
      "line": 1,
      "name": "@JpetStore"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user should launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user Search for the Goldfish",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "check if the golden retriever is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Test.the_user_should_launch_browser()"
});
formatter.result({
  "duration": 10388489700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goldfish",
      "offset": 24
    }
  ],
  "location": "Search_Test.the_user_Search_for_the(String)"
});
formatter.result({
  "duration": 554914900,
  "status": "passed"
});
formatter.match({
  "location": "Search_Test.check_if_the_golden_retriever_is_displayed()"
});
formatter.result({
  "duration": 156021100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Add to cart",
  "description": "",
  "id": "jpetstore;add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@TS_05"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the user login with valid details",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the user should click dogs",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user should click Golden Retriever",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user should click addtocart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartDog.the_user_lauch_application()"
});
formatter.result({
  "duration": 10540891000,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartDog.the_user_enter_valid_details()"
});
formatter.result({
  "duration": 4728206900,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartDog.the_user_click_dogs()"
});
formatter.result({
  "duration": 318105100,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartDog.the_user_click_golden_retriever()"
});
formatter.result({
  "duration": 294024800,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartDog.the_user_click_addtocart()"
});
formatter.result({
  "duration": 4951705100,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Registration",
  "description": "",
  "id": "jpetstore;registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@TS_06"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "the user one launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user click login icon",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "the user should click registernow",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "fill the details",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationPageTest.the_user_launch_the_application()"
});
formatter.result({
  "duration": 10434283800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageTest.the_user_click_login_icon()"
});
formatter.result({
  "duration": 331494200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageTest.the_user_should_click_registernow()"
});
formatter.result({
  "duration": 346409000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageTest.fill_the_details()"
});
formatter.result({
  "duration": 18271243400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationPageTest.click_the_Submit_button()"
});
formatter.result({
  "duration": 551342400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "logo link check",
  "description": "",
  "id": "jpetstore;logo-link-check",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@TS_07"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "the user2 launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the user2 click login icon",
  "keyword": "When "
});
formatter.step({
  "line": 52,
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
  "duration": 10397542100,
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
  "duration": 335869700,
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
  "duration": 414531600,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "No of types in dogs link",
  "description": "",
  "id": "jpetstore;no-of-types-in-dogs-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@TS_08"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "the userr launch the appliation",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "the userr click Dogs",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the userr should get no of  types of dogs",
  "keyword": "Then "
});
formatter.match({
  "location": "No_Of_Dogs.the_userr_launch_the_appliation()"
});
formatter.result({
  "duration": 10467388800,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Dogs.the_userr_click_Dogs()"
});
formatter.result({
  "duration": 302352500,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Dogs.the_userr_should_get_no_of_types_of_dogs()"
});
formatter.result({
  "duration": 247070900,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "No of types in Cats link",
  "description": "",
  "id": "jpetstore;no-of-types-in-cats-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@TS_09"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "the userr launch the appliationn",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "the userr click on cats",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the userr should get no of  types of cats",
  "keyword": "Then "
});
formatter.match({
  "location": "No_Of_Cats.the_userr_launch_the_appliation()"
});
formatter.result({
  "duration": 10380947400,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Cats.the_userr_click_cats()"
});
formatter.result({
  "duration": 379040500,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Cats.the_userr_should_get_no_of_types_of_cats()"
});
formatter.result({
  "duration": 238621700,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "No of types in Fish link",
  "description": "",
  "id": "jpetstore;no-of-types-in-fish-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@TS_10"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "the userrr launch the appliationn",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "the userrr click on Fish",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "the userrr should get no of  types of Fish",
  "keyword": "Then "
});
formatter.match({
  "location": "No_Of_Fishs.the_userrr_launch_the_appliationn()"
});
formatter.result({
  "duration": 10249737800,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Fishs.the_userrr_click_on_Fish()"
});
formatter.result({
  "duration": 317185400,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Fishs.the_userrr_should_get_no_of_types_of_Fish()"
});
formatter.result({
  "duration": 257907900,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "check the link of birdspic",
  "description": "",
  "id": "jpetstore;check-the-link-of-birdspic",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@TS_11"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "the user have to launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "the user should click the birdspic",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckTheBirds.the_user_have_to_launch_browser()"
});
formatter.result({
  "duration": 10394675800,
  "status": "passed"
});
formatter.match({
  "location": "CheckTheBirds.the_user_should_click_the_birdspic()"
});
formatter.result({
  "duration": 470065100,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Add to cart fish",
  "description": "",
  "id": "jpetstore;add-to-cart-fish",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@TS_12"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "the user llaunch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "the user llogin with valid details",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "the user should click Fish",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "the user should click angelfish",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user should click adddtocart",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_lauch_application()"
});
formatter.result({
  "duration": 10518879400,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_enter_valid_details()"
});
formatter.result({
  "duration": 7393375100,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_click_Fish()"
});
formatter.result({
  "duration": 327913800,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_click_AngelFish()"
});
formatter.result({
  "duration": 308237300,
  "status": "passed"
});
formatter.match({
  "location": "Add_To_Cart_Fish.the_user_click_agaddtocart()"
});
formatter.result({
  "duration": 930925900,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "No of types in Reptails link",
  "description": "",
  "id": "jpetstore;no-of-types-in-reptails-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@TS_13"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "the userrr should launch the appliationn",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "the userrr click on Reptails",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "the userrr should get no of  types of Reptails",
  "keyword": "Then "
});
formatter.match({
  "location": "No_Of_Reptils.the_userrr_launch_the_appliationn()"
});
formatter.result({
  "duration": 10507031400,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Reptils.the_userrr_click_on_Repatails()"
});
formatter.result({
  "duration": 281146900,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Reptils.the_userrr_should_get_no_of_types_of_reptails()"
});
formatter.result({
  "duration": 245907600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Invalid Search box testing",
  "description": "",
  "id": "jpetstore;invalid-search-box-testing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@TS_14"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "the user should launch browsser",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the user should Search for the \u003cRequirement1\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "check the items sholud not display",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "jpetstore;invalid-search-box-testing;",
  "rows": [
    {
      "cells": [
        "Requirement1"
      ],
      "line": 91,
      "id": "jpetstore;invalid-search-box-testing;;1"
    },
    {
      "cells": [
        "vccbcvcbc"
      ],
      "line": 92,
      "id": "jpetstore;invalid-search-box-testing;;2"
    },
    {
      "cells": [
        "cbhbchcbcj"
      ],
      "line": 93,
      "id": "jpetstore;invalid-search-box-testing;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 92,
  "name": "Invalid Search box testing",
  "description": "",
  "id": "jpetstore;invalid-search-box-testing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JpetStore"
    },
    {
      "line": 84,
      "name": "@TS_14"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "the user should launch browsser",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the user should Search for the vccbcvcbc",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "check the items sholud not display",
  "keyword": "Then "
});
formatter.match({
  "location": "Invalid_Search.the_user_should_launch_browsser()"
});
formatter.result({
  "duration": 10380294500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vccbcvcbc",
      "offset": 31
    }
  ],
  "location": "Invalid_Search.the_user_should_Search_for_the_set1(String)"
});
formatter.result({
  "duration": 441956700,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_Search.check_the_items_sholud_not_display()"
});
formatter.result({
  "duration": 223707200,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Invalid Search box testing",
  "description": "",
  "id": "jpetstore;invalid-search-box-testing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JpetStore"
    },
    {
      "line": 84,
      "name": "@TS_14"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "the user should launch browsser",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the user should Search for the cbhbchcbcj",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "check the items sholud not display",
  "keyword": "Then "
});
formatter.match({
  "location": "Invalid_Search.the_user_should_launch_browsser()"
});
formatter.result({
  "duration": 10520758100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cbhbchcbcj",
      "offset": 31
    }
  ],
  "location": "Invalid_Search.the_user_should_Search_for_the_set1(String)"
});
formatter.result({
  "duration": 480116700,
  "status": "passed"
});
formatter.match({
  "location": "Invalid_Search.check_the_items_sholud_not_display()"
});
formatter.result({
  "duration": 130378200,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "No of types in Birds link",
  "description": "",
  "id": "jpetstore;no-of-types-in-birds-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@TS_15"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "the user should launch the browserr",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "the user click on Birds",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the user should get no of  types of Birds",
  "keyword": "Then "
});
formatter.match({
  "location": "No_Of_Birds.the_userr_launch_the_appliation()"
});
formatter.result({
  "duration": 10544033600,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Birds.the_userr_click_birds()"
});
formatter.result({
  "duration": 766942200,
  "status": "passed"
});
formatter.match({
  "location": "No_Of_Birds.the_userr_should_get_no_of_types_of_birds()"
});
formatter.result({
  "duration": 182735800,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Helplink test",
  "description": "",
  "id": "jpetstore;helplink-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 100,
      "name": "@TS_16"
    }
  ]
});
formatter.step({
  "line": 102,
  "name": "the user should launch the application jpet",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "the user click on help",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the user should able to get the link page",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Help_Link.the_user_should_launch_the_application_jpet()"
});
formatter.result({
  "duration": 10540153400,
  "status": "passed"
});
formatter.match({
  "location": "Test_Help_Link.the_user_click_on_help()"
});
formatter.result({
  "duration": 346802400,
  "status": "passed"
});
formatter.match({
  "location": "Test_Help_Link.the_user_should_able_to_get_the_link_page()"
});
formatter.result({
  "duration": 207818000,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Add to cart",
  "description": "",
  "id": "jpetstore;add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 105,
      "name": "@TS_17"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "the user launch the application jpet",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "the user login with valid details in jpet",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "the user should click dogs in jpet homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "the user should click Golden Retriever in dogs page",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user should click addtocart to check out",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "the user should click proceed to checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "the user should click continue",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "the user should click confirm",
  "keyword": "Then "
});
formatter.match({
  "location": "Check_Out_Test.the_user_launch_the_application_jpet()"
});
formatter.result({
  "duration": 10332469500,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_login_with_valid_details_in_jpet()"
});
formatter.result({
  "duration": 7347779800,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_dogs_in_jpet_homepage()"
});
formatter.result({
  "duration": 313243900,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_Golden_Retriever_in_dogs_page()"
});
formatter.result({
  "duration": 307467500,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_addtocart_to_check_out()"
});
formatter.result({
  "duration": 4345845900,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_proceed_to_checkout()"
});
formatter.result({
  "duration": 308691600,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_continue()"
});
formatter.result({
  "duration": 320255300,
  "status": "passed"
});
formatter.match({
  "location": "Check_Out_Test.the_user_should_click_confirm()"
});
formatter.result({
  "duration": 514876200,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "check My Orders",
  "description": "",
  "id": "jpetstore;check-my-orders",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 115,
      "name": "@TS_18"
    }
  ]
});
formatter.step({
  "line": 117,
  "name": "the user launch the application jpetstore",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "the user login with valid details in jpetstore",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "the user sholud click my account",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "the user should click my order",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "the user sholud check no of orders",
  "keyword": "Then "
});
formatter.match({
  "location": "My_Order_List.the_user_launch_the_application_jpetstore()"
});
formatter.result({
  "duration": 11292937200,
  "status": "passed"
});
formatter.match({
  "location": "My_Order_List.the_user_login_with_valid_details_in_jpetstore()"
});
formatter.result({
  "duration": 8036368600,
  "status": "passed"
});
formatter.match({
  "location": "My_Order_List.the_user_sholud_click_my_account()"
});
formatter.result({
  "duration": 350013300,
  "status": "passed"
});
formatter.match({
  "location": "My_Order_List.the_user_should_click_my_order()"
});
formatter.result({
  "duration": 364981000,
  "status": "passed"
});
formatter.match({
  "location": "My_Order_List.the_user_sholud_check_no_of_orders()"
});
formatter.result({
  "duration": 178711300,
  "status": "passed"
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
  "duration": 10511445700,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_login_with_valid_details_in_jpet()"
});
formatter.result({
  "duration": 7463384000,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_should_click_dogs_in_jpet_homepage()"
});
formatter.result({
  "duration": 301177600,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_should_click_Golden_Retriever_in_dogs_page()"
});
formatter.result({
  "duration": 299657200,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.user_should_click_addtocart_to_check_out()"
});
formatter.result({
  "duration": 4328441800,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.the_user_clicks_remove_from_cart_in_jpet()"
});
formatter.result({
  "duration": 302770000,
  "status": "passed"
});
formatter.match({
  "location": "Remove_The_Cart.the_application_should_display_the_empty_cart()"
});
formatter.result({
  "duration": 211176200,
  "status": "passed"
});
});