Feature: Home page
  Scenario: See the home page
    Given I navigate to the home page
    Then I see the home page

  Scenario: See my existing todos
    Given I have the following todos
      | title           | completed |
      | An Example todo | false     |
      | gopal           | false     |
    When I navigate to the home page
    # And home has loaded
    Then I see the following todos
      | title           | completed |
      | An Example todo | false     |
      | gopal           | false     |
    And I see that I have "1 item left"

