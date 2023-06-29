import projectModule from "./project"


/* 

TASK MODULE

2. have two "filter" functions that filter for the ff. values in "duedate":
2.1. "due tomorrow"
2.2. "due this week"
3. another "filter" function that searches for completed tasks
4. another "filter function that searches for the inProject item and looks for all items in a certain project
5. editTask function
6. deleteTask function (put an are you sure popup to this)
7. getTaskDetails function  that does the ff:
7.1. "get" the task details from the object in the array
7.2. displays them in a popUp div
8. an addEventListener that does the ff. on 'click':
8.1. "get" details from form
8.2. turn them into an object and push into toDoListArray

*/

const taskModule = (() => {
    const _taskArray = []

    const taskFactory = (title, dueDate, priority, inProject) => {

        let isAccomplished = false;

        const deleteTask = () => {
            const index = _taskArray.indexOf(this);
            if (index !== -1) {
                _taskArray.splice(index, 1);
                console.log(_taskArray)
            }
        }
        
        const projectArray = projectModule.getProjectArray;

        const linkTaskToProject = () => {
            const matchingProject = projectArray.find(project => project.title === inProject);
            if (matchingProject) {
              if (!matchingProject.task) {
                matchingProject.task = [];
              }
              matchingProject.task.push(task);
            }
          };


        return { title, dueDate, priority, isAccomplished, inProject }
    }

    const getTaskArray = () => {
      return _taskArray
    }

    const taskArrayFilter = (property, desiredPropertyValue) => {
      const filteredArray = _taskArray.filter((item) => item[property] === desiredPropertyValue);
      return filteredArray
    }
    
    return {
      taskFactory,
      getTaskArray,
      taskArrayFilter
    }
})();

export default taskModule