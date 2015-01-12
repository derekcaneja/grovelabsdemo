if(Meteor.isClient) {

    Template.header.events({
        'click .button-menu': function () {
            Session.set('sidebar', !Session.get('sidebar'));

            if(Session.get('sidebar')) {
                $('sidebar').velocity({ 
                    left: 0
                }, {
                    duration: 400,
                    easing: 'swing',
                });

                $('.dimmer').show();
            } else {
                $('sidebar').velocity({ 
                    left: -$('sidebar').width()
                }, {
                    duration: 400,
                    easing: 'ease',
                });

                $('.dimmer').hide();
            }
        }
    });
}