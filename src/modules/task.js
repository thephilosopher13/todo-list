import projectModule from "./project"
import storageModule from './storage'
import compareAsc from 'date-fns/compareAsc'
import add from 'date-fns/add'


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
  
    let _taskArray = [];

    const taskFactory = (title, dueDate, priority, inProject) => {

        let isAccomplished = false;

        return { title, dueDate, priority, isAccomplished, inProject }
    }

    const getTaskArray = () => {
      return _taskArray
    }

    const _setTaskArray = (newTaskArray) => {
      _taskArray = newTaskArray
    }

    const updateTaskArray = (updatedArray) => {
      _setTaskArray(updatedArray)
      storageModule.saveArray('taskArray', updatedArray)
    }

    const createNewTask = (newTask) => {
      _taskArray.push(newTask);
      storageModule.saveArray('taskArray', _taskArray)
    }

    const taskArrayInit = () => {
      const storedArray = storageModule.getStoreArray(task);

      if (localStorage.getItem('projectArray') !== null) {
        _setTaskArray(storedArray)
      } else {
        return
      }
    }

    const taskArrayFilterForProject = (desiredPropertyValue) => {
      const filteredArray = _taskArray.filter((item) => item[inProject] === desiredPropertyValue);
      return filteredArray
    }

    const taskArrayFilterDueDateToday = () => {
      const arrayWithDueDateToday = _taskArray.filter((item) => compareAsc(item[dueDate], new Date()) === 0 )
      return arrayWithDueDateToday
    }

    const taskArrayFilterDueThisWeek = () => {
      const dayToday = new Date();
      const dayOneWeekLater = add(new Date(), {
        days: 7
      })
      const arrayWithDueThisWeek = _taskArray.filter((item) => isWithinInterval(item[dueDate], {
        start: dayToday,
        end: dayOneWeekLater
      }) === true )
      return arrayWithDueThisWeek
    }
    
    return {
      taskFactory,
      getTaskArray,
      taskArrayFilter,
      createNewTask,
      taskArrayInit,
      updateTaskArray, 
      taskArrayFilterDueDateToday,
      taskArrayFilterDueThisWeek,
      taskArrayFilterForProject 
    }
})();

export default taskModule