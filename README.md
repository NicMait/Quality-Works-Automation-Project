# Quality-Works-Automation-Project
(Repository:https://github.com/NicMait/Quality-Works-Automation-Project.git)

The project covers the user interface test automation of nine key areas of the ecommerce website "https://ui-automation-camp.vercel.app/".
The framework being used is Cypress.

# Areas Automated
*Authentication
*Cart
*Add To Cart
*Search
*Contact
*Product Gallery
*Product Details
*Filter and Sort
*Checkout

# Dependencies
*NodeJS v12, v14 or above
*NPM v6 or above
*Chrome browser
*faker
*cypress v12
*cypress i-frame
*mocha reporter

# Folder Structure
$cypress/e2e/pages: Page object files that include element selectors and functions that are used in tests.
$cypress/e2e/tests: Test files that include the actual tests.
$cypress/e2e/data: Data files that include the data used in tests.

# Execute Tests

$npx cypress open   -Execute tests in the Cypress GUI
$npx cypress run    -Execute tests in the Cypress via commandline
$npm test           -Executes all tests in the Chrome browser and generates a Mochawesome report.

# Execute Specific Tests

 "add to cart":"npx cypress run --spec cypress/e2e/tests/datadriven.cy.js",
"login":"npx cypress run --spec cypress/e2e/tests/login.cy.js",
"registration":"npx cypress run --spec cypress/e2e/tests/registration.cy.js",
 "cart":"npx cypress run --spec cypress/e2e/tests/cart.cy.js",
 "checkout":"npx cypress run --spec cypress/e2e/tests/checkout.cy.js",
"product gallery":"npx cypress run --spec cypress/e2e/tests/productgallery.cy.js",
"product details":"npx cypress run --spec cypress/e2e/tests/productdetails.cy.js",
"filter and sort":"npx cypress run --spec cypress/e2e/tests/filterandsort.cy.js",
"contact":"npx cypress run --spec cypress/e2e/tests/contact.cy.js",
"search":"npx cypress run --spec cypress/e2e/tests/search.cy.js",
"data driven":"npx cypress run --spec cypress/e2e/tests/datadriven.cy.js"

# Reporting

Without Reports

npx cypress run --spec cypress/e2e/tests/login.cy.js   (for example: the script for the specific test is added after npx cypress run )

With Reports

npm run test:spec cypress/e2e/tests/login.cy.js   (for example: the script for the specific test is added after npm run test )






