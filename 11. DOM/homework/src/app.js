const rootNode = document.getElementById('root');

// Add max item per list message.
const maxItemMessage = document.createElement('div');
maxItemMessage.className = 'message';
maxItemMessage.innerHTML = 'Maximum item per list are created';
rootNode.appendChild(maxItemMessage);

// Add action list container.
const actionListContainer = document.createElement('div');
actionListContainer.className = 'action-list-container';
rootNode.appendChild(actionListContainer);

// Add logo.
const logoElement = document.createElement('div');
logoElement.className = 'logo';
logoElement.innerHTML = '<img src="./assets/img/cat.png">';
rootNode.appendChild(logoElement);

const actionNameElement = document.querySelector('#todo-form input[name=action]');
const addButtonElement = document.querySelector('#todo-form a.add');

class Action {
    // status can be one of 'todo' or 'done'.
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }
}

const actions = [];

function renderActionList(actionListContainer, actions) {    
    // Erase existing actions.
    actionListContainer.innerHTML = '';

    // Create action list.
    const actionList = document.createElement('ul');
    // Set up action list class.
    actionList.className = 'action-list';

    // Attach actions to action list.
    actions.forEach((actionData, index) => {
        const action = document.createElement('li');
        
        const checkBoxClass = actionData.status === 'done' ? 'check_box' : 'check_box_outline_blank';
        const checkBox = document.createElement('a');
        checkBox.innerHTML = `<i class="material-icons">${checkBoxClass}</i>`;
        checkBox.addEventListener('click', () => {
            markActionAsDone(index);
        });

        const actionName = document.createElement('span');
        actionName.className = 'action-label';
        actionName.innerHTML = actionData.name;

        const deleteButton = document.createElement('a');
        deleteButton.innerHTML = '<i class="material-icons">delete</i>';
        deleteButton.addEventListener('click', () => {
            deleteAction(index);
        });

        action.appendChild(checkBox);
        action.appendChild(actionName);
        action.appendChild(deleteButton);

        actionList.appendChild(action);
    });

    // Attach action list to action list container.
    actionListContainer.appendChild(actionList);
}

function addAction(name, status = 'todo') {
    const maxActionCount = 10;
    if (actions.length < maxActionCount) {
        if (name && name.length) {
            actions.push(new Action(name, status));
            renderActionList(actionListContainer, actions);
        }   
    } else {
        maxItemMessage.style.display = 'block';
    }
}

function deleteAction(actionIndex) {
    const cutLength = 1;
    actions.splice(actionIndex, cutLength);
    renderActionList(actionListContainer, actions);
    maxItemMessage.style.display = 'none';
}

function markActionAsDone(actionIndex) {
    actions[actionIndex].status = 'done';
    renderActionList(actionListContainer, actions);
}

addButtonElement.addEventListener('click', () => {
    const newActionName = actionNameElement.value;
    addAction(newActionName);
});

renderActionList(actionListContainer, actions);
