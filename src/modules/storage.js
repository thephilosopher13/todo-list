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

    const saveArray = (array, data) => {
        localStorage.setItem(array, JSON.stringify(data))
    }

    const getStoredTaskArray = () => {
        const storedTaskArray = JSON.parse(localStorage.getItem('taskArray'));

        return storedTaskArray
    }

    const getStoredProjectArray = () => {
        const storedProjectArray = JSON.parse(localStorage.getItem('projectArray'));

        return storedProjectArray
    }

    return {
        saveArray,
        getStoredTaskArray,
        getStoredProjectArray
    }

})();

export default storageModule