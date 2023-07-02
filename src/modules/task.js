import projectModule from "./project"
import parseISO from 'date-fns/parseISO'
import storageModule from './storage'
import compareAsc from 'date-fns/compareAsc'
import add from 'date-fns/add'
import isWithinInterval from 'date-fns/isWithinInterval'


/* 

TASK MODULE

2. have two "filter" functions that filter for the ff. values in "duedate":
2.1. "due tomorrow"
2.2. "due this week"
3. another "filter" function that searches for completed tasks
4. another "filter function that searches for the project item and looks for all items in a certain project
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

    const taskFactory = (title, dueDate, priority, project) => {

        let isAccomplished = false;

        return { title, dueDate, priority, isAccomplished, project }
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

    //bottom function like updateTaskArray but without an argument
    const refreshTaskArray = () => {
      storageModule.saveArray('taskArray', _taskArray)
    }

    const deleteTask = (index) => {
      _taskArray.splice(index, 1);
      refreshTaskArray();
    }

    const createNewTask = (newTask) => {
      _taskArray.push(newTask);
      storageModule.saveArray('taskArray', _taskArray)
    }

    const insertEditedTask = (oldTaskIndex, newTask) => {
      _taskArray.splice(oldTaskIndex, 1, newTask)
      refreshTaskArray();
    }

    const taskArrayInit = () => {
      const storedArray = storageModule.getStoredTaskArray();

      if (localStorage.getItem('taskArray') !== null) {
        _setTaskArray(storedArray)
      } else {
        return
      }
    }

    const _createUpdatedArray = (valueToReplace, changedValue) => {
      return _taskArray.map((item) => {
        if (item.project === valueToReplace) {
          return {...item, project: changedValue};
        }
      return item
      })
    }

    const replaceInProjectValues = (valueToReplace, changedValue) => {
      const updatedArray = _createUpdatedArray(valueToReplace, changedValue)
      updateTaskArray(updatedArray)
      console.log(_taskArray)
    }

    const taskArrayFilterForProject = (desiredPropertyValue) => {
      const taskArray = getTaskArray()
      const filteredArray = taskArray.filter((item) => item.project === desiredPropertyValue);
      return filteredArray
    }

    const taskArrayFilterDueDateToday = () => {
      const taskArray = getTaskArray()
      const arrayWithDueDateToday = taskArray.filter((item) => compareAsc(parseISO(item.dueDate), new Date()) === 0 )
      return arrayWithDueDateToday
      
    }

    const taskArrayFilterDueThisWeek = () => {
      const dayToday = new Date();
      const dayOneWeekLater = add(new Date(), {
        days: 7
      })
      const taskArray = getTaskArray()
      const arrayWithDueThisWeek = taskArray.filter((item) => isWithinInterval(parseISO(item.dueDate), {
        start: dayToday,
        end: dayOneWeekLater
      }) === true )
      return arrayWithDueThisWeek
    }
    
    return {
      taskFactory,
      getTaskArray,
      createNewTask,
      taskArrayInit,
      updateTaskArray, 
      taskArrayFilterDueDateToday,
      taskArrayFilterDueThisWeek,
      taskArrayFilterForProject,
      refreshTaskArray,
      deleteTask,
      insertEditedTask,
      replaceInProjectValues
    }
})();

export default taskModule