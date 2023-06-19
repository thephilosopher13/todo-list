/*

OBJECT FACTORIES
1. Create a to-do item object factory with the following properties - the object role stereotype of this is an INFORMATION HOLDER:
1.1. title property 
1.2. description property
1.3. dueDatePRoperty (mm/dd/yyyy format)
1.4. priority (either low, normal or high)
1.5. "accomplished" with the value being a boolean of either true or false (when item is created the value will automatically be "false")
1.6. a inProject property with the value being the project that it is in
2. create a project object factory with the following properties (this one is a STRUCTURER):
2.1. title, with a value being the name of the project
2.2. item1, item2, item3 .... with the value being a to-do object

CREATOR AND SORTER FUNCTIONS 
1. Create an addEventListener for the forms that "get" input from said form and translate them into calls of the factory functions with the arguments passed being the things put in the form 
1.1. then have an array that "pushes" the object just created into either toDoArray or ProjectArray
2. have a function that gets addEventListener from an edit popup and edits object designated
3. have a function that deletes an item (put an are you sure popup to this)
4. have two "filter" functions that filter for the ff. values in "duedate":
4.1. "due tomorrow"
4.2. "due this week"
5. another "filter" function that searches for completed tasks
6. another "filter function that searches for the inProject item and looks for all items in a certain project

INTERFACE (do these with DOM Manipulation)
1. Create a website with a header, footer, sidebar and content div 
1.1. Sidebar should have :
1.1.1. a first div that has:
1.1.1.1."all tasks", 
1.1.1.2."due today", 
1.1.1.3."due this week", 
1.1.1.4."important tasks" 
1.1.1.5. and "completed tasks"
1.1.2 second division of the sidebar should have all projects
1.1.2.1 THis should havea "+" button that pops up a form that creates the Object
1.1.2.2.  This should have a "title" form and then submit 
2. have a +"add Task" button on the top-right of the header
2.1. have this popup a form that has the ff: input
2.1.1. a "title" input
2.1.2. a "description" input that has a larger box
2.1.3. a "due date" one that's a date input
2.1.4. a "priority" that's a dropdown box of (low, medium, high)
2.1.5. a "project" dropdown that's either "inbox" or existing projects
3. have a function that "converts" a toDo object to an item in a table with the ff. cells:
3.1. the "title" of the toDo item
3.2. the due date of the toDo item
3.3. a "details" button that shows you a popUp that shows the item's details
3.4. a "edit" button that shows a popUp that's like the addProject form
3.5. a checkbox that let's you toggle whether 
3.6. a "delete" button that deletes the item
*/