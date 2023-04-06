$(document).ready(function() {
    $('form').on('submit', function(e) {
        // console.log('fui clicado');
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        console.log(nomeTarefa);
        const novoItem = $(`<li class="lista-tarefa">${nomeTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $('#nome-tarefa').val('');
    })

    $('ul').on('click','li', function(e) {
        console.log('cliquei na tarefa');
        $(this).addClass('feito');
    })
})