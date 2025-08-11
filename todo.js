let todoListArray=[
    {task:"want to meet jagan "},
    {task:"want to meet CBN "},
    {task:"want to meet KTR "},
    {task:"want to meet KCR "},
    {task:"want to meet balayya "},
]

function display()
{
    let refElem=document.getElementById("ref");
    let trs="";
    for(let ind in todoListArray)
    {
        trs+=`
            <tr>
                <td>${todoListArray[ind].task}</td>
                <td>
                    <button type="button" class="btn btn-primary"onclick="deleteTask(${ind});">Delete</button>
                </td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editTask(${ind});">Edit</button>
                </td>
            </tr>
        `
    }


    let table=`
        <table class="table">
            ${trs}
        </table>
    `
    refElem.innerHTML=table;
}


display();
function deleteTask(index){
    todoListArray.splice(index,1);
    display();
}

function addTask()
{
    let textBoxElem=document.getElementById("textBox");
    if (textBoxElem.value.trim()==""){
        alert("please fill the field");
        return;
    }
    let obj={
        task:textBoxElem.value
    }
    todoListArray.push(obj);
    display();
    textBoxElem.value="";
}
let ind=0;
function editTask(index)
{
    ind=index;
    let editTextBoxElem=document.getElementById("editTextBox");
    editTextBoxElem.value=todoListArray[index].task;
}


function save()
{
    let editTextBoxElem=document.getElementById("editTextBox");
    let obj={
        task:editTextBoxElem.value
    }
    todoListArray[ind]=obj;
    display();
}
