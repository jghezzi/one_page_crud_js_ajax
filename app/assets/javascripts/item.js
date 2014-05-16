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

	$('.add-button').on('click',function(){
		console.log("MODAL ADD")
		$.ajax({
		
		url: 		"/items",
		type: 	'POST',
			data: 	{
				item:  {
					"name":  "This is a test"
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