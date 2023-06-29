import projectModule from './project'
import taskModule from './task'
import toDate from 'date-fns/toDate'
import { format, compareAsc } from 'date-fns'


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

 /*   const textAreaFactory = (textAreaId, rows, cols, textAreaLabel) => {
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

*/

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
        inputBox.classList.add = inputLabel;
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

        modal.classList.add('modal');
        modalContent.id = 'modalcontent'

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }

    const itemWithClassDeleter = (className) => {
        const elementToDelete = document.querySelector(`.${className}`);
        if (elementToDelete && elementToDelete.parentElement) {
            elementToDelete.parentElement.removeChild(elementToDelete);
        }
      };

    const modalInit = () => {
        itemWithClassDeleter('modal')
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

    const _createDefaultButtonsDiv = () => {
        const defaultButtonsDiv = elementFactory.div.cloneNode();
        const defaultNavh2 = elementFactory.h2.cloneNode();
        const taskArray = taskModule.getTaskArray();
        const inboxButton = elementFactory.buttonFactory('inbox-button', "Inbox", () => afterLoadDOMManipulationModule.generateTable(taskArray))
        const dueTodayButton = elementFactory.buttonFactory('due-today-button', "Due Today", () => afterLoadDOMManipulationModule.generateTable(taskArray))
        const dueThisWeekButton = elementFactory.buttonFactory('due-this-week-button', "Due This Week", () => afterLoadDOMManipulationModule.generateTable(taskArray))
        defaultNavh2.textContent = "Home"
        defaultButtonsDiv.classList.add('default-buttons-div')
        
        defaultButtonsDiv.appendChild(defaultNavh2)
        defaultButtonsDiv.appendChild(inboxButton)
        defaultButtonsDiv.appendChild(dueTodayButton)
        defaultButtonsDiv.appendChild(dueThisWeekButton)

        return defaultButtonsDiv
    }

    const _createProjectButtonsDiv = () => {
        const projectButtonsDiv = elementFactory.div.cloneNode();
        const projectsNavh2 = elementFactory.h2.cloneNode();
        //have a project array here
        //make buttons named after the 'title' property of said projects in array (useful to do a forEach loop)

        projectsNavh2.textContent = "Projects"

        projectButtonsDiv.appendChild(projectsNavh2)

        return projectButtonsDiv
    }
    

    const _createHomeNav = () => {
        const homeNavDiv = elementFactory.div.cloneNode();
        const defaultButtonsDiv = _createDefaultButtonsDiv();
        const projectButtonsDiv = _createProjectButtonsDiv();

        const newItemButton = elementFactory.buttonFactory('newItem', "+", afterLoadDOMManipulationModule.newItemPopup)

        homeNavDiv.classList.add('homeNav');

        homeNavDiv.appendChild(defaultButtonsDiv)
        homeNavDiv.appendChild(projectButtonsDiv)
        homeNavDiv.appendChild(newItemButton)
        
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

    const formFactory = document.createElement('form');
    const tableFactory = document.createElement('table');
    const theadFactory = document.createElement('thead');
    const tbodyFactory = document.createElement('tbody')
    const thFactory = document.createElement('th');
    const trFactory = document.createElement('tr');
    const tdFactory = document.createElement('td');

    const newItemPopup = () => {
        elementFactory.modalInit();
        const modal = document.querySelector('.modal')
        modal.style.display = "block"
        const newItemButtonContainer = elementFactory.div.cloneNode();
        const newTaskButton = elementFactory.buttonFactory('newTask', 'New Task', _newTaskPopup);
        const newProjectButton = elementFactory.buttonFactory('newProject', 'New Project', _newProjectPopup);

        newItemButtonContainer.classList.add('newitempopupbuttoncontainer')

        const modalContent = document.getElementById('modalcontent');

        newItemButtonContainer.appendChild(newTaskButton);
        newItemButtonContainer.appendChild(newProjectButton);
        modalContent.appendChild(newItemButtonContainer);
    }

    const _getValueFromInput= (formId, inputId, typeOfValue) => {
        const formToGetInputFrom = document.getElementById(formId);
        const inputToGetValueFrom = formToGetInputFrom.getElementById(inputId);
        const inputValue = inputToGetValueFrom[typeOfValue];
        
        return inputValue;
    }
        
    const _newProjectPopup = () => {
        elementFactory.modalInit();
        const modal = document.querySelector('.modal')
        modal.style.display = "block"
        const projectForm = formFactory.cloneNode();
        const titleInput = elementFactory.inputFactory('text', 'Name', 'projectname', 'projectname')
        const projectSubmitButton = elementFactory.buttonFactory("submitProjectForm", 'Submit', _submitProjectData);

        const modalContent = document.getElementById('modalcontent');



        if (modalContent) {
            modalContent.innerHTML = '';
          } 

        projectForm.id = 'projectform'

        projectForm.appendChild(titleInput);
        projectForm.appendChild(projectSubmitButton);
        modalContent.appendChild(projectForm)
    }

    const _submitProjectData = () => {
        const titleFromProjectForm = _getValueFromInput(projectform, title, value);
        const projectArray = projectModule.getProjectArray();

        const newProject = projectModule.projectFactory(titleFromProjectForm);
        projectArray.push(newProject);
    }

    const _newTaskPopup = () => {
        elementFactory.modalInit();

        const modal = document.querySelector('.modal')
        const projectArray = projectModule.getProjectArray();
        const projectTitles = projectArray.map((projectTitleValues) => projectTitleValues.title)

        const taskForm = formFactory.cloneNode();
        const taskTitleInput = elementFactory.inputFactory('text', 'Title', 'taskTitle', 'taskTitle');
        const taskDueDateInput = elementFactory.inputFactory('date', 'Deadline', 'dueDate', 'dueDate');
        const taskPriorityInput = elementFactory.selectionFactory('Priority', 'Low', 'Medium', 'High');
        const inWhichProjectInput = elementFactory.selectionFactory('Project', ...projectTitles)
        const taskSubmitButton = elementFactory.buttonFactory("submitTaskForm", 'Submit', _submitTaskData);
        const modalContent = document.getElementById('modalcontent');

        if (modalContent) {
            modalContent.innerHTML = '';
          } 
        taskForm.id = 'taskform'

        taskForm.appendChild(taskTitleInput);
        taskForm.appendChild(taskDescriptionInput);
        taskForm.appendChild(taskDueDateInput);
        taskForm.appendChild(taskPriorityInput);
        taskForm.appendChild(inWhichProjectInput);
        taskForm.appendChild(taskSubmitButton);
        modalContent.appendChild(taskForm);
    }

    const _convertDateValueToActualDate = (originalDateString) => {
        const dateStringWithoutNonNumeric = originalDateString.replace(/\D/g, '');
        const year = dateStringWithoutNonNumeric.substring(0, 4);
        const month = (parseInt(dateStringWithoutNonNumeric.substring(4, 6)) - 1).toString()
        const day = dateStringWithoutNonNumeric.substring(6);
        const dateInCorrectForm = toDate(new Date(year, month, day))

        return dateInCorrectForm
    }


    const _submitTaskData = () => {
        const titleFromTaskForm = _getValueFromInput (taskform, title, value)
        const dueDatefromTaskForm = _getValueFromInput(taskform, dueDate, value);
        const formattedDate = _convertDateValueToActualDate(dueDatefromTaskForm);
        const taskPriorityfromTaskForm = _getValueFromInput(taskform, priority, value);
        const inProjectFromTaskForm = _getValueFromInput(taskform, project, value);
        const taskArray = taskModule.getTaskArray()

        const newTask = taskModule.taskFactory(titleFromTaskForm, formattedDate, taskPriorityfromTaskForm, inProjectFromTaskForm)
        taskArray.push(newTask)
        newTask.linkTaskToProject()
    }

    const _createIsAccopmplishedCheckbox = (task, property) => {
        const checkboxCell = tdFactory.cloneNode();
        const checkbox = elementFactory.inputFactory('checkbox', 'isAccomplished', 'taskIsAccomplished', false)
        checkbox.checked = task[property];

        checkbox.addEventListener('change', (event) => {
            task[property] = event.target.checked;
          });

        checkboxCell.appendChild(checkbox);

        return checkboxCell
    }

    const _createCellWithTextContent = (factory, content, rowToAppendCellTo) => {
        const cell = factory.cloneNode();
        cell.textContent = content;
        rowToAppendCellTo.appendChild(cell);
    }

    const _generateTableHeader = (array) => {
        const thead = theadFactory.cloneNode()
        const objectKeys = Object.keys(array[0])
        const headerRow = trFactory.cloneNode()
        objectKeys.slice(0, 3).forEach((key) => { 
            _createCellWithTextContent(thFactory, key, headerRow)
        })
        _createCellWithTextContent(thFactory, 'Accomplished?', headerRow)
        _createCellWithTextContent(thFactory, 'Project', headerRow)

        thead.appendChild(headerRow);

        // create functionality for edit and delete item here

        return thead
    }

    const _generateTableBody = (array) => {
        const tbody = tbodyFactory.cloneNode()
        const objectKeys = Object.keys(array[0])

        array.forEach((object) => {
            const row = trFactory.cloneNode()
            objectKeys.slice(0, 3).forEach((key) => {
                _createCellWithTextContent(tdFactory, object[key], row)
            });
            objectKeys.slice(3, 4).forEach((key) => {
                const checkbox = _createIsAccopmplishedCheckbox(object, key);
                row.appendChild(checkboxCell);
            });
            objectKeys.slice(4, 5).forEach((key) => {
                _createCellWithTextContent(tdFactory, object[key], row)
            });
            tbody.appendChild(row);
        });

        // create functionality for edit and delete item here

        return tbody

        }

    const generateTable = (array) => {
        if (array.length === 0) {
            return
        }

        const table = tableFactory.cloneNode()
        const thead = _generateTableHeader(array);
        const tbody = _generateTableBody(array);
        const contentBox = document.getElementById(contentDisplay)
        
        table.appendChild(thead);
        table.appendChild(tbody);
        contentBox.appendChild(table);
    };

    return {
        newItemPopup,
        generateTable
    }

})();

const init = () => {
    const taskArray = taskModule.getTaskArray();
    elementCreationOnLoadModule.loadWebpage();
}

export default init