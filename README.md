## Instructions
Prerequisites:
1. Docker
2. Docker Compose
### Build/Run steps
1. Run the command `cp .env.dev .env`
2. Run the command `docker-compose -f docker-compose.dev.yml up --build`

Your application will be running on `4000` port on `localhost`.
Run the backend separately from backend repo, should be running on `4242` port of `localhost`.
### Notes on implementation
#### Preface
+ It is easy to work individually but hard to collborate in teams if specific guidelines are not agreed upon.
+ The application has been build from the perspective of working in team by following coding standards, easy development and deployment of code.
#### Tech stack
+ Frontend has been bootstrapped with Create React App version 2.
+ Ant Design has been used as UI library.
+ For easy development hot module reloading has been configured via `react-app-rewired` without ejecting the app.
+ SASS has been used for styling.

#### Code guide
+ ESLint has been followed very strictly. Airbnb's ESLint has been extended with few modifications

#### Modular and reusable code
+ App has been divided into components
+ Styles has been structured with maximum code reusage, keeping DRY(Do not repeat yourself) in mind.
#### UI/UX focussed
+ Transition is important as it shows care for minute details in the product.
+ App has animation on page load and page transition
+ App has proper loading state during API calls

#### Error Handling/Debugging
+ Debugging frontend apps in production is very hard if not done with error reporting.
+ Error reporting has been integrated via Sentry with modular error boundary.

As always feedback and suggestions are heartly welcomed.
