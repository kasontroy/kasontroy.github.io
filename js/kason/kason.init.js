(function ($, document, undefined) {

    "use strict";


        // Tabbed Widget
    var mobileMenuButton     =   $("#mobile-menu-button"),
        responsiveDemonstration =   $("#responsive-demonstration"),
        updateability =   $("#updateability");


    /*-----------Mobile Menu------------*/

    function mobileMenuInit(){
        mobileMenuButton.kason_display();
    }
    /*-----------End Mobile Menu--------*/

    function homeResponsiveDemonstrationInit(){
        if (responsiveDemonstration.length > 0){
            responsiveDemonstration.find('.device').eq(0).addClass('is-current');
            setInterval(setNextResponsive,2000);
        }

    }
    function updateabilityInit(){
        if (updateability.length > 0){
            var devices = updateability.find('.updateable-device');
            devices.each(setUpdateableDevices);
            setInterval(updateUpdateability,3000);
        }
    }
    function setUpdateableDevices(){
        $(this).find('img').clone().appendTo(this).clone().appendTo(this).clone().appendTo(this).clone().appendTo(this);
    }
    function updateUpdateability(){
        var current = updateability.find('.is-current'),
            $currentImgs = current.find('img');

        $currentImgs.eq(1).addClass('mobile');
        $currentImgs.eq(2).addClass('tablet');
        $currentImgs.eq(3).addClass('laptop');
        $currentImgs.eq(4).addClass('desktop');

        setTimeout(setNextUpdate, 2500);

    }
    function setNextUpdate(){
        var current = updateability.find('.is-current'),
            nextActive = current.next();
        if(nextActive.length == 0){
            nextActive = updateability.find('.updateable-device').eq(0);
        }

        current.removeClass('is-current').find('img').removeClass('mobile tablet laptop desktop');
        nextActive.addClass('is-current');
    }
    function setNextResponsive(){
        var current = responsiveDemonstration.find('.is-current'),
            nextActive = current.next(),
            movableScreen = $('#movable-screen');
        if(nextActive.length == 0){
            nextActive = responsiveDemonstration.find('.device').eq(0);
        }
        var movableScreenClassRemove = current.attr('class').replace('device','').replace('is-current',''),
            movableScreenClassAdd = nextActive.attr('class').replace('device','');

        current.removeClass('is-current');
        nextActive.addClass('is-current');
        movableScreen.addClass(movableScreenClassAdd).removeClass(movableScreenClassRemove);

    }

    function init() {
        mobileMenuInit();
        homeResponsiveDemonstrationInit();
        updateabilityInit();
    }



    init();

})(Foundation.zj, document);