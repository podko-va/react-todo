# The To-do App

Description:
The To-Do List Application is a user-friendly and efficient tool designed to help individuals and teams manage their tasks and projects effectively. This application allows users to create, organize, and prioritize their to-do items, ensuring that nothing important is overlooked.

Concept:
The core concept of the To-Do List Application is to provide a simple yet powerful platform for task management

The To-do App is the final project for the Code The Dream `React` class.

## ENV file structure
VITE_AIRTABLE_BASE_ID 
VITE_TABLE_NAME 
VITE_AIRTABLE_API_TOKEN

### **Requirements for the Project (Rubric)**
**General**
 - [x] Project is published on public GitHub repository
 - [x] Project includes "create-react-app" boilerplate structure
 - [x] Project includes necessary dependencies:
 "react-router-dom"
 "prop-types"
 - [x] Code compiles without errors
 - [x] Code executes without run-time errors in the browser
 - [x] (Bonus) Code compiles and runs without warnings

**Project Structure**
Repository includes src/ directory with the following structure:

 - [x] index.js(application entry-point)
 - [x] App.js (root component)
 - [x] components/ directory with the following files:
 - [x] AddTodoForm.js
 - [x] InputWithLabel.js
 - [x] TodoList.js
 - [x] TodoListItem.js
 - [x] (Bonus) TodoContainer.js
 - [x] One or more CSS modules associated with the components above

**App Component**
App.js contains the following:
 - [x]  Functional React component named App
 - [x] Return statement that renders the following JSX:
 - [x] Router from "react-router-dom"
 - [x] Switch component with two or more Routes that are navigable
 - [x] One route for "home" or "landing" page
 - [x] One or more routes which render a TodoList component
 - [x] (Bonus) Navigation menu
**TodoContainer Component**
- [x] If project is missing (Bonus) TodoContainer.js, then apply these requirements to App.js instead
TodoContainer.js contains the following:
 - [x] Functional React component named TodoContainer with one prop: tableName
 - [x] Correct propTypes for the prop(s) listed
 - [x] State variable named todoList with default value of an empty Array ([])
 - [x] State variable named isLoading with default value of true
 - [x] useEffect hook with dependency tableName (prop) and callback function that does the following:
 - [x] Using Fetch API, GET table records from Airtable for the given tableName
 - [x] Parse JSON response
 - [x] Sort response data by one or more properties
 - [x] Set todoList state to sorted data
 - [x] Set isLoading to false
 Function named addTodo with parameter title that does the following:
 - [x] Using Fetch API, POST new record to Airtable with the given title field value
 - [x] Parse JSON response
 - [x] Set todoList state to new Array containing the added record
 - [x] (Bonus) Re-sort list data
 Function named removeTodo with parameter id that does the following:
 - [x] Using Fetch API, DELETE record from Airtable given id
 - [x] Parse JSON response
 - [x] Set todoList state to new Array NOT containing the removed record
 - [x] Return statement that renders the following JSX:
 - [x] Heading level-one with dynamic tableName

 **AddTodoForm Component**
 Conditional rendering based on isLoading state:
 - [x] If true, paragraph that reads "Loading..." or some equivalent message
 - [x] If false, TodoList Component

**AddTodoForm Component**
AddTodoForm.js contains the following:
 - [x] Functional React component named AddTodoForm with one prop: onAddTodo
 - [x] Correct propTypes for the prop(s) listed
 - [x] State variable named todoTitle with default value of an empty String ("")
 - [x] Function named handleTitleChange with parameter event that does the following:
 - [x] Set todoTitle to given value from event
 - [x] Function named handleAddTodo with parameter event that does the following:
 - [x] Prevent default event behavior (i.e. page refresh)
 - [x] Invoke callback prop onAddTodo and pass todoTitle from state
 - [x] Reset todoTitle value to an empty String ("")
 - [x] Return statement that renders the following JSX:
 - [x] Form element with submit event handler

 **InputWithLabel Component**
 - [x] Button element with type "submit"

**InputWithLabel Component**
InputWithLabel.js contains the following:
 - [x] Functional React component named InputWithLabel with three props: todoTitle, handleTitleChange, and children
 - [x] Correct propTypes for the prop(s) listed
 - [x] Ref for Input element
 - [x] useEffect hook with empty dependency list and callback function that does the following:
 - [x] Focus input ref
 - [x] Return statement that renders the following JSX:
 - [x] Label element which renders text from children prop
 - [x] Input element which is configured as a "controlled component" with "value" and "onChange" attributes

**TodoList Component**
TodoList.js contains the following:
 - [x]  Functional React component named TodoList with two props: todoList and onRemoveTodo
 - [x] Correct propTypes for the prop(s) listed
 - [x] Return statement that renders the following JSX:
 - [x] Unordered list element
 - [x] map statement which loops through todoList Array and returns TodoListItem Component
 
**TodoListItem Component**
TodoListItem.js contains the following:

 - [x] Functional React component named TodoListItem with two props: todo and onRemoveTodo
 - [x] Correct propTypes for the prop(s) listed
 - [x] Return statement that renders the following JSX:
 - [x] List-item element
 - [x] Title from todo Object
 - [x] Button element with text "Remove" and "onClick" event handler

**Styling**
- [ ] Use of third-party CSS libraries is discouraged for this project, we want to see your understanding of basic CSS concepts like rulesets, properties, and media queries

- [x]  Project includes at least one CSS module (though, it is encouraged that you have a different module for each React component)
 - [x] Application follows the style requirements outlines below:
 - [ ] Change the background color of the page body
 - [x] Change the default text color
 - [x] Customize the font family
 - [ ] (Bonus) Load in a font family from Google Fonts
 - [x] (Bonus) Customize style of navigation items
 - [x] Add spacing (padding/margin) between elements
 - [x] Change the font size, weight, and color of all headings
 - [x] Customize input and button styles
 - [x] Use Media Queries to make sure the application is responsive for all device sizes (mobile, tablet, desktop, etc.)
 - [ ] (Bonus) Add multi-media usage (i.e. iconography)
