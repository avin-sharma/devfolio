## How to run the project

To run:
1. In the devfolio directory and run npm install followed by npm start

Note: To test the stripe checkout you can follow https://stripe.com/docs/testing where sample credit card details are provided.

*** WINDOWS USERS *** Please refer to https://www.gatsbyjs.org/docs/gatsby-on-windows/ for any issues you face. The short version is that BEFORE you run npm install, first open windows powershell as admin and run the 'npm install windows-build-tools -g' command. If you get an error when running npm start, then try running the following sequence of commands:
rm -rf node_modules/ .cache/
npm install
npm start

The project is written in typescript, now in the class the way we did TypeScript is we would create these typscript files run the compiler and have the output files and then run them later.

Here we do **NOT** do that, just write code in typescript files and do `npm start` it just works.

Another thing to keep in mind is the difference between `.ts` and `.tsx` file types, if you are using JSX(any kind of html tags in the file) then make sure your file is of the type `.tsx` otherwise `.ts`. More often than not we would be writing react code so `.tsx` would be the way to go.

## Coding style guide + tips

- To make everyone's life easier we are going to try and avoid writing lots of code in a single file. In react that mean your component should do a single thing and it should do it really well. I like to keep visual and logic in separate components so for example we want to display a list of cards(each with a few fields like name etc), I would create 3 or 4 components where they call eachother in the following order CardsListContainer -> CardsList -> CardContainer -> Card. In the example the container components have logic and states in them, the normal components are purely visual containing html and props. Do not be afraid of nesting components

- Make sure you have your own branch on github and work on small small feature and request a pull request after you have made something. Working on the same files create conflicts while merging one branch to another. Hence working on smaller feature and cycle might be useful here

- Master branch should **ALWAYS** be functional. **NEVER** work on the master branch directly. Before you start working make sure you pull from the master branch to have the latest version of the project in case any modifications have been made while you were not working on the project.

- You can handle branches however you like, you can create a branch in your name or on the feature you are working on. 
  1. One of the common workflows is to create branch and delete it after it gets pulled in the master branch and create new branch named after the feature you are working on in the future.
  2. Another would to keep using a single branch, the drawback here is that after the master branch has been updated from someone else's PR(pull request) you have to rebase your branch(which is overwrite the code in your branch with master branches code).

  My suggestion would to work on small features or work on different files so that there is no overlap of work and no conflicts while merging into the master branch. An example of how this would happen is Lets assume I am working on a feature and so are you on a different feature, but while doing that we made small changes in App.js on the same components, git/github would then be confused which change should I write to the master branch, your or mine? Lets just try and avoid merge conflicts for now.

- Feature and work are all on trello board please assign yourself to the card that you are working on so that everyone knows and move the card to done when you are done working on it. If you do not have the link to trello let me know I will send it to you.

## How to get help

- GatsbyJS has pretty solid documentation, look at their official documentation first. [Gatsby Docs](https://www.gatsbyjs.org/docs/).
- I am planning to use Material UI to make our life easier since we need a little bit of styling and orientation. Everything does not have to use MaterialUI its just there for convinience, we will use it wherever its easier to use it than styling the component by hand in CSS. [Material UI learning resources](https://material-ui.com/getting-started/learn/).

## Architecture of the project

The idea is to have the UI and store everything on firebase. Once the user decides to download the file get the details and add it to the other folder we have.

The other folder will contain a full fleged website and will populate the itself based on files in some set locations when its run. Remember we are giving them the code of the website, that means we can create a website that will fetch data from a file called projects.json to populate the projects section of the website.

*GODSPEED* and *GOODLUCK*!


<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
