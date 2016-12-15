$(function(){
    $('.action_p,.action_row,.p_under_line,.link_btn,.link_btn_blank').on('tap',function(){
        $(this).addClass('active');
        var _that = this;
        setTimeout(function(){
            $(_that).removeClass('active');
        },200);
    });

    $('.header .back_btn').on('tap',function(){
        history.go(-1);
    });
});