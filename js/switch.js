$(document).ready(function(){
    $(document).on('click', '.menu-item', function(){
        $('.menu-item').removeClass('active-menu')
        $('.menu-item').removeClass('active-menu')
        $('.info-text').removeClass('active-info')
        $('.result-cont').removeClass('active-switch')
        

        $(this).addClass('active-menu')

        var id = $(this).attr('id')
        
        if(id == 'layer-item'){
            $('.layer-info').addClass('active-info')
            $('.layer').addClass('active-switch')
        }else if(id == 'depth-item'){
            $('.depth-info').addClass('active-info')
            $('.depth').addClass('active-switch')
        }
    })
})