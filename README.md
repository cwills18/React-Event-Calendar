# React-Event-Calendar
A web-based calendar created in React using Typescript.

## Demo & Snippets

-  This is a work in progress. I will add the link to the deployed version once finished.

---

## Requirements / Purpose

-   This project was a challenge to create a webpage using React Typescript that displays a calendar without using any component libraries.
-   The calendar had to include a title showing the current month and a grid of days
-   Each of the days cells were to be clickable with an empty modal appearing when a particular day is clicked.
-   The user should be able to navigate between months - view the upcoming month, previous month etc.
-   Day, week and month view to be added as a bonus feature

-   Typescript was chosen as the language to greater familiarise myself with the syntax required to program using Typescript.

---

## Design Goals / Approach

-   I wanted to spend most of the time working on the functionality of the webpage, rather than working on aesthetics. A clean, simple colour palette and design was chosen as a result.

The steps I have taken so far in approaching this project:
1. I started by planning what general containers and components would be needed to accommodate my long term goal to implement a day, week and month view, as well as a button to bring the user back to today.
2. After this, I set up the Dates Context, including an interface of a customised data type called DateProps which would be used to store various information about any given date, such as the numbers corresponding to date, month and year, but also the name of the month and the number of the day of the week to allow for easier handling of data when mapping through dates to create the grid.
3. Next, I wrote a bunch of service functions to handle loading different dates, formatting the date into different required formats, and create an array of date objects that corresponded to any given month starting on the first Sunday square of the calendar grid.
4. After implementing the monthly view to functionality, I added a modal that would open when a particular day was clicked.
5. Then, I added an extra context provider for the View type, and implemented a Weekly view.
6. Styling in SCSS was completed throughout the project as the functionality of various components were completed

---

## Known issues

-   No tests have been developed for this application at the moment
-   Day view is yet to be developed
-   Modal is currently empty and displays no useful information, such as a title with the date. There is no ability to add information to any days yet.

---

## Future Goals

-   Develop day view
-   Work on functionality to add an event to the calendar

---

## Change logs

### 01/08/2022 - Completed weekly view

-   Finished developing service functions that allow for handling of dates in the weekly view
-   Fixed bugs that were causing dates to display incorrectly in week view (this was due to neglecting to update the day number of the first of any month in Monthly view, and weekly date handling required the day number to be accurate when first changing to weekly view)
-   Minor styling fixes with SCSS
-   ReadMe added

---

## What did you struggle with?

-   This was my first substantial project using Typescript, so at times it was challenging to know how to handle potentially undefined values caused by errors. I am not sure if I have handled errors like this particularly well. 

