if(Meteor.isClient) {
    var myPlants = ['W7T8ZtSoCNJzna84b', 'QTiqZbJ7DcBrAHWsy'];

    Template.sidebar.helpers({
        myPlantList: function() {
            var plants = PlantsList.find({ _id: { $in: myPlants } }).fetch();
            
            var toReturn = '';

            plants.map(function(plant) {
                toReturn += '<li data-id="' + plant._id + '">' + plant.name + '<i class="fa fa-chevron-right"></i></li>'
            });

            return toReturn;
        },
        plantList: function() {
            var plants = PlantsList.find().fetch();
            
            var toReturn = '';

            plants.map(function(plant) {
                toReturn += '<li data-id="' + plant._id + '">' + plant.name + '<i class="fa fa-chevron-right"></i></li>'
            });

            return toReturn;
        }
    });

    Template.sidebar.events({
        'click li': function (event) {
            var plant = PlantsList.find({ _id: $(event.currentTarget).data('id') }).fetch()[0];

            Session.set('plant', plant);
        }
    });
}