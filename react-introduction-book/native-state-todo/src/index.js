class TodoListModel {
    constructor() {
        this.idCounter = 0;
        this.todos = new Map();
    }

    /**
     * taskをtodoとしてtodoListに追加する
     * @param {string} task
     * @returns 追加されたtodoのid
     */
    addTodo(task) {
        this.idCounter += 1;
        this.todos.set(this.idCounter, {
            id: this.idCounter,
            task,
            checked: false,
        });
        return this.idCounter;
    }

    /**
     * todosを全件取得
     * @returns TODOs
     */
    getTodos() {
        return Array.from(this.todos.values());
    }

    /**
     * 指定したidのTODOを取得
     * @param {number} id TODOのid 
     * @returns Todo
     */
    getTodo(id) {
        return this.todos.get(id);
    }

    /**
     * 指定idのTODOの削除
     * @param {number} id TODOのid 
     */
    removeTodo(id) {
        this.todos.delete(id);
    }

    /**
     * TODOの完了状態を変更する
     * @param {number} id TODOのid 
     * @param {boolean} isCheck 次のcheck状態 
     * @returns 更新済みTODO
     */
    checkTodo(id, isCheck) {
        const todo = this.todos.get(id);
        todo.checked = isCheck;
        return todo;
    }
}

class View {
    /**
     * TODOの配列からUIを生成する関数
     * @param {Todo[]} todos
     */
    render(todos) {
        const todosEl = document.getElementById("todos");
        todosEl.innerHTML = "";
        const fragment = document.createDocumentFragment();
        todos.forEach((todo) => {
            const todoEl = this._createTodoElement(todo);
            fragment.appendChild(todoEl);
        });
        todosEl.appendChild(fragment);
    }

    /**
     * TODOをUIに追加する
     * @param {id: number, task: string, isCheck: boolean} todo
     */
    addTodo(todo) {
        const todosEl = document.getElementById("todos");
        const todoEl = this._createTodoElement(todo);
        todosEl.appendChild(todoEl);
    }

    check(id) {
        const todoEl = document.getElementById(`todo-${id}`);
        todoEl.className = `checked`;
    }

    uncheck(id) {
        const todoEl = document.getElementById(`todo-${id}`);
        todosEl.className = "";
    }

    removeTodo(id) {
        const todoEl = document.getElementById(`todo-${id}`);
        todoEl.remove();
    }

    resetTodo() {
        const input = document.getElementById("task-input");
        input.value = ""; // inputのリセット
    }

    /**
     * TODO要素を作る
     * @param {id: number, task: string} todo
     * @returns todoのHTML要素
     */
    _createTodoElement(todo) {
        const { id, task, checked } = todo;
        
        const todoEl = document.createElement("li");
        todoEl.id = `todo-${id}`;

        const checkBoxEl = document.createElement("input");
        checkBoxEl.type = "checkbox";
        checkBoxEl.id = `checkbox-${todo.id}`;
        checkBoxEl.checked = checked;
        todoEl.appendChild(checkBoxEl);

        const labelEl = document.createElement("label");
        labelEl.innerText = task;
        todoEl.appendChild(labelEl);

        if (checked) {
            todoEl.className = `checked`;
        } else {
            todoEl.className = "";
        }

        const buttonEl = document.createElement("button");
        buttonEl.innerText = "削除";
        buttonEl.id = `button-${id}`;
        todoEl.appendChild(buttonEl);

        return todoEl;
    }
}

// modelのインスタンスを生成
const todoList = new TodoListModel();

// viewのインスタンスを生成
const view = new View();

class Controller {
    setup() {
        this.handleSubmitForm();
    }

    flash() {
        const todos = todoList.getTodos();
        view.render(todos);

        // イベントハンドラの付け直し
        todos.forEach((todo) => {
            const id = todo.id;
            this.handleCheckTask(id);
            this.handleClickDeleteTask(id);
        })
    }

    /**
     * タスク送信時にTODO追加とUI反映をする
     */
    handleSubmitForm() {
        const formEl = document.getElementById("task-send-form");
        formEl.addEventListener("submit", (ev) => {
            ev.preventDefault();

            const input = document.getElementById("task-input");
            const task = input.value;
            if (!task.length > 0) {
                alert("テキストを入力してください。");
                return;
            }

            // modelにTodoを追加
            const addedTodoId = todoList.addTodo(task);

            // UIに反映（同期）
            this.flash();
        });
    }

    /**
     * 指定したcheckboxの状態変化に応じてTODO更新とUI反映をする
     * @param {number} id TODOのid
     */
    handleCheckTask(id) {
        const checkBoxEl = document.getElementById(`checkbox-${id}`);
        checkBoxEl.onchange = function (e) {
            const checked = e.target.checked;
            todoList.checkTodo(id, checked);
            // UIに反映（同期）
            this.flash();
        };
    }

    /**
     * 指定したTODO削除とUI反映をする
     * @param {*} id TODOのid
     */
    handleClickDeleteTask(id) {
        todoList.removeTodo(id);
        const buttonEl = document.getElementById(`button-${id}`);
        buttonEl.onclick = function () {
            view.removeTodo(id);
            // UIに反映（同期）
            this.flash();
        };
    }
}

const formController = new Controller();
formController.setup();
