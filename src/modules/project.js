import storageModule  from "./storage";

/*

PROJECT MODULE 
1. create a project object factory with the following properties (this one is a STRUCTURER):
1.1. title, with a value being the name of the project
1.2. item1, item2, item3 .... with the value being a to-do object
2. create an addEventListener on edit/create task that does the ff:
2.1. check the inProject input/value
2.2. searches for the project property "title" with the same value
2.3. pushes the object as the value of item 
3. deleteObject that takes the project out of the project array

*/

const projectModule = (() => {

    let _projectArray = [

        //inbox/'none' is a sort of "default" project for tasks not put in other projects
        { 
            title : 'None',
        }

    ]

    const projectFactory = (title) => {
        return { title }
    }

    const _setProjectArray = (newProjectArray) => {
        _projectArray = newProjectArray
    }

    const updateProjectArray = (updatedArray) => {
        _setProjectArray(updatedArray)
        storageModule.saveArray('projectArray', updatedArray)
    }

    const refreshProjectArray = () => {
        storageModule.saveArray('projectArray', _projectArray)
    }

    const _findObjectIndex = (array, searchObject) => {
        return array.findIndex((obj) => obj === searchObject);
      };

    const createNewProject = (newProject) => {
        _projectArray.push(newProject);
        storageModule.saveArray('projectArray', _projectArray)
    }

    const deleteObject = (object) => {
        const index = _findObjectIndex(_projectArray, object)
        const objectTitle = object.title
    
        _projectArray.splice(index, 1);
        refreshProjectArray()
    }

    const projectArrayInit = () => {
        const storedArray = storageModule.getStoredProjectArray();

        if (localStorage.getItem('projectArray') !== null) {
            _setProjectArray(storedArray)
          } else {
            return
          }
    }

    const getProjectArray = () => {
        return _projectArray
    }



    return {
        getProjectArray,
        projectFactory,
        createNewProject,
        updateProjectArray,
        deleteObject,
        projectArrayInit
    }
})();

export default projectModule