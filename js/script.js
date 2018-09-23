// script.js

$(function () {

    // TO DO LIST

    $('#todoList ul').sortable({
        // Cant move day names and inputs
        items: "li:not('.listTitle, .addItem')",
        // Todos can be dragged from Monday -> Wednesday etc
        connectWith: "ul",
        // Ability to drop on an empty ul
        dropOnEmpty: true,
        // When an item is grabbed, the yellow dashed box takes its place
        placeholder: "emptySpace"
    });

    $('input').keydown(function (e) {
        if (e.keyCode == 13) {
            var item = $(this).val();

            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });

    $('#trash').droppable({
        drop: function (event, ui) {
            ui.draggable.remove();
        }
    });

});
