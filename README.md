# HighSpot Challenge

# [Live Demo](https://highspot-challenge.vercel.app/)

## Requirements

-   [x] Show results in a card grid format with the image prominently displayed.
-   [x] Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.
-   [x] Display a loading indicator when communicating with the API.
-   [x] Use a responsive design that accommodates, at minimum, desktop and mobile.
-   [x] Initially, fetch and display the first 20 results returned by the API.
-   [x] As the user scrolls down the page, load and append additional cards using “infinite scroll.”
-   [x] Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.
-   [x] Allow the user to search for cards by Name.
-   [x] Use modern open-source web technologies to implement your solution (React, Backbone, Angular, Vue, Underscore, etc.
-   [x] Provide instructions for prerequisites, installation, and application setup and build in a README file.REQUIREMENTS CHECKLIST

---

### Additional Features

-   Conventional commits via `husky hooks`: Allows user to have a strict commit message philosophy
-   Show skeleton cards when loading more cards or waiting for search results
-   Search: Implemented <mark>Fuzzy Search</mark> using `fuse.js`
-   Component styling via `@Material-UI`

---

### Prerequisites

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### Installation

```{sh}
npm install
```

OR

```{sh}
yarn
```

### Run the application

```{sh}
npm start
```

OR

```{sh}
yarn start
```

---

# File Structure

-   `src`: Top level folder with all the logic
    -   component
        -   `GameCard`: the card are populated in <mark>grid format</mark> from the API using this component
        -   `SkeletonCard`: populates the skeleton card (alternate to <mark>loading spinner</mark>) for loading more content
    -   `constants/index`: contains the constants and messages used in the components
    -   `App.js`: contains the logic for using <mark>API to fetch cards</mark>, show <mark>Skeleton cards</mark> for <mark>'Infinite scroll'</mark> for 20 cards at a time and <mark>fuzzy search using `fuse.js`</mark>
    - App.css`: contains component styling so that the app can be viewed on <mark>different screen resolutions</mark>


# Note:

The git history is removed as I removed the feature branches. Also, there is a bug where the components was being spelled as C and it was giving an error on cloning. Hence, I deleted the original repo and created a fresh new one.
#
