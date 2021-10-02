$(document).ready(function(){

    $(".username").focus(function(){
        $(".n").css({"top":"9px","fontSize":"14px","color":"black"});
    });
    
    $(".username").focusout(function(){
        if($(".username").val()!='')
        {
            $(".n").css({"top":"9px","fontSize":"14px","color":"black"});
        }
        else
        {
            $(".n").css({"top":"26%","fontSize":"17px","color":"#666565"});
        }

    });

    $(".password").focus(function(){
        if($(window).width()<501)
        {
            $(".n2").css({"top":"82px","fontSize":"14px","color":"black"});
        }
        else
        {
            $(".n2").css({"top":"9px","fontSize":"14px","color":"black"});
        }
        
    });

    $(".password").focusout(function(){

        if($(window).width()<501)
        {
            if($(".password").val()!='')
            {
                $(".n2").css({"top":"82px","fontSize":"14px","color":"black"});
            }
            else
            {
                $(".n2").css({"top":"73%","fontSize":"17px","color":"#666565"});
            }
        }

        else
        {
            if($(".password").val()!='')
            {
                $(".n2").css({"top":"9px","fontSize":"14px","color":"black"});
            }
            else
            {
                $(".n2").css({"top":"44%","fontSize":"17px","color":"#666565"});
            }
        }
        
    });


    $(window).on('beforeunload',function(){
        $(".username").val('');
        $(".password").val('');
    })
})