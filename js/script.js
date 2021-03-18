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

//Al click cancello le cose da fare completate
var done = $('.delete');

done.click(
  function () {
    $(this).parent().remove();
  }
);

//Scrivendo nell'input e premendo invio faccio aggiungere cose da fare all'utente

$('#add').keydown(function(event){

if ( event.which == 13 ) {

  console.log(event);
  var textAdd = $(this).val();
  //clono di nuovo il mio template
  var template = $('.template li').clone();
  //Aggiungo al template quello che ha digitato l'utente
  template.prepend(textAdd);
  //Aggiungo alla todolist nella pagina
  $('.todo-list').append(template);

  }
}
);
