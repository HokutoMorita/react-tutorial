import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    componentDidMount() {
        TodoStore.on("change", this.getTodos);
        // console.log("count", TodoStore.listenerCount("change"));
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    createTodo() {
        console.log(this.refs.newText.value);
        TodoActions.createTodo(this.refs.newText.value);
    }
    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
        });

        return (
            <div>
                <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <input type="text" ref="newText"></input>
                <input type="button" value="Add!" onClick={this.createTodo.bind(this)} />
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}
