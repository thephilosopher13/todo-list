/*

INTERFACE MODULE (do these with DOM Manipulation)
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
4. when clicking a project get a function that "gets" the title of the project

*/

const userInterfaceModule = (() => {

    const div = document.createElement('div');
    const footer = document.createElement('footer');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const label = document.createElement('label');
    const textArea = document.createElement('textarea');
    const selection = document.createElement('select');
    const option = document.createElement('option');
    const table = document.createElement('table');
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    const _selectionOptionFactory = (value) => {
        const selectionOption = option.cloneNode();
        selectionOption.textContent = value;
        selectionOption.value = value.toLowerCase();
        return selectionOption
    }

    const _inputFactory = (inputType, inputLabel, inputName, inputValue) => {
        const inputDiv = div.cloneNode();
        const inputBox = input.cloneNode();
        const inputBoxLabel = label.cloneNode();

        inputBox.type = inputType;
        inputBox.id = inputLabel;
        inputBoxLabel.for = inputLabel.toLowerCase();
        inputBoxLabel.textContent = inputLabel;
        inputBox.name = inputName;
        inputBox.value = inputValue;

        inputDiv.appendChild(inputBoxLabel);
        inputDiv.appendChild(inputBox);

        return inputDiv;
    }

    const _createHeader = () => {
        const header = document.createElement('header');
        const h1 = document.createElement('h1');
        const logoDiv = div.cloneNode();
        const logoSpan = span.cloneNode();

        logoDiv.classList.add("logo");

        h1.textContent = "To-Do"
        
        logoDiv.appendChild(logoSpan);
        logoDiv.appendChild(h1);
        header.appendChild(logoDiv);

        return header
    }

    const _createFooter = () => {
        const footer = document.createElement('footer');
        const footertext = paragraph.cloneNode()

        footertext.textContent = "Copyright © 2023 thephilosopher13";
        
        footer.appendChild(footertext);
        
        return footer;
    }

    function _createContentDiv() {
        const contentDiv = div.cloneNode();
        contentDiv.setAttribute('id', 'content')
        
        return contentDiv
    }


})();