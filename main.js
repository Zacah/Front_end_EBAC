$(document).ready(function() {
var form = $("#formulario");
var listaTarefas = $("#lista-tarefas");
    form.submit(function(event) {
    event.preventDefault();

    var nomeTarefa = $("#nome-tarefa").val();

    if (nomeTarefa !== "") {
        var novoItem = $("<li>" + nomeTarefa + "</li>");
        novoItem.addClass("tarefa");
        listaTarefas.append(novoItem);

        $("#nome-tarefa").val("");
}
});

    listaTarefas.on("click", "li", function() {
    $(this).toggleClass("concluida");
    });
});