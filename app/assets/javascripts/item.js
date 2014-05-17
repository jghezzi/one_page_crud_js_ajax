$ (function() {

	$('.update-class').on('click', function(){
		var update_id = this.id;
		console.log(update_id);
	});

	$('.delete-class').on('click', function(){
		var delete_id = this.id;
		console.log(delete_id);
	});

	$('.add-class').on('click', function(){
		console.log("ADD");
		$('.add-modal').show("slow");
	});

	$('.add-button').on('click',function(e){
		console.log("MODAL ADD")
		var my_new_item = $('#item_name').val()
		console.log(my_new_item)
		e.preventDefault();
		$.ajax({
		
		url: 		"/items",
		type: 	'POST',
			data: 	{
				item:  {
					"name":  my_new_item
				}
			},
			success: function(data){
			console.log(data);
			if (data == "1") {
				console.log("true");
			}
			else {
				console.log("false");
			}
		}
		})
	})
	
});