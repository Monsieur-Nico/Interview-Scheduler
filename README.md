# Interview Scheduler

## Summary

Interview Scheduler is a single page application helps users create appointments for the whole the whole week, as well as editing and deleting them. It will bring a great user experience since it's easy and simple to use.
Errors handling has been setup in a way to make it as simple as possible for the end user to understand the issue.

The application is built as practice project during my educational period at [Lighthouse Labs](https://github.com/lighthouse-labs). It uses multiple libraries that will be included below.

- ### Screenshots
  ![First look](https://i.imgur.com/Z5gfbcr.png)
  ![Editing/Creating an appointment](https://i.imgur.com/dcGElg7.png)
  ![Handling empty name/no interviewer selected errors](https://i.imgur.com/oyFNRza.png)
  ![Confirming decision before deleting appointment](https://i.imgur.com/S7FlePr.png)

## Table of Content

- [Main application folder](/src)
  - [Components](/src/components)
    - [Appointment components](/src/components/Appointment)
  - [Hooks](/src/hooks)
  - [Styles](/src/styles)
- [Test Stories](/stories)
- [Cypress](/cypress)
  - [Cypress Tests](cypress/integration)

## Getting started

- [Fork this repository](https://github.com/Monsieur-Nico/Interview-Scheduler) this repository and clone to your local device.
- Install dependencies with `npm install`.
- If you don't want to build your own API use [This repo provided by LHL](https://github.com/lighthouse-labs/scheduler-api).
  _Follow the instruction in the README_

## Application Setup

- ### Running Webpack Development Server
  ```
  npm start
  ```
- ### Running Jest Test Framework

  ```sh
  npm test
  ```

- ### Running Storybook Visual Testbed
  ```
  npm run storybook
  ```
- ### Running Cypress tests

  ```
  npm run cypress
  ```

## Languagues, frameworks & libraries

- ### Languagues
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ### Database
  ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ### Frameworks & Libraries
  ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
  ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
- ### Testing Libraries
  ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
