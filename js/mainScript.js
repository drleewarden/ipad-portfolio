
!function ($) {
        $(function(){
          // carousel demo
          $('#myCarousel').carousel()
        })
      }(window.jQuery)
                            
     	$(document).ready(function($){
     	alert("weeell")
		function loadXML(ajax, success){
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
						
						
						$('<div class="items span12" id="link_'+id+'"></div>').html('<div class="imgHolder"><img src="'+img+'" width="300" height="150"></div>'+'<a class="txt_items pad" href="'+url+'">'+title+'</a>').appendTo('#page-wrap');
						$(this).find('desc').each(function(){
							var brief = $(this).find('brief').text();
							var long = $(this).find('long').text();
							$('<h2 class="featurette-heading pad"></h2>').html(brief).appendTo('#link_'+id);
							$('<p class="lead pad"></p></div>').html(long).appendTo('#link_'+id);
						});
					});
				}
			});
