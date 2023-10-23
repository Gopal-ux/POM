Feature: Filter todos

    Scenario: Filter By Active , NOT yet complete todos
        Given I have the following todos
            | title           | completed |
            | An Example todo | false     |
            | Another         | true      |
        And I navigate to the home page
        When I filter by Active
        Then I see the following todos
            | title           | completed |
            | An Example todo | false     |

    Scenario: Filter By Completed
        Given I have the following todos
            | title           | completed |
            | An Example todo | false     |
            | Another         | true      |
        And I navigate to the home page
        When I filter by Completed
        Then I see the following todos
            | title   | completed |
            | Another | true      |