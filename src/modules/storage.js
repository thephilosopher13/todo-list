const storageModule = (() => {
  const saveArray = (array, data) => {
    localStorage.setItem(array, JSON.stringify(data));
  };

  const getStoredTaskArray = () => {
    const storedTaskArray = JSON.parse(localStorage.getItem('taskArray'));

    return storedTaskArray;
  };

  const getStoredProjectArray = () => {
    const storedProjectArray = JSON.parse(localStorage.getItem('projectArray'));

    return storedProjectArray;
  };

  return {
    saveArray,
    getStoredTaskArray,
    getStoredProjectArray,
  };
})();

export default storageModule;
