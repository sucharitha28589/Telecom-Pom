$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCustomer.feature");
formatter.feature({
  "name": "To test the add customer functionality.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us1"
    }
  ]
});
formatter.scenario({
  "name": "test customer id genarated for valid customer.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid customer details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_valid_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the customer ID generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessSteps.the_user_should_see_the_customer_ID_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test reset button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid customer details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_valid_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the reset button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the form should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_form_should_be_cleared()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test for the error message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@scenario3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters incorrect data format",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_enters_incorrect_data_format()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "blank validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us1"
    },
    {
      "name": "@scenario4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user keeps the field empty",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_keeps_the_field_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message in alert is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_error_message_in_alert_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AddTariffPlan.feature");
formatter.feature({
  "name": "To test the add tariff plan page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in the valid plan details\"\u003cMonthRental\u003e\",\"\u003cFreelocMin\u003e\",\"\u003cFreeintMins\u003e\",\"\u003cFreesms\u003e\",\"\u003cLoccharges\u003e\",\"\u003cIntchargesv\u003e\",\"\u003cSmscharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRental",
        "FreelocMin",
        "FreeintMins",
        "Freesms",
        "Loccharges",
        "Intchargesv",
        "Smscharges"
      ]
    },
    {
      "cells": [
        "1000",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "2000",
        "200",
        "300",
        "200",
        "300",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "3000",
        "300",
        "400",
        "300",
        "200",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "4000",
        "400",
        "500",
        "100",
        "100",
        "500",
        "600"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"1000\",\"100\",\"200\",\"300\",\"400\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"2000\",\"200\",\"300\",\"200\",\"300\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"3000\",\"300\",\"400\",\"300\",\"200\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"4000\",\"400\",\"500\",\"100\",\"100\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To test reset function",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in the valid plan details\"\u003cMonthRental\u003e\",\"\u003cFreelocMin\u003e\",\"\u003cFreeintMins\u003e\",\"\u003cFreesms\u003e\",\"\u003cLoccharges\u003e\",\"\u003cIntchargesv\u003e\",\"\u003cSmscharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the reset button",
  "keyword": "When "
});
formatter.step({
  "name": "the add tariff form should be cleared",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRental",
        "FreelocMin",
        "FreeintMins",
        "Freesms",
        "Loccharges",
        "Intchargesv",
        "Smscharges"
      ]
    },
    {
      "cells": [
        "1000",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "2000",
        "200",
        "300",
        "200",
        "300",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "3000",
        "300",
        "400",
        "300",
        "200",
        "500",
        "600"
      ]
    },
    {
      "cells": [
        "4000",
        "400",
        "500",
        "100",
        "100",
        "500",
        "600"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test reset function",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"1000\",\"100\",\"200\",\"300\",\"400\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the reset button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the add tariff form should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_add_tariff_form_should_be_cleared()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test reset function",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"2000\",\"200\",\"300\",\"200\",\"300\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the reset button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the add tariff form should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_add_tariff_form_should_be_cleared()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test reset function",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"3000\",\"300\",\"400\",\"300\",\"200\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the reset button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the add tariff form should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_add_tariff_form_should_be_cleared()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test reset function",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the valid plan details\"4000\",\"400\",\"500\",\"100\",\"100\",\"500\",\"600\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the reset button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the add tariff form should be cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_add_tariff_form_should_be_cleared()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test with invalid format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us2"
    },
    {
      "name": "@scenario3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in the invalid format",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_invalid_format()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.user_should_see_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AddTariffPlantoCustomer.feature");
formatter.feature({
  "name": "To test the add tariff plan to customer page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us4"
    }
  ]
});
formatter.scenario({
  "name": "To check the add tarriff to customer page with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us4"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan to customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_to_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid customer ID",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffToCustomerSteps.the_user_enters_valid_customer_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the tariff plan is added",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffToCustomerSteps.the_tariff_plan_is_added()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the add tarriff to customer page with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us4"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add tarrif plan to customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tarrif_plan_to_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters invalid customer ID",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffToCustomerSteps.the_user_enters_invalid_customer_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the invalid customer id error message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffToCustomerSteps.the_invalid_customer_id_error_message_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/PayBilling.feature");
formatter.feature({
  "name": "To check the functionality of pay Billing page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us3"
    }
  ]
});
formatter.scenario({
  "name": "To check the billing page with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us3"
    },
    {
      "name": "@scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the pay billing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_the_pay_billing_page()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class cucumber.StepsAddCustomer\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: java.lang.Error: Unresolved compilation problem: \n\tSyntax error on token \"}\", delete this token\n\r\n\tat cucumber.StepsAddCustomer.\u003cinit\u003e(StepsAddCustomer.java:20)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters valid customer ID",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffToCustomerSteps.the_user_enters_valid_customer_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the bill is genrated",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To check the billing page with invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@us3"
    },
    {
      "name": "@scenario2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the pay billing page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsAddCustomer.the_user_is_in_the_pay_billing_page()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class cucumber.StepsAddCustomer\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: java.lang.Error: Unresolved compilation problem: \n\tSyntax error on token \"}\", delete this token\n\r\n\tat cucumber.StepsAddCustomer.\u003cinit\u003e(StepsAddCustomer.java:20)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user enters invalid customer ID",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffToCustomerSteps.the_user_enters_invalid_customer_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the invalid customer id shoul generate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsAddCustomer.the_invalid_customer_id_shoul_generate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});