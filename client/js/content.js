if(Meteor.isClient) {
	Template.content.helpers({
		name: function() {
			var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];
			
			return plant.name.toUpperCase();
		},

        pronunciation: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];
            
            return plant.pronunciation;
        },

        background_info: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];
            
            return plant.background;
        },

        image: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];
            
            return plant.img;
        },

        state: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];

            var state = (plant.state == "harvest") ? 'to harvest' : 'until harvest';

            return '<span>' + plant.states[plant.state].days_left + '</span> of ' + plant.states[plant.state].days_total + ' days left ' + state;
        },

        serving: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];

            return '<span>' + plant.nutrition.serving + '</span>oz';
        },

        vitamins: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];

            var toReturn = '';

            plant.nutrition.vitamins.map(function(vitamin) {
                if(!toReturn.length) toReturn += vitamin;
                else                 toReturn += ', ' + vitamin;
            });

            return toReturn;
        },

        other_nutrition: function() {
            var plant = Session.get('plant') || PlantsList.find().fetch({ _id: 'W7T8ZtSoCNJzna84b' })[0];

            var toReturn = '';

            plant.nutrition.other.map(function(nutrient) {
                toReturn += '<div class="content-nutrition-item"><div class="' + nutrient +'"></div>HIGH IN ' + nutrient.toUpperCase() + '</div>';
            });

            return toReturn;
        },

        light_cycle: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];

            return plant.states[plant.state].lights;
        },

        water_usage: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];

            return plant.water;
        },

        power_usage: function() {
            var plant = Session.get('plant') || PlantsList.find({ _id: 'W7T8ZtSoCNJzna84b' }).fetch()[0];

            return plant.power;
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