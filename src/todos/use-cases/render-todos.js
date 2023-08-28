import { ToDo } from "../models/todo";
import { createTodoHTML } from "./create-todo-html";

let container;

/**
 * 
 * @param {String} containerId 
 * @param {ToDo[]} todos 
 */
export const renderTodos = (containerId, todos = []) => {

    if(!container)
        container = document.querySelector(containerId);

    if(!container) throw new Error(`Element ${ containerId } not found`)

    container.innerHTML = '';
    todos.forEach( todo => {
        container.append(createTodoHTML(todo));
    });
};