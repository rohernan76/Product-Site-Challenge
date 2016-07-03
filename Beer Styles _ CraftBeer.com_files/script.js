/* Author: Nathan Zander

Scripts to run onload.

//Just a test for SVN

*/

   
$(window).load(function() {	  
    //Flexslider
    if ($('.flexslider').length != 0 ){
    $('.flexslider').flexslider({
		animationDuration: 600,
		controlNav: true,     
		slideshowSpeed: 4000,  
		pauseOnHover: true,
		useCSS: false,
		start: function(slider) {
			slider.addClass('loaded');
		} 
	});
	}
});

 $(document).ready(function(){  
    $('body').addClass('js')
    $('#content').addClass('container');
	css_browser_selector(navigator.userAgent);
			
	//Last-child hack
	$('ul.menu > li:last-child').addClass('last-child');
	
	
	/**   
	 *  Responsive Navigation
	 */
	
	$("#menu-main li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$("#menu-main li.current-menu-parent").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("active");
		};
	})
	
	var $menu = $('#menu-main'),
    $menulink = $('.toggle-menu'),
    $wrap = $('#wrapper');
	
	$menulink.click(function(e) {
		e.preventDefault();
		//$(this).toggleClass("active");
		//$("#menu-main").toggle();
		$menu.toggleClass('active');
		$menulink.toggleClass('active');
	    $wrap.toggleClass('active');
	    return false;
	});
	
	adjustMenu(); //function in plugins.js to manipulate responsive nav */
	
	//Code to enable hover for iPad - this is covered in plugins.js?
	
	/**   
	 * Pinterest Functionality
	 *
	 * insert "Pin this image" button dynamically
	 */
	 
	$("article > .entry > .featured-image, .pin-it").each(function() {
		var img_id = $(this).find("img"); 		
		var img_url = img_id.attr('src');
		var img_alt = img_id.attr('alt');
		
		//Insert the pinit button
		$('<a href=\"http://pinterest.com/pin/create/button/?url=http://www.craftbeer.com&amp;media=' + img_url + '&amp;description=' + img_alt + '" class="pin-link" target="_blank"><img class="pin-btn" src="http://www.craftbeer.com/wp-content/uploads/pinterest.png" alt="" /></a>').insertAfter(img_id);
		
		//Set up the toggle events (mouseenter/mouseleave)
		var pin_id = $(this).find('.pin-link');
		pin_id.hide();
		
		$(this).mouseenter(
		  function () {
		    $(pin_id).fadeIn(250);
		  }
		);
		  
		$(this).mouseleave(  
		  function () {
		    $(pin_id).fadeOut(250);
		  }
		);	
	});
	
	//Generic (Manual) Pinterest
	$(".has-pin").mouseenter(
		  function () {
		    console.log('in');
		    $('.pin-link').fadeIn(250);
		  }
		);
		  
	$(".has-pin").mouseleave(  
	  function () {
	    $('.pin-link').fadeOut(250);
	  }
	);	

	/*//Slideshows (with carousel)
    var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	    // advance the other slideshow
	    slideshows.not(this).cycle('goto', opts.currSlide);
	    console.log(slideshows);
	});*/
		
    /**   
    *  Lightbox (fancybox) handlers
    */
    
	$("a.fancybox").fancybox();
	$(".gallery a").fancybox();
	$("a.fancyFrame").fancybox({
		type:'iframe',
		width: '80%',
		height: '80%'
	});
	
	$(".editFrame").fancybox({	    
	    type: 'iframe',
	    padding: 5,
	    width: '800px',
	    height: '80%'   
	 });
	 
	 $(".menuFrame a").fancybox({	    
	    type: 'iframe',
	    padding: 5,
	    width: '800px',
	    height: '80%'   
	 });

	 $(".bigFrame").fancybox({	    
	    type: 'iframe',
	    padding: 5,
	    width: '90%',
	    height: '90%'   
     });
	
	//Fitvids
	$(".video").fitVids();
	
	//accordion
	if($("#accordion").length != 0){
	   console.log('found an accordion, dawg. First hide, then show on init.');
	   $("#accordion").accordion({  animate: 0, active: false, autoHeight: false, collapsible: true,  heightStyle: "content"});  
	   if( $("#accordion").hasClass("ui-accordion") ) { $("#accordion").show(); }
    }  
    
    
    //bootstrap popover
    $('.popovers').popover({
        html : true,
        trigger : 'hover focus'
    });
    
    //bootstrap modal hack
    $('.modal').css(
    {
        'margin-top': function () {
            return -($(this).height() / 2);
        }
    });
    
    //Multi Column List
    jQuery('.three-col-list').makeacolumnlists({cols: 3, colWidth: 0, equalHeight: false, startN: 1});
    
    /**   
	*  Sidebar Nav hacking
	*
	*  Some hard hacking to help the nav establish the 'current page' for custom post types. Trying to add a menu to a post? Update sidebar-menu.php
	*/
    $('.page-id-3681 .page-item-3681').addClass('current-menu-item');
    
    
    //Blogs and Polls    
    $('.category-craft-beer-muses .page-item-3712').addClass('current-menu-item');
    $('.category-craft-beer-muses #menu-item-16325').addClass('current-menu-ancestor'); 
    $('.category-brewers_banter .page-item-541').addClass('current-menu-item');
    $('.category-brewers_banter #menu-item-16325').addClass('current-menu-ancestor');
    
    
    //Food and Beer
    $('.recipes .page-item-3681').addClass('current-menu-item');
    $('.recipes #menu-item-571').addClass('current-menu-ancestor');
    $('.category-beer-and-food .page-item-21527').addClass('current-menu-item');
    $('.category-beer-and-food #menu-item-571').addClass('current-menu-ancestor');
    
    //News
    $('.category-news .page-item-3401').addClass('current-menu-item');
    $('.category-news #menu-item-17047').addClass('current-menu-ancestor');
    $('.news .page-item-3401').addClass('current-menu-item');
    $('.news #menu-item-2289').addClass('current-menu-ancestor');
    $('.tf_events .page-item-476').addClass('current-menu-item');
    $('.tf_events #menu-item-2289').addClass('current-menu-ancestor');
    $('.single-tf_events .page-item-476').addClass('current-menu-item');
    $('.single-tf_events #menu-item-17047').addClass('current-menu-ancestor');

    $('.category-acbw-news .page-item-514').addClass('current-menu-parent current-menu-ancestor');
    $('.category-acbw-news .page-item-17104').addClass('current-menu-item');
    $('.category-acbw-news #menu-item-17047').addClass('current-menu-ancestor');


    //Breweries
    $('.category-featured-brewery .page-item-3885').addClass('current-menu-item');
    $('.category-featured-brewery #menu-item-917').addClass('current-menu-ancestor');
    
    //Video
    $('.category-videos .page-item-456').addClass('current-menu-item');
    $('.category-videos #menu-item-917').addClass('current-menu-ancestor');
    $('.category-tips-for-tasting-videos .page-item-7946').addClass('current-menu-item');
    $('.category-tips-for-tasting-videos #menu-item-17515').addClass('current-menu-ancestor');
    

    //SYLB
    $('.category-action-alerts .page-item-473').addClass('current-menu-parent');
    $('.category-action-alerts .page-item-542').addClass('current-menu-item');
    $('.category-action-alerts #menu-item-917').addClass('current-menu-ancestor');
    
    //ACBW
    $('body.page-id-21579 li.page-item-514').addClass('current-menu-item');
    $('.category-acbw-news .page-item-514').addClass('current-menu-item');
    $('.category-acbw-news #menu-item-2289').addClass('current-menu-ancestor');
    
    //Beer and health
    $('.category-news-on-beer-and-health .page-item-460').addClass('current-menu-parent');
    $('.category-news-on-beer-and-health .page-item-3959').addClass('current-menu-item');
    $('.category-news-on-beer-and-health #menu-item-1223').addClass('current-menu-ancestor');
    
   	//Special case element manipulation
	$("li#menu-item-2295 a, li#menu-item-1640 a, li#menu-item-6086 a").removeClass('parent');//Hide the child of 'recipes', 'events', and 'news' from the main nav. Check that these are the LIVE ID's as well? Don't forget to update the other relevant function on line 153 of plugins.js

    /**   
	*  Misc one-off functions
	*/
    
    //Strip empty p tags out of archive pages
    $('.archive .entry p').each(function() {
	    var $this = $(this);
	    if($this.html().replace(/\s|&nbsp;/g, '').length == 0){
		    $this.remove();
		    //console.log('foound p');
	    }
	        
	});
	
	//strip p tags wrapping img
	//$('p > img').unwrap();
	
	//A silly little function to make some faux breadcrumbs
	if( $('.breadcrumbs li.menu-parent') ){
		var currMenu = $('li.current-menu-ancestor a').html();
		//console.log(currMenu);
		$('.breadcrumbs li.menu-parent').html(currMenu);
		$('.breadcrumbs li.menu-parent').css('display', 'block');
	}
    
    //Show More Button
    $("#show-more").click(function(){     
        var target = $(this).data('target');
        console.log(target);
        $(target).toggleClass('open');
        
        if( $(target).hasClass('open') ){
           $(this).html('Read Less<i class="icon-minus-sign"></i>'); 
        } else {
            $(this).html('Read More<i class="icon-plus-sign"></i>');
        }   
    });
 
 });//end domready   

/*
* Social Icons
*/
var popupCenter = function(url, title, w, h) {
	// Fixes dual-screen position                         Most browsers      Firefox
	var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

	var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 3) - (h / 3)) + dualScreenTop;

	var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	// Puts focus on the newWindow
	if (window.focus) {
		newWindow.focus();
	}
};

/*
 * Event listners
 */

jQuery('#social-links a.popup').on('click', function(e){
	var _this = jQuery(this);
	popupCenter(_this.attr('href'), _this.find('.text').html(), 580, 470);
	e.preventDefault();
});

     
/**
* Track all PDFs in GA
*/
$(window).on('load', function(){

    var myWebsite = new RegExp(location.host);
    var myWebsiteAnchor = new RegExp('#+');
    var badlinkJs = new RegExp('^javascript:+');
    //var socialMedia = new RegExp('plus|linkedin|pinterest|facebook|twitter+');
    //var affiliateLink = new RegExp('/go/+');
    var isDownloadPdf = new RegExp('.pdf$');
    var isDownloadMP3 = new RegExp('.mp3$');
    var isDownloadzip = new RegExp('.zip$');
      
    $('a').each(function(){
      
        var url = $(this).attr("href");
          
            if (badlinkJs.test(url)){
            } else if (isDownloadzip.test(url)){									
			   //console.log(url);
			   //$(this).attr("onclick", "ga('send', 'event', 'Download', 'Zip', {'nonInteraction': 1, 'eventLabel': '" + url + "'})" );
               $(this).addClass('pdf');
            } else if (isDownloadPdf.test(url)){
               //console.log(url);
               //$(this).attr("onclick", "ga('send', 'event', 'Download', 'PDF', {'nonInteraction': 1, 'eventLabel': '" + url + "'})" );
               //$(this).attr("target", "_blank");
               $(this).addClass('pdf');

            } else if (isDownloadMP3.test(url)){
               //console.log(url);
               //$(this).attr("onclick", "ga('send', 'event', 'Download', 'MP3', {'nonInteraction': 1, 'eventLabel': '" + url + "'})" );
               $(this).attr("target", "_blank");
               $(this).addClass('mp3');

            } else { }
         
    }); //End each function
    

});


/**
* Custom Code for SRG to track culinary downloads
*/

function Apply_for_Final_Exam_Download(){
	var prd=new Date(),pru=Date.UTC(prd.getUTCFullYear(),prd.getUTCMonth(),prd.getUTCDay(),prd.getUTCHours(),prd.getUTCMinutes(),prd.getUTCSeconds(),prd.getUTCMilliseconds());
	var pr_eid=pru+Math.random();
	var pr_event='';
	var pr_item='';
	var pr_quantity='';
	var pr_value='';
	document.getElementById('prcif61C696F6-14B0-4A66-BF99-EDF2D4E4B861').src="https://container.pointroll.com/event/?ctid=61C696F6-14B0-4A66-BF99-EDF2D4E4B861&av=13149&eid="+pr_eid+"&ev="+pr_event+"&item="+pr_item+"&q="+pr_quantity+"&val="+pr_value+"&r="+Math.random();
 }
 
	var pr_ctFrame=document.createElement('iframe');
	pr_ctFrame.style.display='none';
	pr_ctFrame.src='about:blank';
	pr_ctFrame.id='prcif61C696F6-14B0-4A66-BF99-EDF2D4E4B861';
	document.body.appendChild(pr_ctFrame);



function Days_1_4_Course_Download(){
	var prd=new Date(),pru=Date.UTC(prd.getUTCFullYear(),prd.getUTCMonth(),prd.getUTCDay(),prd.getUTCHours(),prd.getUTCMinutes(),prd.getUTCSeconds(),prd.getUTCMilliseconds());
	var pr_eid=pru+Math.random();
	var pr_event='';
	var pr_item='';
	var pr_quantity='';
	var pr_value='';
	document.getElementById('prcif6343E8D3-46F0-4020-B442-0C9B204CEFD8').src="https://container.pointroll.com/event/?ctid=6343E8D3-46F0-4020-B442-0C9B204CEFD8&av=13149&eid="+pr_eid+"&ev="+pr_event+"&item="+pr_item+"&q="+pr_quantity+"&val="+pr_value+"&r="+Math.random();
 }
 
	var pr_ctFrame=document.createElement('iframe');
	pr_ctFrame.style.display='none';
	pr_ctFrame.src='about:blank';
	pr_ctFrame.id='prcif6343E8D3-46F0-4020-B442-0C9B204CEFD8';
	document.body.appendChild(pr_ctFrame);










