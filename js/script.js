//Todolist
//Creo un Array di cose da fare

var toDoList = [
  'Comprare il vino',
  'Portare fuori il cane',
  'Chiamare Francesco'
];


//Inizializzo il ciclo for
for (var i = 0; i < toDoList.length; i++) {
  //Clono il template
  var template = $('.template li').clone();
  //Aggiungo l'array toDoList al template
  template.prepend(toDoList[i]);
  //Metto nella todolist  template
  $('.todo-list').append(template);

}
