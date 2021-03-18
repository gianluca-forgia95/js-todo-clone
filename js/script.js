//Todolist
//Creo un Array di cose da fare

var toDoList = [
  'Chiamare amici',
  'Fare il prepartita',
  'Cantare fino al 90esimo',
  'Parcheggiare vicino lo stadio',
  'Non far arrabbiare Totti e De Rossi',

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

 $(".todo-list").on("click", ".delete", function(){
     $(this).parent().remove();
 });


//Scrivendo nell'input e premendo invio faccio aggiungere cose da fare all'utente
$('#add').keydown(function(event){

if ( event.which == 13 ) {
 var textAdd = $(this).val();
 if ( textAdd != '') {
   //clono di nuovo il mio template
   var template = $('.template li').clone();
   //Aggiungo al template quello che ha digitato l'utente
   template.prepend(textAdd);
   //Aggiungo alla todolist nella pagina
   $('.todo-list').append(template);

    }
  }
}
);
