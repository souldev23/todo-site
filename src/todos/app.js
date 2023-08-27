import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import {Filter} from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ContainerIds = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayToDos = () => {
        const todos = todoStore.getToDos(todoStore.getCurrentFilter());
        renderTodos(ContainerIds.TodoList, todos);
    }
    // Cuando la funcion App() se llama
    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(`#${elementId}`).append( app );
        displayToDos();
    })();
};