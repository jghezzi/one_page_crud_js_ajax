$ (function() {

	$('.update-class').on('click', function(e){
		var update_id = this.id;
		console.log(update_id);
		$('.update-modal').show("slow");
		
		$('.update-button').on('click', function(e){
			console.log("MODAL UPDATE");
			var item_to_update = $('#items_name').val()
			console.log(item_to_update)
			e.preventDefault;

			$.ajax({
		
			url: 		"/items/" + update_id,
			type: 	'PATCH',
				data: 	{
					item:  {
						"name":  item_to_update
					}
				},
				success: function(data){
				console.log(data);
				if (data == "1") {
					console.log("true");
					window.location.reload();	
				}
				else {
					console.log("false");
				}
			}
		})

		});

	});

	$('.delete-class').on('click', function(){
		var delete_id = this.id;
		console.log(delete_id);

		$.ajax({

		url: "/items/" + delete_id,
		type: "DELETE",

		success: function(data){
				console.log(data);
				if (data == "1") {
					console.log("true");
					window.location.reload();	
				}
				else {
					console.log("false");
				}
			}
		})
	
	});

	$('.add-class').on('click', function(){
		console.log("ADD");
		$('.add-modal').show("slow");
	});

	$('.add-button').on('click',function(e){
		console.log("MODAL ADD")
		$('.add-modal').hide("slow");
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
					window.location.reload();	
				}
				else {
					console.log("false");
				}
			}
		})
	})

});