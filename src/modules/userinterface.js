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

const elementFactory = (() => {

    const div = document.createElement('div');
    const h2 = document.createElement('h2')
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const label = document.createElement('label');
    const textArea = document.createElement('textarea');
    const selection = document.createElement('select');
    const option = document.createElement('option');

    const _selectionOptionFactory = (value) => {
        const selectionOption = option.cloneNode();
        selectionOption.textContent = value;
        selectionOption.value = value.toLowerCase();
        return selectionOption
    }

    const textAreaFactory = (textAreaId, rows, cols, textAreaLabel) => {
        const newTextArea = textArea.cloneNode();
        const newtextAreaLabel = label.cloneNode();
        const newTextAreaDiv = div.cloneNode();

        newTextArea.id = textAreaId;
        newTextArea.rows = rows;
        newTextArea.cols = cols;

        newtextAreaLabel.for = textAreaLabel.toLowerCase();
        newtextAreaLabel.textContent = textAreaLabel;

        newTextAreaDiv.appendChild(newtextAreaLabel);
        newTextAreaDiv.appendChild(newTextArea);

        return newTextAreaDiv
    }

    const selectionFactory = (selectionName, ...options) => {
        const newSelection = selection.cloneNode();
        const selectionLabel = label.cloneNode();
        const selectionDiv = div.cloneNode();

        newSelection.id = selectionName.toLowerCase();
        selectionLabel.for = newSelection.id;
        selectionLabel.textContent = selectionName;

        options.forEach((optionValue) => {
            const optionElement = _selectionOptionFactory(optionValue);
            newSelection.appendChild(optionElement);
        });

        selectionDiv.appendChild(selectionLabel);
        selectionDiv.appendChild(newSelection);
        
        return selectionDiv;
    }

    const inputFactory = (inputType, inputLabel, inputName, inputValue) => {
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

    const _createButtonElement = (buttonClass, textContent) => {
        const newButton = button.cloneNode();
        newButton.classList.add(buttonClass);
        newButton.textContent = textContent
        return newButton
    }

    const _createButtonClickHandler = (button, handleClick) => {
        button.addEventListener('click', handleClick);
    }

    const buttonFactory = (createdButtonClass, buttonText, clickHandler) => {
        const createdButton = _createButtonElement(createdButtonClass, buttonText);
        
        _createButtonClickHandler(createdButton, clickHandler);

        return createdButton
    }

    const modalFactory = () => {
        const modal = div.cloneNode();
        const modalContent = div.cloneNode();
        const body = document.querySelector('body');

        modal.classList.add('modal');
        modalContent.classList.add('modal-content');

        modal.appendChild(modalContent);
        body.appendChild(modal)
    }

    const itemWithClassDeleter = (className) => {
        const elementToDelete = document.querySelector(`.${className}`);
        if (elementToDelete && elementToDelete.parentElement) {
            elementToDelete.parentElement.removeChild(elementToDelete);
        }
      };

    const modalInit = () => {
        itemWithClassDeleter(modal)
        modalFactory();
    }

    return {
        
        div,
        span,
        paragraph,
        h2,
        buttonFactory,
        inputFactory,
        modalInit,
        itemWithClassDeleter,
        selectionFactory,
        textAreaFactory
    }



})();

const elementCreationOnLoadModule = (() => {

    const _createHeader = () => {
        const header = document.createElement('header');
        const h1 = document.createElement('h1');
        const logoDiv = elementFactory.div.cloneNode();
        const logoSpan = elementFactory.span.cloneNode();

        logoDiv.classList.add("logo");

        h1.textContent = "To-Do"
        
        logoDiv.appendChild(logoSpan);
        logoDiv.appendChild(h1);
        header.appendChild(logoDiv);

        return header
    }

    const _createFooter = () => {
        const footer = document.createElement('footer');
        const footertext = elementFactory.paragraph.cloneNode()

        footertext.textContent = "Copyright © 2023 thephilosopher13";
        
        footer.appendChild(footertext);
        
        return footer;
    }
    

    const _createHomeNav = () => {
        const homeNavh2 = elementFactory.h2.cloneNode();
        const homeNavDiv = elementFactory.div.cloneNode();
        const newItemuUtton = elementFactory.buttonFactory(newItem, "+", _createContentDiv )

        homeNavh2.textContent = "Home"
        homeNavDiv.classList.add('homeNav')

        return homeNavDiv
    }

    const _createDisplaySection = () => {
        const displayDiv = elementFactory.div.cloneNode()
        
        displayDiv.setAttribute('id', 'contentDisplay')

        return displayDiv
    }

    const _createContentDiv = () => {
        const contentDiv = elementFactory.div.cloneNode();
        const homeNav = _createHomeNav();
        const contentDisplay = _createDisplaySection();

        contentDiv.setAttribute('id', 'content')

        contentDiv.appendChild(homeNav)
        contentDiv.appendChild(contentDisplay)
        
        return contentDiv
    }

    const loadWebpage = () => {
        const header = _createHeader();
        const content = _createContentDiv();
        const footer = _createFooter();
        const body = document.querySelector('body');

        body.appendChild(header);
        body.appendChild(content);
        body.appendChild(footer);

    }

    return {
        loadWebpage
    }
})();

const afterLoadDOMManipulationModule = (() => {

    const form = document.createElement('form');
    const table = document.createElement('table');
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    const newItemPopup = () => {
        elementFactory.modalInit();
        const modalContent = document.querySelector('.modal-content');
        const newItemButtonContainer = elementFactory.div.cloneNode();
        const newTaskButton = elementFactory.buttonFactory(newTask, 'New Task', _newTaskPopup);
        const newProjectButton = elementFactory.buttonFactory(newProject, 'New Project', _newProjectPopup);

        newItemButtonContainer.classList.add('newitempopupbuttoncontainer')

        newItemButtonContainer.appendChild(newTaskButton);
        newItemButtonContainer.appendChild(newProjectButton);
        modalContent.appendChild(newItemButtonContainer);
    }
        
    const _newProjectPopup = () => {
        elementFactory.modalInit();
        const modalcontent = document.querySelector('.modal-content');
        const projectForm = form.cloneNode();
        const titleInput = elementFactory.inputFactory(text, Name, projectname, projectname)
        const projectSubmitButton = elementFactory.buttonFactory(submitProjectForm, 'Submit', _submitProjectData);
    }

    const _submitProjectData = () => {

    }

    const _newTaskPopup = () => {
        elementFactory.modalInit();
        const modalcontent = document.querySelector('.modal-content');
        const taskForm = form.cloneNode();
        const taskTitleInput = elementFactory.inputFactory(text, Title, taskTitle, taskTitle)
        const taskDescriptionInput = elementFactory.textAreaFactory(description, 3, 32, Description)
        const taskDueDateInput = elementFactory.inputFactory(date, Deadline, dueDate, dueDate)
        const taskPriorityInput = elementFactory.selectionFactory(Priority, Low, Medium, High)
    }

})();

const init = () => {
    loadWebpage();
}

export default init