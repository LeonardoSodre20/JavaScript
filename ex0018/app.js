const inputValue = document.querySelector('.inputTask')
const buttonAdd = document.querySelector('.btnAddTask')
const containerTask = document.querySelector('.container-task')

const addTaskContainer = () => {
    let inputDescription = inputValue.value
    
    let textParagrafo = document.createElement('p')

    textParagrafo = inputDescription

    containerTask.appendChild(textParagrafo)
}

buttonAdd.addEventListener('click', () => addTaskContainer())


