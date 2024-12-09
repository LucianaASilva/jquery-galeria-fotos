$(document).ready(function () {
  CarregarTarefas();
  
$('#addTarefaBtn').on('click',function(){
  let tarefaText = $('#tarefaInput').val();
  if(tarefaText.length > 0){ 
    addTarefa(tarefaText);
    salvarTarefa();
    $('#tarefaInput').val(''); //apaga op campo
 
  }
 
})
//função para acionar tarefa
function addTarefa (text){
  $('#tarefaList').append ('<li><span>&times;</span>' + text + '</li>');
}
//Marcar /desmarcar tarefa como concluida 
$(document).on('click','li' ,function () {
  $(this).toggleClass('completed');
  salvarTarefa();

});
// remover tarefa
$(document).on('click','span' ,function (e) {
  e.stopPropagation();
  $(this).parent( ).fadeOut(500,function(){
    $(this).remove();
    salvarTarefa();

})

});
//funçao para salvar uma tarefa
function salvarTarefa(){
  let tarefas = $('#tarefaList').html();
  localStorage.setItem('tarefas',tarefas);
}

function CarregarTarefas(){
  let tarefas = localStorage.getItem ('tarefas');


  if (tarefas) {
    $('#tarefaList').html(tarefas);
 } else {
  console.log('Nenhuma tarefa encontrada no localStorge.');
 }
  
}

});