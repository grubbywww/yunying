
var UIDatepaginator = function () {

    return {

        //main function to initiate the module
        init: function () {

            //sample #1
            $('#datepaginator_sample_1').datepaginator({
                onSelectedDateChanged: function(event, date) {

                  tmp=moment(date).format("YYYY-MM-DD");

            $.post($SCRIPT_ROOT + '/show_history', {
              tmp: tmp
            },
           function(data,status) {
             $(".h_content").html(data.result)

        });

                }
            });

            //sample #2
            $('#datepaginator_sample_2').datepaginator({
                size: "large"
            });

            //sample #3
            $('#datepaginator_sample_3').datepaginator({
                size: "small"
            });

            //sample #3
            $('#datepaginator_sample_4').datepaginator({
                onSelectedDateChanged: function(event, date) {
                  alert("Selected date: " + moment(date).format("Do, month YYYY"));
                }
            });

        } // end init

    };

}();
