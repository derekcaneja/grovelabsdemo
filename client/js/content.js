if(Meteor.isClient) {
	Template.content.helpers({
		name: function() {
			var plant = Session.get('plant') || PlantsList.find().fetch()[0];
			
			return plant.name.toUpperCase();
		},

		days_left: function() {
			var plant = Session.get('plant') || PlantsList.find().fetch()[0];

			return plant.stages[plant.stage].length;
		},

		days_total: function() {
			var plant = Session.get('plant') || PlantsList.find().fetch()[0];

			return plant.stages[plant.stage].length;
		}
	});

	Template.content.events({
        'click .content-bottom-bar button': function (event) {
        	Session.set('content-more', !Session.get('content-more'));

            if(Session.get('content-more')) {
                $('content').velocity({ 
                    top: -$('.content-top').height() + 56 + 96
                }, {
                    duration: 400,
                    easing: 'ease'
                });

                $(event.currentTarget).addClass('active');
            } else {
                $('content').velocity({ 
                    top: 0
                }, {
                    duration: 400,
                    easing: 'ease'
                });

                $(event.currentTarget).removeClass('active');
            }

        },

        'click .content-button-container button': function (event) {
            $('.content-button-container button').each(function() {
                $(this).removeClass('active');
            });

            $(event.currentTarget).addClass('active');

            $('.content-bottom-container div').each(function() {
                $(this).removeClass('active');
                
                if($(this).data('content') == $(event.currentTarget).data('content')) $(this).addClass('active');
            });
        }
    });
}