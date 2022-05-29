const inputText = document.getElementById('input-text');
const toDoList = document.getElementById('to-do-list');
const inputEdit = document.getElementById('input-edit');

function addList() {
    const list =
        `<li class="list-group-item text-capitalize todolist">
            <input type="checkbox" class="form-check-input me-3" onclick="boxToggle(this)">
            <span class="listText">${inputText.value}</span>
            <i class="far fa-trash-alt float-end text-danger" onclick="removeList(this)"></i>
            <i class="fas fa-edit float-end text-secondary me-4" data-bs-toggle="modal" data-bs-target="#myModal"></i>
        </li>`;

    toDoList.insertAdjacentHTML('beforeend', list);
    inputText.value = "";
}

function boxToggle(box) {
    box.parentElement.classList.toggle('text-decoration-line-through');
    box.parentElement.classList.toggle('text-bg-light');
}

function removeList(removeBtn) {
    removeBtn.parentElement.remove();
}

document.getElementById('edit').addEventListener('click', function () {
    document.querySelector('.listText').innerText = inputEdit.value;
    inputEdit.value = "";
});


function addListKey(event) {
    if (event.key == "Enter") {
        addList();
    }
}