var ComponentsPickers = function () {


    var handleTimePickers = function () {

        if (jQuery().timepicker) {


            $('.timepicker-24').timepicker({
                autoclose: true,
                minuteStep: 5,
                showSeconds: false,
                showMeridian: false
            });

            // handle input group button click
            $('.timepicker').parent('.input-group').on('click', '.input-group-btn', function(e){
                e.preventDefault();
                $(this).parent('.input-group').find('.timepicker').timepicker('showWidget');
            });
        }
    }





    return {
        //main function to initiate the module
        init: function () {

            handleTimePickers();

        }
    };

}();
