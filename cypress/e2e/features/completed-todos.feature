Feature: Completed the Todo

    Scenario: Complete a todo
        Given I have the following todos
            | title           | Completed |
            | An example todo | false     |
        And I navigate to the home page
        When I completed " An Example todo"
        Then I see the following todos
            | title           | completed |
            | An example todo | true      |
