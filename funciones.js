jQuery(document).ready(listo);

function listo()
{
	jQuery(".hamb").click(function(e){
       e.preventDefault();
      jQuery("header ").toggleClass("open");
      jQuery(".hamb i").toggleClass("fa-xmark");
      
  
	});

	jQuery("header a").click(function(){
		    jQuery("header .container nav").removeClass("open");
		    jQuery(".hamb i").removeClass("fa-xmark");
            var dev = jQuery(this).attr("href");
            
            jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top
            })
	})
}