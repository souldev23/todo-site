import { ToDo as td } from "../todos/models/todo";

export const Filter = {
    all: 'all',
    Done: 'Done',
    Pending: 'Pending'
};

const state = {
    todos: [
        new td('Piedra del alma'),
        new td('Piedra de la mente'),
        new td('Piedra del poder'),
        new td('Piedra del tiempo')
    ],
    filter: Filter.all
}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getToDos = (filter = Filter.all) => {
    switch(filter){
        case Filter.Done:
            return state.todos.filter( td => td.done);
        case Filter.Pending:
            return state.todos.filter( td => !td.done);
        default:
            return [...state.todos];
    }
}

/**
 * 
 * @param {String} description 
 */
const addToDo = (description) => {
    if (!description) throw new Error('Description is required');

    state.todos.push( new td(description));
}

const toggleToDo = (todoId) => {
    
    state.todos = state.todos.map( td => {
        if(td.id === todoId){
            td.done = !td.done;
        }
        return td;
    });
}

const deleteToDo = (todoId) => {
    state.todos = state.todos.filter( td => td.id !== todoId);
}

const deleteToDoCompleted = () => {
    state.todos = state.todos.filter( td => td.done);
}

/**
 * 
 * @param {Filter} newFilter 
 */
const setFilter = (newFilter = Filter.all) => {
    state.filter = newFilter;    
} 

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    toggleToDo,
    deleteToDo,
    deleteToDoCompleted,
    setFilter,
    getCurrentFilter,
    getToDos,
    addToDo
}