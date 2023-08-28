import { ToDo } from "../models/todo";

/**
 * 
 * @param {ToDo} todo 
 */
export const createTodoHTML = (todo) => {
    if(!todo) throw new Error('A TODO object is required');

    const {id, done, description} = todo;

    const todoHTML = `<div class="view">
                        <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
                        <label>${ description }</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">`;
    const liElement = document.createElement('li');
    liElement.innerHTML = todoHTML;

    liElement.setAttribute('data-id', id);
    if(todo.done)
        liElement.classList.add('completed');

    return liElement;
}