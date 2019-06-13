/*
 * When our date picker loads, we want to modify some of picker settings.
 *
 * We want to:
 * 1) Modify our month labels with a different string.
 * 2) Disable specific dates so that they can't be selected.
 *
 * 
 * This object will listen to date pickers as they initialize so that we can modify settings.
 */
var customDatePickerStuff = Marionette.Object.extend( {
    initialize: function() {
        /*
         * Listen to our date pickers as they are created on the page.
         */
        this.listenTo( Backbone.Radio.channel( 'pikaday' ), 'init', this.modifyDatepicker );	
    },

    modifyDatepicker: function( dateObject, fieldModel ) {
 
        dateObject.pikaday._o.disableDayFn = function( date ) {

            var disabledDays = disableSpecificWeekDays(date);

            // 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday,
            // 5=friday, 6 = saturday, 0=sunday

            disableSpecificWeekDays(date);
            
            if ( _.indexOf( disabledDays, moment( date ).format( "YYYY-MM-DD" ) ) !== -1 ) {
                return true;
            }

            function disableSpecificWeekDays(date) {
                var day = date.getDay();
                var disabledDays = []; 
                 

                    // 

                    if(day == 2 || day == 3  || day == 5  || day == 6   || day == 0 ){
                        // console.log(day);
                        disabledDays.push(moment( date ).format("YYYY-MM-DD"));
                    } 
                    
                    //
                 
                return disabledDays;
            }

        }

       
    }
});

jQuery( document ).ready( function() {
	new customDatePickerStuff();
} );
