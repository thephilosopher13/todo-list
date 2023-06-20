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

    const _projectArray = [

        //inbox is a sort of "default" project for tasks not put in other projects
        { title : 'Inbox'}

    ]

    const _projectFactory = (title) => {

        let taskList = []

        return { title }
    }

    const getProjectArray = () => {
        return _projectArray
    }

    return {
        getProjectArray
    }
})();

export default projectModule