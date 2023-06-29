/*

STORAGE MODULE
1. get a function to "fetch" objects when created in the above addEvent Listeners
2. look for the data in localStorage when app is first loaded.
3. make a function that deletes items in localStorage when needed
4. get a way to hande what happens if data from localStorage does not exist

*/

import projectModule from './project'
import taskModule from './task';

const storageModule = (() => {

    const saveTaskArray = (data) => {
        localStorage.setItem('taskArray', JSON.stringify(data))
    }

    const getTaskArray = () => {
        let taskArray = taskModule.getTaskArray();
        const storedTaskArray = JSON.parse(localStorage.getItem('taskArray'));

        taskArray = storedTaskArray

        return taskArray
    }

    return {
        saveTaskArray,
        getTaskArray
    }

})();

export default storageModule