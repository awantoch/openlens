import {Meteor} from 'meteor/meteor';
import {Lenses} from '/lib/collections';


Meteor.methods({

    'lens.create'(name, owner, members){
        Lenses.insert({name: name, owner: owner, members: members});
    },

    'lens.addPoint'(name, lat, lng){
        Points.update(
            { $addToSet:
                {'points.name': name, 'points.lat': lat, 'points.lng': lng}
            });
    },

    'lens.delete'(id){
        Lenses.remove({_id:id});
    },

});