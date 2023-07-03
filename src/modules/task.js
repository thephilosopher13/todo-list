/* eslint-disable no-underscore-dangle */
import add from 'date-fns/add';
import parseISO from 'date-fns/parseISO';
import compareAsc from 'date-fns/compareAsc';
import isWithinInterval from 'date-fns/isWithinInterval';
import storageModule from './storage';

const taskModule = (() => {
  let _taskArray = [];

  const taskFactory = (title, dueDate, priority, project) => {
    const isAccomplished = false;

    return {
      title,
      dueDate,
      priority,
      isAccomplished,
      project,
    };
  };

  const getTaskArray = () => _taskArray;

  const _setTaskArray = (newTaskArray) => {
    _taskArray = newTaskArray;
  };

  const updateTaskArray = (updatedArray) => {
    _setTaskArray(updatedArray);
    storageModule.saveArray('taskArray', updatedArray);
  };

  // bottom function like updateTaskArray but without an argument
  const refreshTaskArray = () => {
    storageModule.saveArray('taskArray', _taskArray);
  };

  const deleteTask = (index) => {
    _taskArray.splice(index, 1);
    refreshTaskArray();
  };

  const createNewTask = (newTask) => {
    _taskArray.push(newTask);
    storageModule.saveArray('taskArray', _taskArray);
  };

  const insertEditedTask = (oldTaskIndex, newTask) => {
    _taskArray.splice(oldTaskIndex, 1, newTask);
    refreshTaskArray();
  };

  const taskArrayInit = () => {
    const storedArray = storageModule.getStoredTaskArray();

    if (localStorage.getItem('taskArray') !== null) {
      _setTaskArray(storedArray);
    }
  };

  const _createUpdatedArray = (valueToReplace, changedValue) => {
    _taskArray.map((item) => {
      if (item.project === valueToReplace) {
        return { ...item, project: changedValue };
      }
      return item;
    });
  };

  const replaceInProjectValues = (valueToReplace, changedValue) => {
    const updatedArray = _createUpdatedArray(valueToReplace, changedValue);
    updateTaskArray(updatedArray);
  };

  const taskArrayFilterForProject = (desiredPropertyValue) => {
    const taskArray = getTaskArray();
    const filteredArray = taskArray.filter((item) => item.project === desiredPropertyValue);
    return filteredArray;
  };

  const taskArrayFilterDueDateToday = () => {
    const taskArray = getTaskArray();
    const arrayWithDueDateToday = taskArray.filter(
      (item) => compareAsc(parseISO(item.dueDate), new Date()) === 0,
    );
    return arrayWithDueDateToday;
  };

  const _isTaskWithinThisWeek = (task) => {
    const dayToday = new Date();
    const dayOneWeekLater = add(new Date(), {
      days: 7,
    });
    return isWithinInterval(parseISO(task.dueDate), {
      start: dayToday,
      end: dayOneWeekLater,
    });
  };
  const taskArrayFilterDueThisWeek = () => {
    const taskArray = getTaskArray();
    const arrayWithDueThisWeek = taskArray.filter((item) => _isTaskWithinThisWeek(item) === true);
    return arrayWithDueThisWeek;
  };

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
    replaceInProjectValues,
  };
})();

export default taskModule;
