/*global $*/
(function () {
    'use strict';
    //    profile option dropdown
    $(".optionDropdown").on('click', function () {
        $(".dropdownOptionsBody").toggle();
    });
    
    //datepicker
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        zIndex: 2048
    });
    //    custom checkbox
    $('select').selectpicker();
   
    
}());
