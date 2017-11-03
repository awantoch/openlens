import {Meteor} from 'meteor/meteor';
import {Lenses} from '/lib/collections';


Meteor.methods({

    'lens.create'(name){
        Lenses.insert({name: name, points: {}});
    },

    'lens.addPoint'(name, lat, lng){
        Lenses.update(
            { $addToSet:
                {'points.name': name, 'points.lat': lat, 'points.lng': lng}
            });
    },

    'lens.delete'(id){
        Lenses.remove({_id:id});
    },

});