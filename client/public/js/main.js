$(document).on('ready', function() {
  $('#all').html('');
  listAnimals();
});
// create payload to render animal to page
$('form').on('submit',function(e){
  e.preventDefault();
  var payload = {
    name: $('#name').val(),
    friendly: $('#friendly').val()
  };
  $.post('/animals',payload,function(data){
    console.log(data.name);
    $('#message').html('Added ' +data.name + " " + data.friendly);
    listAnimals();
  });
});
// delete request
$(document).on('click', '.delete-button', function(){

  $.ajax({
    method: "DELETE",
    url: '/animal/'+$(this).attr('id')
  }).done(function(data) {
    $("#all").html("");
    $( "#results" ).html('Success!');
    listAnimals();
  });

});

function listAnimals(){
  $('#all').html('');
  $.get('/animals', function(data){
    for(var i =0;i<data.length; i++){
        $('#all').prepend(
        '<tr>'+
          '<td><a href="#">'+data[i].name+'</a></td>'+
          '<td>'+data[i].friendly+'</td>'+
          '<td><a class="btn btn-danger btn-xs delete-button" id="'+data[i]._id+'" role="button">Delete</a>'+
          '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="'+data[i]._id+'" role="button">Edit</a></td>'+
          '</tr>'
      );
    }
  });
}
