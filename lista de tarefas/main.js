
$(document).ready(function () {
carregarTarefas ();





//Adicionar tarefa
$('#addTarefaBtn').on('click',function () {
    var tarefaText = $('#tarefaInput').val();
    if(tarefaText.length > 0 ) { 
         addTarefa(tarefaText)
          salvarTarefas ()
        $('#tarefaInput').val('');

        }
      
    });

//Função para adicional tarefa
function addTarefa(text) {
    $ ('#tarefaList').append ('<li> <span>&times; </span>' + text + '</li>');
    }


 




//Marcar /desmarcar tarefa como concluida

   $(document).on('click','li',function(){
    $(this).toggleClass ('completed')
    salvarTarefas();

   });

    // Remover tarefa

   $(document).on('click','span',function(e){
     e.stopPropagation ();//Evita a propagação do evento para elemento (li)
     $(this).parent().fadeOut(500,function (){
     $(this).remove();
     salvarTarefas();

       });
  

   });

     //Função para salvar tarefas localmente
     function salvarTarefas (){
        var tarefas = $('#tarefaList').html();
     
        localStorage.setItem('tarefas',tarefas);
     }

     //Função para carregar tarefas salvas localmente
      function carregarTarefas(){
    //Recuperar os dados armazenados na chave 'tarefa'do localStorage
   var tarefas = localStorage.getItem('tarefas');
   console.log('tarefas')

   //Verificar se existirem dados, atualiza o conteúdo do elemento
   if (tarefas) {
    //se existem dados, atualiza o conteudo do elemento
    //com id'tarefaList´com esses dados
  $('#tarefaList').html(tarefas);


   }
 
}
});





    


    


   