Feature: Add a To DO

Scenario: Add My first TO DO
   Given  I have no todos
   # And  I navigate to Home Page
   When I sumbit "An Example todo" for my new todo
   Then  I see the following todos
     | title | completed |
     | An Example todo | false |
   #  And I see that I have "1 item left"

