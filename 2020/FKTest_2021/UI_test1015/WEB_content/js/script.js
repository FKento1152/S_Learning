
jQuery(function () {
    var mainContent = $('#main-content');
    var pagetopBtn = $('#pagetop-btn');
    var ensyuBtn = $('#ensyu-btn');
    var ensyusiryoBtn = $('#ensyusiryo-disp-btn');
    var hintBtn = $('#hint-disp-btn');
    var hintBalloon = $('.hint-balloon');
    var hintBalloonText = $('.hint-balloon p');
    var hintElementPointer = 0;

    $('[data-bs-toggle="tooltip"]').tooltip()
    $('.hint-balloon').hide();
    $("#hintbox").hide();
    $("#ensyusiryobox").hide();

    pagetopBtn.hide();
    ensyuBtn.hide();
    ensyusiryoBtn.hide();
    hintBtn.hide();

    for(i = 0; i < hintBalloon.length; i++){
        hintBalloonText.eq(i).prepend('<span class="text-secondary">【ヒント：' + (i + 1) + ' / ' + hintBalloon.length + '】' + '</span><br>');
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            pagetopBtn.fadeIn();
            ensyuBtn.fadeIn();
        } else {
            pagetopBtn.fadeOut();
        }

        if ($(this).scrollTop() > 1300) {
            ensyusiryoBtn.fadeIn();
            hintBtn.fadeIn();
        } else {
            ensyusiryoBtn.fadeOut();
            hintBtn.fadeOut();
        }
    });

    $("#ensyusiryo-disp-btn").click(function(){
        var ensyusiryobox = $('#ensyusiryobox');
        var curHeight = mainContent.height();
        var changeHeight = 0;
        if(ensyusiryobox.is(':hidden')){
            ensyusiryobox.fadeIn();
            changeHeight = mainContent.css('height', 'auto').height();
            mainContent.height(curHeight).animate({height: changeHeight}, 600);
            $("html,body").animate({scrollTop:$('#ensyusiryobox').offset().top},600);
        }else{
            ensyusiryobox.hide();
            changeHeight = mainContent.css('height', 'auto').height();
            mainContent.height(curHeight).animate({height: changeHeight}, 600);
        }
      });

    $('#hint-disp-btn').click(function(){
        var curHeight = mainContent.height();
        var changeHeight = 0;
        if(hintElementPointer < 1){
            $("#hintbox").show();
            $("html,body").animate({scrollTop:$('#hintbox').offset().top}, 600);
        } else if(hintElementPointer > 0 && $("#hintbox").is(':hidden')){
            hintElementPointer--
        }
        $("#hintbox").show();
        if(hintElementPointer < hintBalloon.length){
            hintBalloon.eq(hintElementPointer).fadeIn();
            changeHeight = mainContent.css('height', 'auto').height();
            mainContent.height(curHeight).animate({height: changeHeight}, 600);
            hintElementPointer++;
        }else{
            if(hintBalloon.eq(hintElementPointer).is(':visible')){

            }else{
                changeHeight = mainContent.css('height', 'auto').height();
                mainContent.height(curHeight).animate({height: changeHeight}, 600);
            }
        }
    });

    $('#hint-close-btn').click(function(){
        $('#hintbox').hide();
        mainContent.animate({height: mainContent.css('height', 'auto').height()}, 600);
    });

    $('#ensyusiryo_close_btn').click(function(){
        $('#ensyusiryobox').hide();
        mainContent.animate({height: mainContent.css('height', 'auto').height()}, 600);
    });

});