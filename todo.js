let todoList=[{item :"BuyMIlk",duedate: "4/10/2023"}];
displayitem();
function addTodo(){
    let i=document.querySelector('#input1');
    let i2=document.querySelector('#date');
    let item3=i.value;
    let item2=i2.value;
    todoList.push({item:item3,duedate:item2 });
    i.value='';
    i2.value='';
    
  displayitem();
}
function displayitem(){
    let d = document.querySelector('.container');
    let newHTML = ' ';
    for(let i=0 ; i<todoList.length;i++)
   { let todoitem=todoList[i].item;
     let duedate=todoList[i].duedate;
    newHTML +=
    `  <span>${todoitem}</span>
      <span>${duedate}</span>
      <button class="btn-del" onClick="todoList.splice(${i},1);
       displayitem();">Delete</button>
     `;}
     d.innerHTML=newHTML;
} 