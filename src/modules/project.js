/* eslint-disable no-underscore-dangle */
import storageModule from './storage';
import taskModule from './task';

const projectModule = (() => {
  let _projectArray = [

    {
      title: 'None',
    },

  ];

  const projectFactory = (title) => ({ title });

  const _setProjectArray = (newProjectArray) => {
    _projectArray = newProjectArray;
  };

  const updateProjectArray = (updatedArray) => {
    _setProjectArray(updatedArray);
    storageModule.saveArray('projectArray', updatedArray);
  };

  const refreshProjectArray = () => {
    storageModule.saveArray('projectArray', _projectArray);
  };

  const _findObjectIndex = (array, searchObject) => array.findIndex((obj) => obj === searchObject);

  const createNewProject = (newProject) => {
    _projectArray.push(newProject);
    storageModule.saveArray('projectArray', _projectArray);
  };

  const deleteObject = (object) => {
    const index = _findObjectIndex(_projectArray, object);
    const objectTitle = object.title;

    taskModule.replaceInProjectValues(objectTitle, 'None');
    _projectArray.splice(index, 1);

    refreshProjectArray();
  };

  const editObject = (oldObject, newObject) => {
    const oldObjectindex = _findObjectIndex(_projectArray, oldObject);
    const oldObjectTitle = oldObject.title;
    const newObjectTitle = newObject.title;

    taskModule.replaceInProjectValues(oldObjectTitle, newObjectTitle);
    _projectArray.splice(oldObjectindex, 1, newObject);

    refreshProjectArray();
  };

  const projectArrayInit = () => {
    const storedArray = storageModule.getStoredProjectArray();

    if (localStorage.getItem('projectArray') !== null) {
      _setProjectArray(storedArray);
    }
  };

  const getProjectArray = () => _projectArray;

  return {
    getProjectArray,
    projectFactory,
    createNewProject,
    updateProjectArray,
    deleteObject,
    editObject,
    projectArrayInit,
  };
})();

export default projectModule;
