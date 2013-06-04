!function ($) {
        $(function(){
          // carousel demo
          $('#myCarousel').carousel()
        })
      }(window.jQuery)
                            
     	
     	
$(document).ready(function(){
/* ############## END Image Gallery ############### */
$.ajax({
	type: "GET",
	url:"imageGal.xml",	
	dataType: "xml",
	success: function(loadContent){
		$(loadContent).find("image1").each(function(){
			var ths = $(this);
			var img = ths.find("img").text();
			console.log(img)
		})
	}
})
/* ############## END Image Gallery ############### */
/* ############## Start the ajax get contnet ############### */

			$.ajax({
				
				type: "GET",
				url: "sites.xml",
				dataType: "xml",
				success: function(xml) {
					$(xml).find('site').each(function(){
						var id = $(this).attr('id');
						var title = $(this).find('title').text();
						var url = $(this).find('url').text();
						var img = $(this).find('img').text();
						
						$('<div class="featurette" id="link_'+id+'"><div class="imgHolder"><img class="featurette-image pull-right" src="'+img+'" /></div></div>')
						
						
						$('<div class="items span12" id="link_'+id+'"></div>').html('<div class="imgHolder"><img src="'+img+'" width="300" height="150"></div>'+'<a class="txt_items pad" href="'+url+'">'+title+'</a>').appendTo('#Xpage-wrap'); // Remove X from #Xpage-wrap and veiw the index page to see the content being loaded
						$(this).find('desc').each(function(){
							var brief = $(this).find('brief').text();
							var long = $(this).find('long').text();
							$('<h2 class="featurette-heading pad"></h2>').html(brief).appendTo('#link_'+id);
							$('<p class="lead pad"></p></div>').html(long).appendTo('#link_'+id);
						});
					});
				}
			});
				/*type: "GET",
				url: "sites.xml",
				dataType: "xml",
				success: function(xml) {
					$(xml).find('site').each(function(){
						var id = $(this).attr('id');
						var title = $(this).find('title').text();
						var url = $(this).find('url').text();
						var img = $(this).find('img').text();
						$('<div class="items" id="link_'+id+'"></div>').html('<a href="'+url+'">'+title+'</a>' + '<img src="'+img+'" width="100" height="100">').appendTo('#page-wrap');
						$(this).find('desc').each(function(){
							var brief = $(this).find('brief').text();
							var long = $(this).find('long').text();
							$('<div class="brief"></div>').html(brief).appendTo('#link_'+id);
							$('<div class="long"></div>').html(long).appendTo('#link_'+id);
						});
					});
				}
			});*/
		});
		
		var ipad = ipad || {};

ipad.core = (function(doc, $, undefined) {
	
	
	
	init = function(){
//    	CCAf.temp();
    	
    	ipad.getdata();
    	ipad.getdataTaylor();
       

    },
// ############################################################# temp of brew manipulation


// ############################################################# ipad samsonite gal

    ipad.getdata = function(){
		
		$.ajax({
		type: "get",
		url:"imageGal.xml",	
		dataType: "xml",
			success: function(data){
			$(data).find("image1").each(function(){
			var ths = $(this);
			var img = ths.find("img").text();
			var title = ths.find("title").text();
			var dec = ths.find("dec").text();
			var mod = ths.find("mog").text();
				$("#slider").append('<img src="'+img+'" /><br><div class="overlay"><a role="button" data-toggle="modal" class="btn btn-large btn-primary topMarg" href="#' + mod + '">Read Description</a></div><br><div id="'+ mod +'" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">'+ title +'</h3></div><div class="modal-body"><p>'+ dec +'</p></div></div>');
				console.log(data)
				
					})
				   }
				})


		
                        
	},
// ############################################################# temp of brew manipulation
	
	 ipad.getdataTaylor = function(){
		
		$.ajax({
		type: "get",
		url:"imageGal.xml",	
		dataType: "xml",
			success: function(data){
			$(data).find("image2").each(function(){
			var ths = $(this);
			var img = ths.find("img").text();
			var title = ths.find("title").text();
			var dec = ths.find("dec").text();
			var mod = ths.find("mog").text();
				$("#slider2").append('<img src="'+img+'" /><br><div class="overlay"><a role="button" data-toggle="modal" class="btn btn-large btn-primary topMarg" href="#' + mod + '">Read Description</a></div><br><div id="'+ mod +'" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">'+ title +'</h3></div><div class="modal-body"><p>'+ dec +'</p></div></div>');
				console.log(data)
				
					})
				   }
				})


		
                        
	}

	
	return {
    run: init
  };

})(document, jQuery);





// #############################   RUN   ############################### //

$(function() {
  ipad.core.run();//go inside and go to the run function, the run function initulises the init function ect
});

