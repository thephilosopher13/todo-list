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

    const getStoredArray = (arrayType) => {
        const storedArray = JSON.parse(localStorage.getItem(`${arrayType}Array`));

        return storedArray
    }


    return {
        saveArray,
        getStoredArray
    }

})();

export default storageModule