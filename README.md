# Table Graph
This project implements a table with 1000 records showing Graph trends of advertisement data. The data is received from a public API. 

* **Pagination solution:** [hkedia321.github.io/tableLargeRecordsGraph/](https://hkedia321.github.io/tableLargeRecordsGraph/)

* **Virtualization solution:** [large-table-render-virtualize.netlify.app/](https://large-table-render-virtualize.netlify.app/)

## Solutons
The main problem is in rendering thousand rows containing graphs. These number of complex rows in the DOM will definitely make 
the initial rendering very slow and the page will behave unresponsively since all these DOM nodes are in memory. This will make the site almost unusable. The solution is to either use pagination or react-virtualization.

* **Pagination**: Render limited number of rows (~10) at a time, and user can choose to go to a particular page. The browser will
render only those rows at a time. [master branch](https://github.com/hkedia321/tableLargeRecordsGraph/tree/master) contains this solution implementation.

* **Virtualization**: Using [react-window](https://github.com/bvaughn/react-window) library to render only part of the whole 1000 rows, just enough to fill the viewport. As the user scrolls through, only the rows in that particular area are rendered and the other rows are removed from the DOM. [reactWindow branch](https://github.com/hkedia321/tableLargeRecordsGraph/tree/reactWindow) contains this solution implementation.

## Technology Stack

### Components
* **CSS:** Styling web pages, html files
* **Javascript**: Primary programing language
* **ReactJS**: Javascript library for building User Interfaces
* **Redux**: Managing global state
* **Redux-saga**: Mangaging asynchronous calls like API calls in Redux
* **styled-components**: CSS-in-JS library
* **highcharts**: For displaying graphs
* **fontawesome**: For displaying icons
* **react-testing-library**: For unit tests

## Development
This project is bootstraped with [Create React App](https://github.com/facebook/create-react-app)

## External APIs Used
* a API for table data: [1000 items table response.json](https:/-users.s3.eu-central-1.amazonaws.com/frontend-assignment/1000+items+table+response.json)

## Local Installation
### Steps
* `git clone git@github.com:hkedia321/tableLargeRecordsGraph.git`
* `cd tableLargeRecordsGraph`
* `npm install`
* `npm start`
* `npm run test` - For testing
* `npm test -- --coverage` - For testing with coverage
* `npm run format` - For code formating
* `npm run lint` - For code lint checking

## Project Structure
```
tablesrenderapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── .eslintrc.json (for eslint configuration)
├── .jsconfig.json 
├── .env (environment variables like API url)
├── public (public files in React)
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── actions
        ├── actionCreators.js
        └── actionTypes.js
    ├── api
        └── index.js (API wrapper for making ajax calls)
    ├── components (all the UI components)
    ├── images 
    ├── reducers
        ├── index.js (combine all reducers)
        └── tableData.js (reducer for table data)
    ├── sagas (middlewares for redux)
      ├── index.js (combine all sagas)
      └── tableData.js (saga for table data)
    ├── store (configure redux store)
    └── utils (utility functions)

```

### To Deploy
* `npm run deploy` - the deploy script will build the app and deploy to [this](https://hkedia321.github.io/tableLargeRecordsGraph/) github page.

## Screenshots
![SCRUM](/docs/images/screenshot1.png)

## Live Demo
The project can be accessed at [hkedia321.github.io/tableLargeRecordsGraph/](https://hkedia321.github.io/tableLargeRecordsGraph/)

React-virtualized table version can be accessed at [large-table-render-virtualize.netlify.app/](https://large-table-render-virtualize.netlify.app/)

## Contributors
* Harshit Kedia ([hkedia321](https://github.com/hkedia321))