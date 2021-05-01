import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 113464613,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 235684679,
                text: "Pay Water Bills",
                complete: false
            }
        ];
    }

    createTodo(text) {
        console.log("テキストの確認");
        console.log(text);
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit("change");
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log("IDの確認");
        console.log(id);
        this.emit("change");
    }

    receiveTodos(todos) {
        this.todos = todos;
        this.emit("change")
    }

    getAll() {
        return this.todos;
    }

    handleAction(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            // case "RECEIVE_TODOS": {
            //     this.receiveTodos(action.todos);
            // }
            case "DELETE_TODO": {
                this.deleteTodo(action.id);
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));

window.dispatcher = dispatcher;
export default todoStore;
