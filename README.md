![screenshot](https://github.com/avin-sharma/devfolio/blob/master/devfolio.png)
## How to run the project

To run:
1. In the devfolio directory and run npm install followed by npm start

Note: To test the stripe checkout you can follow https://stripe.com/docs/testing where sample credit card details are provided.

To test, you can use the following accounts (or create your own account):
1. Email: test@test.com, Password: password

*** WINDOWS USERS *** Please refer to https://www.gatsbyjs.org/docs/gatsby-on-windows/ for any issues you face. The short version is that BEFORE you run npm install, first open windows powershell as admin and run the 'npm install windows-build-tools -g' command. If you get an error when running npm start, then try running the following sequence of commands:
rm -rf node_modules/ .cache/
npm install
npm start

The project is written in typescript, now in the class the way we did TypeScript is we would create these typscript files run the compiler and have the output files and then run them later.

## How to get help

- GatsbyJS has pretty solid documentation, look at their official documentation first. [Gatsby Docs](https://www.gatsbyjs.org/docs/).
- I am planning to use Material UI to make our life easier since we need a little bit of styling and orientation. Everything does not have to use MaterialUI its just there for convinience, we will use it wherever its easier to use it than styling the component by hand in CSS. [Material UI learning resources](https://material-ui.com/getting-started/learn/).

## Architecture of the project

The idea is to have the UI and store everything on firebase. Once the user decides to download the file get the details and add it to the other folder we have.

The other folder will contain a full fleged website and will populate the itself based on files in some set locations when its run. Remember we are giving them the code of the website, that means we can create a website that will fetch data from a file called projects.json to populate the projects section of the website.
