import projectModule from './project'
import taskModule from './task'
import toDate from 'date-fns/toDate'

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

    const selectionFactory = (selectionName, ...options) => {
        const newSelection = selection.cloneNode();
        const selectionLabel = label.cloneNode();
        const selectionDiv = div.cloneNode();

        newSelection.id = selectionName.toLowerCase();
        selectionLabel.for = newSelection.id;
        selectionLabel.textContent = selectionName;
        newSelection.name = selectionName.toLowerCase();

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
        inputBox.classList.add = inputName;
        inputBoxLabel.for = inputLabel.toLowerCase();
        if (inputType !== 'checkbox') {
            inputBoxLabel.textContent = inputLabel;
        } 
        inputBox.name = inputName;
        inputBox.value = inputValue;
        inputBoxLabel.for = inputName

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
    
        svg.appendChild(titleElement);
        svg.appendChild(pathElement);
        svgDiv.appendChild(svg)
    
        return svgDiv;
    }

    const createClickableSvg = (svgTitle, svgPath, clickHandler) => {
        const svg =  _svgFactory(svgTitle, svgPath)
        _createElementClickHandler(svg, clickHandler)
        
        return svg
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
        itemWithClassDeleter,
        selectionFactory,
        formFactory,
        createClickableSvg
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
        
        const taskArrayDueToday = taskModule.taskArrayFilterDueDateToday();
        const taskArrayFilterDueThisWeek = taskModule.taskArrayFilterDueThisWeek();

        const inboxButton = elementFactory.buttonFactory('inbox-button', "Inbox", () => afterLoadDOMManipulationModule.createTaskList(taskArray))
        const dueTodayButton = elementFactory.buttonFactory('due-today-button', "Due Today", () => afterLoadDOMManipulationModule.createTaskList(taskArrayDueToday))
        const dueThisWeekButton = elementFactory.buttonFactory('due-this-week-button', "Due This Week", () => afterLoadDOMManipulationModule.createTaskList(taskArrayFilterDueThisWeek))
        defaultNavh2.textContent = "Home"
        defaultButtonsDiv.classList.add('default-buttons-div')
        
        defaultButtonsDiv.appendChild(defaultNavh2)
        defaultButtonsDiv.appendChild(inboxButton)
        defaultButtonsDiv.appendChild(dueTodayButton)
        defaultButtonsDiv.appendChild(dueThisWeekButton)

        return defaultButtonsDiv
    }

    const _createProjectButton = (projectObject) => {
        const projectButton = elementFactory.buttonFactory('project', `${projectObject.title}`, () => afterLoadDOMManipulationModule.createTaskList(taskModule.taskArrayFilterForProject(projectObject.title)))
        const deleteProjectSvg = elementFactory.createClickableSvg('delete', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z', () => projectModule.deleteObject(projectObject))
        const projectButtonAndDeleteButtonDiv = elementFactory.div.cloneNode();

        projectButtonAndDeleteButtonDiv.classList.add('project-and-delete-button-div')

        projectButtonAndDeleteButtonDiv.appendChild(projectButton);
        projectButtonAndDeleteButtonDiv.appendChild(deleteProjectSvg);

        return projectButtonAndDeleteButtonDiv
    }

    const _createProjectButtonsDiv = () => {
        const projectButtonsDiv = elementFactory.div.cloneNode();
        const projectsNavh2 = elementFactory.h2.cloneNode();
        const projectArray = projectModule.getProjectArray();

        projectButtonsDiv.classList.add('project-buttons')
        projectsNavh2.textContent = "Projects"

        projectButtonsDiv.appendChild(projectsNavh2)

        projectArray.forEach((object) => {
            if (object.title !== 'None') {
                const projectButton = _createProjectButton(object)
                projectButtonsDiv.appendChild(projectButton);
            }
        })

        return projectButtonsDiv
    }

    const projectButtonsDivFunctionGetter = () => {
       const projectButtonsDiv =  _createProjectButtonsDiv()
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
        projectButtonsDivFunctionGetter,
        loadWebpage
    }
})();

const afterLoadDOMManipulationModule = (() => {

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

    const _getValueFromInput = (formId, inputName) => {
        const formToGetInputFrom = document.getElementById(formId);
        const inputToGetValueFrom = formToGetInputFrom.querySelector(`[name="${inputName}"]`);
        const inputValue = inputToGetValueFrom.value;
        
        return inputValue;
    }
        
    const _newProjectPopup = () => {

        elementFactory.modalInit();

        const projectForm = elementFactory.formFactory.cloneNode();
        const titleInput = elementFactory.inputFactory('text', 'Name', 'projectname', 'projectname')
        const projectSubmitButton = elementFactory.buttonFactory("submitProjectForm", 'Submit', _submitProjectData);

        const modalContent = document.getElementById('modalcontent');

        if (modalContent) {
            modalContent.innerHTML = '';
          } 

        projectForm.id = 'projectform'
        projectForm.for = 'Task'

        projectForm.appendChild(titleInput);
        projectForm.appendChild(projectSubmitButton);
        modalContent.appendChild(projectForm)
    }

    const _submitProjectData = () => {
        const titleFromProjectForm = _getValueFromInput('projectform', 'projectname');

        const newProject = projectModule.projectFactory(titleFromProjectForm);
        projectModule.createNewProject(newProject);
    }

    const updateProjectButtons = () => {
        const projectButtonsDiv = document.querySelector('.project-buttons')
        const homeNavDiv = document.querySelector('.homeNav')
        projectButtonsDiv.remove()

        const updatedProjectButtonsDiv = elementCreationOnLoadModule.projectButtonsDivFunctionGetter()

        homeNavDiv.appendChild(updatedProjectButtonsDiv)
    }

    const _newTaskPopup = () => {

        elementFactory.modalInit();

        const projectArray = projectModule.getProjectArray();
        const projectTitles = projectArray.map((projectTitleValues) => projectTitleValues.title)
        const taskForm = elementFactory.formFactory.cloneNode();
        const taskTitleInput = elementFactory.inputFactory('text', 'Title', 'taskTitle', 'taskTitle');
        const taskDueDateInput = elementFactory.inputFactory('date', 'Deadline', 'dueDate', 'dueDate');
        const taskPriorityInput = elementFactory.selectionFactory('Priority', 'Low', 'Medium', 'High');
        const inWhichProjectInput = elementFactory.selectionFactory('Project', ...projectTitles)
        const taskSubmitButton = elementFactory.buttonFactory("submitTaskForm", 'Submit', _submitTaskData);
        const modalContent = document.getElementById('modalcontent');

        taskForm.for = 'Task'

        if (modalContent) {
            modalContent.innerHTML = '';
          } 
        taskForm.id = 'taskform'

        taskForm.appendChild(taskTitleInput);
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
        const day = ((parseInt(dateStringWithoutNonNumeric.substring(6, 8))) + 1).toString();
        const dateInCorrectForm = toDate(new Date(year, month, day))

        return dateInCorrectForm
    }


    const _submitTaskData = () => {
        const titleFromTaskForm = _getValueFromInput ('taskform', 'taskTitle')
        const dueDatefromTaskForm = _getValueFromInput('taskform', 'dueDate');
        const formattedDate = _convertDateValueToActualDate(dueDatefromTaskForm);
        const taskPriorityfromTaskForm = _getValueFromInput('taskform', 'priority');
        const inProjectFromTaskForm = _getValueFromInput('taskform', 'project');

        const newTask = taskModule.taskFactory(titleFromTaskForm, formattedDate, taskPriorityfromTaskForm, inProjectFromTaskForm)
        taskModule.createNewTask(newTask)
    }

    const _createIsAccopmplishedCheckbox = (task) => {
        const checkboxCell = elementFactory.div.cloneNode();
        const checkbox = elementFactory.inputFactory('checkbox', 'isAccomplished', 'taskIsAccomplished', false)
        checkbox.checked = task.isAccomplished;

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


    const _createTaskDiv = (task, index) => {
        const keysArray = Object.keys(task);
        const valuesArray = Object.values(task);
        const taskDiv = elementFactory.div.cloneNode();
        
        for (let i = 0; i < keysArray.length; i++) {

        const taskProperty = keysArray[i]
        const taskPropertyValue = valuesArray[i]
        taskDiv.classList.add('task')

            if (i === 0 || i === 2|| i === 4) {
                // for first 3 properties, which are straightforward due to having a value that's a string (e.g. dueDate, title, priority) 
                const taskPropertyValueDiv = _createTaskObjectPropertyValueDiv(taskProperty, taskPropertyValue)
                taskDiv.appendChild(taskPropertyValueDiv);
              } else if (i === 3) {
                // for the checkbox, which needs a special input
                const isAccomplishedCheckbox = _createIsAccopmplishedCheckbox(task)
                taskDiv.appendChild(isAccomplishedCheckbox);
              } else if (i === 1) {
                const taskPropertyValueDiv = _createTaskObjectPropertyValueDiv(taskProperty, taskPropertyValue.slice(0, 10))
                taskDiv.appendChild(taskPropertyValueDiv);
              }
        };

        const editSvg = elementFactory.createClickableSvg('edit', 'M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z')
        const deleteSvg = elementFactory.createClickableSvg('delete', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z', () => taskModule.deleteTask(index))

        taskDiv.appendChild(editSvg)
        taskDiv.appendChild(deleteSvg)

        return taskDiv
    }


    const createTaskList = (array) => {
        const tasksContainerDiv = document.getElementById('tasks-container')

        if (array == null ) {
            return
        }
        tasksContainerDiv.innerHTML = ''
        for (let i = 0; i < array.length; i++) {
            const currentObject = array[i];

            const newTask = _createTaskDiv(currentObject, i);
            tasksContainerDiv.appendChild(newTask);
        }
    }

    const taskListInit = () => {
        const taskArray = taskModule.getTaskArray()
        createTaskList(taskArray)
    }

    return {
        newItemPopup,
        createTaskList,
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