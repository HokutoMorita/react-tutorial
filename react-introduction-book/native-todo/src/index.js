/**
 * formの送信時に実行する関数
 * input formの入力内容を取得してそれをTODOリストに加える
 */
function handleFormSubmit() {
    // 入力内容の取得
    const inputEl = document.getElementById("task-input");
    const inputValue = inputEl.value;

    // 入力値チェック
    if (!inputValue.length > 0) {
        alert("テキストを入力してください。");
        return;
    }

    // Todoの追加対象を取得する
    const todosEl = document.getElementById("todos");

    // TODO要素を作る（チェックボックス・ラベル・削除ボタンのセット）
    const todoEl = createTodoElement(inputValue);

    // TODOの表示エリアにTODOを追加
    todosEl.appendChild(todoEl);

    // inputのリセット
    inputEl.value = "";
}

/**
 * TODO要素を作る関数
 * @param {*} inputValue TODO文字列
 * @returns TODO要素
 */
function createTodoElement(task) {
    // TODO要素を作る
    const todoEl = document.createElement("li");

    // checkbox要素を作る
    const checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    checkBoxEl.onchange = function (e) {
        const checked = e.target.checked;
        if (checked) {
            todoEl.className = `checked`;
        } else {
            todoEl.className = "";
        }
    };

    // label要素を作る
    const labelEl = document.createElement("label");
    labelEl.innerText = task;

    // ボタン要素を作る
    const buttonEl = document.createElement("button");
    buttonEl.innerText = "削除";
    buttonEl.onclick = function () {
        todoEl.remove();
    };

    // checkbox, label, buttonをTODO要素にセットする
    todoEl.appendChild(checkBoxEl);
    todoEl.appendChild(labelEl);
    todoEl.appendChild(buttonEl);

    return todoEl;
}
