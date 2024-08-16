let myArray = [{
    namevalue: 'Make Coffee',
    datevalue: '08-11-2024'
}, {
    namevalue: 'Watch a Movie',
    datevalue: '08-11-2024'
}];

renderTodoList();



function addTodo() {
    let inputElement = document.querySelector('.input-element');
    let value = inputElement.value;

    let dateElement = document.querySelector('.date-class');
    let date = dateElement.value;


    myArray.push({
        namevalue: value,
        datevalue: date
    });

    console.log(myArray);

    inputElement.value = '';
    renderTodoList();
}

//let html = '';

function renderTodoList() {

    let html = '';
    for (let i = 0; i < myArray.length; i++) {
        let todoObject = myArray[i];
        let name = todoObject.namevalue;
        let date = todoObject.datevalue;
        let todovalue = `
            <div>${name}</div>
            <div>${date}</div>
            <button class="delete-button" onclick="
                myArray.splice(${i} , 1);
                renderTodoList();
                console.log(myArray);
        ">Delete</button>`;
        html += todovalue;

    }
    document.querySelector('.div-element').innerHTML = html;
}

/*function deleteTodo() {
    for (let i = 0; i < myArray.length; i++) {
        let deletevalue = myArray[i];
        myArray.splice(deletevalue);
        renderTodoList();
    }
}*/
