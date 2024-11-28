Feature: End to end ecommerce validation
@Regression
Scenario: Ecommerce Product Delivery
Given I am on ecommerce page
When I login to the application
And I add items to cart and checkout
And Validate the total price limit
Then select the country submit and verify thankyou

@Smoke
Scenario Outline: Ecommerce Product Delivery Cucumber Driven
Given I am on ecommerce page
When I login to the application portal
|username               | password   |
|rahulshettyacademy     | learning   |
And I add items to cart and checkout
And Validate the total price limit
Then select the country submit and verify thankyou