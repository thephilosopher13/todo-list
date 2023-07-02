import formatISO from 'date-fns/formatISO'
import projectModule from './project'
import taskModule from './task'
import toDate from 'date-fns/toDate'
import { el } from 'date-fns/locale';

const elementFactory = (() => {

    const div = document.createElement('div');
    const h2 = document.createElement('h2')
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const label = document.createElement('label');
    const selection = document.createElement('select');
    const option = document.createElement('option');
    const formFactory = document.createElement('form');

    const _selectionOptionFactory = (value) => {
        const selectionOption = option.cloneNode();
        selectionOption.textContent = value;
        selectionOption.value = value.toLowerCase();
        return selectionOption
    }

    const appendChildrenToParentElement = (parentElement, arrayOfChildren) => {
        if (arrayOfChildren.length === 0) {
            return
        } else {
            for (let i = 0; i < arrayOfChildren.length; i++) {
                parentElement.appendChild(arrayOfChildren[i])
            }
        }
    }

    const selectionFactory = (selectionName, selectionDefaultValue, ...options) => {
        const newSelection = selection.cloneNode();
        const selectionLabel = label.cloneNode();
        const selectionDiv = div.cloneNode();

        newSelection.id = selectionName.toLowerCase();
        selectionLabel.htmlFor = selectionName.toLowerCase();
        selectionLabel.textContent = selectionName;
        newSelection.name = selectionName.toLowerCase();
        newSelection.value = selectionDefaultValue


        options.forEach((optionValue) => {
            const optionElement = _selectionOptionFactory(optionValue);
            newSelection.appendChild(optionElement);
        });

        appendChildrenToParentElement(selectionDiv, [selectionLabel, newSelection])

        return selectionDiv;
    }

    const inputFactory = (inputType, inputLabel, inputName, inputValue) => {
        const inputDiv = div.cloneNode();
        const inputBox = input.cloneNode();
        const inputBoxLabel = label.cloneNode();

        inputBox.type = inputType;
        if (inputType !== 'checkbox') {
            inputBoxLabel.textContent = inputLabel;
            inputBox.id = inputName;
            inputBoxLabel.htmlFor = inputName
        } else {
            inputBox.classList.add(inputName)
        }
        inputBox.name = inputName;
        inputBox.value = inputValue;
        inputBoxLabel.for = inputName

        appendChildrenToParentElement(inputDiv, [inputBoxLabel, inputBox])

        return inputDiv;
    }
    
    const createSubmitInput = () => {
        const submitInput = input.cloneNode();
        submitInput.type = 'Submit'
        submitInput.value = 'Submit'

        return submitInput
    }

    const _createButtonElement = (buttonClass, textContent) => {
        const newButton = button.cloneNode();
        newButton.classList.add(buttonClass);
        newButton.textContent = textContent
        return newButton
    }

    const _createElementClickHandler = (element, handleClick) => {
        element.addEventListener('click', handleClick);
    }


    const buttonFactory = (createdButtonClass, buttonText, clickHandler) => {
        const createdButton = _createButtonElement(createdButtonClass, buttonText);
        _createElementClickHandler(createdButton, clickHandler);

        return createdButton
    }

    const _svgFactory = (title, path) => {
        const svgDiv = div.cloneNode();
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("viewBox", "0 0 24 24");
    
        const titleElement = document.createElementNS("http://www.w3.org/2000/svg", "title");
        titleElement.textContent = title;
    
        const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("d", path)

        svgDiv.classList.add('svg')

        appendChildrenToParentElement(svg, [titleElement, pathElement])
        svgDiv.appendChild(svg)
    
        return svgDiv;
    }

    const createClickableSvg = (svgTitle, svgPath, clickHandler) => {
        const svg =  _svgFactory(svgTitle, svgPath)
        _createElementClickHandler(svg, clickHandler)
        
        return svg
    }

    const _createModalHeader = () => {
        const modalHeader = div.cloneNode();
        const closeButton = createClickableSvg('close', "M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z", deleteModal)

        closeButton.id = 'close-button'
        modalHeader.id = 'modal-header'

        modalHeader.appendChild(closeButton);

        return modalHeader
    }

    const modalFactory = () => {
        const modalHeader = _createModalHeader();
        const modal = div.cloneNode();
        const modalBox = div.cloneNode();
        const modalContent = div.cloneNode();

        modal.classList.add('modal');
        modalBox.id = 'modal-box'
        modalContent.id = 'modal-content'

        appendChildrenToParentElement(modalBox, [modalHeader, modalContent])
        modal.appendChild(modalBox)
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

    const deleteModal = () => {
        itemWithClassDeleter('modal')
    }

    const modalInit = () => {
        deleteModal()
        modalFactory();
    
        const modal = document.querySelector('.modal');
        modal.style.display = "block"
        
    }

    return {
        
        div,
        span,
        paragraph,
        h2,
        buttonFactory,
        inputFactory,
        modalInit,
        deleteModal,
        selectionFactory,
        formFactory,
        createClickableSvg,
        createSubmitInput,
        appendChildrenToParentElement

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

        elementFactory.appendChildrenToParentElement(logoDiv, [logoSpan, h1])
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
        
        const taskArrayDueToday = taskModule.taskArrayFilterDueDateToday();
        const taskArrayFilterDueThisWeek = taskModule.taskArrayFilterDueThisWeek();

        const inboxButton = elementFactory.buttonFactory('inbox-button', "Inbox", () => afterLoadDOMManipulationModule.generateTaskListOnClick('inbox', taskArray))
        const dueTodayButton = elementFactory.buttonFactory('due-today-button', "Due Today", () => afterLoadDOMManipulationModule.generateTaskListOnClick('due-today', taskArrayDueToday))
        const dueThisWeekButton = elementFactory.buttonFactory('due-this-week-button', "Due This Week", () => afterLoadDOMManipulationModule.generateTaskListOnClick('due-this-week', taskArrayFilterDueThisWeek))

        inboxButton.id = 'inbox'
        dueTodayButton.id = 'due-today'
        dueThisWeekButton.id = 'due-this-week'

        defaultNavh2.textContent = "Home"
        defaultButtonsDiv.classList.add('default-buttons-div')

        elementFactory.appendChildrenToParentElement(defaultButtonsDiv, [defaultNavh2, inboxButton, dueTodayButton, dueThisWeekButton])

        return defaultButtonsDiv
    }

    const deleteProjectButton = (projectObject) => {
        projectModule.deleteObject(projectObject);
        const projectButton = document.getElementById(`${projectObject.title}`)
        projectButton.remove();
        refreshProjectButtonsDiv();
    }


    const _createProjectButton = (projectObject) => {
        const projectButton = elementFactory.buttonFactory('project', `${projectObject.title}`, () => afterLoadDOMManipulationModule.generateTaskListOnClick(projectObject.title, taskModule.taskArrayFilterForProject(projectObject.title)))
        const deleteProjectSvg = elementFactory.createClickableSvg('delete', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z', () => deleteProjectButton(projectObject))
        const projectButtonAndDeleteButtonDiv = elementFactory.div.cloneNode();

        projectButtonAndDeleteButtonDiv.classList.add('project-and-delete-button-div')

        elementFactory.appendChildrenToParentElement(projectButtonAndDeleteButtonDiv, [projectButton, deleteProjectSvg])

        return projectButtonAndDeleteButtonDiv
    }

    const _createProjectButtonsDivContent = (divToAttachTo) => {
        const projectArray = projectModule.getProjectArray();
        const projectsNavh2 = elementFactory.h2.cloneNode();
        projectsNavh2.textContent = "Projects"

        divToAttachTo.appendChild(projectsNavh2)

        projectArray.forEach((object) => {
            if (object.title !== 'None') {
                const projectButton = _createProjectButton(object)
                projectButton.id = object.title
                divToAttachTo.appendChild(projectButton);
            }
        })
    }

    const _createProjectButtonsDiv = () => {
        const projectButtonsDiv = elementFactory.div.cloneNode();

        projectButtonsDiv.id = 'project-buttons'

        _createProjectButtonsDivContent(projectButtonsDiv)

        return projectButtonsDiv
    }

    const refreshProjectButtonsDiv = () => {
       const projectButtonsDiv = document.getElementById('project-buttons')
       projectButtonsDiv.innerHTML = ''
       _createProjectButtonsDivContent(projectButtonsDiv)
    }
    

    const _createHomeNav = () => {
        const homeNavDiv = elementFactory.div.cloneNode();
        const defaultButtonsDiv = _createDefaultButtonsDiv();
        const projectButtonsDiv = _createProjectButtonsDiv();
        const newItemButton = elementFactory.buttonFactory('newItem', "+", afterLoadDOMManipulationModule.newItemPopup)

        homeNavDiv.id = 'homeNav';

        elementFactory.appendChildrenToParentElement(homeNavDiv, [defaultButtonsDiv, projectButtonsDiv, newItemButton])

        return homeNavDiv
    }

    const _createTasksContainer = () => {
        const tasksContainerDiv = elementFactory.div.cloneNode()
        
        tasksContainerDiv.setAttribute('id', 'tasks-container')

        return tasksContainerDiv
    }

    const _createDisplaySection = () => {
        const displayDiv = elementFactory.div.cloneNode();
        const tasksContainerDiv = _createTasksContainer();
        
        displayDiv.appendChild(tasksContainerDiv);
        displayDiv.setAttribute('id', 'contentDisplay')

        return displayDiv
    }

    const _createContentDiv = () => {
        const contentDiv = elementFactory.div.cloneNode();
        const homeNav = _createHomeNav();
        const contentDisplay = _createDisplaySection();

        contentDiv.setAttribute('id', 'content')

        elementFactory.appendChildrenToParentElement(contentDiv, [homeNav, contentDisplay])
        
        return contentDiv
    }

    const loadWebpage = () => {
        const header = _createHeader();
        const content = _createContentDiv();
        const footer = _createFooter();
        const body = document.querySelector('body');

        elementFactory.appendChildrenToParentElement(body, [header, content, footer])
    }

    return {
        refreshProjectButtonsDiv,
        loadWebpage
    }
})();

const afterLoadDOMManipulationModule = (() => {

    const newItemPopup = () => {
        elementFactory.modalInit();
        const modal = document.querySelector('.modal')
        modal.style.display = "block"
        const newItemButtonContainer = elementFactory.div.cloneNode();
        const newTaskButton = elementFactory.buttonFactory('newTask', 'New Task', () => _newTaskPopup());
        const newProjectButton = elementFactory.buttonFactory('newProject', 'New Project', _newProjectPopup);

        newItemButtonContainer.classList.add('newitempopupbuttoncontainer')

        const modalContent = document.getElementById('modal-content');
        
        elementFactory.appendChildrenToParentElement(newItemButtonContainer, [newTaskButton, newProjectButton])
        modalContent.appendChild(newItemButtonContainer);

    }

    const _checkIfValueAlreadyExists = (array, value) => {
        return array.some(item => item.title === value)
    }

    const _validateProjectForm = () => {
        const projectNameInput = document.getElementById('projectTitle')

        if (projectNameInput.value === '' || projectNameInput.value === 'projectTitle') {
            alert('Please enter a valid name.')
            return false
        } 

        const projectArray = projectModule.getProjectArray();
        const checkIfProjectNameAlreadyExists = _checkIfValueAlreadyExists(projectArray, projectNameInput.value);
        console.log(checkIfProjectNameAlreadyExists)

        if (checkIfProjectNameAlreadyExists) {
            alert('Project name already exists!')
            return false
        }

        return true
    }

    const _validateTaskForm = () => {
        const titleInput = document.getElementById("taskTitle");
        const dueDateInput = document.getElementById("dueDate");

        const taskArray = taskModule.getTaskArray()
        const checkIfTaskNameAlreadyExists = _checkIfValueAlreadyExists(taskArray, titleInput.value)
        console.log(checkIfTaskNameAlreadyExists)
    
        if (titleInput.value === '') {
            alert('Please enter a name.')
            return false
        } else if (dueDateInput.value === '') {
            alert('Please enter a due date.')
            return false;
        } else if (checkIfTaskNameAlreadyExists) {
            alert('Task name already exists!')
            return false
        } else {
            return true
        }

    }


    const _createProjectSubmitHandler = (projectForm) => {
        projectForm.addEventListener('submit', (e) => {
            if (!_validateProjectForm()) {
                e.preventDefault()
                return
            } else {
                _submitProjectData()
                elementCreationOnLoadModule.refreshProjectButtonsDiv();
            }
        })
    }

    const _createTaskPopupSubmitHandler = (taskForm, handlerFunction) => {
        taskForm.addEventListener('submit', (e) => {
            if (!_validateTaskForm()) {
                e.preventDefault();
                return
            } else {
                handlerFunction
            }
        })
    }

    const _contentResetter = (content) => {
        if (content) {
            content.innerHTML = ''
        }
    }

    const _getValueFromInput = (formId, inputName) => {
        const formToGetInputFrom = document.getElementById(formId);
        const inputToGetValueFrom = formToGetInputFrom.querySelector(`[name="${inputName}"]`);
        const inputValue = inputToGetValueFrom.value;
        
        return inputValue;
    }
        
    const _newProjectPopup = () => {

        elementFactory.modalInit();

        const projectForm = elementFactory.formFactory.cloneNode();
        const titleInput = elementFactory.inputFactory('text', 'Name', 'projectTitle', '')
        const projectSubmitButton = elementFactory.createSubmitInput()

        const modalContent = document.getElementById('modal-content');

        _contentResetter(modalContent)

        projectForm.id = 'projectForm'
        projectForm.for = 'project'

        _createProjectSubmitHandler(projectForm)
        elementFactory.appendChildrenToParentElement(projectForm, [titleInput, projectSubmitButton])
        modalContent.appendChild(projectForm);
    }

    const _submitProjectData = () => {
        const titleFromProjectForm = _getValueFromInput('projectForm', 'projectTitle');

        const newProject = projectModule.projectFactory(titleFromProjectForm);
        projectModule.createNewProject(newProject);
    
        elementFactory.deleteModal()
        }

    const _taskPopupFormGenerator = (defaultTitleValue, defaultDueDateValue, defaultPriorityValue, defaultProjectValue) => {

        elementFactory.modalInit();
        _contentResetter(modalContent)

        const projectArray = projectModule.getProjectArray();
        const projectTitles = projectArray.map((projectTitleValues) => projectTitleValues.title)
        const taskForm = elementFactory.formFactory.cloneNode();
        const taskTitleInput = elementFactory.inputFactory('text', 'Title', 'taskTitle', defaultTitleValue);
        const taskDueDateInput = elementFactory.inputFactory('date', 'Deadline', 'dueDate', defaultDueDateValue);
        const taskPriorityInput = elementFactory.selectionFactory('Priority', defaultPriorityValue, 'Low', 'Medium', 'High');
        const inWhichProjectInput = elementFactory.selectionFactory('Project', defaultProjectValue, ...projectTitles)
        const taskSubmitButton = elementFactory.createSubmitInput();

        taskForm.for = 'task'
        taskForm.id = 'taskform'

        elementFactory.appendChildrenToParentElement(taskForm, [taskTitleInput, taskDueDateInput, taskPriorityInput, inWhichProjectInput, taskSubmitButton])

        return taskForm
    }

    const _newTaskPopup = () => {
        const taskForm = _taskPopupFormGenerator('', '', 'Low', 'None')
        const modalContent = document.getElementById('modal-content');

        _createTaskPopupSubmitHandler(taskForm, _insertNewTask);

        modalContent.appendChild(taskForm);
    }

    const _editTaskPopup = (object, oldTaskIndex) => {
        const taskForm = _taskPopupFormGenerator(object.title, object.dueDate, object.priority, object.project)
        const modalContent = document.getElementById('modal-content');
        _createTaskPopupSubmitHandler(taskForm, _insertEditedTask, oldTaskIndex);
        modalContent.appendChild(taskForm);
    }


    const _convertDateValueToActualDate = (originalDateString) => {
        const dateStringWithoutNonNumeric = originalDateString.replace(/\D/g, '');
        const year = dateStringWithoutNonNumeric.substring(0, 4);
        const month = (parseInt(dateStringWithoutNonNumeric.substring(4, 6)) - 1).toString()
        const day = ((parseInt(dateStringWithoutNonNumeric.substring(6, 8))) + 1).toString();
        const dateInCorrectForm = formatISO(new Date(year, month, day), { representation: 'date' })

        return dateInCorrectForm
    }

    const _submitTaskData = () => {
        const titleFromTaskForm = _getValueFromInput ('taskform', 'taskTitle')
        const dueDatefromTaskForm = _getValueFromInput('taskform', 'dueDate');
        const formattedDate = _convertDateValueToActualDate(dueDatefromTaskForm);
        const taskPriorityfromTaskForm = _getValueFromInput('taskform', 'priority');
        const projectFromTaskForm = _getValueFromInput('taskform', 'project');

        const newTask = taskModule.taskFactory(titleFromTaskForm, formattedDate, taskPriorityfromTaskForm, projectFromTaskForm)

        return newTask
    }

    const _insertNewTask = () => {
        const newTask = _submitTaskData()
        taskModule.createNewTask(newTask)
        elementFactory.deleteModal()
        _updateTaskList();
    }

    const _insertEditedTask = (oldTaskIndex) => {
        const editedTask = _submitTaskData()
        taskModule.insertEditedTask(oldTaskIndex, editedTask)
        elementFactory.deleteModal()
        _updateTaskList();
    }

    const _createIsAccopmplishedCheckbox = (task) => {
        const checkboxCell = elementFactory.div.cloneNode();
        const checkbox = elementFactory.inputFactory('checkbox', 'isAccomplished', 'taskIsAccomplished', false)
        checkbox.checked = task.isAccomplished;
        const checkboxLabel = checkbox.querySelector('label')
        const checkboxInput = checkbox.querySelector('input')
        checkboxInput.id = `${task.title}` + `isAccomplished`
        checkboxLabel.htmlFor = `${task.title}` + `isAccomplished`


        checkbox.addEventListener('change', (event) => {
            task.isAccomplished = event.target.checked;
            taskModule.refreshTaskArray();
          });

        checkboxCell.appendChild(checkbox);

        return checkboxCell
    }

    const _createTaskObjectPropertyValueDiv = (property, value) => {
        const valueDiv = elementFactory.div.cloneNode();
        
        valueDiv.classList.add = ('task' + property);
        valueDiv.textContent = value

        return valueDiv
    }

    const _deleteTaskClickHandler = (index) => {
        taskModule.deleteTask(index);
        _updateTaskList();
    }


    const _createTaskDiv = (task, index) => {
        const keysArray = Object.keys(task);
        const valuesArray = Object.values(task);
        const taskDiv = elementFactory.div.cloneNode();
        
        for (let i = 0; i < keysArray.length; i++) {

        const taskProperty = keysArray[i]
        const taskPropertyValue = valuesArray[i]
        taskDiv.classList.add('task')

            if (i < 3|| i === 4) {
                // for first 3 properties, which are straightforward due to having a value that's a string (e.g. dueDate, title, priority) 
                const taskPropertyValueDiv = _createTaskObjectPropertyValueDiv(taskProperty, taskPropertyValue)
                taskDiv.appendChild(taskPropertyValueDiv);
              } else if (i === 3) {
                // for the checkbox, which needs a special input
                const isAccomplishedCheckbox = _createIsAccopmplishedCheckbox(task)
                taskDiv.appendChild(isAccomplishedCheckbox);
              }
        };

        const editSvg = elementFactory.createClickableSvg('edit', 'M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z', () => _editTaskPopup(task, index))
        const deleteSvg = elementFactory.createClickableSvg('delete', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z', () => _deleteTaskClickHandler(index))

        elementFactory.appendChildrenToParentElement(taskDiv, [editSvg, deleteSvg])

        return taskDiv
    }

    const _activeIdRemover = () => {
        const elements = document.querySelectorAll('.active');
        elements.forEach(function(element) {
            element.classList.remove('active');
        })
    }

    const _addActiveClassToClickedButton = (buttonId) => {
        const clickedButton = document.getElementById(buttonId)
        _activeIdRemover();
        clickedButton.classList.add('active')
    }

    const createTaskListHeaderItem = (textContent, itemId) => {
        const itemDiv = elementFactory.div.cloneNode()
        itemDiv.textContent = textContent
        itemDiv.id = itemId

        return itemDiv
    }

    const _createTaskListHeader = () => {
        const taskListHeaderDiv = elementFactory.div.cloneNode();

        const taskListHeaderItemObjectArray = [
            { textContent: 'Name' , itemId: 'task-list-header-name'},
            { textContent: 'Date Due', itemId: 'task-list-header-due-date'},
            { textContent: 'Priority', itemId: 'task-list-header-priority'},
            { textContent: 'Finished?', itemId: 'task-list-header-accomplished'},
            { textContent: 'Project', itemId: 'task-list-header-project'},
        ]

        taskListHeaderItemObjectArray.forEach((object) => {
            const headerItemDiv = createTaskListHeaderItem(object.textContent, object.itemId)
            taskListHeaderDiv.appendChild(headerItemDiv)
        })

        return taskListHeaderDiv
    }


    const _createTaskList = (array) => {
        const tasksContainerDiv = document.getElementById('tasks-container')
        const taskListHeader = _createTaskListHeader()
        
        taskListHeader.id = 'task-list-header'

        if (array == null ) {
            return
        }
        tasksContainerDiv.innerHTML = ''
        tasksContainerDiv.appendChild(taskListHeader)
        for (let i = 0; i < array.length; i++) {
            const currentObject = array[i];

            const newTask = _createTaskDiv(currentObject, i);
            tasksContainerDiv.appendChild(newTask);
        }
    }

    const generateTaskListOnClick = (buttonId, array) => {
        _addActiveClassToClickedButton(buttonId)
        _createTaskList(array)
    }

    const _executeButtonClickHandler = (button) => {
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
        button.dispatchEvent(clickEvent)
    }

    const _updateTaskList = () => {
        const activeButton = document.querySelector('.active')
        _executeButtonClickHandler(activeButton)
    }

    const taskListInit = () => {
        const taskArray = taskModule.getTaskArray();
        const inboxButton = document.querySelector('#inbox');
        _activeIdRemover();
        _createTaskList(taskArray);
        inboxButton.classList.add('active');
    }

    return {
        newItemPopup,
        generateTaskListOnClick,
        taskListInit
    }

})();

const init = () => {
    taskModule.taskArrayInit();
    projectModule.projectArrayInit();

    elementCreationOnLoadModule.loadWebpage();
    afterLoadDOMManipulationModule.taskListInit();
}

export default init