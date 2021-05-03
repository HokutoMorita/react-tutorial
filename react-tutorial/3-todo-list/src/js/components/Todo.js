import React from "react";
import ReactDOM from "react-dom";

import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
    constructor(props) {
        super();
    }
    deleteTodo() {
        TodoActions.deleteTodo(this.props.id);
    }

    render() {
        const { complete, edit, text } = this.props;
        const icon = complete ? "\u2714" : "\u2716";

        if (edit) {
            return (
                <li>
                    <input value={text} focus="focused" />
                </li>
            );
        }

        return (
            <li>
                <span>{text}</span>
                <span>{icon}</span>
                <button onClick={this.deleteTodo.bind(this)}>Delete!</button>
            </li>
        );
    }
}
