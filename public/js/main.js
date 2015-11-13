/**
 * Created by ³´·¹¸ç¶ù on 2015/8/14.
 */
$(document).ready(function () {
    /* nav */
    $('.nav-item').hover(function () {
        $('.nav-content-container').hide();
        $(this).find('.nav-content-container').show();
    }, function () {
        $(this).find('.nav-content-container').hide();
    });
    /* tab */
    $('.tab-head-item').hover(function () {
        $('.tab-head-item ').removeClass('active');
        $(this).addClass('active');
        $('.tab-item').addClass('hide');
        $($(this).attr('href')).removeClass('hide');
    });
});