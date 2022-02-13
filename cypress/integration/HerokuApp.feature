@heroku-App
Feature: HerokuApp End to End Tests
    I want to test Heroku Application

    Scenario Outline: A/B Testing Feature in Heroku App
        Given I open the Welcome Page for Heroku App
        Then Verify the header "<Header>"
        When I click to ABTest with "<OptimizelyBuckets>" and "<OptimizelyEndUserId>" and "<OptimizelySegments>"
        Then Verify details as "<Title>"
        Examples:
            | Header                  | OptimizelyBuckets                       | OptimizelyEndUserId                   | OptimizelySegments | Title                |
            | Welcome to the-internet | %7B%22298349752%22%3A%22298291000%22%7D | oeu1616187660398r0.020344619322813617 | %7B%7D             | A/B Test Control     |
            | Welcome to the-internet | %7B%22298349752%22%3A%22298343790%22%7D | oeu1616187909249r0.37899228994326006  | %7B%7D             | A/B Test Variation 1 |

    Scenario Outline: Add/Remove elements Feature in Heroku App
        Given I open the Welcome Page for Heroku App
        Then Verify the header "<Header>"
        When I click on the "<Link>"
        Then Verify details as "<Title>"
        When I click on AddElement
        Then Verify the count of Delete Button is "1"
        When I click on DeleteButton
        Then Verify Delete Button not exist
        Examples:
            | Header                  | Link                | Title               |
            | Welcome to the-internet | Add/Remove Elements | Add/Remove Elements |

    Scenario Outline: Basic Auth Feature in Heroku App
        Given I open the Welcome Page for Heroku App
        Then Verify the header "<Header>"
        And I redirect to basicauth with "<Username>" and "<Password>"
        Then Verify details as "<Title>"
        Examples:
            | Header                  | Username | Password | Title      |
            | Welcome to the-internet | admin    | admin    | Basic Auth |

    Scenario Outline: Dynamic Controls Feature in Heroku App
        Given I open the Welcome Page for Heroku App
        Then Verify the header "<Header>"
        When I click on the "<Link>"
        Then Verify details as h4 "<Title>"
        And Verify checkbox functionality
        And Verifies the remove and add behavior
        And Verifies enable and disable behavior
        Examples:
            | Header                  | Link             | Title            |
            | Welcome to the-internet | Dynamic Controls | Dynamic Controls |

    Scenario Outline: Checkboxes Feature in Heroku App
        Given I open the Welcome Page for Heroku App
        Then Verify the header "<Header>"
        When I redirect to "<Link>"
        Then Verify details as "<Title>"
        And Verify checkbox checked and unchecked
        Examples:
            | Header                  | Link        | Title      |
            | Welcome to the-internet | /checkboxes | Checkboxes |


