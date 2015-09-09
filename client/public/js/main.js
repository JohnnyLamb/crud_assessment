$(document).on('ready', function() {
  $('#all').html('');
  // $('#edit-form').hide();
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
// editing a single animal functionality
$(document).on('click', '.edit-button', function(){
  $.get('/animal/'+$(this).attr('id'), function(data){
    $('#edit-name').val(data.name);
    $('#edit-friendly').val(data.friendly);
    $('.update-button').attr('id', data._id);
  });
  $('#edit-form').show();
  $('#animal-table').hide();
});
// cancel request from edit view
$(document).on('click', '#cancel-edit', function(e) {
  e.preventDefault();
  $('#edit-form').hide();
  $('#animal-table').show();
});

// function to render the new Animals to the page
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
