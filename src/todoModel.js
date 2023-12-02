export class Todo {
    //add localstorage
    static nextId = 0;

    title = '';
    status = ''
    constructor({ title, status }) {
        this.id = Todo.nextId++;
        this.title = title;
        this.status = status;
    }

    createLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this));
    }


    loadLocalStorage() {
        const todo = JSON.parse(localStorage.getItem('todo'));
        if (todo) {
            this.id = todo.id;
            this.title = todo.title;
            this.status = todo.status;
        } else {
            this.createLocalStorage();
        }
        return this;

    }
    addLocalStorage(data) {
        let todo = JSON.parse(localStorage.getItem('todo'));
        new Todo(data);
        if (todo) {
            todo.push(data);
        } else {
            this.createLocalStorage();
            localStorage.setItem('todo', JSON.stringify(this));
        }




        localStorage.setItem('todo', JSON.stringify(this));
    }

    //create a new todo localstorage
    create(title, status) {
        return new Todo(title, status);
    }

    //update todo localstorage
    update(id, title, status) {
        // TODO: Implement update logic
    }






}