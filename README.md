# Attest Frontend technical stage

This is the base code for Attest's Frontend technical stage interview.

## Background

This code is not a direct representation of Attest's code or coding principles; it is designed to guide the technical stage interview. You are asked to familiarise yourself with the existing code - you can make notes on improvements you may make given you had the opportunity to do so.

You will be asked to do some technical tasks to complete the functionality of the mini-application. You can complete some of the immediate tasks at home - prepping/completing these tasks at home gives more opportunities in the final technical stage. If you don't have time to start these tasks at home then don't worry we will complete these in the first part of the interview.

## Description

Attest is a platform where users can design and send surveys to the public. The Attest platform will then collect responses from many users; your task is to represent the results of a completed survey and allow the user to filter the data.

The sidebar on the right displays and applies demographic filters, this is used to filter the response data, i.e. clicking "London" will change the responses shown on the left to only display the responses of users that match the filters selected.

## What's included?

- A design - you can use figma to look at the design files.
  - Create an account. https://www.figma.com/
  - Import `__files__/design.fig` (default state)
  - Import `__files__/design-interactive.fig` (Interacted state)
- A vite config that supports:
  - `.(css|postcss)` files - see for included base plugins `.postcssrc.js`
  - `.(less)` files
  - `.(sass|scss)` files
  - `.(stylus|styl)` files
  - `.(js|jsx)` files
  - `.(ts|tsx)` files
- Base css variables `src/styles/vars.css`
- [Vitest](https://vitest.dev/) is the provided library for unit tests.
  - We have included all the necessary packages and setup

## Tasks

If completing at home we ask you not to refactor the code considerably, we know the code is not perfect and that is intended.

- Make the UI interactive with the keyboard
  - [`src/components/filters/...`](./src/components/filters)
  - [`src/components/survey/...`](./src/components/filters)
- Style the demographic filters to match the design
  - [`src/components/filters/...`](./src/components/filters)
- Implement the logic to display the results based on the selected respondents. E.g. selecting "Female" should show the results amongst all female respondents. Run the unit tests to verify your solution.
  - [`src/components/survey/survey.ts`](./src/components/survey/survey.ts#L8)
  - On completing this task the test in [`src/components/survey/survey.test.ts#L85`](./src/components/survey/survey.test.ts#L85) should pass

<img width="500" alt="Screenshot of expected results" src="https://i.postimg.cc/NMMBbDvw/258805205-9efbcee6-d417-494b-8745-67ff5279d967.png">

## How to run?

- Open up the Dev Server on `https://localhost:3000` with `yarn start`
- To retrieve the survey data request `http://localhost:3000/api/survey.json`
- To retrieve the filter definition data request `http://localhost:3000/api/filter-definition.json`
- Run unit tests `yarn test`
- Run type checking `yarn typecheck`

## Notes

[Put any additional notes here that you would like us to know about your solution.]
