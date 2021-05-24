$( document ).ready(function() {
  console.log('You are running jQuery version: ' + $.fn.jquery);
    var lastId;
    var topMenu = $("#mainmenu");
    var topMenuHeight = topMenu.outerHeight()+15;
    // All list items
    var menuItems = topMenu.find("a");
    console.log(menuItems);
    // Anchors corresponding to menu items
    var scrollItems = menuItems.map(function(){
      if($(this).attr("href").includes("#")){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      }
    });

    // menuItems.click(function(e){
    //   var href = $(this).attr("href"),
    //       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    //   $('html, body').stop().animate({
    //       scrollTop: offsetTop
    //   }, 300);
    //   e.preventDefault();
    // });

    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "asoy";

       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           // console.log(menuItems.removeClass("active"));
           menuItems.removeClass("active");

           if(id == "asoy"){
             for (var i = 0; i < menuItems.length; i++) {
               $("[href='"+$(menuItems[i]).attr('href')+"']").removeClass("active");
               $("[href='"+$(menuItems[0]).attr('href')+"']").addClass("active");
             }
           }

           if(id == 'section-overview' || id == 'section-visimisi' || id == 'section-bod'){
             $("[href='#section-overview']").addClass("active");
           }

           if(id == 'section-foto-weekly-progress' || id == 'section-foto-moment' || id == 'section-video-weekly-progress' || id == 'section-video-profile' || id == 'section-video-feature'){
             $("[href='#section-foto-weekly-progress']").addClass("active");
           }

           if(id == 'section-artikel-moment' || id == 'section-broadcast'){
             $("[href='#").addClass("active");
           }

           if(id == 'section-contact-us'){
             $("[href='#section-contact-us']").addClass("active");
           }

           if(id == 'section-virtual-tour'){
             $("[href='#section-virtual-tour']").addClass("active");
           }

           // menuItems
           //   .parent().removeClass("active")
           //   .end().filter("[href='#"+id+"']").parent().addClass("active");
       }
    });
});
