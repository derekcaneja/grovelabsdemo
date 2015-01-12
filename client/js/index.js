if (Meteor.isClient) {
    Session.setDefault('sidebar'         , false);
    Session.setDefault('content-more'    , false);

    Template.index.helpers({

    });

    Template.index.events({
        'click .dimmer': function () {
            Session.set('sidebar', !Session.get('sidebar'));
            
            $('sidebar').velocity({ 
                left: -$('sidebar').width()
            }, {
                duration: 400,
                easing: 'ease',
            });

            $('.dimmer').hide();
        }
    });
    
    Meteor.startup(function () {
        $('.sidebar-scrollable').height($('.sidebar-info').position().top - $('.sidebar-scrollable').position().top);

        $('content').height($('content').height() * 2 - 112);
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
