import './style.css'
import {App} from './src/todos/app';
import tdStore from "./src/store/todo.store";

tdStore.initStore();
App('app')