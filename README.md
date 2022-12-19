# Morse Translator <!-- omit in toc -->

> Matthew Chhay's Morse Translator.
> [Open Live Preview](https://chhaymatt.github.io/morsetranslator/)

## Preview <!-- omit in toc -->

![Preview of Matthew Chhay's Morse Translator](https://i.imgur.com/l5GcnlV.png)

## Table of Contents <!-- omit in toc -->

-   [Introduction](#introduction)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Screenshots](#screenshots)
-   [MVP](#mvp)
-   [Setup](#setup)
    -   [For viewing locally](#for-viewing-locally)
    -   [For running unit tests](#for-running-unit-tests)
    -   [For further development](#for-further-development)
-   [Tools Used](#tools-used)
-   [Project Status](#project-status)
-   [Room for Improvement](#room-for-improvement)

## Introduction

Translating English text into International Morse Code and vice versa using JS methods.

## Features

-   Automatically detects Morse or English text input and translates accordingly
-   Supports basic English punctuation
-   Ability to separate Morse words by `|` and `*`
-   Copy to clipboard and clear input buttons
-   English Text to Speech
-   Responsive design and created unit tests

## Technologies Used

-   HTML
-   SCSS/CSS
-   JavaScript
-   Jest & Babel

## Screenshots

![Translating English Text to Morse](https://i.imgur.com/irUCFtm.png)
![Translating Morse to English Text](https://i.imgur.com/rLu30OD.png)
![Translating English Text to Morse with a different Morse separator](https://i.imgur.com/YbhJOkN.png)

## MVP

-   User interface allows user to input English text or Morse code
-   JS functions to translate English text to Morse code and vice versa
-   Morse code handles spaces appropriately
-   Morse code handles some other characters
-   JS is split between data, logic and DOM functions
-   Units tests are developed

## Setup

### For viewing locally

1. Git clone this repo `git clone git@github.com:chhaymatt/morsetranslator.git`
2. Get Live Server for VS Code
3. Open index.html and Press Go Live in the bottom right corner in VS Code

### For running unit tests

1. Git clone this repo `git clone git@github.com:chhaymatt/morsetranslator.git`
2. Run `npm install`
3. Run `npm test`

### For further development

1. Git clone this repo `git clone git@github.com:chhaymatt/morsetranslator.git`
2. Install sass in Terminal `npm install -g sass`
3. Get Prettier and Live Server for VS Code (links below)
4. Run `npm install`
5. Run SASS watch command from the /styles folder in Terminal `sass --watch --no-source-map style.scss style.css`
6. Open index.html and Press Go Live in the bottom right corner in VS Code

## Tools Used

-   Jest - creating and running unit tests.
-   Babel - required for running unit tests because code is split into different modules.
-   Live Server - to see live locally without refreshing. [Get Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
-   Prettier - to tidy up code in spacing and structure. [Get Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   Font Awesome - a library of icons that can be imported easily. [Get Font Awesome icons](https://fontawesome.com/start)
-   Favicon.io - generate a favicon. [Generate favicon](https://favicon.io/favicon-generator/)
-   Meta Tags - generate metadata. [Generate metadata](https://metatags.io/)

## Project Status

Project is ongoing

## Room for Improvement

-   Error handling for unsupported characters
-   Morse to Speech
