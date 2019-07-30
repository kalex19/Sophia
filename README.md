# BetterFlix


## Table of Contents
* [Available Scripts](#Available-Scripts)
* [Description](#Description)
* [Project Successes](Project-Successes)
* [Project Challenges](Project-Challenges)
* [ Project Extensions/Issues](Project-Extensions/Issues)
* [Project Tech Emphasis](Project-Tech-Emphasis)
* [Project Management](Project-Management)
* [Project Comps](Project-Comps)
* [Developers](Developers)

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Backend Server

Clone down [this repo]('https://github.com/kalex19/Sophia-server'). Start the server by running 'npm start'. Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

## Test Coverage

![Test Coverage](./src/images/test-coverage.png)

## Description

This project is a to-do app for caregivers and seniors. An an MVP, the user is able to create a to-do list and add items to the to-do list or delete items or lists once completed. Once fully developed, the user will be able to create an acount, log in, create lists and items, complete lists and items, and star lists and items by increasing the importance of the list/item or by adding a due date to the list/item for when the to-do needs to be done.

## Project Successes

This project required 1-2 api calls, however the modular code was build to run up to 20 different fetch calls to the moviedb to grab different sets of movie data. This increases the pleasure felt during the user experience as the user can select from a variety of movie genres. The developers implemented thunks for the first time and over half of the app has passing test coverage.

## Project Challenges

Writing modular code required careful planning and strategic architecture. Creating a flat redux store also proved to be a challenge. Working through merge conflicts was tedious mostly due to text editor formatting differences. The app stlying was up to the developers whereas other projects have had a style comp, so extra effort went into creating a cleanly styled app. Lastly, keeping track of local state vs the store was a conceptual hurdle.


## Project Extensions/Issues

* 

## Project Tech Emphasis

* HTML
* CSS
* JavaScript
* React
* React Router
* Redux
* Jest
* Enzyme
* PropTypes
* ES6 Classes
* API fetches
* Thunks Middleware
* NPM

## Project Comps:

### Home Page

![Home Page](./src/assets/Home-Page.png)

### Create New List

![Create New List](./src/assets/Create-New-List.png)

### Select List

![Select List](./src/assets/Select-List.png)

### Add Item

![Add Item](./src/assets/Add-Item.png)

### List Card

![List Card](./src/assets/List-Card.png)

### Delete Item

![Delete item](./src/assets/Delete-Item.png)

### 404 Page

![404 Page](./src/assets/404-Page.png)



### GIFS

![GIF](./src/images/betterflix-categories.gif)


## Developer

[Katherine Lewis](https://github.com/kalex19)

## Licensing

All credit goes to <a href="turing.io">Turing School of Software</a> for providing the project specifications.
