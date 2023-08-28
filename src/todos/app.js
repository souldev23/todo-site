import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import {Filter} from "../store/todo.store";
import { renderTodos } from "./use-cases";

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayToDos = () => {
        const todos = todoStore.getToDos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
    }
    // Cuando la funcion App() se llama
    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(`#${elementId}`).append( app );
        displayToDos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);    
    const todoListUL = document.querySelector(ElementIds.TodoList);
    const clearButton = document.querySelector(ElementIds.ClearCompleted);
    const filtersLI = document.querySelectorAll(ElementIds.TodoFilters);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addToDo(event.target.value);
        displayToDos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {        
        const element = event.target.closest('[data-id]');
        if(event.target.className == 'destroy')
            todoStore.deleteToDo(element.getAttribute('data-id'))
        else
            todoStore.toggleToDo(element.getAttribute('data-id'));
        displayToDos();
    });

    clearButton.addEventListener('click', () => {
        todoStore.deleteToDoCompleted();
        displayToDos();
    });

    filtersLI.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLI.forEach(el => { el.classList.remove('selected') });
            element.target.classList.add('selected');
            
            switch(element.target.getAttribute('href')){
                case '#/completed':
                    todoStore.setFilter(Filter.Done);
                    break;
                case '#/active':
                    todoStore.setFilter(Filter.Pending);
                    break;
                default:
                    todoStore.setFilter(Filter.all);
            }
            displayToDos();
        });
    });
};
