$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrderTShirtFromSearchTab.feature");
formatter.feature({
  "line": 1,
  "name": "Order T-Shirt From Search Tab",
  "description": "",
  "id": "order-t-shirt-from-search-tab",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Order T-Shirt from Search Tab (and Verify in Order History)",
  "description": "",
  "id": "order-t-shirt-from-search-tab;order-t-shirt-from-search-tab-(and-verify-in-order-history)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OrderShirt"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Search for \"T-Shirts\" in search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add T-Shirt to Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to details and billing page and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify order in Order History page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "order-t-shirt-from-search-tab;order-t-shirt-from-search-tab-(and-verify-in-order-history);",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "order-t-shirt-from-search-tab;order-t-shirt-from-search-tab-(and-verify-in-order-history);;1"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123"
      ],
      "line": 16,
      "id": "order-t-shirt-from-search-tab;order-t-shirt-from-search-tab-(and-verify-in-order-history);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Order T-Shirt from Search Tab (and Verify in Order History)",
  "description": "",
  "id": "order-t-shirt-from-search-tab;order-t-shirt-from-search-tab-(and-verify-in-order-history);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OrderShirt"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Search for \"T-Shirts\" in search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Add T-Shirt to Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to details and billing page and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify order in Order History page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 30
    }
  ],
  "location": "CommonCucumberStepDefinition.open_firefox_and_navigate_to(String)"
});
formatter.result({
  "duration": 18167964901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 36
    },
    {
      "val": "Password123",
      "offset": 62
    }
  ],
  "location": "CommonCucumberStepDefinition.i_click_on_SignIn_button_and_enter_and(String,String)"
});
formatter.result({
  "duration": 4547305689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php?controller\u003dmy-account",
      "offset": 46
    }
  ],
  "location": "CommonCucumberStepDefinition.user_should_be_able_to_login_and_navigate_to(String)"
});
formatter.result({
  "duration": 10109088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "T-Shirts",
      "offset": 12
    }
  ],
  "location": "OrderTShirtFromSearchTab.search_for_in_search_bar(String)"
});
formatter.result({
  "duration": 2770847054,
  "status": "passed"
});
formatter.match({
  "location": "OrderTShirtFromSearchTab.add_T_Shirt_to_Cart()"
});
formatter.result({
  "duration": 5771729926,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.navigate_to_details_and_billing_page_and_confirm_order()"
});
formatter.result({
  "duration": 8866956144,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.verify_order_in_Order_History_page()"
});
formatter.result({
  "duration": 13897741801,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.firefox_should_be_closed()"
});
formatter.result({
  "duration": 1377726018,
  "status": "passed"
});
formatter.uri("OrderTShirtFromWomenTab.feature");
formatter.feature({
  "line": 1,
  "name": "Order T-Shirt From Women Tab",
  "description": "",
  "id": "order-t-shirt-from-women-tab",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Order T-Shirt from Women Tab (and Verify in Order History)",
  "description": "",
  "id": "order-t-shirt-from-women-tab;order-t-shirt-from-women-tab-(and-verify-in-order-history)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OrderShirt"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Women Tab and select T-Shirt from filter",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select filters and add T-Shirt to Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to details and billing page and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify order in Order History page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "order-t-shirt-from-women-tab;order-t-shirt-from-women-tab-(and-verify-in-order-history);",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "order-t-shirt-from-women-tab;order-t-shirt-from-women-tab-(and-verify-in-order-history);;1"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123"
      ],
      "line": 16,
      "id": "order-t-shirt-from-women-tab;order-t-shirt-from-women-tab-(and-verify-in-order-history);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Order T-Shirt from Women Tab (and Verify in Order History)",
  "description": "",
  "id": "order-t-shirt-from-women-tab;order-t-shirt-from-women-tab-(and-verify-in-order-history);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OrderShirt"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Women Tab and select T-Shirt from filter",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select filters and add T-Shirt to Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to details and billing page and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify order in Order History page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 30
    }
  ],
  "location": "CommonCucumberStepDefinition.open_firefox_and_navigate_to(String)"
});
formatter.result({
  "duration": 16344075128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 36
    },
    {
      "val": "Password123",
      "offset": 62
    }
  ],
  "location": "CommonCucumberStepDefinition.i_click_on_SignIn_button_and_enter_and(String,String)"
});
formatter.result({
  "duration": 4906507436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php?controller\u003dmy-account",
      "offset": 46
    }
  ],
  "location": "CommonCucumberStepDefinition.user_should_be_able_to_login_and_navigate_to(String)"
});
formatter.result({
  "duration": 10554718,
  "status": "passed"
});
formatter.match({
  "location": "OrderTShirtFromWomenTab.click_on_Women_Tab_and_select_T_Shirt_from_filter()"
});
formatter.result({
  "duration": 6030333828,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.select_filters_and_add_T_Shirt_to_Cart()"
});
formatter.result({
  "duration": 8080757833,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.navigate_to_details_and_billing_page_and_confirm_order()"
});
formatter.result({
  "duration": 10599928306,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.verify_order_in_Order_History_page()"
});
formatter.result({
  "duration": 14529501646,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.firefox_should_be_closed()"
});
formatter.result({
  "duration": 1400509666,
  "status": "passed"
});
formatter.uri("SelectTShirtFromTab.feature");
formatter.feature({
  "line": 1,
  "name": "Select T-Shirt From Tab",
  "description": "",
  "id": "select-t-shirt-from-tab",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Order T-Shirt from T-Shirt Tab (and Verify in Order History)",
  "description": "",
  "id": "select-t-shirt-from-tab;order-t-shirt-from-t-shirt-tab-(and-verify-in-order-history)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OrderShirt"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Select T-Shirt",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select filters and add T-Shirt to Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to details and billing page and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify order in Order History page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "select-t-shirt-from-tab;order-t-shirt-from-t-shirt-tab-(and-verify-in-order-history);",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "select-t-shirt-from-tab;order-t-shirt-from-t-shirt-tab-(and-verify-in-order-history);;1"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123"
      ],
      "line": 16,
      "id": "select-t-shirt-from-tab;order-t-shirt-from-t-shirt-tab-(and-verify-in-order-history);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Order T-Shirt from T-Shirt Tab (and Verify in Order History)",
  "description": "",
  "id": "select-t-shirt-from-tab;order-t-shirt-from-t-shirt-tab-(and-verify-in-order-history);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@OrderShirt"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Select T-Shirt",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select filters and add T-Shirt to Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to details and billing page and confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify order in Order History page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 30
    }
  ],
  "location": "CommonCucumberStepDefinition.open_firefox_and_navigate_to(String)"
});
formatter.result({
  "duration": 16303720463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 36
    },
    {
      "val": "Password123",
      "offset": 62
    }
  ],
  "location": "CommonCucumberStepDefinition.i_click_on_SignIn_button_and_enter_and(String,String)"
});
formatter.result({
  "duration": 5237648358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php?controller\u003dmy-account",
      "offset": 46
    }
  ],
  "location": "CommonCucumberStepDefinition.user_should_be_able_to_login_and_navigate_to(String)"
});
formatter.result({
  "duration": 7938557,
  "status": "passed"
});
formatter.match({
  "location": "SelectTShirtFromTab.select_T_Shirt()"
});
formatter.result({
  "duration": 3399630441,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.select_filters_and_add_T_Shirt_to_Cart()"
});
formatter.result({
  "duration": 7125613653,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.navigate_to_details_and_billing_page_and_confirm_order()"
});
formatter.result({
  "duration": 10538422266,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.verify_order_in_Order_History_page()"
});
formatter.result({
  "duration": 15065510509,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.firefox_should_be_closed()"
});
formatter.result({
  "duration": 1345467448,
  "status": "passed"
});
formatter.uri("UpdateFirstName.feature");
formatter.feature({
  "line": 1,
  "name": "Update First Name",
  "description": "",
  "id": "update-first-name",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Update Personal Information (First Name) in My Account",
  "description": "",
  "id": "update-first-name;update-personal-information-(first-name)-in-my-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UpdateName"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Get current user first name",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Navigate to My Account-\u003e My Personal Information page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Update First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify that User Name is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Reset the First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify that User Name is reset to \"Test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "update-first-name;update-personal-information-(first-name)-in-my-account;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 17,
      "id": "update-first-name;update-personal-information-(first-name)-in-my-account;;1"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123"
      ],
      "line": 18,
      "id": "update-first-name;update-personal-information-(first-name)-in-my-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Update Personal Information (First Name) in My Account",
  "description": "",
  "id": "update-first-name;update-personal-information-(first-name)-in-my-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UpdateName"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SignIn button and enter \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Get current user first name",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Navigate to My Account-\u003e My Personal Information page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Update First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify that User Name is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Reset the First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify that User Name is reset to \"Test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 30
    }
  ],
  "location": "CommonCucumberStepDefinition.open_firefox_and_navigate_to(String)"
});
formatter.result({
  "duration": 16590243331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 36
    },
    {
      "val": "Password123",
      "offset": 62
    }
  ],
  "location": "CommonCucumberStepDefinition.i_click_on_SignIn_button_and_enter_and(String,String)"
});
formatter.result({
  "duration": 4768711532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php?controller\u003dmy-account",
      "offset": 46
    }
  ],
  "location": "CommonCucumberStepDefinition.user_should_be_able_to_login_and_navigate_to(String)"
});
formatter.result({
  "duration": 4649939,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.get_current_user_first_name()"
});
formatter.result({
  "duration": 42907374,
  "status": "passed"
});
formatter.match({
  "location": "UpdateFirstName.navigate_to_My_Account_My_Personal_Information_page()"
});
formatter.result({
  "duration": 3466896119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    },
    {
      "val": "Password123",
      "offset": 55
    }
  ],
  "location": "CommonCucumberStepDefinition.update_First_Name_and_keep_the_same_password_as_before(String,String)"
});
formatter.result({
  "duration": 1912109901,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.verify_that_User_Name_is_updated()"
});
formatter.result({
  "duration": 47105120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 23
    },
    {
      "val": "Password123",
      "offset": 58
    }
  ],
  "location": "CommonCucumberStepDefinition.reset_the_First_Name_and_keep_the_same_password_as_before(String,String)"
});
formatter.result({
  "duration": 4450368793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 35
    }
  ],
  "location": "CommonCucumberStepDefinition.verify_that_User_Name_is_reset_to(String)"
});
formatter.result({
  "duration": 42897163,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.firefox_should_be_closed()"
});
formatter.result({
  "duration": 1335568411,
  "status": "passed"
});
formatter.uri("UpdateFirstNameFromFooterOption.feature");
formatter.feature({
  "line": 1,
  "name": "Update First Name From Footer Option",
  "description": "",
  "id": "update-first-name-from-footer-option",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Update Personal Information (First Name) in My Account from footer Option",
  "id": "update-first-name-from-footer-option;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UpdateName"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on SignIn button and enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Get current user first name",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to My Personal Information page from footer option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Update First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify that User Name is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Reset the First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify that User Name is reset to \"Test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "update-first-name-from-footer-option;;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 18,
      "id": "update-first-name-from-footer-option;;;1"
    },
    {
      "cells": [
        "someone@example.com",
        "Password123"
      ],
      "line": 19,
      "id": "update-first-name-from-footer-option;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "Update Personal Information (First Name) in My Account from footer Option",
  "id": "update-first-name-from-footer-option;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@UpdateName"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open firefox and navigate to \"http://automationpractice.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on SignIn button and enter \"someone@example.com\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should be able to login and navigate to \"http://automationpractice.com/index.php?controller\u003dmy-account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Get current user first name",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to My Personal Information page from footer option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Update First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Verify that User Name is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Reset the First Name- \"Test\" and keep the same password- \"Password123\" as before",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify that User Name is reset to \"Test\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Firefox should be closed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com",
      "offset": 30
    }
  ],
  "location": "CommonCucumberStepDefinition.open_firefox_and_navigate_to(String)"
});
formatter.result({
  "duration": 16601459566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "someone@example.com",
      "offset": 36
    },
    {
      "val": "Password123",
      "offset": 62
    }
  ],
  "location": "CommonCucumberStepDefinition.i_click_on_SignIn_button_and_enter_and(String,String)"
});
formatter.result({
  "duration": 4690088491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php?controller\u003dmy-account",
      "offset": 46
    }
  ],
  "location": "CommonCucumberStepDefinition.user_should_be_able_to_login_and_navigate_to(String)"
});
formatter.result({
  "duration": 5085359,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.get_current_user_first_name()"
});
formatter.result({
  "duration": 32129841,
  "status": "passed"
});
formatter.match({
  "location": "UpdateFirstNameFromFooterOption.navigate_to_My_Personal_Information_page_from_footer_option()"
});
formatter.result({
  "duration": 1939463260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    },
    {
      "val": "Password123",
      "offset": 55
    }
  ],
  "location": "CommonCucumberStepDefinition.update_First_Name_and_keep_the_same_password_as_before(String,String)"
});
formatter.result({
  "duration": 1516774573,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.verify_that_User_Name_is_updated()"
});
formatter.result({
  "duration": 20966120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 23
    },
    {
      "val": "Password123",
      "offset": 58
    }
  ],
  "location": "CommonCucumberStepDefinition.reset_the_First_Name_and_keep_the_same_password_as_before(String,String)"
});
formatter.result({
  "duration": 4129234122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 35
    }
  ],
  "location": "CommonCucumberStepDefinition.verify_that_User_Name_is_reset_to(String)"
});
formatter.result({
  "duration": 24286464,
  "status": "passed"
});
formatter.match({
  "location": "CommonCucumberStepDefinition.firefox_should_be_closed()"
});
formatter.result({
  "duration": 1408287403,
  "status": "passed"
});
});