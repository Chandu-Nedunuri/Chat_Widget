$("#chat-bubble").click(function () {
    $("#chat-widget").toggle();
    $(this).find('img').toggle();

});
function onClose() {
    $('#chat-widget').hide();
    $("#chat-bubble").find('img').toggle();
    
}
//    $("#textarea").keyup(function() {
//        var txt = $(this).val()
//        var x =  $(".chat-body").val(txt)  
//})
// $("#send").click(function() { 
// var data = document.getElementsByClassName('form-group')[0];
// var x =  $("#textArea").val();
// $(".receiver-msg").append(x);
// $("#textArea").val('')
// });
// function updateScrollbar() {
//     $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
//       scrollInertia: 10,
//       timeout: 0
//     });
// }


function insertMessage() {
   msg = $(".message-input").val();
   if($.trim(msg)== '') {
      return false;
   }
   $('<div class="message message-personal">' 
    + msg +
     '</div>').appendTo($('.chat-body'))
      .addClass('new');
      $('.message-input').val(null);
     
   
}

$('#send').click(function() {
    insertMessage();
  });


  $(window).on('keydown', function(e) {
    if (e.which == 13) {
      insertMessage();
      return false;
    }
  })
  