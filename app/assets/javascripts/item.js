$(function() {

	$('.update-class').on('click', function(e){
		update_id = this.id;
		console.log(update_id);
		$('.update-modal').show("fast");
		$("body").append('<div class="modalOverlay">');
	});

		$('.cancel-update-button').on('click', function(){
			$('.modalOverlay').hide("fast");
			$('.update-modal').hide("fast");
		});
		
		$('.update-button').on('click', function(e){
			console.log("MODAL UPDATE");
			var item_to_update = $('#items_name').val()
			console.log(item_to_update)
			$('.modalOverlay').hide("fast");
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
		$('.add-modal').show("fast");
		$("body").append('<div class="modalOverlay">');
	});

	$('.cancel-add-button').on('click', function(e){
		e.preventDefault();
		$('.add-modal').hide("fast");
		$('.modalOverlay').hide("fast");
	});

	$('.add-button').on('click',function(e){
		console.log("MODAL ADD")
	});

		$('#new_item').on('ajax:complete', function(event, data, status, xhr) {
			var item = jQuery.parseJSON(data.responseText),
					name = item.name;
					item_id = item.id
					alert(item_id);
			$('.add-modal').hide("fast");
			$('.modalOverlay').hide("fast");
			$('#task-body').append("<tr><td>" + name + "</td><td><button class=\"update-class\" data-item-id=" + item_id + " id="+ item_id + " name=\"button\" remote=\"true\" type=\"submit\">Update</button></td><td><button class=\"delete-class\" data-item-id=" + item_id + " id="+ item_id + " name=\"button\" remote=\"true\" type=\"submit\">Delete</button></td></tr>");

			$('#task-body').on('click', '.update-class', function(event){
				$('.update-class').on('click', function(e){
				update_id = this.id;
				console.log(update_id);
				$('.update-modal').show("fast");
				$("body").append('<div class="modalOverlay">');
			});
		});
	})
});