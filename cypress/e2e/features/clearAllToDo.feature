Feature: Clear All completed todo.

    Scenario: To Clear TODO
        Given I see the home page
        And I have the following todos
            | title           | completed |
            | An Example todo | false     |
            | gopal           | false     |
        When I click on Clear Completed
        Then I should No see any todo
            | title           | Completed |
            | An example todo | true      |
