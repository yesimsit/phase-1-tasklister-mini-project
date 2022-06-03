document.addEventListener("DOMContentLoaded", () => {
  const taskForm =document.querySelector("#create-task-form")
  //console.log(taskForm)
  const taskDescription =document.querySelector("#new-task-description")
 console.log(taskDescription)

  const taskUl =document.querySelector("#tasks")
  //console.log(taskUl)

  taskForm.addEventListener("submit", x )

});
function x(event){
  event.preventDefault();
  const taskDescription =document.querySelector("#new-task-description").value
  const toDoList=document.createElement("li")
  toDoList.innerHTML=taskDescription;
  document.getElementById("tasks").appendChild(toDoList);
  const deleteButton=document.createElement("button")
deleteButton.innerHTML="DONE"
deleteButton.style.height="20px";
deleteButton.style.background="red";
deleteButton.style.borderRadius="5px";


toDoList.appendChild(deleteButton)
deleteButton.addEventListener("click", reset)

}
function reset (event){
  event.preventDefault();
  this.parentElement.remove()
  this.parentElement.remove()

}
