$( document ).ready(function() {
	// console.log("Hello")
	
	var website = openerp.website;
	// var session = openerp.session
	// website.session.model('product.template')
	 var tab_data = [];
	$('li.display_categories_list a').click(function(e) {
		// alert("im clicked!!");
	    var data_id = $(this).data('id');
	    console.log(data_id);
	    e.preventDefault();
	     // var requestUrl = '';
	     setTimeout(function(){
		    openerp.jsonRpc("/wew", 'call', {'data_id':parseInt(data_id)})
		        .then(function (data) {
		           obj = JSON.parse(data);
		            if (tab_data.length === 0){
			           $.each( obj, function(key,value) {
			           	// <img class="product-image" src="' + Base64.decode(value.image) + '" alt="" style="height:100px"/>
			           			data.preventDefault();
					           	if (value.image === null) {
					           		tab_data.push('<div class="product-block" style="margin:0 20px;display:inline-block;float:left"><h3 class="product-name">' + value.name + '</h3><img class="/website/image/product.template/26_5d5073d/image/300x300" style="height:100px"/></div>')
					           	}
					           	else{
					           		tab_data.push('<div class="product-block" style="margin:0 20px;display:inline-block;float:left"><h3 class="product-name">' + value.name + '</h3><img class="product-image" src="data:image/png;base64, ' + value.image + '" style="height:100px"/></div>')
					           	}
							
							// $("#content_best_sellers").append(tab_data.join(''));
							// console.log(value.name)
							console.log("Show Key: " + data_id)
						});
			           $(".content_best_sellers").append(tab_data.join(''));
		       		}
		       		else{
		       			 $(".content_best_sellers").html("")
		       		}
		       		tab_data = [];
		       		console.log("Show tab_data_2: " + tab_data)
		        });
	     }, 1000);
	});


});