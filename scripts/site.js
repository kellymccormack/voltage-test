$(function () {
    
    //mobile nav toggle
    $('#nav-mobile-toggle').on('click', function(e){
        e.preventDefault();
        $('#header-main').toggleClass('mobilenav-active-js');
    });
    
    //login modal trigger
    $('#nav-login').on('click', function(e){
        e.preventDefault();
        $('#login-modal').toggleClass('modal-active-js');
    });
    //login modal close
    $('#btn-login-close').on('click', function(e){
        e.preventDefault();
        $('#login-modal').removeClass('modal-active-js');
    });
    
});