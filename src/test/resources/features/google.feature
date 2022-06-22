@Regression
  #Each feature file must have a feature name
  #To declare all scenarios in the feature file with a tag, we can put on the top of feature

Feature: Google Search Functionality

  Background: # If all scenarios starts with same step we can put them in background
    Given user navigates to "https://www.google.com/"


  Scenario: Validate Google search
    When user searches for "Tesla" on Google
    Then user should see "Tesla" in the url
    And user should see "Tesla" in the title


  Scenario: Validate Google search results
    When user searches for "Apple" on Google
    Then user should see results are more than 5000000