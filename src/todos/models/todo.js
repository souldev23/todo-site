import { v4 as uuid } from 'uuid';
export class ToDo{

    /**
     * 
     * @param {String} description 
     */
    constructor(description){
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}